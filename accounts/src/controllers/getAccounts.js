const axios = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const accounts = await axios.get("http://database:8003/Accounts");
  response(res, 200, accounts.data);
};
