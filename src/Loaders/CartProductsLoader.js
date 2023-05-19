import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async() =>{
    const loadedProducts = await fetch ('products.json');
    const products = await loadedProducts.json();

    // if cart data is in database, you have to async await
    const storedCart = getShoppingCart();
    const savedCart = [];
    for(const id in storedCart){
        console.log(id)
        const addedProduct = products.find(pd => pd.id === id);
        console.log(addedProduct)
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity= quantity;
            savedCart.push(addedProduct);
        }
    }

    // if you need to send two things
    // return [products, savedCart];
    // return {products, cart: savedCart};

    // console.log(products);
    return savedCart;

}
export default cartProductsLoader;