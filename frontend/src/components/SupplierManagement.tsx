import React, { useEffect, useState } from 'react';
import { fetchSuppliers } from '../api/supplierApi';

const SupplierManagement: React.FC = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    const getSuppliers = async () => {
      const data = await fetchSuppliers();
      setSuppliers(data);
    };
    getSuppliers();
  }, []);

  return (
    <div>
      <h2>Supplier Management</h2>
      <ul>
        {suppliers.map((supplier: any) => (
          <li key={supplier.Id_Proveedor}>{supplier.Nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default SupplierManagement;
