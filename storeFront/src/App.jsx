import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/Layouts/MainLayout";
import Home from "./pages/Home";
import ProductsPage from "./pages/store/ProductsPage";
import SingleProduct from "./pages/store/SingleProduct";
import Cart from "./pages/store/Cart";
import AuthLayout from "./components/Layouts/AuthLayout";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import ResetPassword from "./pages/authentication/ResetPassword";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/single-product/:id' element={<SingleProduct />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
      <Routes element={<AuthLayout />}>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='reset-password' element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
