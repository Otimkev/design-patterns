const ComputerFactory = require('./ComputerFactory');
const ComputerShop = require('./computerShop');
class Main{
 main(){
  const computerFactory = new ComputerFactory();
  const computerShop = new ComputerShop();

  const laptopOne = computerFactory.createItem("laptop");
  const desktopOne = computerFactory.createItem("desktop")
  const msOfficeSoftware = computerFactory.createItem("msOfficeSoftware")
  const antiVirusSoftware = computerFactory.createItem("antiVirusSoftware")

  computerShop.addInventory(desktopOne);
  computerShop.addInventory(laptopOne);
  computerShop.addInventory(msOfficeSoftware);
  computerShop.addInventory(antiVirusSoftware);

  const display = computerShop.showAllInventory()
  const str = JSON.stringify(display, null, 4)
  console.log(str)
 }
}

const run = new Main();
run.main();