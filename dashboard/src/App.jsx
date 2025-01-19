import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./components/layouts/MainLayout";
import Unauthorized from "./components/Unauthorized";
import PrivateRoute from "./components/PrivateRoute";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import VendorDashboard from "./pages/dashboard/VendorDashboard";
import DriverDashboard from "./pages/dashboard/DriverDashboard";
import AuthLayout from "./components/layouts/AuthLayout";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Dashboard />} />
        <Route
          path='/admin'
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path='/vendor'
          element={
            <PrivateRoute allowedRoles={["vendor"]}>
              <VendorDashboard />
            </PrivateRoute>
          }
        />
      </Route>
      <Route
        path='/driver'
        element={
          <PrivateRoute allowedRoles={["driver"]}>
            <DriverDashboard />
          </PrivateRoute>
        }
      />
      <Route element={<AuthLayout />}>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Route>
      <Route path='/unauthorized' element={<Unauthorized />} />
    </Routes>
  );
};
export default App;
