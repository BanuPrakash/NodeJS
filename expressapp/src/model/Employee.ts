import { Document, model, Model, Schema} from "mongoose";

export  interface Employee extends Document{
  id: number;
  name: string;
  username: string;
  email: string;
  company: string;
}

const employeeSchema: Schema = new Schema({
    id:Number,
    name:String,
    username:String,
    company:String
});

const EmployeeModel:Model<Partial<Employee>> = model("employee", employeeSchema);

export default EmployeeModel;