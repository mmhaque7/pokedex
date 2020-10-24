import Axios from "axios";
import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageURL, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nexPageURL, setNextPageURL] = useState("");
  const [prevPageURL, setPrevURL] = useState("");
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    Axios.get(currentPageURL, {
      cancelToken: new Axios.CancelToken((c) => (cancel = c)),
    }).then((res) => {
      setLoading(false);
      setNextPageURL(res.data.next);
      setPrevURL(res.data.previous);
      setPokemon(res.data.results);
    });

    return () => cancel();
    
  }, [currentPageURL]);

  if (Loading) return "Loading Pokemon.....";

  function nextPage(){
    setCurrentPageUrl(nexPageURL)
  } 
   function prevPage(){
    setCurrentPageUrl(prevPageURL)
  }

  return (
    <div className="row">
      {pokemon.map((pokemon) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      ))}
      <button onClick={nextPage}>NextPage</button> 
      <button onClick={prevPage}>PreviousPage</button>
    </div>
  );
}
