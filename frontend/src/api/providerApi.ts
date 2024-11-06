// api/inventoryApi.ts
export const fetchInventory = async () => {
    try {
      const response = await fetch('/api/inventory', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      if (!response.ok) throw new Error('Failed to fetch inventory');
      return await response.json();
    } catch (error) {
      console.error('Fetch inventory error:', error);
      return [];
    }
  };
  
  // Puedes agregar funciones para createInventoryRecord, updateInventory, etc.
  