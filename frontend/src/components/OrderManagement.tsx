import React, { useEffect, useState } from 'react';
import { fetchOrders } from '../api/orderApi';

const OrderManagement: React.FC = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const data = await fetchOrders();
      setOrders(data);
    };
    getOrders();
  }, []);

  return (
    <div>
      <h2>Order Management</h2>
      <ul>
        {orders.map((order: any) => (
          <li key={order.Id_Pedido}>{order.Fecha}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrderManagement;
