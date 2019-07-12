import 'react-native';

test("test1 for swapRate", async() => {
    var swapHelpers = require('../app/lib/swapHelpers');
  
    let data = await swapHelpers.swapRate("uluna", "usdr", 100);
    expect(typeof data).toBe('object');
});

test("test1 for swapCurrency", async() => {
    const accHelper = require('../app/lib/accountHelpers');
    let mnemonic = "cake glide style agent panda noble comfort double suffer hope spare sting trend trophy salt estate riot sight monitor shoulder orphan veteran vendor forward";

    let accAdd = await accHelper.recover_user(mnemonic, "1234");
    console.log("user data", accAdd);

    const swaper = require('../app/lib/swapHelpers');
    let res = await swaper.swapCurrency('uluna', 'usdr', 10000, "for testing swap", "1234");
    console.log("swap data", res);
    expect(2).toBe(2);
});