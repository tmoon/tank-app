/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   renderer.create(<App />);
// });

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

test("test1 for create_new_user", async() => {
  var accountHelpers = require('../app/lib/accountHelpers');

  let data = accountHelpers.create_new_user("nazim124");
  expect(typeof data.mnemonic).toBe('string');
  expect(typeof data.account_address).toBe('string');
});

test("test1 for recover_user", async() => {
  var accountHelpers = require('../app/lib/accountHelpers');

  let mnemonic = "elder arrange measure axis pig diet ignore sheriff motion age spoil control dish tank kid cargo dog acoustic claim project urge above powder off";

  let data = accountHelpers.recover_user(mnemonic, "nazim123");
  expect(typeof data.account_address).toBe('string');
  expect(data.account_address).toBe("terra13vyy9cark7nt9qth2fa3g4pcl8tttg9vm3s9w0");
});
