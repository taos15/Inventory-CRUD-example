/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import { useState } from 'react';
import { Alert, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLocation, useNavigate } from 'react-router-dom';

import { useSome } from '../utilities/MainContextProvider';

export default function InventoryCard({ item }) {
  const navigateTo = useNavigate();
  const location = useLocation();

  const [userError, setUserError] = useState(false);
  const [userExist, setUserExist] = useState('');

  // context
  const { isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser } = useSome();

  // delete handlers
  const handleData = (data) => {
    axios
      .delete(`http://localhost:5010/api/v1/item/${item.item_name}`)
      .then((res) => navigateTo('/myinventory'))
      .catch((err) => {
        setUserError(true);
        console.log(err.response.data);
        console.log(userError);
        setUserExist(err.response.data);
      });
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

  return (
    <Col>
      <Card
        style={{ border: '1px solid black' }}
        onClick={() =>
          navigateTo(`/item/${item.id}`, {
            state: { item },
          })
        }
        // style={{  }}
      >
        <Card.Body>
          <Card.Title>{item.item_name}</Card.Title>
          <Card.Text>
            {(location.pathname.includes('/inventory') ||
              location.pathname.includes('/myinventory')) &&
            item.description.length >= 99
              ? `${item.description.slice(0, 100)}...`
              : item.description}
          </Card.Text>
          <Card.Text className='text-muted mb-2'>{`Quantity: ${item.quantity}`}</Card.Text>
          {isLoggedIn && location.pathname.includes('/item') && (
            <Button variant='primary' onClick={() => handleData()}>
              Delete
            </Button>
          )}
        </Card.Body>
      </Card>
    </Col>
  );

  // return (
  //   <Card
  //     className=''
  //     onClick={() =>
  //       navigateTo(`/item/${item.id}`, {
  //         state: { item },
  //       })
  //     }
  //     sx={{ minWidth: 150, minHeight: 190, maxHeight: 195 }}
  //   >
  //     <CardContent sx={{ minWidth: 150, minHeight: 190, maxHeight: 195 }}>
  //       <Typography gutterBottom variant='h5' component='div'>
  //         {item.item_name}
  //       </Typography>
  //       <Typography sx={{ mb: 1.5 }} color='text.secondary'>
  //         {`Quantity: ${item.quantity}`}
  //       </Typography>
  //       <Typography variant='body2' color='text.secondary'>
  //         {location.pathname.includes('/inventory') &&
  //         item.description.length > 99
  //           ? `${item.description.slice(0, 100)}...`
  //           : item.description}
  //       </Typography>
  //     </CardContent>
  //   </Card>
  // );
}
