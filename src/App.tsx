import "./App.css";
import Country from "./components/country";

interface Country {
  name: string;
  capital: string;
  population: number;
  isEUMember: boolean;
  flag: string;
}

function App() {
  const list: Country[] = [
    {
      name: "Romania",
      capital: "Bucharest",
      population: 1800000,
      isEUMember: true,
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAACqCAMAAABVlWm8AAAACVBMVEUAK3/80RbOESaEDa1tAAAAxklEQVR4nO3PMQEAAAjAILV/aFPsgwbMFLZwhaTv7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v75/+HwW0qVdTeFEnAAAAAElFTkSuQmCC",
    },
    {
      name: "Ukraine",
      capital: "Kiev",
      population: 3500000,
      isEUMember: false,
      flag: "https://rags2riches4schools.co.uk/wp-content/uploads/2022/02/Ukraine-Flag.png",
    },
    {
      name: "Germany",
      capital: "Berlin",
      population: 8000000,
      isEUMember: true,
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
    },
    {
      name: "Italy",
      capital: "Rome",
      population: 4500000,
      isEUMember: true,
      flag: "https://wallpaperaccess.com/full/46396.jpg",
    },
    {
      name: "Jordan",
      capital: "Amman",
      population: 10000000,
      isEUMember: false,
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/2560px-Flag_of_Jordan.svg.png",
    },
  ];

  return (
    <div className="App flex mt-6">
      <div className="card gap-4 text-center flex flex-row flex-wrap">
        {list.map((country) => (
          <Country props={country} key={`${country.name}`} />
        ))}
      </div>
    </div>
  );
}

export default App;
