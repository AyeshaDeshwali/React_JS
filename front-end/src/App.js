import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Signup from "./components/Signup";
import Login from "./components/Login";
import PrivateComponent from "./components/PrivateComponent";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./components/addProduct";
import ProductList from "./components/ProductList";
import UpdateProduct from "./components/UpdateProduct";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<ProductList />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update/:id" element={<UpdateProduct />} />
            <Route path="/logout" element={<h1>Logout component</h1>} />
            <Route path="/profile" element={<h1>Profile component</h1>} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
