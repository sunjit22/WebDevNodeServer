const tweetsModel = require("./tweet-model");

const findAllTweets = () =>
    tweetsModel.find();

const findTweetById = (id) =>
    tweetsModel.findById(id);

const createTweet = (tweet) =>
    tweetsModel.create(tweet);

const deleteTweet = (id) =>
    tweetsModel.deleteOne({_id: id});

const updateTweet = (id, tweet) =>
    tweetsModel.updateOne({_id: id},
        {$set: tweet});

module.exports = {
    findAllTweets, findTweetById, createTweet,
    deleteTweet, updateTweet
};

findTweetById('61a413451ebfe2d02187b17a')
.then(tweet => console.log(tweet))