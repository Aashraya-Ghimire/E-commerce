const productDataApi = async(setProductData)=>{
    const request= await fetch("https://dummyjson.com/recipes");
    const response=await request.json();
    console.log(response);
    if(request.status==200){
        setProductData(response.recipes)
    }
};
export default productDataApi;