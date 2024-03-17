const User = require("../model/user");

exports.create = async (body) => {
    return new User(body).save();
}

exports.findById =  (id)=> {
    return User.findById(id);
}

exports.updateById = (id, body) => {
    return User.findByIdAndUpdate(id, body, { new: true});
}

