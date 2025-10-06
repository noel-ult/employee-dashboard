import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const EmployeeForm = ({ addEmployee }) => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    location: "",
    salary: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      ...formData,
      id: Date.now()
    };

    addEmployee(newEmployee);
    alert("Employee added successfully!");
    setFormData({ name: "", designation: "", location: "", salary: "" });

    navigate("/"); // Redirect back to Dashboard
  };

  return (
    <Card className="p-4 shadow">
      <h3 className="text-center mb-3">Add Employee</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter employee name"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Designation</Form.Label>
          <Form.Control
            type="text"
            name="designation"
            value={formData.designation}
            placeholder="Enter designation"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            name="location"
            value={formData.location}
            placeholder="Enter location"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="number"
            name="salary"
            value={formData.salary}
            placeholder="Enter salary"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="success" type="submit">
            Save Employee
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default EmployeeForm;
