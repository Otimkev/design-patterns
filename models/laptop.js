const AbsComputer = require('./AbsComputer');

class Laptop extends AbsComputer{
 constructor(itemName, battery, version, ram, hdd){
  super(itemName,version,ram, hdd)
  this.battery = battery;
 }

}

module.exports = Laptop;