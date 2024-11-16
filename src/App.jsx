import React, { useState, useEffect } from 'react';
import PokemonDex from './components/PokemonDex.jsx';
import DexFormation from './components/DexFormation.jsx';
import axios from 'axios';
import './App.css';

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [previousPageUrl, setPreviousPageUrl] = useState("");
  

  useEffect(() => {
    axios.get(currentPageUrl).then(res => {
      cancelToken: new axios.CancelToken(c => cancel = c) 
    }).then(res => {
      setNextPageUrl(res.data.next);
      setPreviousPageUrl(res.data.previous);
      setPokemon(res.data.results.map(p => p.name));
      setLoading(false); 
    })

  return () =>  cancel();
  }, [currentPageUrl]);


  if (loading) {
    return <div>Poke-Loading...Please wait</div>;
  }

  return (
    <PokemonDex pokemon={pokemon} />
  );
}