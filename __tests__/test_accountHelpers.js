import 'react-native';

test("test1 for create_new_user", async() => {
    var accountHelpers = require('../app/lib/accountHelpers');
  
    let data = await accountHelpers.create_new_user("nazim124");

    expect(typeof data.mnemonic).toBe('string');
    expect(typeof data.account_address).toBe('string');
  });
  
test("test1 for recover_user", async() => {
    var accountHelpers = require('../app/lib/accountHelpers');

    let mnemonic = "elder arrange measure axis pig diet ignore sheriff motion age spoil control dish tank kid cargo dog acoustic claim project urge above powder off";

    let data = await accountHelpers.recover_user(mnemonic, "nazim123");
    expect(typeof data.account_address).toBe('string');
    expect(data.account_address).toBe("terra13vyy9cark7nt9qth2fa3g4pcl8tttg9vm3s9w0");
});

test("test1 for storageTest", async() => {
    var accountHelpers = require('../app/lib/accountHelpers');

    expect(await accountHelpers.storageTest("name", "mockTest")).toBe("mockTest");
});
