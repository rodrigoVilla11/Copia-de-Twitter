const axios = require("axios");

module.exports = async (req, res) => {
  const accounts = await axios.post("http://database:8004/Accounts");
  response(res, 200, accounts.data);
};
