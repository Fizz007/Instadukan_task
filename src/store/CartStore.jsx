
import { observable, action, makeObservable } from 'mobx';
import { createContext, useContext } from 'react';

class CartStore {
  cartItems = [];
  passengerInfo = [];

  constructor() {
    makeObservable(this, {
      cartItems: observable,
      passengerInfo: observable,
      addToCart: action,
      // addPassenger: action, // Ensure that addPassenger is defined here
    });
  }

  // addToCart(product, passengerCost) {
  //   this.cartItems.push({ product, passengerCost });
  // }

  addToCart( passengerCost, passengerInfo) {
    console.log('entered',  passengerCost, passengerInfo)
    this.cartItems.push({passengerCost, passengerInfo });
  }
  
  // addPassenger(info) {
  //   // this.passengerInfo.push(info);
  //   this.cartItems.push({ info });
  // }

  setPassengerInfo(newPassengerInfo) {
    this.passengerInfo.push(newPassengerInfo);
    console.log(newPassengerInfo)
  }
}

// const cartStore = new CartStore();
// export default cartStore;
const MobXReactContext = createContext();

const CartStoreProvider = ({ children }) => {
  const store = new CartStore();

  return (
    <MobXReactContext.Provider value={store}>
      {children}
    </MobXReactContext.Provider>
  );
};

const useCartStore = () => {
  const store = useContext(MobXReactContext);
  if (!store) {
    throw new Error('useCartStore must be used within a CartStoreProvider');
  }
  return store;
};

export { CartStoreProvider, useCartStore };