const server = require("./src/server");
const { PORT } = require("./config/envs");

server.listen(PORT, () => {
  console.log(`Tweets service listening on port ${PORT}`);
});
