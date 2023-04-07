/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/no-extraneous-dependencies */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Container } from 'react-bootstrap';

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
    <div className=' tw-m-2 tw-box-content tw-columns-3 tw-gap-2'>
      {data.map((item) => (
        <div className='tw-mb-2'>
          <InventoryCard key={item.id} item={item} />
        </div>
      ))}
    </div>
  );
}
