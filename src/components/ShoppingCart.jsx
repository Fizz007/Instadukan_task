import React, { useEffect } from 'react';
import { useCartStore } from '../store/CartStore';

const ShoppingCart = () => {
  const cartStore = useCartStore();
  const totalCost = cartStore.cartItems.reduce((acc, item) => acc + item.passengerCost, 0);


  useEffect(() => {
    const storedPassengerInfo = localStorage.getItem('passengerData');
    const cartt = localStorage.getItem('cartData');
    if (storedPassengerInfo) {
      const parsedPassengerInfo = JSON.parse(storedPassengerInfo);
      cartStore.setPassengerInfo(parsedPassengerInfo);
    }

    if(cartt){
      const parsedCartData = JSON.parse(cartt);
      cartStore.addToCart(parsedCartData);
    }
  }, [cartStore]);

  function removeItems(){
    localStorage.removeItem('passengerData');
    localStorage.removeItem('cartData');   
    window.location.reload();
  }


  return (
    <div className="shopping-cart" style={{textAlign: 'center'}}>
      <h2>Shopping Cart</h2>
      
      <h3>Total Items: {cartStore.cartItems.length} * 1200</h3>
      <h3>Total Cost: Rs{totalCost}</h3>
      <button onClick={removeItems}>Place order</button>
    </div>
  );
};

export default ShoppingCart;
