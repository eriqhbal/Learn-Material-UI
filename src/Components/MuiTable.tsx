import React from 'react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

const dataUser = [
  {
    id: 1,
    first_name: "Gabey",
    last_name: "Viccars",
    email: "gviccars0@bandcamp.com",
    gender: "Female",
    ip_address: "119.251.106.192",
  },
  {
    id: 2,
    first_name: "Lemmie",
    last_name: "Buckeridge",
    email: "lbuckeridge1@dropbox.com",
    gender: "Male",
    ip_address: "169.166.68.57",
  },
  {
    id: 3,
    first_name: "Ailene",
    last_name: "Garthshore",
    email: "agarthshore2@jigsy.com",
    gender: "Female",
    ip_address: "140.25.122.144",
  },
  {
    id: 4,
    first_name: "Sophronia",
    last_name: "Slevin",
    email: "sslevin3@deviantart.com",
    gender: "Female",
    ip_address: "156.36.185.186",
  },
  {
    id: 5,
    first_name: "Arley",
    last_name: "Adanez",
    email: "aadanez4@photobucket.com",
    gender: "Male",
    ip_address: "211.208.59.86",
  },
  {
    id: 6,
    first_name: "Hermie",
    last_name: "Seamons",
    email: "hseamons5@technorati.com",
    gender: "Male",
    ip_address: "20.198.228.183",
  },
  {
    id: 7,
    first_name: "Lorette",
    last_name: "Bartol",
    email: "lbartol6@timesonline.co.uk",
    gender: "Female",
    ip_address: "196.128.239.190",
  },
  {
    id: 8,
    first_name: "Jsandye",
    last_name: "Bartaloni",
    email: "jbartaloni7@ifeng.com",
    gender: "Female",
    ip_address: "209.69.61.174",
  },
  {
    id: 9,
    first_name: "Natty",
    last_name: "McIndrew",
    email: "nmcindrew8@qq.com",
    gender: "Male",
    ip_address: "165.64.126.153",
  },
  {
    id: 10,
    first_name: "Berry",
    last_name: "Taynton",
    email: "btaynton9@wiley.com",
    gender: "Female",
    ip_address: "8.13.204.4",
  },
];

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: '300px'}}>
      <Table aria-label="simple Table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>First Name</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Last Name</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Gender</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align='center'>IP Adress</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataUser.map((user) => (
            <TableRow
              key={user.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{user.first_name}</TableCell>
              <TableCell>{user.last_name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.gender}</TableCell>
              <TableCell align='center'>{user.ip_address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MuiTable;