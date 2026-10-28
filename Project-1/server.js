const express = require("express");

const { connectDb } = require("./connect");

const userRoute = require("./routes/user");

const { logReqRes } = require("./middleware/index");

const app = express();
const PORT = 8000;

connectDb("mongodb://127.0.0.1:27017/express-db")
  .then(() => console.log("connection success"))
  .catch((error) => console.log("error", error));

app.use(express.urlencoded({ extended: true }));
app.use(logReqRes("log.txt"));

app.use("/user", userRoute);

app.listen(PORT, (res, err) => {
  console.log(`server listen on port http//localhost:${PORT}`);
});
