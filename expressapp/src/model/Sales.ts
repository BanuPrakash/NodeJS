import { Document, Schema, model } from "mongoose";

export  interface Sales extends Document{
    category: string,
    product: string,
    sales: number,
    quarter: number
}

const SalesSchema:Schema = new Schema({
    category: {
        type:String,
        required: true
    },
    product : {
        type:String,
        required: true,
    },
    sales: {
        type:Number,
        min: 0
    },
    quarter: Number
});

const SalesModel = model("Sale", SalesSchema);

export default SalesModel;