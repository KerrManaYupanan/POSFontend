import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Products from './Product.js';

function App() {
 return (
    <div>
      <h1>POS System</h1>
      <Products />
    </div>
  );
}

export default App;
