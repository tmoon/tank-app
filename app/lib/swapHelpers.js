const terra = require('@terra-money/core');
const config = require('../config/env.json');
const fetch = require('node-fetch');
const costCalculator = require('./costCalculator');
const config = require('../config/env.json');
const retriver = require('./retriveData');


// NOTE: amount must be in micro currency
// Example: swapRate('uluna', 'usdr', 10000)
async function swapRate(baseDenom, askDenom, amount) {
    const Url = config.TERRA_ADDRESS + `/market/swap?offer_coin=${amount}${baseDenom}&ask_denom=${askDenom}`;
    let req_res, data;

    try {
        req_res = await fetch(Url);
        data = await req_res.json();
    } catch (error) {
        return {
            error: true,
            message: error
        }
    }

    return data;
}

async function swapCurrency(baseDenom, askDenom, amount, memo, pin) {
    let keyPair = await retriver.getKeyPair(pin);
    let accAddress = terra.getAccAddress(keyPair.publicKey);

    if(keyPair.hasOwnProperty('error')) {
        return {
            error: true,
            message: keyPair.message
        }
    }

    let account_info = await retriver.getAccountInfo(accAddress);

    if(account_info.hasOwnProperty('error')) {
        return {
            error: true,
            message: account_info.message
        }
    }

    let demo_msg = buildSwapBody(baseDenom, askDenom, memo, amount, 20000000, account_info.sequence, account_info.account_number, accAddress, keyPair);
    let gas = Math.ceil(1.5*costCalculator.getGas(demo_msg, 1));
    let msg = buildSwapBody(baseDenom, askDenom, memo, amount, gas, account_info.sequence, account_info.account_number, accAddress, keyPair);

}

function buildSwapBody(baseDenom, askDenom, memo, amount, gas, sequence, account_number, accAddress, keypair) {
    const msgSend = terra.buildSwap(accAddress, {
                            denom: baseDenom,
                            amount: amount
                        }, askDenom);
      
    const stdTx = terra.buildStdTx([msgSend], {
    "gas": toString(gas),
    "amount": [
        {
        "amount": toString(costCalculator.getGasCost(gas)),
        "denom": baseDenom
        }
    ]
    }, memo);
    const jsonTx = stdTx.value
    const txSignature = terra.sign(jsonTx, keypair, {
    sequence: sequence,
    account_number: account_number,
    chain_id: config.CHAIN_ID
    });
    const signedTx = terra.createSignedTx(stdTx.value, txSignature);
    const broadcastBody = terra.createBroadcastBody(signedTx, "block") ;

    return broadcastBody;
}

