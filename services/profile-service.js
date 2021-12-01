const dao = require("../db/profile/profile-dao");
const profile = require("../data/profile.json");
module.exports = (app) => {
    const getProfile = (req, res) => {
        console.log("getProfile from server");
        dao.getProfile()
            .then(profile => res.json(profile));
    }
    app.get('/rest/profile', getProfile);

    const updateProfile = (req, res) => {
        console.log("updateProfile from server");
        const id = req.params.id;
        console.log("req.body from server" + req.body);
        dao.updateProfile(id, req.body)
            .then(updatedProfile => {
                console.log(updatedProfile);
                return res.json(updatedProfile)
            });
    }
    app.put('/rest/profile/:id', updateProfile);
};