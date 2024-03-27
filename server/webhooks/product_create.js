import ProductModel from "../../utils/models/productsModel.js";

const productCreateHandler = async (
    topic,
    shop,
    webhookRequestBody,
    webhookId,
    apiVersion
  ) => {
    const webhookBody = JSON.parse(webhookRequestBody);
    console.log(webhookBody)
    await ProductModel.create({productId:webhookBody.id,productTitle:webhookBody.title,json:JSON.stringify(webhookBody)})
    .then((data)=>{
      console.log('Product Data Inserted Successfully')
  }).catch((error)=>{
      console.log('Something went wrong')
  })
  };
  
  export default productCreateHandler;
  