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

async function handleUpdateUserById(req, res) {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
      runValidators: true,
    });

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error updating user",
      error: error.message,
    });
  }
}

async function handleDeleteUserById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "success" });
}

async function handleCreateNewUser(req, res) {
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
  handleCreateNewUser,
};
