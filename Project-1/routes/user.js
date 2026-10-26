const express = require("express");

const route = express.Router();

// route.get("/api/users", (req, res) => {
//   const html = `<ul>${users.map((us)er) => ` <li>${user.first_name}</li>`).join("")}</ul>`;
//   return res.send(html);
// });

route.route("/api/user/:id").get((req, res) => {
  // const id = Number(req.params.id);
  // const user = users.find((user) => user.id === id);
  // return res.json(user);
  console.log("middleire processed");
  return res.json(users);
});
route.post("/api/user/create", (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, res) => {
    return res.json({ status: "pending" });
  });
  return res.json({ status: "user created" });
});

route.patch("/api/user/update/:id", async (req, res) => {
  const { first_name, gender } = req.body;
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  if (first_name !== undefined) {
    user.first_name = "hari";
  }
  if (gender !== undefined) {
    user.gender = "male";
  }
  return res.json({
    message: "Updated successfully",
    user: user,
  });
});
module.exports = route;
