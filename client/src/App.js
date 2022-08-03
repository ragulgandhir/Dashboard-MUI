import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col } from "react-bootstrap";
import RightSide from "./Components/Login/RightSide";
import Registration from "./Components/Login/registrationForm";
import Login from "./Components/Login/login";
import ForgotPassword from "./Components/Login/forgotPassword";
import Dashboard from "./Components/Dashboard/Dashboard";
import UserTable from "./Components/Users/userList";
import ProductTable from "./Components/Tables/ProductTable";
import OrderTable from "./Components/Tables/OrderTable";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
           element={
            <Row className="landing">
              <Col>
                <Login />
              </Col>
              <Col>
                <RightSide />
              </Col>
            </Row>
          }
        />
        <Route
          path="/ForgotPassword"
          exact element={
            <Row className="landing">
              <Col>
                <ForgotPassword />
              </Col>
              <Col>
                <RightSide />
              </Col>
            </Row>
          }
        />
        <Route
          path="/Registration"
          exact element={
            <Row className="landing">
              <Col>
                <Registration />
              </Col>
              <Col>
                <RightSide />
              </Col>
            </Row>
          }
        />
        <Route  path="/Dashboard" exact element={<Dashboard />} />
        <Route  path="/User" exact element={<UserTable />} />
        <Route  path="/Product" exact element={<ProductTable />} />
        <Route  path="/Order" exact element={<OrderTable />} />
      </Routes>
    </div>
  );
}

export default App;
