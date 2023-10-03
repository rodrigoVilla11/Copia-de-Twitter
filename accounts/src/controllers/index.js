const { catchedAsync } = require("../utils");

module.exports = {
  getAccounts: catchedAsync(require("./getAccounts")),
  postAccounts: catchedAsync(require("./editAccounts")),
  deleteAccounts: catchedAsync(require("./editAccounts")),
  editAccounts: catchedAsync(require("./editAccounts")),
};
