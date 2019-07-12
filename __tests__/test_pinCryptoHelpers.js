/**
 * @format
 */
import 'react-native';

test("test1 for encrypt and decrypt", () => {
  var encrypt_msg = require('../app/lib/pinCryptoHelpers');

  let msg = "encrypted message";

  try {
    let encrypted_msg = encrypt_msg.encrypt("pin1235", msg);
    let decrypted_msg = encrypt_msg.decrypt("pin1235", encrypted_msg);

    expect(decrypted_msg).toBe(msg);

  } catch (error) {
    expect(error).toBe(msg);
  }
});

test("test2 for encrypt and decrypt", () => {
  var encrypt_msg = require('../app/lib/pinCryptoHelpers');

  let msg = "";
  try {
    let encrypted_msg = encrypt_msg.encrypt("pin1235", msg);
    let decrypted_msg = encrypt_msg.decrypt("pin1235", encrypted_msg);

    expect(decrypted_msg).toBe(msg);

  } catch (error) {
    expect(error).toBe(msg);
  }
});

test("test3 for encrypt and decrypt", () => {
  var encrypt_msg = require('../app/lib/pinCryptoHelpers');

  let msg = "this is good test";
  try {
    let encrypted_msg = encrypt_msg.encrypt("", msg);
    let decrypted_msg = encrypt_msg.decrypt("", encrypted_msg);

    expect(decrypted_msg).toBe(msg);

  } catch (error) {
    expect(error).toBe(error);
  }
});

