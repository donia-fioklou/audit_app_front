// src/App.js
import React, { useContext } from "react";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import AnnexeQuestion from "./pages/annexeA/AnnexeQuestion";
import AnnexeResultat from "./pages/annexeA/AnnexeResultat";
import Objectif from "./pages/objectifs/Objectif";
import Login from "./pages/login/Login";
import {  AuthContext } from "./context/AuthContext";

const RoleBasedAccess = ({ children}) => {
  //const decodedData = atob(sessionStorage.getItem('data'));
  //const data = JSON.parse(decodedData)
  //return data.roles.libelle === 'Administrateur' ? adminChildren : children
  return children;
}

const IsAuthenticated = ({ children }) => {
  //const { token } = useContext(AuthContext);
  const token = sessionStorage.getItem('token');
  console.log(token);
  return token ? <RoleBasedAccess children={children} /> : <Navigate to={"/login"} />;
}

function App() {
  return (
    
      <Router basename="/">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<IsAuthenticated children={<Home />} />} />
          <Route path="objectif" element={<IsAuthenticated children={<Objectif />} />} />
          <Route path="annexe/question/new" element={<IsAuthenticated children={<AnnexeQuestion />} />} />
          <Route path="annexe/resultat" element={<IsAuthenticated children={<AnnexeResultat />} />} />
        </Routes>
      </Router>
    
  );
}

export default App;
