import React, { useState } from "react";
import { Modal, Form, Input, Button, DatePicker, Select } from "antd";
// import cartstore from '../store/CartStore'
import { useCartStore } from "../store/CartStore";


const PassengerInfo = ({visible,onCancel}) => {
  const cartStore = useCartStore();
  
  const [form, setForm] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    nationality: '',
    passportNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Form submitted:', form);
    cartStore.addToCart(1200, form);
    localStorage.setItem('passengerData', JSON.stringify(form));
    onCancel();
  };

  const handleDateChange = (date, dateString) => {
    setForm((prevForm) => ({ ...prevForm, travelDate: date }));
  };

  const handleCart = ()=> {
    const ferryFees = 1200;
    cartStore.addToCart(ferryFees, form);
    localStorage.setItem('cartData', JSON.stringify(ferryFees));
  }
  
  return (
    <Modal visible={visible} onCancel={onCancel} footer={null}>
      <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={form.name} onChange={handleChange} />
      </label>
      <br />

      <label>
        Email:
        <input type="email" name="email" value={form.email} onChange={handleChange} />
      </label>
      <br />

      <label>
        Age:
        <input type="number" name="age" value={form.age} onChange={handleChange} />
      </label>
      <br />

      <label>
        Gender:
        <select name="gender" value={form.gender} onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <br />

      <label>
        Nationality:
        <input type="text" name="nationality" value={form.nationality} onChange={handleChange} />
      </label>
      <br />

      <label>
        Passport Number:
        <input type="text" name="passportNumber" value={form.passportNumber} onChange={handleChange} />
      </label>
      <br />

      <label>
        Travel Date:
        <DatePicker  onChange={handleDateChange} />
      </label>
      <button type="submit" onClick={handleCart}>Submit</button>
    </form>
    </Modal>
  );
};

export default PassengerInfo;
