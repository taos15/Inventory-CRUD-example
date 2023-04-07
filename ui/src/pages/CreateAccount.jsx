import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CreateAccount() {
  const [formData, setFormData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData2 = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData2.entries());
    console.log(document.forms[0]);
  };

  return (
    <Row>
      <Form className='' onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='firstName'>
          <Form.Label>First Name </Form.Label>
          <Form.Control type='text' placeholder='First name' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='lastName'>
          <Form.Label>Last Name </Form.Label>
          <Form.Control type='text' placeholder='Last name' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='username'>
          <Form.Label>Username </Form.Label>
          <Form.Control type='username' placeholder='Username' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='password'>
          <Form.Label>Password </Form.Label>
          <Form.Control type='password' placeholder='Enter your last name' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Row>
  );
}

export default CreateAccount;
