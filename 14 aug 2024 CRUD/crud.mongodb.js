// use("practise")
// db.createCollection("prac")
// db.prac.insertOne({
//     name:"mayank",
//     rollNo:40
// })
// use("test")
// let a = db.employees.findOne({"name":"shivam"})
// console.log(a)
// db.employees.updateMany({name:"mayank"},{$set:{name:"shivam"}})
use("revise")
db.createCollection("first")
db.first.insertOne({name:"ram arora",rollno: 42})
db.first.find({rollno:42})

