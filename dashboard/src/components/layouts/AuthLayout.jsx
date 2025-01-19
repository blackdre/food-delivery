import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const AuthLayout = () => {
  const { AuthBg } = useContext(AppContext);
  return (
    <>
      <div className='wrapper'>
        <section className='login-content'>
          <div className='row m-0 align-items-center bg-white h-100'>
            <div className='col-md-6 d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden'>
              <img
                src={AuthBg}
                className='img-fluid gradient-main animated-scaleX'
                alt='images'
              />
            </div>
            <Outlet />
          </div>
        </section>
      </div>
    </>
  );
};
export default AuthLayout;
