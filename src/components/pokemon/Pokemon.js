import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Pokemon(props) {
  const [pokeName, setpokeName] = useState("");
  //const [pokemonIndex, setpokemonIndex] = useState('');
  const [imgUrl, setimgUrl] = useState(
    `https://img.pokemondb.net/sprites/bank/normal/${pokeName}.png`
  );
  
  const params = useParams();

  useEffect(() => {
    // setpokemonIndex(params.pokemonIndex);
    Axios.get(
      `https://pokeapi.co/api/v2/pokemon/${params.pokemonIndex}/`
    ).then((res) => {
        setpokeName(res.data.name);
        setimgUrl(`https://img.pokemondb.net/sprites/bank/normal/${res.data.name}.png`)
    });
    
  }, [params.pokemonIndex, pokeName]);
  

  return (
    <div>
      <h1>{pokeName}</h1>
      <img src={imgUrl} alt={pokeName}/>
    </div>
  );
}
