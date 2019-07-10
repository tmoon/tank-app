const terra = require('@terra-money/core');
const config = require('../config/env.json');
const fetch = require('node-fetch');

// NOTE: amount must be in micro currency
// Example: swapRate('luna', 'sdr', 10000)
async function swapRate(baseDenom, askDenom, amount) {
    const Url = config.TERRA_ADDRESS + `/market/swap?offer_coin=${amount}u${baseDenom}&ask_denom=u${askDenom}`;
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

async function swapCurrency(baseDenom, askDenom, amount) {
    
}

swapRate('luna','sdr',10000).then(result => { console.log(result)}).catch();
