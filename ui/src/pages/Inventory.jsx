/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/no-extraneous-dependencies */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';

import InventoryCard from '../components/InventoryCard';

export default function Inventory() {
  // react query, add a call back function as the second param to do the query
  const { data, isLoading, error } = useQuery(['inventoryItems'], async () => {
    const res = await axios.get('http://localhost:5010/api/v1/item');
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

  return (
    <Row>
      <Col className='   '>
        <h1>Inventory </h1>
        {data.map((item) => (
          <div className='' key={item.id}>
            <InventoryCard item={item} />
          </div>
        ))}
      </Col>
    </Row>
  );
}
