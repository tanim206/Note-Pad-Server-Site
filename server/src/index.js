const app = require("./app");
const dataBaseConnect = require("./config/dataBase");
const { serverPort } = require("./secret");

app.listen(serverPort, async () => {
  console.log(`Server is Running at http://localhost:${serverPort}`);
  await dataBaseConnect();
});
