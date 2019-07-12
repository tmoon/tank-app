import AsyncStorage from '@react-native-community/async-storage';
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
        let account_number;
        let sequence;
        let currency_list;

        let URL = config.TERRA_ADDRESS + `/auth/accounts/${accountAdd}`
        let req = await fetch(URL);
        let data = await req.json();

        account_number = data.value.account_number;
        sequence = data.value.sequence;
        currency_list = data.value.coins;

        return {account_number, sequence, currency_list};
    } catch (error) {
        return {
            error: true,
            message: error
        }
    }
}

function getAmount(currency_list, denom) {
    currency_list.forEach(function(element) {
        if(element.denom == denom) {
            return element.amount;
        }
      });

      return undefined;
}

module.exports = {
    getKeyPair,
    getAccountInfo,
    getAmount
}
