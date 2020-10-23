import React, { Component } from "react";
import "./PokemonCard.css";
import { Link } from "react-router-dom";

export default class PokemonCard extends Component {
  state = {
    name: "",
    imgUrl: "",
    gifUrl: "",
    pokemonIndex: "",
  };

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split("/")[6];

    const imgUrl = `https://img.pokemondb.net/sprites/bank/normal/${name}.png`;

    this.setState({ name, imgUrl, pokemonIndex });
  }

  render() {
    return (
      <div className="col-md-3 col-sm-1 mb-5" id="container">
        <Link to={`pokemon/${this.state.pokemonIndex}`} className="link-map">
          <div className="card">
            <h2 className="card-header" id="pokemon-index">
              {this.state.pokemonIndex}
            </h2>

            <div className="card-body mx-auto">
              <h2 className="pokemon-name">
                {this.state.name
                  .toLowerCase()
                  .split(" ")
                  .map(
                    (letter) =>
                      letter.charAt(0).toUpperCase() + letter.substring(1)
                  )
                  .join(" ")}
              </h2>
              <img
                src={this.state.imgUrl}
                alt={this.state.name}
                className="pokemon-img"
              ></img>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
