// date in mongodb
krishna> new Date()
ISODate("2023-04-19T05:19:36.088Z")
krishna> ISODate()
ISODate("2023-04-19T05:19:48.733Z")

//.............how to put your own date in mongodb
// new date can take atleast 1 data
// ISODate() can take atleast 3 data
// date and month should be 2 digit.
krishna> new Date('2023')
ISODate("2023-01-01T00:00:00.000Z")
krishna> ISODate('2023-04-19')
ISODate("2023-04-19T00:00:00.000Z")

