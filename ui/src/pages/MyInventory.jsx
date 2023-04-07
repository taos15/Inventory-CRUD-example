/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/no-extraneous-dependencies */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import InventoryCard from '../components/InventoryCard';

export default function MyInventory() {
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
    <div className='   '>
      <h1>My Inventory page Placeholder</h1>
      {data.map((item) => (
        <div className='' key={item.id}>
          <InventoryCard item={item} />
        </div>
      ))}
    </div>
  );
}
