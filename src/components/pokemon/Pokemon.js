import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import Evol from "./Evol"

export default function Pokemon(props) {
  const [pokeName, setpokeName] = useState("");
  //const [pokemonIndex, setpokemonIndex] = useState('');
  const [imgUrl, setimgUrl] = useState(
    `https://img.pokemondb.net/sprites/bank/normal/${pokeName}.png`
  );
  const [abilities, setAbilities] = useState([]);
  const [exp, setexp] = useState("");
  const [pokeDesp, setpokeDesp] = useState("");
  const params = useParams();

  useEffect(() => {
    // setpokemonIndex(params.pokemonIndex);
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokemonIndex}/`).then(
      (res) => {
        setpokeName(res.data.name);
        setimgUrl(
          `https://img.pokemondb.net/sprites/bank/normal/${res.data.name}.png`
        );
        setAbilities(
          res.data.abilities.map((abil) => {
            return abil.ability.name
              .toLowerCase()
              .split("-")
              .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
              .join(" ");
          })
        );
        setexp(res.data.base_experience);
      }
    );

    Axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${params.pokemonIndex}`
    ).then((res1) => {
      setpokeDesp(
        res1.data.flavor_text_entries.map((eng) => {
          if (eng.language.name === "en") {
            if (eng.version.name === "firered") {
              return eng.flavor_text;
            } else if (eng.version.name === "heartgold") {
              return eng.flavor_text;
            } else if (eng.version.name === "omega-ruby") {
              return eng.flavor_text;
            } else if (eng.version.name === "diamond") {
              return eng.flavor_text;
            } else if (eng.version.name === "black-2") {
              return eng.flavor_text;
            } else if (eng.version.name === "x") {
              return eng.flavor_text;
            } else if (eng.version.name === "sword") {
              return eng.flavor_text;
            }
          }
        })
      );
    });
  }, [abilities, params.pokemonIndex, pokeName, exp, pokeDesp]);

  function showAbbilities() {
    return abilities.map((item, index) => <p key={index}>{item}</p>);
  }

  return (
    <div>
      <h1>{pokeName}</h1>
      <img src={imgUrl} alt={pokeName} />
      {showAbbilities()}
      <h1>{}</h1>
      <h1>{exp}</h1>
      <p>{pokeDesp}</p>

      
    </div>
  );
}
