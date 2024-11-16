import React, { useState } from 'react'
import PokemonDex from './components/PokemonDex.jsx'
import DexFormation from './components/DexFormation.jsx'
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState(["Squirtle", "Charmander", "Bulbasaur"])

  return (
    <PokemonDex pokemon = {pokemon}  />
  )
}

export default App
