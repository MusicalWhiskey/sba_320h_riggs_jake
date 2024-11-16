import React, { useState, useEffect } from 'react';
import PokemonDex from './components/PokemonDex.jsx'
import axios from 'axios'
import DexFormation from './components/DexFormation.jsx';
import './App.css'
import { capitalizeFirstLetter } from './components/CapitalizeFirstLetter.jsx';

export default function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)
  

  
  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => capitalizeFirstLetter(p.name)))
    })

    return () => cancel()
  }, [currentPageUrl])

  

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

  if (loading) return <div>Poke-Loading...Please wait!</div>
  
  return (
    <>
<div><h1>Pokemon Dex!!!!</h1></div>

      <PokemonDex pokemon={pokemon} />
      <DexFormation
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </>
  );
}