/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import * as dotenv from 'dotenv';
import React, { useState } from 'react';
import { Alert, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

import { useSome } from '../utilities/MainContextProvider';

// api host
// dotenv.config({ path: '../.env' });
const host = import.meta.env.VITE_APIHOST ?? 'api';

export function ItemForm({ item, editMode }) {
  const location = useLocation();
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
      if (location.pathname.includes('/item')) {
        axios
          .patch(
            `http://${host}:5010/api/v1/item/${item.id}`,
            JSON.stringify(data),
            {
              headers,
            },
          )
          .then(() => navigate('/myinventory'))
          .catch((err) => {
            setUserError(true);
            console.log(err.response.data);
            console.log(userError);
            setUserExist(err.response.data);
          });
      } else {
        axios
          .post(`http://${host}:5010/api/v1/createitem`, JSON.stringify(data), {
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
        <form
          style={{ border: '1px solid black' }}
          onSubmit={handleSubmit(handleData)}
        >
          <label htmlFor='item_name'>Item Name</label>
          <br />
          {isLoggedIn && location.pathname.includes('/item') && !editMode && (
            <span> {item.item_name} </span>
          )}

          {isLoggedIn && location.pathname.includes('/item') && editMode && (
            <input
              placeholder={item.item_name ?? ''}
              type='text'
              id='item_name'
              {...register('item_name')}
            />
          )}
          {isLoggedIn && location.pathname.includes('/createitem') && (
            <input type='text' id='item_name' {...register('item_name')} />
          )}
          <br />

          <label htmlFor='description'>Description</label>
          <br />
          {isLoggedIn && location.pathname.includes('/item') && !editMode && (
            <span> {item.description} </span>
          )}
          {isLoggedIn && location.pathname.includes('/item') && editMode && (
            <input
              placeholder={item.description || 'Description'}
              type='text'
              id='description'
              {...register('description')}
            />
          )}
          {isLoggedIn && location.pathname.includes('/createitem') && (
            <input type='text' id='description' {...register('description')} />
          )}
          <br />

          <label htmlFor='quantity'>Quantity</label>
          <br />
          {isLoggedIn && location.pathname.includes('/item') && !editMode && (
            <span> {item.quantity} </span>
          )}
          {isLoggedIn && location.pathname.includes('/item') && editMode && (
            <input
              placeholder={item.quantity || null}
              type='number'
              id='quantity'
              {...register('quantity')}
            />
          )}
          {isLoggedIn && location.pathname.includes('/createitem') && (
            <input type='number' id='quantity' {...register('quantity')} />
          )}
          <br />

          {((isLoggedIn && location.pathname.includes('/item') && editMode) ||
            (isLoggedIn && location.pathname.includes('/createitem'))) && (
            <button type='submit'>Submit</button>
          )}
        </form>
      </Col>
    </Row>
  );
}
