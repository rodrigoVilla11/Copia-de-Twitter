const server = require("./src/server");
const { PORT } = require("./src/config/envs");
const { Tweets, Accounts } = require("./src/database");

server.listen(PORT, () => {
  console.log(`Database service on PORT ${PORT}`);
});
