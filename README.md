# message-api
creating an api that will be sending love messages with node.js and express


    #STEPS

1. the first step involves installing Node.js and npm in ones system 
2. the second step involves making a directory where you are going to carry out the coding of the api 
3. the third step involves getting in to the directory you have made 
4.  mkdir message-api and cd message-api
5. initialize the new Node.js project in the terminal 
    npm init -y
6. install express which will install the framework for handling http requests 
   npm install express
7. create a file called index.js
   touch index.js
8. to run the server you run this command in the terminal
   node  index.js
9. in order for the api to be working with my react.jsx app we have to now configure CORS 
   npm install cors
   10. require the 'cors' module at the top of your code i.e const cors = require('cors');
   11. add it as middleware before any route is handled, e.g., app.use(cors());
    
### API Endpoints: 

#### GET /messages
Returns all saved messages from the database.on random 

