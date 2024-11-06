import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../api/userApi';

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getUsers();
  }, []);

  return (
    <div>
      <h2>User Management</h2>
      <ul>
        {users.map((user: any) => (
          <li key={user.Id_Usuario}>{user.Nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
