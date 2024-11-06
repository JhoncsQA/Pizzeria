// api/userApi.ts
export const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      if (!response.ok) throw new Error('Failed to fetch users');
      return await response.json();
    } catch (error) {
      console.error('Fetch users error:', error);
      return [];
    }
  };
  
  // Agregar otras funciones según sea necesario (createUser, updateUser, deleteUser, etc.)
  