const { getDB } = require("../utils/dataBaseUtils")

module.exports = class Favourite {
  constructor(houseId) {
    this.houseId = houseId;
  }

  save(){
    const db = getDB();
    return db.collection('favourities').findOne({houseId:this.houseId}).then(existingFav=>{
      if(!existingFav){
        return db.collection('favourities').insertOne(this);
      }
    })
   return Promise.resolve();
   
  }

  static getFavourites(callback) {
    const db = getDB();
   return db.collection('favourities').find().toArray();
  }

  static deleteById(delHomeId) {
    const db = getDB();
        return db.collection('favourities').deleteOne({houseId:delHomeId})
};
}
