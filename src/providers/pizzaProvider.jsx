import { createContext, useState, useEffect } from "react";
import axios from "axios";

// axios.defaults.baseURL = "http://localhost:5283";
export const pizzaContext = createContext();

export default function PizzaProvider(props) {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    getPizzas();
  }, []);

  const getPizzas = () => {
    axios.get("pizza").then((res) => {
      setPizzas((prev) => {
        const newPizzas = [...res.data];
        return newPizzas;
      });
    });
  };

  const updatePizza = (pizza) => {
    axios
      .put(`/pizza/${pizza.id}`, {
        name: pizza.name,
        description: pizza.description,
      })
      .then((res) => {
        return;
      });
  };

  const deletePizza = (id) => {
    axios.delete(`/pizza/${id}`).then((res) => {
      return;
    });
    setPizzas((prev) => {
      const newPizzas = [...prev];
      return newPizzas.filter((pizza) => pizza.id !== id);
    });
  };

  const addPizza = (pizza) => {
    axios.post(`/pizza`, pizza).then((res) => {
      setPizzas((prev) => {
        const newPizzas = [...prev];
        newPizzas.push(res.data);
        return newPizzas;
      });
    });
  };

  const providerData = {
    pizzas,
    updatePizza,
    deletePizza,
    addPizza,
  };

  return (
    <pizzaContext.Provider value={providerData}>
      {props.children}
    </pizzaContext.Provider>
  );
}
