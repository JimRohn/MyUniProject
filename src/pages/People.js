import Container from "@mui/material/Container";
import "..//App.css";
import SearchAppBar from "../components/SearchAppBar";
import PermanentDrawerLeft from "../components/Navbar/PermanentDrawerLeft";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: false,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: false,
  },
  {
    field: 'specialization',
    headerName: 'Specialization',
   // type: 'number',
    width: 150,
    editable: false ,
  },
  {
    field: 'location',
    headerName: 'Location',
    sortable: true,
    width: 160,
   
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon',specialization : 'Business Law', location: 'London'},
  { id: 2, lastName: 'Lannister', firstName: 'Cersei',specialization : 'Criminal Law', location: 'New York'},
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', specialization : 'Business Law', location: 'New York'},
  { id: 4, lastName: 'Stark', firstName: 'Arya', specialization : 'Criminal Law', location: 'Milan'},
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys',specialization : 'Criminal Law', location: 'Dubai'},
  { id: 6, lastName: 'Melisandre', firstName: 'Mike',specialization : 'Civil Law', location: 'London'},
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', specialization : 'Civil Law', location: 'Berlin'},
  { id: 8, lastName: 'Frances', firstName: 'Rossini', specialization : 'Civil Law', location: 'Moscow'},
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', specialization : 'Business Law', location: 'Chicago'},
  { id: 10, lastName: 'Brown', firstName: 'John', specialization : 'Business Law', location: 'Manchester'},
];

function People() {
  return (
    <div className="App">
      <SearchAppBar />
      <PermanentDrawerLeft />

      <Container sx={{ marginY: 5, marginLeft:35 , marginTop:20}}>
        
      <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>

      </Container>
    </div>
  );
}
export default People;
