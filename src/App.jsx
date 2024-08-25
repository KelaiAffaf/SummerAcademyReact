import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Card, Box } from "./Components";

const countriesData = [
  {
    name: "United States",
    capital: "Washington, D.C.",
    population: 331002651,
    continent: "North America",
    flag: "🇺🇸",
  },
  {
    name: "Canada",
    capital: "Ottawa",
    population: 37742154,
    continent: "North America",
    flag: "🇨🇦",
  },
  {
    name: "Brazil",
    capital: "Brasília",
    population: 212559417,
    continent: "South America",
    flag: "🇧🇷",
  },
  {
    name: "United Kingdom",
    capital: "London",
    population: 67886011,
    continent: "Europe",
    flag: "🇬🇧",
  },
  {
    name: "Germany",
    capital: "Berlin",
    population: 83783942,
    continent: "Europe",
    flag: "🇩🇪",
  },
  {
    name: "France",
    capital: "Paris",
    population: 65273511,
    continent: "Europe",
    flag: "🇫🇷",
  },
  {
    name: "Australia",
    capital: "Canberra",
    population: 25499884,
    continent: "Oceania",
    flag: "🇦🇺",
  },
  {
    name: "India",
    capital: "New Delhi",
    population: 1380004385,
    continent: "Asia",
    flag: "🇮🇳",
  },
  {
    name: "Japan",
    capital: "Tokyo",
    population: 126476461,
    continent: "Asia",
    flag: "🇯🇵",
  },
  {
    name: "China",
    capital: "Beijing",
    population: 1444216107,
    continent: "Asia",
    flag: "🇨🇳",
  },
  {
    name: "Russia",
    capital: "Moscow",
    population: 145934462,
    continent: "Europe/Asia",
    flag: "🇷🇺",
  },
  {
    name: "South Africa",
    capital: "Pretoria",
    population: 59308690,
    continent: "Africa",
    flag: "🇿🇦",
  },
  {
    name: "Nigeria",
    capital: "Abuja",
    population: 206139589,
    continent: "Africa",
    flag: "🇳🇬",
  },
  {
    name: "Mexico",
    capital: "Mexico City",
    population: 128932753,
    continent: "North America",
    flag: "🇲🇽",
  },
  {
    name: "Argentina",
    capital: "Buenos Aires",
    population: 45195777,
    continent: "South America",
    flag: "🇦🇷",
  },
  {
    name: "Egypt",
    capital: "Cairo",
    population: 102334404,
    continent: "Africa",
    flag: "🇪🇬",
  },
  {
    name: "Italy",
    capital: "Rome",
    population: 60367477,
    continent: "Europe",
    flag: "🇮🇹",
  },
  {
    name: "Turkey",
    capital: "Ankara",
    population: 84339067,
    continent: "Europe/Asia",
    flag: "🇹🇷",
  },
  {
    name: "South Korea",
    capital: "Seoul",
    population: 51269185,
    continent: "Asia",
    flag: "🇰🇷",
  },
  {
    name: "New Zealand",
    capital: "Wellington",
    population: 4822233,
    continent: "Oceania",
    flag: "🇳🇿",
  },
];
function App() {
  return (
    <div className="countries">
      {/* {countriesData.map((country, index) => {
        return (
          <Card
            flag={country.flag}
            name={country.name}
            population={country.population}
          />
        );
      })} */}

      <div style={{ border: "1px solid red" }}>
        <Box title="this is the main title" />
      </div>
    </div>
  );
}

export default App;
