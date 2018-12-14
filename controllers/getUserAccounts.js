const User = require("../database/models/User");

module.exports = async(req, res) => {
    let users = await User.find({});
    res.render("accounts",{
        users
    })
}