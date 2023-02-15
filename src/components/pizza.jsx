import { useContext, useState } from "react";
import styled from "styled-components";
import { pizzaContext } from "../providers/pizzaProvider";

const PizzaFrame = styled.div`
  border: solid 1px gray;
  padding: 10px;
  margin: 15px auto;
  border-radius: 5px;
  box-shadow: 0 0 5px grey;
  font-family: Arial;
  max-width: 600px;
  vertical-align: middle;
`;

const Input = styled.textarea`
  resize: none;
  width: 200px;
  height: 50px;
  border: solid 1px black;
  padding: 5px;
  border-radius: 3px;
`;

const Title = styled.input`
  width: 200px;
  border: solid 1px black;
  padding: 5px;
  border-radius: 3px;
  text-transform: uppercase;
`;

const Save = styled.button`
  width: 100px;
  margin: 10px;
  background: green;
  color: white;
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ebebeb;
  &:hover {
    border: 1px solid #a120d1;
  }
  &:disabled {
    background: grey;
    border: 1px solid #ebebeb;
  }
`;

const Delete = styled.button`
  width: 100px;
  margin: 10px;
  background: red;
  color: white;
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ebebeb;
  &:hover {
    border: 1px solid #a120d1 !important;
  }
`;

export default function Pizza({ pizza }) {
  const [data, setData] = useState(pizza);
  const [dirty, setDirty] = useState(false);

  function update(value, fieldName, obj) {
    setData({ ...obj, [fieldName]: value });
    setDirty(true);
  }

  const { updatePizza, deletePizza } = useContext(pizzaContext);

  function onSave() {
    setDirty(false);
    updatePizza(data);
  }

  function onDelete() {
    setDirty(false);
    deletePizza(data.id);
  }

  return (
    <PizzaFrame>
      <h3>
        Pizza Name:
        <br />
        <Title
          onChange={(evt) => update(evt.target.value, "name", data)}
          value={data.name}
        />
      </h3>
      <div>
        Pizza Topppings:
        <br />
        <Input
          onChange={(evt) => update(evt.target.value, "description", data)}
          value={data.description}
        />
      </div>
      <div>
        <Save onClick={onSave} disabled={!dirty}>
          Save
        </Save>
        <Delete onClick={onDelete}>Delete</Delete>
      </div>
    </PizzaFrame>
  );
}
