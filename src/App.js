import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import EmployeeForm from "./components/EmployeeForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);

  // Load from localStorage on start
  useEffect(() => {
    const saved = localStorage.getItem("employees");
    if (saved) {
      setEmployees(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage when employees change
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (newEmp) => {
    setEmployees([...employees, newEmp]);
  };

  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Dashboard localEmployees={employees} />} />
          <Route path="/employee-form" element={<EmployeeForm addEmployee={addEmployee} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
