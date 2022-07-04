import React from 'react';
import Dashboard from './Components/Dashboard/Admin';
import DashboardTable from './Components/Tables/SampleData';
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import {Button, Alert, Row, Col} from 'react-bootstrap';
import RightSide from "./Components/Login/RightSide";
import Login from './Components/Login/login';
import "./App.css";


function App() {
  
  return (
    <div className="app">
      {/* <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="Table" element={<DashboardTable />} />
      </Routes> */}
      <Row className="landing">
        <Col ><Login /></Col>
        <Col ><RightSide /></Col>
      </Row>
    </div>
  );
}

export default App;
