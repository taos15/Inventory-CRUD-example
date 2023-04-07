/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useSome } from '../utilities/MainContextProvider';

export function LoginForm() {
  const navigate = useNavigate();

  // useContext
  const { isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser } = useSome();

  const [userError, setUserError] = useState(false);
  const [userExist, setUserExist] = useState('');
  const form = useForm();
  const { register, handleSubmit } = form;
  register('');

  const handleData = (data) => {
    if (Object.values(data).some((value) => value !== '')) {
      axios
        .get(`http://localhost:5010/api/v1/user/${data.username}`)
        .then((res) => res.data)
        .then((user) => {
          if (data.password !== user.password) {
            throw new Error('Passwords do not match');
          }
          // console.log(user);
          setCurrentUser(user);
          setIsLoggedIn(true);
          navigate('/myinventory');
        })
        .catch((err) => {
          if (err.response?.status === 400) {
            setUserError(true);
            setUserExist(err.response.data);
            console.log(err.response.data);
          } else {
            setUserError(true);
            setUserExist(err.message);
            console.log(err.message);
          }
        });
    }
  };

  if (userError) {
    return (
      <Alert key='danger' variant='danger'>
        {`${userExist} `}
        <button onClick={() => setUserError(false)} type='button'>
          Try again!
        </button>
      </Alert>
    );
  }

  if (!isLoggedIn) {
    return (
      <Row>
        <Col>
          <br />
          <br />
          <form onSubmit={handleSubmit(handleData)}>
            <label htmlFor='username'>username</label>
            <input type='username' id='username' {...register('username')} />
            <br />
            <br />
            <label htmlFor='password'>password</label>
            <input type='password' id='password' {...register('password')} />
            <br />
            <br />
            <button type='submit'>Login</button>
          </form>
        </Col>
      </Row>
    );
  }
}
