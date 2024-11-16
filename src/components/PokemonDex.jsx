import React from 'react'
export default function PokemonDex({ id, pokemon }) {
  return (
    <div>
      {pokemon.map((p => (
        <div key = {p}>{p}</div>
      )))}
    </div>
  )
}
