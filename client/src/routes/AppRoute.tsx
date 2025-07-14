import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LogIn } from '../pages/users/LogIn';
import { Register } from '../pages/users/Register';
import { Home } from '../pages/users/Home';

export const AppRoute: React.FC = () => {
  return (
    <>
    <Router>
      <Routes>
        {/* route for login page */}
        <Route index element={<LogIn />} />
        <Route path="/login" element={<LogIn />} />

        {/* route for register page */}
        <Route path="/register" element={<Register />} />

        {/* route for home page */}
        <Route path="/home" element={<Home />} />


      </Routes>
    </Router>
    </>
  )
};

