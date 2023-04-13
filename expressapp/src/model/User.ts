import { Document, Schema, model } from "mongoose";

export interface User extends Document {
    email:string;
    password:string;
}

const UserSchema:Schema = new Schema({
    email:String,
    password:String
});

const UserModel = model("user", UserSchema);

export default UserModel;