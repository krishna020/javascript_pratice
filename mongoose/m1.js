insert()
insertOne()
insertmany()
/*
 db.student.insert({name:'rahul',city:'Allahabad'})
DeprecationWarning: Collection.insert() is deprecated. Use insertOne, insertMany, or bulkWrite.
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("643901698867c7e0d5b12f14") }
}
krishna> db.student.find()
[
  {
    _id: ObjectId("643901698867c7e0d5b12f14"),
    name: 'rahul',
    city: 'Allahabad'
  }
]
*/

// krishna> db.student.insertOne({_id:02,name:'krishna',place:'Gohri'})

/*
how to insert many document

krishna> db.student.insertMany([{Id:10,name:'A'},{_id:11,name:"B"}])
*/

