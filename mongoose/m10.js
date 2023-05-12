// how to update array. 1 from last, -1 from begining.
krishna> db.car.update({list:'US'},{$pop:{cities:1}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

//.............................
