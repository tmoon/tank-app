const terra = require('@terra-money/core');
const config = require('../config/env.json');
const fetch = require('node-fetch');
const costCalculator = require('./costCalculator');
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

// NOTE: All variable must be string except amount
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
    // console.log("account_info", account_info);
    if(account_info.hasOwnProperty('error')) {
        return {
            error: true,
            message: account_info.message
        }
    }

    let demo_msg = buildSwapBody(baseDenom, askDenom, memo, amount, 20000000, account_info.sequence, account_info.account_number, accAddress, keyPair);
    // console.log("demo-msg", demo_msg);
    let gas = Math.ceil(1.5*costCalculator.getGas(demo_msg, 1));
    let account_balance = retriver.getAmount(account_info.currency_list, askDenom);

    if(amount+costCalculator.getGasCost(gas) > parseInt(account_balance)) {
        return {
            error: true,
            message: 'Insufficient account balance'
        }
    }

    let account_seq = parseInt(account_info.sequence) + 1;
    let msg = buildSwapBody(baseDenom, askDenom, memo, amount, gas, account_seq.toString(), account_info.account_number, accAddress, keyPair);

    return await broadcastToChain(msg, account_seq);
}

async function broadcastToChain(msg, account_seq) {
    try {
        console.log("msg", msg);
 
        let url = config.TERRA_ADDRESS + `/txs`;
        let req_res = await fetch(url, {
            method: 'POST', // or 'PUT'
            body: msg, // msg can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          });
        let res_json = await req_res.json();

        console.log("res-json", res_json);

        if(res_json.hasOwnProperty('hash') && typeof res_json.hash == 'string' && res_json.hash.length > 0) {
            await AsyncStorage.setItem('sequence', account_seq.toString());

            return {
                success: true,
                hash: res_json.hash
            };
        }
    } catch (error) {
        return {
            error: true,
            message: error
        };
    }

    return {
        success: false
    };
}

function buildSwapBody(baseDenom, askDenom, memo, amount, gas, sequence, account_number, accAddress, keypair) {
    // console.log(amount, gas, gas.toString());
    const msgSend = terra.buildSwap(accAddress, {
                            denom: baseDenom,
                            amount: amount.toString()
                        }, askDenom);
      
    const stdTx = terra.buildStdTx([msgSend], {
    "gas": gas.toString(),
    "amount": [
        {
        "amount": costCalculator.getGasCost(gas).toString(),
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

module.exports = {
    swapRate,
    swapCurrency
}
