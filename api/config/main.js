module.exports = {  
  // Secret key for JWT signing and encryption
  'secret': 'super secret passphrase',
  // Database connection information
  'database': 'mongodb://root:root@localhost:27017/shirts',
  // Setting port for server
  'port': process.env.PORT || 3000
};

/*
To get a user auth in mongodb following steps:
1. run mongod:
$ mongod --dbpath=db --port 27017
2. Now connect to it and create user:
$ mongo --post 27017
> use shirts
> db.createUser( { user: "root", pwd: "root", roles: [ { role: "root", db: "admin" } ] } );
> exit
3. you are all set up. Next time run mongod with the --auth flag:
$ mongod --dbpath=db --port 27017 --auth
4. Connect to it like this:
'mongodb://root:root@localhost:27017/shirts'
*/