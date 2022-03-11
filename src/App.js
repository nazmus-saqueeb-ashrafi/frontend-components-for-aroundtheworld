import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard'
import ProfilePage from './components/ProfilePage';

import {AnimatePresence} from "framer-motion"

import "@material-tailwind/react/tailwind.css";




const App = () => {
  return (
    <Router >
      <AnimatePresence exitBeforeEnter>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<ProfilePage/>} /> 
        </Routes>

      </AnimatePresence>
        
    </Router>
  )
}

export default App