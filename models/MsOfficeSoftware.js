const AbsSoftware = require('./AbsSoftware');

class MsOfficeSoftware extends AbsSoftware {
 constructor(itemName, version, price, storageCapacity, isWindows){
  super(itemName, version, price, storageCapacity)
  this.isWindows = true || isWindows;
 }
}

module.exports = MsOfficeSoftware;