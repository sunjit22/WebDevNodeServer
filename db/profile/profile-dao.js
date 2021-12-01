const model = require('./profile-model');

const getProfile = () => model.findOne();
const updateProfile = (id, profile)=> {
    let p = model.updateOne({_id: id}, {$set: profile});
    console.log("p: " + p);
    console.log("updateProfile: " + profile);
    return p
}
module.exports = {
    getProfile, updateProfile
};