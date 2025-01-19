import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./components/layouts/MainLayout";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
export default App;
