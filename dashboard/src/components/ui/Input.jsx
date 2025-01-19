import { Form } from "react-bootstrap";

const Input = ({ type, placeholder, label }) => {
  return (
    <Form className='form-group'>
      <Form.Label htmlFor={label} className='form-label'>
        {label}
      </Form.Label>
      <Input type={type} className='form-control' placeholder={placeholder} />
    </Form>
  );
};
export default Input;
