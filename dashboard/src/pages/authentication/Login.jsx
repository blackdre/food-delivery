import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import Input from "../../components/ui/Input";
import { Button, Form, Row } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const { appName, logo } = useContext(AppContext);
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await login(formData.email, formData.password);
      // Redirect or notify on success
      // Redirect to dashboard or home page
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password");
    }
  };
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
              {/* <p className='text-center'>Create your Hope UI account.</p> */}
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Input
                    label={"Email"}
                    placeholder={"Email"}
                    type={"email"}
                    name={"email"}
                    onChange={handleChange}
                  />
                  <Input
                    label={"Password"}
                    placeholder={"Password"}
                    type={"password"}
                    name={"password"}
                    onChange={handleChange}
                  />
                </Row>
                <div className='d-flex justify-content-center'>
                  <Button type='submit' className='btn btn-primary'>
                    Login
                  </Button>
                </div>

                <p className='mt-3 text-center'>
                  Forgot your email or password?{" "}
                  <a href='sign-in.html' className='text-underline'>
                    Reset it
                  </a>
                </p>
              </Form>
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
