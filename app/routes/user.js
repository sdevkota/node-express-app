module.exports = app => {
    const usersController = require("../controllers/user.controller.js");
    // only one route for now
    app.get("/users", usersController.getUsers);
  };