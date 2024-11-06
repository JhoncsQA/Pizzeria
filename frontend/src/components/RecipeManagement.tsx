import React, { useEffect, useState } from 'react';
import { fetchRecipes } from '../api/recipeApi';

const RecipeManagement: React.FC = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const data = await fetchRecipes();
      setRecipes(data);
    };
    getRecipes();
  }, []);

  return (
    <div>
      <h2>Recipe Management</h2>
      <ul>
        {recipes.map((recipe: any) => (
          <li key={recipe.Id_Receta}>{recipe.Nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeManagement;
