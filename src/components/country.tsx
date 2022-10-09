import { useEffect } from "react";

const Country = ({ props }) => {
  useEffect(() => {
    console.log("ce se intampla");
  }, []);
  return (
    <div key={`${props.name}`}>
      <h1>{props.name}</h1>
      <h3>{props.capital}</h3>
      <span>{props.population}</span>
      {props.isEUMember ? <p>✅ Is Eu Member</p> : <p> ❌ Not EU Member</p>}
    </div>
  );
};

export default Country;
