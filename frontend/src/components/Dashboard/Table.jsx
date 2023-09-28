import React,{ useEffect, useState } from 'react'
import "./Table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from 'axios'


function DataTable() {
 
const [data, setData] = useState([]); // Use state to store the data

  useEffect(() => {
    // Fetch data when the component mounts
    axios.get('http://localhost:5000/api/sfcall')
      .then(result => {
        setData(result.data); 
      })
      .catch(err => {
        console.log(err);
      });
  }, []); 
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Projects</TableCell>
            <TableCell className="tableCell">Phase</TableCell>
            <TableCell className="tableCell">Resource</TableCell>
            <TableCell className="tableCell">Status</TableCell>
            <TableCell className="tableCell">Est. Log</TableCell>
            <TableCell className="tableCell">Logged Hours</TableCell>
            <TableCell className="tableCell">Remain</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data) => (
            <TableRow key={data.Id}>
              <TableCell className="tableCell">{data.Id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  {/* <img src={row.img} alt="" className="image" /> */}
                  {data.Name}
                </div>
              </TableCell>
              <TableCell className="tableCell">{data.ChikPeaSSB__Status__c}</TableCell>
              <TableCell className="tableCell">{data.ChikPeaSSB__Est_Start_Date__c}</TableCell>
              <TableCell className="tableCell">{data.ChikPeaSSB__Total_Estimated_hours__c}</TableCell>
              <TableCell className="tableCell">{data.ChikPeaSSB__Status__c}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${data.ChikPeaSSB__Status__c}`}>{data.ChikPeaSSB__Status__c}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable