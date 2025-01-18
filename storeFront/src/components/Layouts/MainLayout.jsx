import { Outlet } from "react-router-dom";
import NavBar from "../ui/NavBar";
import Footer from "../ui/Footer";

const MainLayout = () => {
  return (
    <div>
      <main className='main' id='top'>
        <NavBar />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};
export default MainLayout;
