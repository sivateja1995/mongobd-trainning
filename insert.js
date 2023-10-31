// use contactData;


// mock queries 
db.persons.insertOne({ name: "max", age: 20, hobbies: ["cooking"] });
db.persons.insertOne({ name: "manuel", age: 231, hobbies: ["cars", "cooking"] });
// type of the insert 
// 1 . insert (doesn't provide id but can insert signle or multiple documents
// 2 . insertOne for inserting of the single docoument
// 3. insertMany for inserting of the mulitple documents. 

db.company.insert([{ name: "sample two", gst: "xxx-xxx-xx28" }, { name: "sample two", gst: "xxx-xxx-xx29" }]);
db.company.insertOne({ name: "sample two", gst: "xxx-xxx-xx31" });
db.company.insert([{ _id: "4", name: "sample two", gst: "xxx-xxx-xx30" }, { _id: "5", name: "sample three", gst: "xxx-xxx-xx32" }, { _id: "6", name: "sample three", gst: "xxx-xxx-xx31" }, { $orderby: "name" }]);


db.company.insertOne({ name: "sample two", gst: "xxx-xxx-xx33" }, { writeConcertn: { w: 0, j: true } });
db.company.insertOne({ name: "sample two", gst: "xxx-xxx-xx33" }, { writeConcertn: { w: 1, j: false } });


// insertOne(): https://docs.mongodb.com/manual/reference/method/db.collection.insertOne/

// insertMany(): https://docs.mongodb.com/manual/reference/method/db.collection.insertMany/

// Atomicity: https://docs.mongodb.com/manual/core/write-operations-atomicity/#atomicity

// Write Concern: https://docs.mongodb.com/manual/reference/write-concern/

// Using mongoimport: https://docs.mongodb.com/manual/reference/program/mongoimport/index.html