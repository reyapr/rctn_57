import React from 'react'
import axios from 'axios'

class Pokemon extends React.Component {
    constructor() {
        super()
        this.state = {
            pokemonList: [],
            pokemonUrl: 'https://pokeapi.co/api/v2/pokemon',
            pokemonDetails: {},
            image: null,
            showIndex: null
        }
    }
    
    componentDidMount() {
        this.myInterval = setInterval(() => {
            console.log('interval')
        }, 2000)
        axios.get(this.state.pokemonUrl)
            .then(res => {
                this.setState({
                    pokemonList: ''
                })
            })
    }
    
    componentDidUpdate(prevProps, prevState) {
        if(prevState.pokemonUrl !== this.state.pokemonUrl) {
            axios.get(this.state.pokemonUrl)
                .then(res => {
                    this.setState({
                        image: res.data.sprites.front_default,
                    })
                })
        }
    }
    
    changeUrl = (url, index) => {
        this.setState({
            pokemonUrl: url,
            showIndex: index,
            image: null
        })
    }
    
    componentWillUnmount() {
        clearInterval(this.myInterval)
    }
    
    render() {
        return (
            <div>
                <div>List Pokemon</div>
                <div style={{ textAlign: 'left'}}>
                    <ul>
                        {this.state.pokemonList.map((pokemon, index) => {
                            return (
                                <div>
                                    <li>
                                        {pokemon.name} 
                                        <button onClick={() => this.changeUrl(pokemon.url, index)}>
                                            show Image
                                        </button>
                                        {(this.state.image && this.state.showIndex === index) 
                                            && <img src={this.state.image} alt="empty" />}
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
}

export default Pokemon;