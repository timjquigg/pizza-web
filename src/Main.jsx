import { useContext, useState } from "react";
import styled from "styled-components";
import Pizza from "./components/pizza";
import PizzaForm from "./components/pizzaForm";
import { pizzaContext } from "./providers/pizzaProvider";

const Add = styled.button`
  width: 100px;
  margin: 10px;
  background: Blue;
  color: white;
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ebebeb;
  &:hover {
    border: 1px solid #a120d1;
  }
`;

const Main = () => {
  const [show, setShow] = useState(false);
  const { pizzas } = useContext(pizzaContext);
  const data = pizzas.map((pizza) => <Pizza key={pizza.id} pizza={pizza} />);

  const onAdd = () => {
    setShow(true);
  };

  return (
    <>
      {pizzas.length === 0 ? <div>No pizzas</div> : <div>{data}</div>}
      {show && <PizzaForm show={setShow} />}
      <Add onClick={onAdd}>Add</Add>
    </>
  );
};

export default Main;
