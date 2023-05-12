// how to access single level array
// it return the same array

krishna> db.car.find({cities:[ 'London', 'Newcastle']})
[
    _id: ObjectId("643950f98867c7e0d5b12f19"),
    list: 'England',
    cities: [ 'London', 'Newcastle' ]
  }
]

// all return the all array which have these 2 element.
krishna> db.car.find({cities:{$all:[ 'London', 'Newcastle']}})
[
  {
    _id: ObjectId("643950f98867c7e0d5b12f16"),
    list: 'UK',
    cities: [
      'London',
      'Glasgow',
      'Cardiff',
      'Newcastle',
      'Durham',
      'Manchester',
      'Coventry'
    ]
  },
  {
    _id: ObjectId("643950f98867c7e0d5b12f19"),
    list: 'England',
    cities: [ 'London', 'Newcastle' ]
  }
]