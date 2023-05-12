// how to delete database
krishna> db.dropDatabase('krishna')
{ ok: 1, dropped: 'krishna' }

// how to restore data
C:\Users\Krishna Sahu\Desktop\restore>mongorestore
2023-04-19T14:33:55.732+0530    using default 'dump' directory
2023-04-19T14:33:55.735+0530    preparing collections to restore from
2023-04-19T14:33:55.802+0530    reading metadata for krishna.nest from dump\krishna\nest.metadata.json
2023-04-19T14:33:55.819+0530    reading metadata for krishna.student from dump\krishna\student.metadata.json
2023-04-19T14:33:55.852+0530    reading metadata for krishna.car from dump\krishna\car.metadata.json
2023-04-19T14:33:55.873+0530    reading metadata for krishna.date from dump\krishna\date.metadata.json
2023-04-19T14:33:55.890+0530    reading metadata for krishna.loop from dump\krishna\loop.metadata.json

// selected dtabase restore
C:\Users\Krishna Sahu\Desktop\restore>mongorestore singleDoc


//...restore a single collection
Desktop\restore>mongorestore --nsInclude krishna.car onlyCollection
