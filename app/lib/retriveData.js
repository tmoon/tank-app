const AsyncStorage = require("react-native").AsyncStorage;
const cryptoMachine = require('./pinCryptoHelpers');
const sha256 = require('js-sha256');

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

        return keyPair;

    } catch (error) {
        return {
            error: true,
            message: error
        }
    }
}
