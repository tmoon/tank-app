const terra = require('@terra-money/core');
const encryption_helpers = require('./pinCryptoHelpers');
const sha256 = require('js-sha256');
const AsyncStorage = require("react-native").AsyncStorage;

// NOTE: pin must be string
async function create_new_user(pin) {
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
            publicKey = encryption_helpers.encrypt(keypair.publicKey.toString('hex'), pin);
            privateKey = encryption_helpers.encrypt(keypair.privateKey.toString('hex'), pin);
            
            await AsyncStorage.setItem("pin_hash", pin_hash);
            await AsyncStorage.setItem("publicKey", publicKey);
            await AsyncStorage.setItem("privateKey", privateKey);

            // console.log(await AsyncStorage.getItem("pin_hash"), await AsyncStorage.getItem("publicKey"), await AsyncStorage.getItem("privateKey"));

    } catch (error) {
        return false;
    }

    return true;
}

module.exports = {
    create_new_user,
    recover_user
};
