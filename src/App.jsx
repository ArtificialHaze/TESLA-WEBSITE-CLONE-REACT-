import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CyberTruck from "./CyberTruck";
import ModelS from "./ModelS";
import ModelX from "./ModelX";
import Shop from "./Shop";
import Cart from "./Cart";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cybertruck" element={<CyberTruck />} />
        <Route path="/model_s" element={<ModelS />} />
        <Route path="/model_x" element={<ModelX />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
