import React from 'react'

export default function PokemonDex({ pokemon }) {
  return (
    <div>
      {pokemon.map((p => (
        <div key = {p}>{p}</div>
      )))}
    </div>
  )
}
