import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LogIn } from '../pages/users/LogIn';
import { Register } from '../pages/users/Register';


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


      </Routes>
    </Router>
    </>
  )
};

