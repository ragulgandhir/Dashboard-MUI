import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(Id, ProductName, Price, Productno, Website) {
  return { Id, ProductName, Price, Productno, Website };
}

const rows = [
  createData("101", "Pipe", "$200", "PS5656", "www.pspipe.com"),
  createData("102", "Plade", "$20", "RD7654", "www.rsd.com"),
  createData("103", "ChainShaw", "$1000", "CW6257", "www.chsh.com"),
  createData("105", "Cutter", "$100", "T2788", "www.tabs.com"),
  createData("105", "Razer", "$10", "RZ8938", "www.raz.com"),
];

function DashboardTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="right">ProductName</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Productno</StyledTableCell>
            <StyledTableCell align="right">Website</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.Id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.ProductName}</StyledTableCell>
              <StyledTableCell align="right">{row.Price}</StyledTableCell>
              <StyledTableCell align="right">{row.Productno}</StyledTableCell>
              <StyledTableCell align="right">{row.Website}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Stack spacing={2} sx={{ pl: 115 }}>
        <Pagination count={10} color="primary" />
      </Stack>
      <nav>
        <Link to="/">Dashboard</Link>
      </nav>
    </TableContainer>
  );
}

export default DashboardTable;
