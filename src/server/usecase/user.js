const User = require("../model/user");
const crypt = require("../../helper/encrypt");

exports.create = async (body) => {
    return new User({
        name: body.name,
        password: await crypt.cryptPassword(body.password)
    }).save();
}

exports.findById =  (id)=> {
    return User.findById(id);
}

exports.updateById = (id, body) => {
    return User.findByIdAndUpdate(id, {
        name: body.name,
        password: body.password
    }, { new: true});
}

