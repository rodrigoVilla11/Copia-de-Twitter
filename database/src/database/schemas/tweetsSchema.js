const { Schema } = require("mongoose");

const tweetsSchema = new Schema({
  body: String,
  date: Date,
  likes: Number,
  retweets: Number,
  comments: [{ type: String }],
  account: { type: String, ref: "Accounts" },
});

tweetsSchema.statics.list = async function () {
  return await this.find().populate("accounts", [
    "_id",
    "name",
    "username",
    "image",
  ]);
};

tweetsSchema.statics.get = async function (_id) {
  return await this.findById(_id).populate("accounts", [
    "_id",
    "name",
    "username",
    "image",
  ]);
};

tweetsSchema.statics.insert = async function (tweet) {
  return await this.create(tweet);
};

tweetsSchema.statics.delete = async function (_id) {
  return await this.findByIdAndDelete(_id);
};

module.exports = tweetsSchema;
