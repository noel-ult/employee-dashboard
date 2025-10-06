import React, { useEffect, useState } from "react";
import { Table, Spinner } from "react-bootstrap";

const Dashboard = ({ localEmployees }) => {
  const [apiEmployees, setApiEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setApiEmployees(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-5"><Spinner animation="border" /></div>;
  }

  // Merge API + local data
  const allEmployees = [...apiEmployees, ...localEmployees.map((emp, index) => ({
    id: apiEmployees.length + index + 1,
    name: emp.name,
    email: `${emp.name.replace(/\s+/g, '').toLowerCase()}@local.com`
  }))];

  return (
    <div>
      <h2 className="mb-4 text-center">Employee Dashboard</h2>
      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {allEmployees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;
