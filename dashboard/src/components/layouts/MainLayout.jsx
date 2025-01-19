import { Navigate, Outlet } from "react-router-dom";
import Aside from "../ui/Aside";
import { Container, Row } from "react-bootstrap";
import Header from "../ui/Header";
import Navbar from "../ui/Navbar";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const MainLayout = () => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to='/login' />;
  }
  return (
    <>
      <Aside />
      <main className='main-content'>
        <div className='position-relative iq-banner'>
          <Navbar />
          <Header />
        </div>
        <Container className='content-inner mt-n5 py-0' fluid>
          <Row>
            <Outlet />
          </Row>
        </Container>
        {/* <Toaster position='top-right' /> */}
      </main>
    </>
  );
};
export default MainLayout;
