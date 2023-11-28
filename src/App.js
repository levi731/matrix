import React from 'react';
import './App.css';
import Login from './Login/Login';
import { Outlet, redirect, useNavigate } from 'react-router-dom';

 function  App() {
  return (
  <Outlet></Outlet>
  );
}

export default App;
