import Header from "../../components/header";
import Card from "./renderCards";
import { useState } from "react";

function Home() {
  const [getCars, setGetCars] = useState([
    {
      is_active: false,
      brand: "Ford",
      model: "Exemplo",
      description: "description",
      km: 2,
      year: 2020,
      price: "R$00.000,00",
    },

    {
      is_active: false,
      brand: "Ford",
      model: "Exemplo",
      description: "description",
      km: 2,
      year: 2020,
      price: "R$00.000,00",
    },

    {
      is_active: false,
      brand: "Ford",
      model: "Exemplo",
      description: "description",
      km: 2,
      year: 2020,
      price: "R$00.000,00",
    },

    {
      is_active: false,
      brand: "Ford",
      model: "Exemplo",
      description: "description",
      km: 2,
      year: 2020,
      price: "R$00.000,00",
    },

    {
      is_active: false,
      brand: "Ford",
      model: "Exemplo",
      description: "description",
      km: 2,
      year: 2020,
      price: "R$00.000,00",
    },
  ]);

  return (
    <>
      <Header></Header>
      <Card getCars={getCars} />
    </>
  );
}

export default Home;
