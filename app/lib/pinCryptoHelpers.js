// NOTE: pin must be a string. Return pin after fixing it length
function fix_pin(pin) {
    while(pin.length < 16) {
        pin += pin.split("").reverse().join("");
    }
    return pin;
}

// NOTE: pin and string must be string. Return encrypted string
function encrypt_with_pin(pin, string) {
    if(typeof pin !== "string") {
        throw "Pin must be a string";
    }

    if(typeof string !== "string"){
        throw "Message for encryption must be a string";
    }

    if(pin.length == 0) {
        throw "Pin length must be at least 1"
    }

    pin = fix_pin(pin);

    const encryptor = require('simple-encryptor')(pin);
    let encrypted_string = encryptor.encrypt(string);

    return encrypted_string
}

// NOTE: pin and string must be string. Return decrypted string
function decrypt_with_pin(pin, string) {
    if(typeof pin !== "string") {
        throw "Pin must be a string";
    }

    if(typeof string !== "string") {
        throw "Message for decryption must be a string";
    }

    if(pin.length == 0) {
        throw "Pin length must be at least 1"
    }

    pin = fix_pin(pin);

    const decryptor = require('simple-encryptor')(pin);
    let decrypted_string = decryptor.decrypt(string);
    
    return decrypted_string
}

module.exports = {
    encrypt : encrypt_with_pin,
    decrypt : decrypt_with_pin
};
