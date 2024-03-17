const User = require("../model/user");

exports.auth = async (body) => {
    const auth = await User.findOne({ name: body.name });

   return auth.comparePassword(body.password);
}