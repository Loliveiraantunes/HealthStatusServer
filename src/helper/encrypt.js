const bcrypt = require('bcrypt');

exports.cryptPassword = (password) =>
bcrypt.genSalt(10)
.then((salt => bcrypt.hash(password, salt)))
.then(hash => hash),

exports.comparePassword = (password, hashPassword) =>
    bcrypt.compare(password, hashPassword)
    .then(resp => resp)