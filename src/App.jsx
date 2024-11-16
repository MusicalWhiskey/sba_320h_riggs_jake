import React, { useState } from 'react'
import PokemonDex from './components/PokemonDex.jsx'
import DexFormation from './components/DexFormation.jsx'
import axios from 'axios'
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState(["Squirtle", "Charmander", "Bulbasaur"])

  axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
    console.log(res.data.results)
    setPokemon(res.data.results)
  })


  return (
    <PokemonDex pokemon = {pokemon}  />
  )
}

export default App
