var users = require('./controllers/users');

var auth = function(req, res, next) {
  if(user.auth === false) {
    res.status(403).send('unauthorized');
  } else {
    next();
  }
}

module.exports = Routes;

function Routes(app) {

  app.get('/users', users.getAllUsers);
  app.post('/users', users.createUser);
  app.get('/users/:name/:id', auth, users.getUserById); // localhost:3000/posts?catagory=ems&sortby=asc&limit=100

  app.use();

  app.get()

}

<form method="POST" action='/users'>