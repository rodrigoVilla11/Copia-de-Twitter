const { Schema } = require("mongoose");

const accountsSchema = new Schema({
  name: String,
  username: String,
  image: String,
  birthday: Date,
  description: String,
  tweets: { type: String, ref: "Tweets" },
});

accountsSchema.statics.list = async function () {
  return await this.find().populate("tweets");
};
accountsSchema.statics.get = async function (_id) {
  return await this.findById(_id).populate("tweets");
};
accountsSchema.statics.insert = async function (account) {
  return await this.create(account);
};

accountsSchema.statics.delete = async function (_id) {
  return await this.findByIdAndDelete(_id);
};
module.exports = accountsSchema;
