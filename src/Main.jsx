import { useContext } from "react";
import Pizza from "./components/pizza";
import { pizzaContext } from "./providers/pizzaProvider";

const Main = () => {
  const { pizzas } = useContext(pizzaContext);

  const data = pizzas.map((pizza) => <Pizza key={pizza.id} pizza={pizza} />);

  return <>{pizzas.length === 0 ? <div>No pizzas</div> : <div>{data}</div>}</>;
};

export default Main;
