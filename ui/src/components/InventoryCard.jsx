/* eslint-disable import/no-extraneous-dependencies */
import { Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useLocation, useNavigate } from 'react-router-dom';

export default function InventoryCard({ item }) {
  const navigateTo = useNavigate();
  const location = useLocation();

  return (
    <Row>
      <Card
        style={{ width: '18rem' }}
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
        </Card.Body>
      </Card>
    </Row>
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
