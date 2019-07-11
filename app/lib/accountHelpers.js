import AsyncStorage from '@react-native-community/async-storage';
const terra = require('@terra-money/core');
const encryption_helpers = require('./pinCryptoHelpers');
const sha256 = require('js-sha256');


// NOTE: pin must be string
async function create_new_user(pin) {
    if(is_valid(pin) == false) {
        return {
            error : true,
            message : "Pin must be string and length must be at least 1"
        }
    }

    const mnemonic = terra.generateMnemonic()
    const masterKey = await terra.deriveMasterKey(mnemonic)
    const keypair = terra.deriveKeypair(masterKey)
    const accAddr = terra.getAccAddress(keypair.publicKey)

    if(await encrypt_and_save(keypair, pin) == false) {
        return {
            error : true,
            message: "Internal Encryption Error"
        }
    }

    return { 
                "mnemonic" : mnemonic,
                "account_address" : accAddr
            };
}

// NOTE: pin must be string
async function recover_user(mnemonic, pin) {
    if(is_valid(pin) == false) {
        return {
            error : true,
            message : "Pin must be string and length must be at least 1"
        }
    }

    if(is_valid(mnemonic) == false) {
        return {
            error : true,
            message : "Mnemonic must be string and length must be at least 1"
        }
    }

    const masterKey = await terra.deriveMasterKey(mnemonic);
    const keypair = terra.deriveKeypair(masterKey);
    const accAddr = terra.getAccAddress(keypair.publicKey);

    if(await encrypt_and_save(keypair, pin) == false) {
        return {
            error : true,
            message: "Internal Encryption Error"
        }
    }

    return { 
                "account_address" : accAddr
            };
}

// NOTE: keypair[must be buffer pair], pin must be string
async function encrypt_and_save(keypair, pin) {
    try {
            pin_hash = sha256.sha256(pin);
            publicKey = keypair.publicKey.toString('hex');
            privateKey = encryption_helpers.encrypt(pin, keypair.privateKey.toString('hex'));
            
            await AsyncStorage.setItem("pin_hash", pin_hash);
            await AsyncStorage.setItem("publicKey", publicKey);
            await AsyncStorage.setItem("privateKey", privateKey);

    } catch (error) {
        return false;
    }

    return true;
}

async function storageTest(key, value) {
    let a = await AsyncStorage.setItem(key, value);
    console.log(a);
    let b;
    console.log(b = await AsyncStorage.getItem(key));
    return b;
}

function is_valid(string) {
    if(typeof string !== 'string' || string.length < 1) {
        return false;
    }

    return true;
}

module.exports = {
    create_new_user,
    recover_user,
    storageTest
};

