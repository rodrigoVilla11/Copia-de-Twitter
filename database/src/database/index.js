const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/envs");

const conn = mongoose.createConnection(MONGO_URI);

const Tweets = conn.model("Tweets", require("./schemas/tweetsSchema"));
const Accounts = conn.model("Accounts", require("./schemas/accountsSchema"));

module.exports = { Tweets, Accounts };
