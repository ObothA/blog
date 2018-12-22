const Advert = require("../database/models/Advert");
const mongoose = require("mongoose");
const ObjectID = require('mongodb').ObjectID;

module.exports = (req,res) => {
    const id = req.params.AdvertId;
    const advertId = new ObjectID(id);

    Advert.deleteOne({ _id: advertId }, (err,res) => {
        if(err){
            console.log(err);
        }
    });
}