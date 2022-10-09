import "./App.css";
import Country from "./components/country";

interface Country {
  name: string;
  capital: string;
  population: number;
  isEUMember: boolean;
}

function App() {
  const list: Country[] = [
    {
      name: "Romania",
      capital: "Bucharest",
      population: 1800000,
      isEUMember: true,
    },
    {
      name: "Ukraine",
      capital: "Kiev",
      population: 3500000,
      isEUMember: false,
    },
    {
      name: "Germany",
      capital: "Berlin",
      population: 8000000,
      isEUMember: true,
    },
    {
      name: "Italy",
      capital: "Rome",
      population: 4500000,
      isEUMember: true,
    },
    {
      name: "Jordan",
      capital: "Amman",
      population: 10000000,
      isEUMember: false,
    },
  ];

  return (
    <div className="App">
      <div className="card">
        {list.map((country) => (
          <Country props={country} key={`${country.name}`} />
        ))}
      </div>
    </div>
  );
}

export default App;
