/* eslint-disable import/no-extraneous-dependencies */
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function InventoryTable({ inventory }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align='left'>Name</TableCell>
            <TableCell align='center'>Description</TableCell>
            <TableCell align='center'>Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inventory?.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {row.id}
              </TableCell>
              <TableCell align='left'>{row.item_name}</TableCell>
              <TableCell align='center'>
                {`${row.description.substring(0, 100)}...`}
              </TableCell>
              <TableCell align='center'>{row.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
