/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/no-extraneous-dependencies */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';

import InventoryCard from '../components/InventoryCard';
import { useSome } from '../utilities/MainContextProvider';

const host = import.meta.env.VITE_APIHOST ?? 'api';

export default function MyInventory() {
  const { isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser } = useSome();

  // react query, add a call back function as the second param to do the query
  const { data, isLoading, error } = useQuery(['inventoryItems'], async () => {
    const res = await axios.get(`http://${host}:5010/api/v1/item`);
    return res.data;
  });

  // // const inventory
  // const cards = inventory?.map((item) => (
  //   <InventoryCard key={item.id} item={item} />
  // ));

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const myInventory = data?.filter((item) => item.userid === currentUser.id);
  return (
    <Row>
      <Col className='   '>
        <h1>My Inventory page </h1>
        {myInventory.map((item) => (
          <div className='' key={item.id}>
            <InventoryCard item={item} />
          </div>
        ))}
      </Col>
    </Row>
  );
}
