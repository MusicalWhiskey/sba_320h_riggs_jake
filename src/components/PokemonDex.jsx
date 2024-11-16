import React from 'react'
import axios from 'axios'

export default function PokemonDex({ pokemon }) {
  return (
    <div>
      {pokemon.map((p => (
        <div key = {p}>{p}</div>
      )))}
    </div>
  )
}
