// api/recipeApi.ts
export const fetchRecipes = async () => {
    try {
      const response = await fetch('/api/recipes', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      if (!response.ok) throw new Error('Failed to fetch recipes');
      return await response.json();
    } catch (error) {
      console.error('Fetch recipes error:', error);
      return [];
    }
  };
  
  // Puedes añadir funciones para createRecipe, updateRecipe, etc.
  