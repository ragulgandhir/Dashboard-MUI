import React from "react";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import NavbarItems from "../Dashboard/Navbar";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function ProductTable() {
  return (
    <div>
       <NavbarItems />
      <Table striped bordered hover variant="dark" style={{ width: '69.8rem', marginLeft:'5.5rem'}}>
        <thead>
          <tr>
            <th>#Product_ID</th>
            <th>Product Name</th>
            <th>Serial No</th>
            <th>Price(₹)</th>
            <th>Quantity</th>
            <th>Total StockIn Price(₹)</th>
            <th>StockIn Date</th>
            <th>Stock Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Apple</td>
            <td>APP7873</td>
            <td>₹80</td>
            <td>10</td>
            <td>₹800</td>
            <td>07/20/2022</td>
            <td>Instock</td>
            <td>
            <Button variant="info"><VisibilityOutlinedIcon/></Button>{' '}
            <Button variant="secondary"><ModeEditOutlineOutlinedIcon/></Button>{' '}
            <Button variant="danger"><DeleteOutlineOutlinedIcon/></Button>{' '}
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Mango</td>
            <td>MG5053</td>
            <td>₹50</td>
            <td>10</td>
            <td>₹500</td>
            <td>07/20/2022</td>
            <td>Outofstock</td>
            <td>
            <Button variant="info"><VisibilityOutlinedIcon/></Button>{' '}
            <Button variant="secondary"><ModeEditOutlineOutlinedIcon/></Button>{' '}
            <Button variant="danger"><DeleteOutlineOutlinedIcon/></Button>{' '}
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Kiwi</td>
            <td>KW7867</td>
            <td>₹90</td>
            <td>5</td>
            <td>₹450</td>
            <td>07/20/2022</td>
            <td>Billed</td>
            <td>
            <Button variant="info"><VisibilityOutlinedIcon/></Button>{' '}
            <Button variant="secondary"><ModeEditOutlineOutlinedIcon/></Button>{' '}
            <Button variant="danger"><DeleteOutlineOutlinedIcon/></Button>{' '}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default ProductTable;
