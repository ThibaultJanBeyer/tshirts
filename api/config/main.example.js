/**
 * This is an example file.
 * please make a copy, replace values with real project values
 * and save then remove the .example from filename.
 * Thanks you.
 */

module.exports = {  
  // Secret key for JWT signing and encryption
  'secret': 'super secret passphrase',
  // Database connection information
  'database': 'mongodb://[username]:[password]@localhost:27017/shirts',
  // Setting port for server
  'port': 3000
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


To kill a running mongodb instance:

1. Find out the ID https://stackoverflow.com/questions/5091624/is-mongodb-running
2. kill it: $ kill [ID]

*/