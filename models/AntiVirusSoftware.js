const AbsSoftware = require('./AbsSoftware');
class AntiVirusSoftware extends AbsSoftware {
 constructor(itemName, version, price, storageCapacity, isActivated){
  super(itemName,version, price, storageCapacity, isActivated)
  this.storageCapacity = storageCapacity;
  this.isActivated = true || isActivated;
 }
}

module.exports = AntiVirusSoftware;