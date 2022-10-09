import { useEffect } from "react";

const Country = ({ props }) => {
  return (
    <div key={`${props.name}`} className="country flex-col items-center">
      <img src={props.flag} alt="" />
      <h1>Country: {props.name}</h1>
      <h3>Capital: {props.capital}</h3>
      <span>Population: {props.population}</span>
      {props.isEUMember ? <p>✅ Is Eu Member</p> : <p> ❌ Not EU Member</p>}
    </div>
  );
};

export default Country;
