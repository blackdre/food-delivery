import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Login = () => {
  const { appName, logo } = useContext(AppContext);
  return (
    <div className='col-md-6'>
      <div className='row justify-content-center'>
        <div className='col-md-10'>
          <div className='card card-transparent auth-card shadow-none d-flex justify-content-center mb-0'>
            <div className='card-body'>
              <a
                to={"/"}
                className='navbar-brand d-flex align-items-center mb-3'>
                {/* <!--Logo start--> */}
                <div className='logo-main'>
                  <div className='logo-normal'>
                    <img src={logo} alt='logo' width={100} />
                  </div>
                  <div className='logo-mini'>
                    <img src={logo} alt='logo' width={100} />
                  </div>
                </div>
                {/* <!--logo End--> */}

                <h4 className='logo-title ms-3'>{appName}</h4>
              </a>
              <h2 className='mb-2 text-center'>Login</h2>
              <p className='text-center'>Create your Hope UI account.</p>
              <form>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label htmlFor='full-name' className='form-label'>
                        Full Name
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='full-name'
                        placeholder=' '
                      />
                    </div>
                  </div>
                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label htmlFor='last-name' className='form-label'>
                        Last Name
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='last-name'
                        placeholder=' '
                      />
                    </div>
                  </div>
                </div>
                <div className='d-flex justify-content-center'>
                  <button type='submit' className='btn btn-primary'>
                    Sign Up
                  </button>
                </div>
                <p className='text-center my-3'>
                  or sign in with other accounts?
                </p>
                <div className='d-flex justify-content-center'>
                  <ul className='list-group list-group-horizontal list-group-flush'>
                    <li className='list-group-item border-0 pb-0'>
                      <a href='#'>
                        <img src='../../assets/images/brands/fb.svg' alt='fb' />
                      </a>
                    </li>
                    <li className='list-group-item border-0 pb-0'>
                      <a href='#'>
                        <img src='../../assets/images/brands/gm.svg' alt='gm' />
                      </a>
                    </li>
                    <li className='list-group-item border-0 pb-0'>
                      <a href='#'>
                        <img src='../../assets/images/brands/im.svg' alt='im' />
                      </a>
                    </li>
                    <li className='list-group-item border-0 pb-0'>
                      <a href='#'>
                        <img src='../../assets/images/brands/li.svg' alt='li' />
                      </a>
                    </li>
                  </ul>
                </div>
                <p className='mt-3 text-center'>
                  Already have an Account{" "}
                  <a href='sign-in.html' className='text-underline'>
                    Sign In
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='sign-bg sign-bg-right'>
        <svg
          width='280'
          height='230'
          viewBox='0 0 421 359'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <g opacity='0.05'>
            <rect
              x='-15.0845'
              y='154.773'
              width='543'
              height='77.5714'
              rx='38.7857'
              transform='rotate(-45 -15.0845 154.773)'
              fill='#3A57E8'
            />
            <rect
              x='149.47'
              y='319.328'
              width='543'
              height='77.5714'
              rx='38.7857'
              transform='rotate(-45 149.47 319.328)'
              fill='#3A57E8'
            />
            <rect
              x='203.936'
              y='99.543'
              width='310.286'
              height='77.5714'
              rx='38.7857'
              transform='rotate(45 203.936 99.543)'
              fill='#3A57E8'
            />
            <rect
              x='204.316'
              y='-229.172'
              width='543'
              height='77.5714'
              rx='38.7857'
              transform='rotate(45 204.316 -229.172)'
              fill='#3A57E8'
            />
          </g>
        </svg>
      </div>
    </div>
  );
};
export default Login;
