const authController = require('./controllers/auth'),
      usersController = require('./controllers/users'),
      express = require('express'),
      passportService = require('./config/passport'),
      passport = require('passport');

// Constants for role types
const REQUIRE_ADMIN = "Admin",  
      REQUIRE_OWNER = "Owner",
      REQUIRE_CLIENT = "Client",
      REQUIRE_MEMBER = "Member";

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });  
const requireLogin = passport.authenticate('local', { session: false });  

module.exports = function(app) {  
  // Initializing route groups
  const apiRoutes = express.Router(),
        authRoutes = express.Router();

  //=========================
  // Auth Routes
  //=========================

  // Protect dashboard route with JWT
  apiRoutes.get('/dashboard', requireAuth, function(req, res) {  
      res.send('It worked! User id is: ' + req.user._id + '.');
  });

  // get all users from Database
  apiRoutes.get('/users', usersController.getAll);

  // get specific user
  apiRoutes.get('/users/:id', usersController.get);

  // Set auth routes as subgroup/middleware to apiRoutes
  apiRoutes.use('/auth', authRoutes);

  // Registration route
  authRoutes.post('/register', authController.register);

  // Login route
  authRoutes.post('/login', requireLogin, authController.login);


  // Set url for API group routes
  app.use('/api', apiRoutes);
};
