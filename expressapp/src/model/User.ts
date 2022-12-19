import { Document, model, Model, Schema} from "mongoose";

export  interface User extends Document{
  email: string;
  password?: string;
}


const userSchema: Schema = new Schema({
    email:String,
    password:String
});

const UserModel:Model<Partial<User>> = model("user", userSchema);

export default UserModel;