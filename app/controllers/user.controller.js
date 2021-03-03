const userService = require("../services/user.service.js");
// Create and Save a new User
exports.createUser= (req, res) => {
  // Validate request
};
// Retrieve all Users from the database.
exports.getUsers = (req, res,next) => {
  userService.getAll((err, data) => {
    if (err){
      res.status(500).send({
        message:
          err.message || "Error occurred while retrieving users."
      });
      next(err);
    }
    else res.send(data);
  });
};
