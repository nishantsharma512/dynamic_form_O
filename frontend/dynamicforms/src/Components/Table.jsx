import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { useState } from 'react';


/* const rows = [
  createData('Customer Name', 159, 6.0, 24, 4.0),
  createData('Address', 237, 9.0, 37, 4.3),
  createData('', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
]; */

export default function BasicTable() {
  const [rows,setRows]=useState([])
  useEffect(()=>{
    return async function()
    {
      const response=await fetch("http://localhost:2000/tabledata",{method:"GET"})
      
  if(response.ok)
  {
    const responseData=await response.json()
    setRows(responseData)
    
  }
    }
  },[])

console.log(rows)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Customer Name</TableCell>
            <TableCell align="right">Billing Address</TableCell>
            <TableCell align="right">Position</TableCell>
            <TableCell align="right">Contact Name</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (

            row.contacts.map((contact,index)=>(
              <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.customername}
              </TableCell>
              <TableCell align="right">{row.streetaddress}</TableCell>
              <TableCell align="right">{contact.position}</TableCell>
              <TableCell align="right">{`${contact.firstName} ${contact.lastName}`}</TableCell>
              
            </TableRow>
            ))
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
