// updated
db.collection.update({query_object},{update_object},{config_obj})

krishna> db.student.updateOne({name:'krishna'},{$set:{place:'saray Inayat'}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

// how to add field in documents.here we are adding branch field.
krishna> db.student.update({_id:2},{$set:{branch:'CSE',name:'krishna'}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

// how to delete any field. here we are deleting branch field pass empty string 

krishna> db.student.update({_id:2},{$unset:{branch:''}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

//............. how to rename any field.

krishna> db.student.update({name:'krishna'},{$rename:{name:'Full_name'}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

//...................... how to insert numeric value.
krishna> db.student.update({_id:2},{$mul:{roll_no:2}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
//....... how to increment numeric value by double,triple and so....
krishna> db.student.update({_id:2},{$mul:{roll_no:2}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

//......................... how to increment numeric value by specific value
krishna> db.student.update({_id:2},{$inc:{roll_no:-47}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

//.............. max operator compare with exist value
// if exist value is greater than max value then no change\
// if lessthan then change. exist value is 47

krishna> db.student.update({_id:2},{$max:{roll_no:46}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 0,
  upsertedCount: 0
}
//...............
krishna> db.student.update({_id:2},{$max:{roll_no:48}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
//..............by default set update first match
// if you want to update many document then use multi:true.

krishna> db.student.update({name:'krishna'},{$set:{name:'Rahul',}},{multi:true})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}

//......................................




