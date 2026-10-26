const User = require("../models/model");

async function handleAlluser(req, res) {
  const allDbUser = await User.find({});
  return res.json(allDbUser);
}

const handleGetUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ msg: "user not found" });
  return res.json(user);
};

const handleUpdateUserById = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { lastname: changed });
  return res.json({ msg: success });
};

async function handleDeleteUserById() {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "success" });
}

async function handleCreateNewUser() {
  const body = req.body;
  if (
    !body ||
    !body.firstname ||
    !body.lastname ||
    !body.email ||
    !body.gender
  ) {
    return res.status(404).json({ msg: "all fields are required" });
  }

  const result = await User.create({
    firstname: body.firstname,
    lastname: body.lastname,
    email: body.email,
    gender: body.gender,
  });
  return res.status(200).json({ msg: "user created success", id: result._id });
}
module.exports = {
  handleAlluser,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
};
