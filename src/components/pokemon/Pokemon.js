import Axios from 'axios';
import React, { Component } from 'react'

export default class Pokemon extends Component {
    state={
        name:"",
        pokemonIndex:"",
        imgUrl:"",

    }
    async componentDidMount(){
        const {pokemonIndex} = this.props.match.params;

        const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`; 
        
        
        const res = await Axios.get(pokeUrl);

        const name = res.data.name;
        const imgUrl = `https://img.pokemondb.net/sprites/bank/normal/${name}.png`;

        // eslint-disable-next-line no-restricted-globals
        this.setState({name,pokemonIndex,imgUrl})
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <img src={this.state.imgUrl} alt={this.state.name}></img>
            </div>
        )
    }
}
