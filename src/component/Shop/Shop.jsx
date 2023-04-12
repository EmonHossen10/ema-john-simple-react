import React, { useEffect, useState } from "react";
import "./shop.css";
import Product from "../product/Product";
import Cart from "../cart/Cart";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../utilities/fakedb";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart=[];
    // Step 1 >>> get id
    for (const id in storedCart) {
      // step 2 >> get the product by using id
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        // step 3>> get quantity of the products
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // step 4>> add the added products to the saved cart
        savedCart.push(addedProduct)
      }
    }
    // step 5>> set data
    setCart(savedCart)
  }, [products]);

  // event handeler
  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };

  const handleClearCart=()=>{
    setCart([]);
    deleteShoppingCart();
  }

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart 
        cart={cart}
        handleClearCart={handleClearCart}
        >
          <Link to="/orders"><button className='btn-proceed'> Review Order
          <FontAwesomeIcon icon={faArrowRight} />

          
          </button></Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
