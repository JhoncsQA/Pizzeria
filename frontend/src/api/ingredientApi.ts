// api/ingredientApi.ts
export const fetchIngredients = async () => {
    try {
      const response = await fetch('/api/ingredients', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      if (!response.ok) throw new Error('Failed to fetch ingredients');
      return await response.json();
    } catch (error) {
      console.error('Fetch ingredients error:', error);
      return [];
    }
  };
  
  // Agrega otras funciones según sea necesario (createIngredient, updateIngredient, etc.)
  