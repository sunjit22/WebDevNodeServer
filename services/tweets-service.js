
const dao = require("../db/tweets/tweet-dao");
const tweets = require("../data/tweets.json");
module.exports = (app) => {

    const findAllTweets = (req, res) =>
        dao.findAllTweets()
            .then(tweets => res.json(tweets));

    app.get('/api/tweets', findAllTweets);

    const postNewTweet = (req, res) => {
        console.log("postNewTweet: " + JSON.stringify(req.body));
        const newTweet = {
            "topic": "Web Development",
            "userName": "Sunjit Dhillon",
            "verified": true,
            "handle": "sunjit22",
            "time": "2h",
            "avatar-image": "/images/starship.jpeg",
            "logo-image": "/images/starship.jpeg",
            "stats": {
                "comments": 123,
                "retweets": 234,
                "likes": 345
            },
            ...req.body,
        }
        dao.createTweet(newTweet)
            .then((insertedTweet) => res.json(insertedTweet));
    }
    app.post('/api/tweets', postNewTweet);

    const deleteTweet = (req, res) => {
        dao.deleteTweet(req.params.id)
            .then((status) => res.send(status));
    }
    app.delete('/api/tweets/:id', deleteTweet);

    const likeTweet = (req, res) => {

        const id = req.params.id;
        console.log("id: " + id);
        console.log("dao.findTweetById(id): " + dao.findTweetById(id));
        const tweet = dao.findTweetById(id)
            .then((tweet) => {
                if (tweet.liked === true) {
                    console.log("tweet.liked === true");
                    tweet.liked = false;
                    tweet.stats.likes--;
                } else {
                    console.log("tweet.liked === false");
                    tweet.liked = true;
                    tweet.stats.likes++;
                }
                console.log("likeTweet tweet after: " + tweet);
                console.log("likeTweet tweet.liked after: " + tweet.liked);
                dao.updateTweet(id, tweet)
                    .then(status => res.send(status));
            });

    }
    app.put('/api/tweets/:id/like', likeTweet);
};
