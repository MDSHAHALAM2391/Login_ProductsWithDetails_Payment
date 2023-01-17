import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./components/Login";
import Products from "./components/Products";
import ProductsDetails from "./components/ProductsDetails";
import "./assets/styles/main.scss";
import Payment from "./components/Payment";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productDetails/:id" element={<ProductsDetails />} />
          <Route path="/payment/:id" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
