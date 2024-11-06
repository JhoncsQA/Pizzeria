import React, { useEffect, useState } from 'react';
import { fetchInventory } from '../api/inventoryApi';

const InventoryManagement: React.FC = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const getInventory = async () => {
      const data = await fetchInventory();
      setInventory(data);
    };
    getInventory();
  }, []);

  return (
    <div>
      <h2>Inventory Management</h2>
      <ul>
        {inventory.map((item: any) => (
          <li key={item.Id_Insumo}>{item.CantidadDisponible} - {item.StockMinimo}</li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryManagement;
