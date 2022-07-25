import React from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Login from './pages/login'
import SignUp from './pages/signup'
import LoginPage from './pages/login_page'
import Nav from './pages/Nav';
import ProtectedRoute from './pages/protectedRoute'
import Contact from './pages/contact'

export default function App() {
  return (
    <div>
    <Router>
      <div className="App">
      <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/login" exact element={<Login />}/>
          <Route path="/signup" exact element={<SignUp />}/>
          <Route path="/protectedRoute" exact element={<ProtectedRoute />}/>
          <Route path="/dashboard" exact element={ <Navigate to="/protectedRoute" /> }/>
          <Route path="/login_page" exact element={<LoginPage />}/>
        </Routes>
      </div>
    </Router>

    </div>
  )
}
