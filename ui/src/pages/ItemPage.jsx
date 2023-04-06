/* eslint-disable react/jsx-no-useless-fragment */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

import InventoryCard from '../components/InventoryCard';
import InventoryTable from '../components/InventoryTable';
import { useSome } from '../utilities/MainContextProvider';

export default function ItemPage() {
  const { item } = useLocation().state;
  const { someState, setSomeState } = useSome();
  // react query, add a call back function as the second param to do the query
  const {
    data: inventory,
    isLoading,
    isError,
  } = useQuery(['idForQuery'], async () => {
    const res = await axios.get('http://localhost:5010/api/v1/item');
    const data = await res.data;
    return data;
  });

  return <>{isLoading ? <div>Loading </div> : <InventoryCard item={item} />}</>;
}
