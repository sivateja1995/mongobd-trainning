db.getCollection("movies").find({});


// methods for 

db.movies.find({$and:[{"rating.average":{$gte:9}},{"genres":{$in:["Drama"]}}]});


// short cut for the query
db.movies.find({"rating.average":{$gte:9},"genres":{$in:["Drama"]}});


// quering of the data where run time is not 60  min
db.movies.find({runtime:{$not:{$eq:60}}}).count();

// simplefied above query 
db.movies.find({"runtime":{$ne:60}}).count();


//diving into the element operators 
// show databases;
// use users;
//* What are the element operators !? */
db.users.insertMany([{name:'helium',hobbies:[{title:'internet surfing',frequency:6},{title:'cooking',frequency:6}],phone:"8008898808"},{name:'salvedor',hobbies:[{title:'football',frequency:4},{title:'treaking',frequency:1}],phone:"8008898909"}	]);

// fetching of the users data 
db.users.find(); 





