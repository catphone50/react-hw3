import React from "react";

function OrderStatus({ orderId, status }) {
  return (
    <div className="OrderStatus">
      <p>
        Заказ #{orderId}: {status}
      </p>
    </div>
  );
}

export default OrderStatus;
