/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

export function FormDoc() {
  const [userError, setUserError] = useState(false);
  const [userExist, setUserExist] = useState('');
  const form = useForm();
  const { register, handleSubmit } = form;
  register('');

  const headers = {
    'Content-Type': 'application/json',
  };
  const handleData = (data) => {
    if (Object.values(data).some((value) => value !== '')) {
      axios
        .post('http://localhost:5010/api/v1/createuser', JSON.stringify(data), {
          headers,
        })
        .then((res) => console.log(res.data))
        .catch((err) => {
          setUserError(true);
          console.log(err.response.data);
          console.log(userError);
          setUserExist(err.response.data);
        });
    }
  };

  if (userError)
    return (
      <Alert key='danger' variant='danger'>
        {`${userExist} `}
        <button onClick={() => setUserError(false)} type='button'>
          Try again!
        </button>
      </Alert>
    );

  return (
    <Row>
      <Col>
        <br />
        <br />
        <form onSubmit={handleSubmit(handleData)}>
          <label htmlFor='firstName'>First Name</label>
          <input type='text' id='firstName' {...register('first_name')} />
          <label htmlFor='lastName'>Last Name</label>
          <input type='text' id='lastName' {...register('last_name')} />
          <br />
          <br />
          <label htmlFor='username'>username</label>
          <input type='username' id='username' {...register('username')} />
          <br />
          <br />
          <label htmlFor='password'>password</label>
          <input type='password' id='password' {...register('password')} />
          <br />
          <br />
          <button type='submit'>Submit</button>
        </form>
      </Col>
    </Row>
  );
}
