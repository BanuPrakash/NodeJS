const mongoose = require('mongoose');

const {connection} = mongoose;

mongoose.connect('mongodb://localhost:27017/node_express_db');

const EmployeeSchema = mongoose.Schema({
    id:Number,
    name:String,
    username:String,
    email:String,
    company:String
});

const EmployeeModel = mongoose.model('Employee', EmployeeSchema);

connection.once('connected', async () => {
    try {
        let docs = await EmployeeModel.find({});
        docs.forEach(employee => {
            console.log(employee);
        })
    } finally {
        await connection.close();
    }
});

//{"id":1,"name":"Leanne Graham","username":"Bret","email":"Sincere@april.biz","company":"Adobe"}
