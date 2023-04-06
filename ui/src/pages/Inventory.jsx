/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/no-extraneous-dependencies */
import Container from '@mui/material/Container';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import InventoryCard from '../components/InventoryCard';

export default function Inventory() {
  // react query, add a call back function as the second param to do the query
  const { data: inventory, isLoading } = useQuery(['idForQuery'], async () => {
    const res = await axios.get('http://localhost:5010/api/v1/item');
    const data = await res.data;
    return data;
  });

  // const inventory
  const cards = inventory?.map((item) => (
    <InventoryCard key={item.id} item={item} />
  ));

  return (
    <Container className='columns-2' fixed>
      {isLoading ? <div>Loading </div> : <>{cards}</>}
    </Container>
  );
}
