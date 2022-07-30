import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col } from "react-bootstrap";
import RightSide from "./Components/Login/RightSide";
import Login from "./Components/Login/login";
import UserTable from "./Components/Tables/UserTable";
import ProductTable from "./Components/Tables/ProductTable";
import OrderTable from "./Components/Tables/OrderTable";
import ForgotPassword from "./Components/Login/forgotPassword";
import Dashboard from "./Components/Dashboard/Dashboard";
import Registration from "./Components/Login/registrationForm";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/login"
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
        <Route  path="/Product" exact element={<ProductTable />} />
        <Route  path="/Order" exact element={<OrderTable />} />
        <Route  path="/User" exact element={<UserTable />} />
      </Routes>
    </div>
  );
}

export default App;
