import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async ()=>{

   const loadedProducts= await fetch("products.json");
   const products=await loadedProducts.json();

   // if cartr data is in database ,you have to use async await
    const storedCart=getShoppingCart();

    const savedCart=[];

    console.log(storedCart)
    for(const id in storedCart){
        const addedProducts=products.find(pd=> pd.id===id);
            if(addedProducts){
                const quantity=storedCart[id];
                addedProducts.quantity=quantity;
                savedCart.push(addedProducts)

            }
    }

    // if you need to send two things

    // return [products,savedCart]
    // another option
    // return {products, cart : savedCart}




   return savedCart;
}

export default cartProductsLoader;