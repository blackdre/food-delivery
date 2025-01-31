import { useContext } from "react";
import { Nav } from "react-bootstrap";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { logo, appName } = useContext(AppContext);
  const { user } = useContext(AuthContext);
  return (
    <Nav className='navbar navbar-expand-xl navbar-light bg-light iq-navbar'>
      <div className='container-fluid navbar-inner'>
        <Link to={"/dashboard"} className='navbar-brand'>
          {/* <!--Logo start--> */}
          <div className='logo-main'>
            <div className='logo-normal'>
              <img src={logo} alt='logo' className='icon-40' />
            </div>
            <div className='logo-mini'>
              <img src={logo} alt='logo' className='icon-40' />
            </div>
          </div>
          {/* <!--logo End--> */}

          <h4 className='logo-title'>{appName}</h4>
        </Link>
        <div
          className='sidebar-toggle'
          data-toggle='sidebar'
          data-active='true'>
          <i className='icon'>
            <svg width='20px' className='icon-20' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z'
              />
            </svg>
          </i>
        </div>
        <div className='input-group search-input'>
          <span className='input-group-text' id='search-input'>
            <FaSearch />
          </span>
          <input
            type='search'
            className='form-control'
            placeholder='Search...'
          />
        </div>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'>
            <span className='mt-2 navbar-toggler-bar bar1'></span>
            <span className='navbar-toggler-bar bar2'></span>
            <span className='navbar-toggler-bar bar3'></span>
          </span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='mb-2 navbar-nav ms-auto align-items-center navbar-list mb-lg-0'>
            <li className='nav-item dropdown'>
              <a
                href='#'
                className='nav-link'
                id='mail-drop'
                data-bs-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'>
                <svg
                  className='icon-24'
                  width='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    opacity='0.4'
                    d='M22 15.94C22 18.73 19.76 20.99 16.97 21H16.96H7.05C4.27 21 2 18.75 2 15.96V15.95C2 15.95 2.006 11.524 2.014 9.298C2.015 8.88 2.495 8.646 2.822 8.906C5.198 10.791 9.447 14.228 9.5 14.273C10.21 14.842 11.11 15.163 12.03 15.163C12.95 15.163 13.85 14.842 14.56 14.262C14.613 14.227 18.767 10.893 21.179 8.977C21.507 8.716 21.989 8.95 21.99 9.367C22 11.576 22 15.94 22 15.94Z'
                    fill='currentColor'></path>
                  <path
                    d='M21.4759 5.67351C20.6099 4.04151 18.9059 2.99951 17.0299 2.99951H7.04988C5.17388 2.99951 3.46988 4.04151 2.60388 5.67351C2.40988 6.03851 2.50188 6.49351 2.82488 6.75151L10.2499 12.6905C10.7699 13.1105 11.3999 13.3195 12.0299 13.3195C12.0339 13.3195 12.0369 13.3195 12.0399 13.3195C12.0429 13.3195 12.0469 13.3195 12.0499 13.3195C12.6799 13.3195 13.3099 13.1105 13.8299 12.6905L21.2549 6.75151C21.5779 6.49351 21.6699 6.03851 21.4759 5.67351Z'
                    fill='currentColor'></path>
                </svg>
                <span className='bg-primary count-mail'></span>
              </a>
              <div
                className='p-0 sub-drop dropdown-menu dropdown-menu-end'
                aria-labelledby='mail-drop'>
                <div className='m-0 shadow-none card'>
                  <div className='py-3 card-header d-flex justify-content-between bg-primary rounded-top'>
                    <div className='header-title'>
                      <h5 className='mb-0 text-white'>All Message</h5>
                    </div>
                  </div>
                  <div className='p-0 card-body '>
                    <a href='#' className='iq-sub-card'>
                      <div className='d-flex align-items-center'>
                        <div className=''>
                          <img
                            className='p-1 avatar-40 rounded-pill bg-primary-subtle'
                            src='../assets/images/shapes/01.png'
                            alt=''
                          />
                        </div>
                        <div className='ms-3'>
                          <h6 className='mb-0 '>Bni Emma Watson</h6>
                          <small className='float-start font-size-12'>
                            13 Jun
                          </small>
                        </div>
                      </div>
                    </a>
                    <a href='#' className='iq-sub-card'>
                      <div className='d-flex align-items-center'>
                        <div className=''>
                          <img
                            className='p-1 avatar-40 rounded-pill bg-primary-subtle'
                            src='../assets/images/shapes/02.png'
                            alt=''
                          />
                        </div>
                        <div className='ms-3'>
                          <h6 className='mb-0 '>Lorem Ipsum Watson</h6>
                          <small className='float-start font-size-12'>
                            20 Apr
                          </small>
                        </div>
                      </div>
                    </a>
                    <a href='#' className='iq-sub-card'>
                      <div className='d-flex align-items-center'>
                        <div className=''>
                          <img
                            className='p-1 avatar-40 rounded-pill bg-primary-subtle'
                            src='../assets/images/shapes/03.png'
                            alt=''
                          />
                        </div>
                        <div className='ms-3'>
                          <h6 className='mb-0 '>Why do we use it?</h6>
                          <small className='float-start font-size-12'>
                            30 Jun
                          </small>
                        </div>
                      </div>
                    </a>
                    <a href='#' className='iq-sub-card'>
                      <div className='d-flex align-items-center'>
                        <div className=''>
                          <img
                            className='p-1 avatar-40 rounded-pill bg-primary-subtle'
                            src='../assets/images/shapes/04.png'
                            alt=''
                          />
                        </div>
                        <div className='ms-3'>
                          <h6 className='mb-0 '>Variations Passages</h6>
                          <small className='float-start font-size-12'>
                            12 Sep
                          </small>
                        </div>
                      </div>
                    </a>
                    <a href='#' className='iq-sub-card'>
                      <div className='d-flex align-items-center'>
                        <div className=''>
                          <img
                            className='p-1 avatar-40 rounded-pill bg-primary-subtle'
                            src='../assets/images/shapes/05.png'
                            alt=''
                          />
                        </div>
                        <div className='ms-3'>
                          <h6 className='mb-0 '>Lorem Ipsum generators</h6>
                          <small className='float-start font-size-12'>
                            5 Dec
                          </small>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className='nav-item dropdown custom-drop'>
              <a
                className='py-0 nav-link d-flex align-items-center'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'>
                <img
                  src='../assets/images/avatars/01.png'
                  alt='User-Profile'
                  className='theme-color-default-img img-fluid avatar avatar-50 avatar-rounded'
                />

                <div className='caption ms-3 d-none d-md-block '>
                  <h6 className='mb-0 caption-title'>{user.email}</h6>
                </div>
              </a>
              <ul
                className='dropdown-menu dropdown-menu-end'
                aria-labelledby='navbarDropdown'>
                <li>
                  <a
                    className='dropdown-item'
                    href='../dashboard/app/user-profile.html'>
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item'
                    href='../dashboard/app/user-privacy-setting.html'>
                    Privacy Setting
                  </a>
                </li>
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li>
                  <a
                    className='dropdown-item'
                    href='../dashboard/auth/sign-in.html'>
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  );
};
export default Navbar;
