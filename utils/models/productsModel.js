import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  productId: { type:BigInt , required: true},
  productTitle: { type: String, required: true},
  json: {type:JSON,required:true},
  createdAt:{type:Date,default:Date.now},
  updatedAt: { type: Date, default: Date.now },
},
{ timestamps: true });

const ProductModel = mongoose.model("Products", ProductSchema);

export default ProductModel