import { CgLogIn } from "react-icons/cg";

const addToCart=(productData)=>{
    let localData=localStorage.getItem('cart')
   
    if(localData==null){
        let tempArray=[]
        tempArray.push(productData);
        localStorage.setItem('cart',JSON.stringify(tempArray));
    }
    else{
        let tempArray=JSON.parse(localStorage.getItem("cart"));
        tempArray.push(productData);
        localStorage.setItem("cart",JSON.stringify(tempArray));
    }
};
export default addToCart;