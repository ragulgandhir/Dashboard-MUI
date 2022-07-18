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
import ProtectedRoute from "./Components/authjwt/ProtectedRoute";
import { history } from "./Components/authjwt/history";
import { setAuthToken } from "./Components/authjwt/setAuthToken";
import "./App.css";

function App() {
  const token = localStorage.getItem("token");
  if (token) {
      setAuthToken(token);
  }
  return (
    <div>
      <Routes history={history}>
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
          element={
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
        <Route exact
          path="/Registration"
          element={
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
        <Route exact path="/Product" element={<ProductTable />} />
        <Route exact path="/Order" element={<OrderTable />} />
        <Route exact path="/User" element={<UserTable />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
