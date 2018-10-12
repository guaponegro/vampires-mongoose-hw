// 1. Require your node modules
const mongoose = require("mongoose");
const vampireData = require("./populateVampires")
// 2. Require your model (and possibly your extra data source);
const Vampire = require("./models/vampire");

// 3. Connect your database and collection name
const connectionString = "mongodb://localhost/test";
mongoose.connect(connectionString);

// 4. Open your mongoose connection
mongoose.connection.on("connected", () => {
    console.log(`Mongoose connected to ${connectionString}`)
});

mongoose.connection.on("disconnected", () => {
    console.log(`Mongoose is disconnected`)
});

mongoose.connection.on("error", () => {
    console.log(err, "mongoose error")
});
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
Vampire.collection.insertMany(vampireData,() => {
    console.log(vampireData)
    mongoose.connection.close();
  });
// ### Add some new vampire data
Vampire.create(
    {
        name: "Nosferatu", 
        hair_color: 'brown',
        eye_color: 'blue',
        dob: new Date(1088, 4, 4, 9, 8),
        loves: ['hunting', 'killing people', 'night swims'],
        location: 'Miami, FL, US',
        gender: 'm',
        title: 'The First Vampire'
    },
    (err, createdVampire) => {
        if(err){
            console.log(err);
        } else {
         console.log(createdVampire);
        }
    });


Vampire.create(
    {
        name: "Vlad Transylvannia", 
        hair_color: 'black',
        eye_color: 'brown',
        dob: new Date(1545, 5, 4, 11, 10),
        loves: ['being merry', 'being insane', 'card games'],
        location: 'Transylvania, Romania, EU',
        gender: 'm',
        title: 'Vlad the Impaler'
    },
    (err, createdVampire) => {
        if(err){
            console.log(err);
        } else {
         console.log(createdVampire);
        }
    });

Vampire.create(
    {
        name: "Drucilla", 
        hair_color: 'red',
        eye_color: 'green',
        dob: new Date(1784, 6, 3, 13, 12),
        loves: ['being a maneater', 'big parties', 'card games'],
        location: 'Paris, France, EU',
        gender: 'f',
        title: 'The Red Terror'
    },
    (err, createdVampire) => {
        if(err){
            console.log(err);
        } else {
         console.log(createdVampire);
        }
    });

Vampire.create(
    {
        name: "Elvira", 
        hair_color: 'brown',
        eye_color: 'brown',
        dob: new Date(1884, 6, 3, 13, 12),
        loves: ['being merry', 'being insane', 'card games'],
        location: 'Baton Rouge, LA, US',
        gender: 'f',
        title: 'The Creole Menace'
    },
    (err, createdVampire) => {
    if(err){
        console.log(err);
    } else {
     console.log(createdVampire);
    }
});
/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
