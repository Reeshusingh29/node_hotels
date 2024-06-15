const express = require('express'); // Express library import kar rahe hain
const app = express();
const db = require('./db'); // Apna dbs.js file import kar rahe hain

require('dotenv').config();
const bodyParser = require('body-parser');
app.use(bodyParser.json());   //req.body
const PORT =process.env.PORT || 3000;


const person = require('./models/person');
const menuitem = require('./models/menu'); // Corrected variable name

app.get('/', function (req, res) {
  res.send('Welcome to my hotel, how can I help you?');
});

app.post('/', async (req, res) => {
  try {
    const data = req.body; // Assuming the request body contains the person data 

    // Create a new person document using the mongoose model
    const newPerson = new person(data);
    
    // Save the new person to the database
    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: 'Internal server error' });
  }
});

app.post('/menu', async (req, res) => {    
  try {
    const data = req.body; // Assuming the request body contains the menu data

    // Create a new menu document using the mongoose model
    const newMenu = new menuitem(data); // Corrected variable name
    
    // Save the new menu to the database
    const response = await newMenu.save();
    console.log('data saved');
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: 'Internal server error' });
  }
});

app.get('/menu', async (req, res) => {
  try {
    const data = await menuitem.find(); // Corrected variable name
    console.log('data fetched');
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: 'Bekaar hai bhai mai toot gaya ' });
  }
});

app.get('/:worktype', async (req, res) => {
  try {
    const worktype = req.params.worktype; // This params is used for parameter and this const worktype is used to fetch the '/person/:worktype'
    if (worktype == 'chef' || worktype == 'manager' || worktype == 'waiter') {
      const response = await person.find({ work: worktype });
      console.log('response fetched');
      res.status(200).json(response);
    }   
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: 'Bekaar hai bhai mai toot gaya ' });
  }
});

// GET Method to get the person
app.get('/', async (req, res) => {
  try {
    const data = await person.find(); // This will show whatever is in the person collection in MongoDB
    console.log('data fetched');
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: 'Bekaar hai bhai mai toot gaya ' });
  }
});


//import the router files

const person_routes = require('./routes/person_routes');

//use the routers
app.use('/',person_routes);


app.listen(3000, () => {
  console.log('Listening on port 3000');
});

// Data mai operation 4 type ka hota hai crud
// CRUD MAI HTTP METHODS
/*
1. Create - POST METHOD
2. Update - PUT/PATCH METHOD
3. Read - GET METHOD
4. DELETE - DELETE METHOD 
*/
