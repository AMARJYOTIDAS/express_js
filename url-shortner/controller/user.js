const { v4: uuidv4 } = require("uuid");

const User = require("../model/user");

async function handleUserSignUp(req, res) {
  const { name, email, password } = req.body;

  await User.create({
    name,
    email,
    password,
  });
  return res.redirect("/");
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = User.findOne({ email, password });
  if (!user)
    return res.render("login", {
      error: "invalid username or password",
    });
  return res.redirect("/");
}
module.exports = { handleUserSignUp, handleUserLogin };
