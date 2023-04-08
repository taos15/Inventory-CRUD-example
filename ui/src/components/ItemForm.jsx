/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useSome } from '../utilities/MainContextProvider';

export function ItemForm() {
  // context
  const { isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser } = useSome();

  const navigate = useNavigate();

  const [userError, setUserError] = useState(false);
  const [userExist, setUserExist] = useState('');
  const form = useForm();
  const { register, handleSubmit } = form;
  register('');

  const headers = {
    'Content-Type': 'application/json',
  };
  const handleData = (data) => {
    if (Object.values(data).some((value) => !value)) {
      setUserError(true);
      setUserExist('All fields are required');
    } else {
      data.userid = currentUser.id;
      axios
        .post('http://localhost:5010/api/v1/createitem', JSON.stringify(data), {
          headers,
        })
        .then((res) => navigate('/myinventory'))
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

  // console.log(currentUser);
  return (
    <Row>
      <Col>
        <br />
        <br />
        <form onSubmit={handleSubmit(handleData)}>
          <label htmlFor='item_name'>Item Name</label>
          <input type='text' id='item_name' {...register('item_name')} />
          <br />
          <br />
          <label htmlFor='description'>Description</label>
          <input type='text' id='description' {...register('description')} />
          <br />
          <br />
          <label htmlFor='quantity'>Quantity</label>
          <input type='number' id='quantity' {...register('quantity')} />
          <br />
          <br />
          <button type='submit'>Submit</button>
        </form>
      </Col>
    </Row>
  );
}
