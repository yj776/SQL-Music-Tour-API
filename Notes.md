npm install will download all the dependencies needed for this file
- node module folder will get created.

npm start - this is a command that will run from scrips -> start -> node.server.js
- Intally npm start may say ROCKING' on port: undefined ... This is because the ports are not identified. We have no .env file. in server.js ROCKING' on port: process.env.PORT

.gitignor will contain file names that we don't want to get pushed into github. 

Note: It's always a good ideea to through starter codes. 

A little review:
(MVC)
- MODLE: anything that deals with database; Where tables and columns will be written
- VIEW: What you want to show on the view
- Controller: Where we house all the endpoint routes that interact with the database.

////////////////////////////////////
* npm i sequelize -> to install sequelize (ORM)
* npm i pg pg-hstore -> In order to run sequelize we need to fun the native postgres drivers. There are a bunch other drivers as well. Install accordingly
^ Refer here https://sequelize.org/docs/v6/getting-started/

////
Now we have to configure our app to use ORM