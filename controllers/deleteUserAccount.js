const User = require("../database/models/User");
const mongoose = require("mongoose");
const ObjectID = require('mongodb').ObjectID;

module.exports = (req,res) => {
    const id = req.params.userAccountId;
    const userId = new ObjectID(id);

    User.deleteOne({ _id: userId }, (err,res) => {
        if(err){
            console.log(err);
        }
    });
}