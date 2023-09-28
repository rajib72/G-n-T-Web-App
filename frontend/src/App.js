import Header from "./components/Header";
import React from "react";
import {Routes,Route} from 'react-router-dom'
import Auth from "./components/Auth"
import { useSelector } from "react-redux";
import Login from "./components/Login";
import Signup from './components/Signup.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';


function App() {

  const isLoggedIn = useSelector(state=>state.isLoggedIn)
  console.log(isLoggedIn);
  return (
    <React.Fragment>
      {/* <header>
        <Header/>
      </header> */}
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} />
      </main>
    </React.Fragment>
  );
}

export default App;
