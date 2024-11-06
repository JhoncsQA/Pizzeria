import React, { useEffect, useState } from 'react';
import { fetchIngredients } from '../api/ingredientApi';

const IngredientManagement: React.FC = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const getIngredients = async () => {
      const data = await fetchIngredients();
      setIngredients(data);
    };
    getIngredients();
  }, []);

  return (
    <div>
      <h2>Ingredient Management</h2>
      <ul>
        {ingredients.map((ingredient: any) => (
          <li key={ingredient.Id_Insumo}>{ingredient.NombreInsumo}</li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientManagement;
