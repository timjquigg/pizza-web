import { useEffect, useState } from "react";
import styled from "styled-components";

const PizzaFrame = styled.div`
  border: solid 1px gray;
  padding: 10px;
  margin: 15px 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px grey;
  font-family: Arial;
`;

const Input = styled.input`
  border: solid 1px black;
  padding: 5px;
  border-radius: 3px;
`;

const Title = styled(Input)`
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
`;

const Pizza = ({ pizza }) => {
  const [data, setData] = useState(pizza);
  const [dirty, setDirty] = useState(false);

  function update(value, fieldName, obj) {
    setData({ ...obj, [fieldName]: value });
    setDirty(true);
  }

  function onSave() {
    setDirty(false);
    // make rest call
  }

  return (
    <PizzaFrame>
      <h3>
        <Title
          onChange={(evt) => update(evt.target.value, "name", data)}
          value={data.name}
        />
      </h3>
      <div>
        <Input
          onChange={(evt) => update(evt.target.value, "description", data)}
          value={data.description}
        />
      </div>
      {dirty ? (
        <div>
          <Save onClick={onSave}>Save</Save>
        </div>
      ) : null}
    </PizzaFrame>
  );
};

const Main = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch("/pizza")
      .then((response) => response.json())
      .then((data) => setPizzas(data));
  }

  const data = pizzas.map((pizza) => <Pizza pizza={pizza} />);

  return <>{pizzas.length === 0 ? <div>No pizzas</div> : <div>{data}</div>}</>;
};

export default Main;
