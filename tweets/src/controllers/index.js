const { catchedAsync } = require("../utils");

module.exports = {
  getTweets: catchedAsync(require("./getTweets")),
  postTweets: catchedAsync(require("./postTweets")),
  deleteTweets: catchedAsync(require("./deleteTweets")),
  editTweets: catchedAsync(require("./editTweets")),
};
