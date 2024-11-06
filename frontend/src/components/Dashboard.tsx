import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="/users">User Management</Link></li>
          <li><Link to="/suppliers">Supplier Management</Link></li>
          <li><Link to="/ingredients">Ingredient Management</Link></li>
          <li><Link to="/recipes">Recipe Management</Link></li>
          <li><Link to="/inventory">Inventory Management</Link></li>
          <li><Link to="/orders">Order Management</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
