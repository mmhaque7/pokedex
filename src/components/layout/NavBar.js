import React, { Component } from 'react';
import styled from "styled-components";
import pokeBall from '../../imgs/Pokeball.png'
import './NavBar.css'



export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <a className="navbar-brand col-sm-2 col-md-1 mr-0 align-items-center" href =" "><img src={pokeBall} alt="pokeball" className="poke-ball"></img>PokeDex</a>
                    
                    </nav>
            </div>
        )
    }
}
