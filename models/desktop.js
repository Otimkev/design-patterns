const AbsComputer = require('./AbsComputer');

class Desktop extends AbsComputer{
 constructor(itemName,version, ram, hdd, brand){
  super(itemName,version, ram, hdd, brand)
  this.brand = brand;
 }
}

module.exports = Desktop;