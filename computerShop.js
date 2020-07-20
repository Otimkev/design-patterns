class ComputerShop {
 constructor(){
  this.inventory = [];
 }

 addInventory(someInventory){
  this.inventory.push(someInventory);
 }

 destroyInventory(someInventory){
  const index = this.inventory.indexOf(someInventory);
  return this.inventory.splice(index,1)
 }
 
 showAllInventory(){
  return this.inventory;
 }
}

module.exports = ComputerShop;