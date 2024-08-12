import "./App.css";
import Greeting from "./components/Greeting.jsx";
import ShoppingList from "./components/ShoppingList.jsx";
import OrderStatus from "./components/OrderStatus.jsx";

function App() {
  const products = [
    "Laptop",
    "Smartphone",
    "Tablet",
    "Headphones",
    "Smartwatch",
  ];

  const orders = [
    { orderId: 123, status: "в пути" },
    { orderId: 456, status: "доставлен" },
    { orderId: 789, status: "отменен" },
  ];

  return (
    <div className="App">
      <Greeting name="Jon" />
      <ShoppingList items={products} />
      {orders.map((order) => (
        <OrderStatus
          key={order.orderId}
          orderId={order.orderId}
          status={order.status}
        />
      ))}
    </div>
  );
}

export default App;
