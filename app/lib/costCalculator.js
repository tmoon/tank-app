const config = require('../config/env.json');

function getGas(string, number_of_signature) {
    let total_byte = Buffer.byteLength(string, 'utf8');

    let total_gas = total_byte*config.tx_size_cost_per_byte + number_of_signature*config.sig_verify_cost_secp256k1;

    return total_gas;
}

function getGasCost(gas) {
    return gas*0.015;
}

module.exports = {
    getGas,
    getGasCost
}
