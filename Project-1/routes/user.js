const express = require("express");

const {
  handleAlluser,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
} = require("../controllers/user");
const routes = express.Router();

routes.route.get(handleAlluser).post(handleCreateNewUser);

routes
  .route("/:id")

  .get(handleGetUserById)

  .patch(handleUpdateUserById)

  .delete(handleDeleteUserById);

module.exports = routes;

// routes.patch("/api/user/update/:id", async (req, res) => {
//   const { first_name, gender } = req.body;
//   const id = Number(req.params.id);
//   const user = user.find((user) => user.id === id);
//   if (first_name !== undefined) {
//     user.first_name = "hari";
//   }
//   if (gender !== undefined) {
//     user.gender = "male";
//   }
//   return res.json({
//     message: "Updated successfully",
//     user: user,
//   });
// });
