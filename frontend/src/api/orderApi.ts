// api/orderApi.ts
export const fetchOrders = async () => {
    try {
      const response = await fetch('/api/orders', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      if (!response.ok) throw new Error('Failed to fetch orders');
      return await response.json();
    } catch (error) {
      console.error('Fetch orders error:', error);
      return [];
    }
  };
  
  // Puedes añadir funciones como createOrder, updateOrder, etc.
  