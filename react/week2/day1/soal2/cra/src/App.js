import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="form-bejo">
      <h1>Hello Bejo!</h1>
      <h3>Welcome to cat World!</h3>
      <p>To order my food, please fill the form below.</p>
      <form action="">
          <label for="name">Name</label><br/>
          <input type="text" name="name" className="input" placeholder="name..." id="name"/><br/>

          <label for="date">Delivery Date</label><br/>
          <input type="date" name="date" className="input" id="date"/><br/>

          <label for="address">Address</label><br/>
          <textarea name="address" id="address" className="input" cols="30" rows="2"></textarea><br/>

          <label for="quantity">Quantity</label><br/>
          <input type="number" name="quantity" className="input" placeholder="quantity..." id="quantity"/><br/>
      </form>
    </div>
  );
}

export default App;
