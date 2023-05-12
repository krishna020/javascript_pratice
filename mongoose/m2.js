/*
krishna> db.student.insert([{_id:21,name:"a"},{_id:21,name:'b'},{_id:22,name:'c'}])
Uncaught:
MongoBulkWriteError: E11000 duplicate key error collection: krishna.student index: _id_ dup key: { _id: 21 }
Result: BulkWriteResult {
  insertedCount: 1,
  matchedCount: 0,
  modifiedCount: 0,
  deletedCount: 0,
  upsertedCount: 0,
  upsertedIds: {},
  insertedIds: { '0': 21, '1': 21, '2': 22 }
}
Write Errors: [
  WriteError {
    err: {
      index: 1,
      code: 11000,
      errmsg: 'E11000 duplicate key error collection: krishna.student index: _id_ dup key: { _id: 21 }',
      errInfo: undefined,
      op: { _id: 21, name: 'b' }
    }
  }
]
*/

/*
krishna> db.student.insert([{_id:23,name:"a"},{_id:23,name:'b'},{_id:24,name:'c'}],{ordered:false})
Uncaught:
MongoBulkWriteError: E11000 duplicate key error collection: krishna.student index: _id_ dup key: { _id: 23 }
Result: BulkWriteResult {
  insertedCount: 2,
  matchedCount: 0,
  modifiedCount: 0,
  deletedCount: 0,
  upsertedCount: 0,
  upsertedIds: {},
  insertedIds: { '0': 23, '1': 23, '2': 24 }
}
Write Errors: [
  WriteError {
    err: {
      index: 1,
      code: 11000,
      errmsg: 'E11000 duplicate key error collection: krishna.student index: _id_ dup key: { _id: 23 }',
      errInfo: undefined,
      op: { _id: 23, name: 'b' }
    }
  }
]
*/

//...........................................................

/*
data must inside in array in insertMany([])
krishna> db.student.insertMany({_id:25,name:"a"})
MongoInvalidArgumentError: Argument "docs" must be an array of documents
*/