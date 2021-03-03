const sql = require("../setup/dbSetup.js");

class UserService {
  //we can add like Dependecy i
  add(newUser) {
    sql.query("INSERT INTO Users SET ?", newUser, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("created User: ", { id: res.insertId, ...newUser });
      result(null, { id: res.insertId, ...newUser });
    });
  }
  //gets all info
  getAll(result) {
    sql.query("SELECT * FROM Users", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      result(null, res);
    });
  }
}

module.exports = new UserService();
