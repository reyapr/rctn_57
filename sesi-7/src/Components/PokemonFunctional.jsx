import { useEffect, useState } from "react"
import axios from 'axios'


const PokemonFunctional = () => {
    const [state, setState] = useState({
        pokemonList: [],
        pokemonUrl: 'https://pokeapi.co/api/v2/pokemon',
        pokemonDetails: {},
        image: null,
        showIndex: null
    })
    
    const didMount = () => {
        const myInterval = setInterval(() => {
            console.log('interval')
        }, 2000)
        axios.get(state.pokemonUrl)
            .then(res => {
                setState({
                    ...state,
                    pokemonList: res.data.results
                })
            })
            
        return function unmount() {
            clearInterval(myInterval)
        }
    }
    
    const didUpdate = () => {
        axios.get(state.pokemonUrl)
            .then(res => {
                setState({
                    ...state,
                    image: res.data.sprites.front_default,
                })
            })
    }
    useEffect(didMount, [])
    useEffect(didUpdate, [state.pokemonUrl])

    const changeUrl = (url, index) => {
        setState({
            ...state,
            pokemonUrl: url,
            showIndex: index,
            image: null
        })
    }
        
    return (
        <div>
            <div>List Pokemon</div>
            <div style={{ textAlign: 'left'}}>
                <ul>
                    {state.pokemonList.map((pokemon, index) => {
                        return (
                            <div>
                                <li>
                                    {pokemon.name} 
                                    <button onClick={() => changeUrl(pokemon.url, index)}>
                                        show Image
                                    </button>
                                    {(state.image && state.showIndex === index) 
                                        && <img src={state.image} alt="empty" />}
                                </li>
                                <br />
                            </div>
                        )
                    })}
                </ul>
            </div> 
        </div>
    )
}

export default PokemonFunctional