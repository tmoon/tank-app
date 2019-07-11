const AsyncStorage = require("react-native").AsyncStorage;
const cryptoMachine = require('./pinCryptoHelpers');
const sha256 = require('js-sha256');
const fetch = require('node-fetch');
const config = require('../config/env')

async function getKeyPair(pin) {
    try {
        let given_pin_hash = sha256.sha256(pin);

        let storaged_pin_hash = await AsyncStorage.getItem('pin_hash');
        let storaged_publicKey = await AsyncStorage.getItem('publicKey');
        let storaged_privateKey = await AsyncStorage.getItem('privateKey');

        if(storaged_pin_hash == undefined || storaged_privateKey == undefined || storaged_publicKey == undefined) {
            return {
                error: true,
                message: 'Failed to retrive saved data'
            };
        }

        if(given_pin_hash != storaged_pin_hash) {
            return {
                message: 'Invalid PIN'
            }
        }

        storaged_privateKey = cryptoMachine.decrypt(pin, storaged_privateKey);

        let keyPair = {
            publicKey: Buffer.from(storaged_publicKey, 'hex'),
            privateKey: Buffer.from(storaged_privateKey, 'hex')
        }

        if(keyPair.publicKey == undefined || keyPair.privateKey == undefined) {
            return {
                error: true,
                message: 'Keypair retriving error'
            }
        }

        return keyPair;

    } catch (error) {
        return {
            error: true,
            message: error
        }
    }
}

async function getAccountInfo(accountAdd) {
    try {
        let account_number = await AsyncStorage.getItem('account_number');
        let sequence = await AsyncStorage.getItem('sequence');

        if(account_number == undefined || sequence == undefined) {
            let URL = config.TERRA_ADDRESS + `/auth/accounts/${accountAdd}`
            let req = await fetch(URL);
            let data = await req.json();

            account_number = data.value.account_number;
            sequence = data.value.sequence;

            await AsyncStorage.setItem('account_number', account_number);
            await AsyncStorage.setItem('sequence', sequence);
        }

        return {account_number, sequence};
    } catch (error) {
        return {
            error: true,
            message: error
        }
    }
}

module.exports = {
    getKeyPair,
    getAccountInfo
}

// getAccountInfo('terra1qq7s0ntskug8vv9q5ywsdlh9pw8nrltl93x6fm').then(res => console.log(res)).catch();
