import React from 'react';

const useData=(id)=>{
    const [pokemon,setPokemon]=React.useState()

    React.useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${id}`)
        .then(res=>res.json())
        .then(data=>setPokemon(data.results))
    },[id])

    return [pokemon,setPokemon]
}

export default useData