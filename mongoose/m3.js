/*
insert commond
db.runCommand({insert:'student',documents:[{name:'krishna'}]})
*/


/*
cursor object
find method return cursor object.
find method 20 elements in one time.
*/

//.......................................................................

/*
db.collection.find(query,projection)
 filter the document
 {} for all document
 projection- which field we want.
*/

// find always return an array.

//.......................................................................
/*
krishna> db.student.find({name:{$eq:'krishna'}},{_id:0,city:0,Id:0,place:0})
[ { name: 'krishna' }, { name: 'krishna' } ]

$gt
$lt
$gte
$in
$nin
*/

//.............................................
/*
we can use many operator in one query with the help of and and or operator.
krishna> db.student.find({$and:[{name:{$eq:'krishna'}},{place:{$eq:'Gohri'}}]})
[ { _id: 2, name: 'krishna', place: 'Gohri' } ]
*/


//...............................................................exists use

$and:[{year:{$ne:'2022'}},{$year:{$exists:true}}]

//........................................



