const axios = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const tweets = await axios.get("http://database:8003/Tweets");
  response(res, 200, tweets.data);
};
