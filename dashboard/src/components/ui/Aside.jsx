import { useContext, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { BiSolidUserAccount, BiSolidUserBadge } from "react-icons/bi";
import {
  BsBook,
  BsBuildingFillGear,
  BsChevronRight,
  BsFilePdfFill,
  BsPersonWorkspace,
} from "react-icons/bs";
import { FaDotCircle, FaHome } from "react-icons/fa";
import { AppContext } from "../../context/AppContext";

const Aside = () => {
  const { appName, logo } = useContext(AppContext);

  // Move sidebar logic into useEffect to handle DOM after render
  useEffect(() => {
    const handleSidebarToggle = () => {
      const sidebar = document.querySelector(".sidebar");
      sidebar.classList.toggle("sidebar-mini");
    };

    // Set up toggle button listeners
    const sidebarToggleBtn = document.querySelectorAll(
      '[data-toggle="sidebar"]'
    );
    sidebarToggleBtn.forEach((btn) => {
      btn.addEventListener("click", handleSidebarToggle);
    });

    // Handle active menu items
    const sidebar = document.querySelector(".sidebar-default");
    if (sidebar) {
      const sidebarActiveItems = sidebar.querySelectorAll(".active");
      sidebarActiveItems.forEach((elem) => {
        if (!elem.closest("ul").classList.contains("iq-main-menu")) {
          const childMenu = elem.closest("ul");
          childMenu.classList.add("show");
          const parentMenu = childMenu.closest("li").querySelector(".nav-link");
          parentMenu.classList.add("collapsed");
          parentMenu.setAttribute("aria-expanded", true);
        }
      });
    }

    // Cleanup listeners on unmount
    return () => {
      sidebarToggleBtn.forEach((btn) => {
        btn.removeEventListener("click", handleSidebarToggle);
      });
    };
  }, []);
  return (
    <aside className='sidebar sidebar-default sidebar-light sidebar-base navs-rounded-all '>
      <div className='sidebar-header d-flex align-items-center justify-content-start'>
        <Link to={"/"} className='navbar-brand'>
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
          <i className='icon p-2'>
            <FaArrowRight />
          </i>
        </div>
      </div>
      <div className='sidebar-body pt-0 data-scrollbar'>
        <div className='sidebar-list'>
          {/* <!-- Sidebar Menu Start --> */}
          <ul className='navbar-nav iq-main-menu' id='sidebar-menu'>
            <li className='nav-item static-item'>
              <Link
                className='nav-link static-item disabled'
                href='#'
                tabIndex='-1'>
                <span className='default-icon'>Home</span>
                <span className='mini-icon'>-</span>
              </Link>
            </li>
            <Nav.Item className='nav-item'>
              <Link className='nav-link active' aria-current='page' to={"/"}>
                <i className='icon'>
                  <FaHome />
                </i>
                <span className='item-name'>Home</span>
              </Link>
            </Nav.Item>
            <li>
              <hr className='hr-horizontal' />
            </li>
            <Nav.Item className='nav-item static-item'>
              <Nav.Link
                className='nav-link static-item disabled'
                to={"#"}
                tabIndex='-1'>
                <span className='default-icon'>Pages</span>
                <span className='mini-icon'>-</span>
              </Nav.Link>
            </Nav.Item>
            <li className='nav-item'>
              <Link className='nav-link' to='agents' role='button'>
                <i className='icon'>
                  <BiSolidUserAccount />
                </i>
                <span className='item-name'>Agent Management</span>
              </Link>
            </li>

            <li className='nav-item'>
              <a
                className='nav-link'
                data-bs-toggle='collapse'
                href='#sidebar-courses'
                role='button'
                aria-expanded='false'
                aria-controls='sidebar-user'>
                <i className='icon'>
                  <BsBook />
                </i>
                <span className='item-name'>Manage Courses</span>
                <i className='right-icon'>
                  <BsChevronRight />
                </i>
              </a>
              <ul
                className='sub-nav collapse'
                id='sidebar-courses'
                data-bs-parent='#sidebar-menu'>
                <li className='nav-item'>
                  <Link className='nav-link' to={"courses"}>
                    <i className='icon'>
                      <FaDotCircle className='icon-10' />
                    </i>
                    <i className='sidenav-mini-icon'> C </i>
                    <span className='item-name'>Courses</span>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to={"add-course"}>
                    <i className='icon'>
                      <FaDotCircle className='icon-10' />
                    </i>
                    <i className='sidenav-mini-icon'> R </i>
                    <span className='item-name'>Add Course</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link'
                data-bs-toggle='collapse'
                href='#sidebar-blog'
                role='button'
                aria-expanded='false'
                aria-controls='sidebar-user'>
                <i className='icon'>
                  <BsFilePdfFill />
                </i>
                <span className='item-name'>Manage Blogs</span>
                <i className='right-icon'>
                  <BsChevronRight />
                </i>
              </a>
              <ul
                className='sub-nav collapse'
                id='sidebar-blog'
                data-bs-parent='#sidebar-menu'>
                <li className='nav-item'>
                  <Link className='nav-link' to={"blogs"}>
                    <i className='icon'>
                      <FaDotCircle className='icon-10' />
                    </i>
                    <i className='sidenav-mini-icon'> B </i>
                    <span className='item-name'>Blogs</span>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to={"add-blog"}>
                    <i className='icon'>
                      <FaDotCircle className='icon-10' />
                    </i>
                    <i className='sidenav-mini-icon'> R </i>
                    <span className='item-name'>Add Blog</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <Link className='nav-link ' to={"clients"}>
                <i className='icon'>
                  <BiSolidUserBadge />
                </i>
                <span className='item-name'>Clients</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link ' to={"jobs"}>
                <i className='icon'>
                  <BsPersonWorkspace />
                </i>
                <span className='item-name'>Jobs</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link ' to={"company-settings"}>
                <i className='icon'>
                  <BsBuildingFillGear />
                </i>
                <span className='item-name'>Company settings</span>
              </Link>
            </li>
          </ul>
          {/* <!-- Sidebar Menu End --> */}
        </div>
      </div>
      <div className='sidebar-footer'></div>
    </aside>
  );
};
export default Aside;
