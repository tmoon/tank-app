import 'react-native';

test("test1 for getGas", async() => {
    var costCalculator = require('../app/lib/costCalculator');
  
    let data = costCalculator.getGas("nmonic", 1);
    expect(typeof data).toBe('number');
  });

  test("test1 for getGasCost", async() => {
    var costCalculator = require('../app/lib/costCalculator');
  
    let data = costCalculator.getGasCost(1000);
    expect(data).toBe(1000*0.015);
  });
