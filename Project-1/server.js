const express = require("express");

const app = express();
const PORT = 8000;

const { connectDb } = require("./connect");
connectDb("mongodb://127.0.0.1:27017/express-db");

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  // fs.appendFile(`log.txt", ${Date.now()}: ${req.method}`, (err, data) => {
  //   next();
  // });
  console.log("hello from middlewire");
  return res.json({ msg: "hello from middelewire" });
});
app.get("/api/users", (req, res) => {
  console.log("middleire processed");
  return res.json(users);
});

// app.put("/api/updateall/:id", (req, res) => {
//   const update = req.body
//   if(first_name !== first_name ||
//     last_name !== last_name ||
//     email !== email ||
//     gender !== gender ||
//   )
// })

app.listen(PORT, (res, err) => {
  console.log(`server listen on port http//localhost:${PORT}`);
});
