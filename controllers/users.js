
exports.createUser = createUser;
exports.getAllUsers = getAllUsers;

function createUser(req, res) {
  res.app.locals.config;
  res.status(201).send(req.body);
}

function getAllUsers (req, res) {
	res.send([{}, {}]);
}

function getUserById (req, res) {
  var userID = req.params.name; // codydaig
  if(req.query.category) {
    // to sort by category
  }
}

function testRoute (req, res, next) {
  return [function(req, res, next){}, function(req, res, next){}]
}
