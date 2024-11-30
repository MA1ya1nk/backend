const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
    name: String,
    city: String,
    salary: Number,
    isManager: Boolean
})
const Employee = mongoose.model('Employee','employeeSchema');
module.exports=Employee