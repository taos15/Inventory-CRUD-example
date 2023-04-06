/* eslint-disable import/no-extraneous-dependencies */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function InventoryCard({ item }) {
  const navigateTo = useNavigate();

  return (
    <Card
      onClick={() =>
        navigateTo(`/item/${item.id}`, {
          state: { item },
        })
      }
      sx={{ maxWidth: 200 }}
    >
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {item.item_name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          {`Quantity: ${item.quantity}`}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
