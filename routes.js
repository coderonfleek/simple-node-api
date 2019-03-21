let todos = require("./todos");

module.exports = function(app) {
  app.get("/todos", function(req, res) {
    res.json(todos);
  });
};
