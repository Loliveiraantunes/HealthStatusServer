const bcrypt = require('bcrypt');

exports.cryptPassword = (password) => bcrypt.hash(password, 10)

exports.comparePassword = (password, hashPassword) =>
    bcrypt.compare(password, hashPassword)
    .then(resp => resp)