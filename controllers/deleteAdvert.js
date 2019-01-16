const Advert = require("../database/models/Advert");
const mongoose = require("mongoose");
const ObjectID = require('mongodb').ObjectID;
const fs = require('fs')
const path = require("path");

module.exports = async(req,res) => {
    const id = req.params.AdvertId;
    const advertId = new ObjectID(id);

    let advert = await Advert.find({_id: advertId});
    const filePath =  path.resolve(__dirname, `../public${advert[0].media}`);

    /* delete file */
    try {
        fs.unlinkSync(filePath)
        //file removed
      } catch(err) {
        console.error(err)
      }

    Advert.deleteOne({ _id: advertId }, (err,res) => {
        if(err){
            console.log(err);
        }
    });
}