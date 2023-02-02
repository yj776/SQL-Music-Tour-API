npm install will download all the dependencies needed for this file
- node module folder will get created.

npm start - this is a command that will run from scrips -> start -> node.server.js
- Intally npm start may say ROCKING' on port: undefined ... This is because the ports are not identified. We have no .env file. in server.js ROCKING' on port: process.env.PORT

.gitignor will contain file names that we don't want to get pushed into github. 
- PORT = 3000
- ....?

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

////
Usually, we put the sequelize connection BENEATH the middleware configuration but ABOVE the root route. This is becasue we want to put it anywhere above where database might be needed. 

/// 
modles are objects on our .... ? 7:27PM

// Other commands used
npm i -g sequelize-cli
sequelize init:config
sequelize init:models
sequelize init:migrations
sequelize model:generate --name Band --attributes "band_id:integer, name:string, genre:text, available_start_time:date, end_time:date" --force true

sequelize db:migrate

// Adding Foregin Keys through command line
references: { model: 'users', key: 'id' }
userId: {
      type: Sequelize.INTEGER,
      references: { model: 'users', key: 'id' }
    }


// Link to Review
https://sequelize.org/docs/v6/other-topics/constraints-and-circularities/


2.1.23 ///////////////////////////////////// 2.1.23 
MAC Reminder
- Add npx before any sequelize commands
- npx sequelize migration:generate --name add-recommendation-column-to-bands

// In pgAdmin4... we used
SELECT name FROM public. "SequelizeMeta";

What's done?
- added View (today: Custom Migrations); There are other migrations that are not custom
- added controllers - contains all the logic
- Created routes and used Postman

Commands Used
npx sequelize migration:generate --name add-recommendation-column-to-bands
sequelize db:migrate
sequelize db:migrat:undo


Pending

