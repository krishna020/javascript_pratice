// how to use upsert
krishna> db.student.update({_id:1},{$set:{name:'sam',branch:"CSE"}},{upsert:true})
{
  acknowledged: true,
  insertedId: 1,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 1
}

//...................
