const User = require('../models/user');

exports.getAll = function(req, res, next) {
    console.log(req.user);

    const query = User.find({}).select({
        "email": 1,
        "profile": 1,
        "role": 1
    });

    return query.exec(function(err, users) {
        if (err) return next(err);
        res.status(201).json(users);
    });
};

exports.get = function(req, res, next) {
    return User.find({email: req.params.id}, function(err, user) {
        res.status(201).json(user);
    });
};