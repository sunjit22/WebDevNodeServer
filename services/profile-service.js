let profile = require('../data/profile.json');

module.exports = (app) => {
    const getProfile = (req, res) => res.json(profile);
    app.get('/api/profile', getProfile);

    const updateProfile = (req, res) => {
        console.log("req.body" + req.body);
        console.log("JSON req.body- " + JSON.stringify(req.body));
        console.log("JSON req.body.name - " + req.body.newName);
        profile = {
            ...profile,
            name: req.body.newName,
            bio: req.body.newBio,
            location: req.body.newLocation,
            website: req.body.newWebsite,
            dateOfBirth: req.body.newDateOfBirth
        }
        console.log("New profile- " + JSON.stringify(profile));
        res.json(profile);
    }
    app.put('/api/profile', updateProfile);
};