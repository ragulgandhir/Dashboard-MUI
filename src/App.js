import React from 'react';
// import Dashboard from './Components/Dashboard/Admin';
// import DashboardTable from './Components/Tables/SampleData';
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col } from 'react-bootstrap';
import RightSide from "./Components/Login/RightSide";
import Login from './Components/Login/login';
import UserTable from './Components/Tables/UserTable';
import ProductTable from './Components/Tables/ProductTable';
import OrderTable from './Components/Tables/OrderTable';
import ForgotPassword from './Components/Login/forgotPassword';
import Dashboard from './Components/Dashboard/Dashboard';
import "./App.css";


function App() {
  
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="Table" element={<DashboardTable />} />
      </Routes> */}
      {/* <Routes>
        <Route path="/" element={
          <Row className="landing">
          <Col><Login /></Col>
          <Col><RightSide /></Col>
        </Row>} />
        <Route path="/ForgotPassword" element={
          <Row className="landing">
          <Col><ForgotPassword  /></Col>
          <Col><RightSide /></Col>
        </Row>} />
      </Routes> */}
      <Routes>
        <Route path="/" element={ <Row className="landing"><Col><Login /></Col><Col><RightSide /></Col></Row>} />
        <Route path="/ForgotPassword" element={<Row className="landing"><Col><ForgotPassword  /></Col><Col><RightSide /></Col></Row>} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Product" element={<ProductTable />} />
        <Route path="/Order" element={<OrderTable/>} />
        <Route path="/User" element={<UserTable />} />
      </Routes>
    </div>
  );
}

export default App;
