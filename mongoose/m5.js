//elemMatch
// slice se hum array element ko control kr sakate hai.
// hum yaha slice projection use kr rahe hai. 
krishna> db.car.find({list:'US'},{cities:{$slice:2}})
[
  {
    _id: ObjectId("643950f98867c7e0d5b12f17"),
    list: 'US',
    cities: [ 'New York', 'Washington' ]
  }
]

//........................................................print last 2 element
krishna> db.car.find({list:'US'},{cities:{$slice:-2}})
[
  {
    _id: ObjectId("643950f98867c7e0d5b12f17"),
    list: 'US',
    cities: [ 'Seattle', 'Dallas' ]
  }
]

//.................................................print 3 element from 2 index. 
krishna> db.car.find({list:'US'},{cities:{$slice:[2,3]}})
[
  {
    _id: ObjectId("643950f98867c7e0d5b12f17"),
    list: 'US',
    cities: [ 'LA', 'Las Vegas', 'Miami' ]
  }
]

//......................................................

krishna> db.nest.find({models:{$elemMatch:{engine:'Diesel'}}})
[
  {
    _id: ObjectId("643e5d598867c7e0d5b12f1b"),
    brand: 'Toyota',
    models: [
      { model: 'Land Cruiser', engine: 'Diesel', gearbox: 'Auto' },
      { model: 'Supra', engine: 'Petrol', gearbox: 'Manual' },
      { model: 'Carolla', engine: 'Petrol', gearbox: 'CVT' }
    ]
  },
  {
    _id: ObjectId("643e5d598867c7e0d5b12f1c"),
    brand: 'Honda',
    models: [
      { model: 'CR-V', engine: 'Hybrid', gearbox: 'CVT' },
      { model: 'Civic', engine: 'Diesel', gearbox: 'Manual' },
      { model: 'Jazz', engine: 'Petrol', gearbox: 'manual' }
    ]
  }
]

//....................................................

krishna> db.nest.find({models:{$elemMatch:{engine:'Diesel'}}},{'models.$':true})
[
  {
    _id: ObjectId("643e5d598867c7e0d5b12f1b"),
    models: [ { model: 'Land Cruiser', engine: 'Diesel', gearbox: 'Auto' } ]
  },
  {
    _id: ObjectId("643e5d598867c7e0d5b12f1c"),
    models: [ { model: 'Civic', engine: 'Diesel', gearbox: 'Manual' } ]
  }
]

//print the document , jisake array size 2 ho.
krishna> db.car.find({cities:{$size:2}})
[
  {
    _id: ObjectId("643950f98867c7e0d5b12f19"),
    list: 'England',
    cities: [ 'London', 'Newcastle' ]
  },
  {
    _id: ObjectId("643950f98867c7e0d5b12f1a"),
    list: 'Northumberland',
    cities: [ 'Newcastle', 'Durham' ]
  }
]