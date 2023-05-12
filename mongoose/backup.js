// default folder name
// first create the folder then open the folder with cmd.
C:\Users\Krishna Sahu\Desktop\restore>mongodump
2023-04-19T12:48:36.068+0530    writing admin.system.version to dump\admin\system.version.bson
2023-04-19T12:48:36.102+0530    done dumping admin.system.version (1 document)
2023-04-19T12:48:36.107+0530    writing krishna.loop to dump\krishna\loop.bson
2023-04-19T12:48:36.109+0530    writing krishna.student to dump\krishna\student.bson
2023-04-19T12:48:36.111+0530    writing krishna.car to dump\krishna\car.bson
2023-04-19T12:48:36.113+0530    writing krishna.nest to dump\krishna\nest.bson
2023-04-19T12:48:36.250+0530    done dumping krishna.loop (101 documents)
2023-04-19T12:48:36.255+0530    done dumping krishna.student (10 documents)
2023-04-19T12:48:36.367+0530    done dumping krishna.car (5 documents)
2023-04-19T12:48:36.377+0530    writing krishna.date to dump\krishna\date.bson
2023-04-19T12:48:36.462+0530    done dumping krishna.nest (3 documents)
2023-04-19T12:48:36.493+0530    done dumping krishna.date (1 document)

// with folder name
C:\Users\Krishna Sahu\Desktop\restore>mongodump --out backup
2023-04-19T12:49:45.152+0530    writing admin.system.version to backup\admin\system.version.bson
2023-04-19T12:49:45.172+0530    done dumping admin.system.version (1 document)
2023-04-19T12:49:45.174+0530    writing krishna.loop to backup\krishna\loop.bson
2023-04-19T12:49:45.178+0530    writing krishna.student to backup\krishna\student.bson
2023-04-19T12:49:45.179+0530    writing krishna.car to backup\krishna\car.bson
2023-04-19T12:49:45.182+0530    writing krishna.nest to backup\krishna\nest.bson
2023-04-19T12:49:45.189+0530    done dumping krishna.student (10 documents)
2023-04-19T12:49:45.192+0530    done dumping krishna.loop (101 documents)
2023-04-19T12:49:45.195+0530    done dumping krishna.car (5 documents)
2023-04-19T12:49:45.198+0530    writing krishna.date to backup\krishna\date.bson
2023-04-19T12:49:45.204+0530    done dumping krishna.nest (3 documents)
2023-04-19T12:49:45.207+0530    done dumping krishna.date (1 document)

//............ single database
C:\Users\Krishna Sahu\Desktop\restore>mongodump -d krishna --out singleDoc
2023-04-19T12:56:46.332+0530    writing krishna.loop to singleDoc\krishna\loop.bson
2023-04-19T12:56:46.425+0530    writing krishna.car to singleDoc\krishna\car.bson
2023-04-19T12:56:46.428+0530    writing krishna.nest to singleDoc\krishna\nest.bson
2023-04-19T12:56:46.459+0530    writing krishna.student to singleDoc\krishna\student.bson
2023-04-19T12:56:46.541+0530    done dumping krishna.car (5 documents)
2023-04-19T12:56:46.547+0530    done dumping krishna.nest (3 documents)
2023-04-19T12:56:46.551+0530    writing krishna.date to singleDoc\krishna\date.bson
2023-04-19T12:56:46.586+0530    done dumping krishna.student (10 documents)
2023-04-19T12:56:46.637+0530    done dumping krishna.date (1 document)
2023-04-19T12:56:46.650+0530    done dumping krishna.loop (101 documents)

// how to backup collection

C:\Users\Krishna Sahu\Desktop\restore>mongodump -d krishna -c car --out onlyCollection
2023-04-19T13:02:17.011+0530    writing krishna.car to onlyCollection\krishna\car.bson
2023-04-19T13:02:17.404+0530    done dumping krishna.car (5 documents)