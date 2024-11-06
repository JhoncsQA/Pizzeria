// api/supplierApi.ts
export const fetchSuppliers = async () => {
    try {
      const response = await fetch('/api/suppliers', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      if (!response.ok) throw new Error('Failed to fetch suppliers');
      return await response.json();
    } catch (error) {
      console.error('Fetch suppliers error:', error);
      return [];
    }
  };
  
  // Puedes añadir otras funciones como createSupplier, updateSupplier, etc.
  