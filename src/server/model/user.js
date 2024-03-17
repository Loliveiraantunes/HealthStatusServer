const { use } = require('../../routes');

const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt');

const User = new Schema({
    name: String,
    password: String,
    device: String
},
    {
        methods: {
            comparePassword: async function (candidatePassword) {
                const password = this.password;
                const urs = this;
               return await new Promise((resolve , reject ) => bcrypt.compare(candidatePassword, password ,   function (err, isMatch) {
                    if (err) return reject(err);
                    if(isMatch)
                        resolve(urs)
                    else
                        reject()
                })).then(rsp => rsp).catch(rsp => rsp);

            }
        }
    });

User.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
});

module.exports = mongoose.model('User', User)