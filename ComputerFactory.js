const laptop = require('./models/laptop');
const desktop = require('./models/desktop');
const msOfficeSoftware = require('./models/MsOfficeSoftware');
const antiVirusSoftware = require('./models/AntiVirusSoftware')

class ShopItemCreator {
 createItem(item){
  if(item == "laptop"){
   return new laptop("Acer Laptop", "2hours","v3","3GB","1TB")
  }
  if(item == "desktop"){
   return new desktop("Dell Desktop","v4","8GB","2TB","Razer")
  }
  if(item == "msOfficeSoftware"){
   return new msOfficeSoftware("Ms Office 2020","v3",3600,"500GB",false)
  }
  if(item == "antiVirusSoftware"){
   return new antiVirusSoftware("Kaspasky AntiVirus","g5V",499,"4GB",false)
  }
 }
 }



module.exports = ShopItemCreator;