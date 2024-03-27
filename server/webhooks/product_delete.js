import ProductModel from "../../utils/models/productsModel.js";

const productDeleteHandler = async (
    topic,
    shop,
    webhookRequestBody,
    webhookId,
    apiVersion
  ) => {
    const webhookBody = JSON.parse(webhookRequestBody);
    console.log(webhookBody)
    await ProductModel.findOneAndDelete({ productId: webhookBody.id })
    .then(()=>console.log('Product Data Deleted Successfully'))
    .catch((error)=>{
        console.log('Something went wrong')
    })
  };
  
  export default productDeleteHandler
  