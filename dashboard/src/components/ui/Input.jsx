import { Col, Form } from "react-bootstrap";

const Input = ({ type, label, placeholder, name, onChange }) => {
  return (
    <Col md={12}>
      <Form.Group className='mb-3'>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
        />
      </Form.Group>
    </Col>
  );
};
export default Input;
