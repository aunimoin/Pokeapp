import React, { Component } from "react";
import "./App.css";
import List from "./components/List.js";
import Profile from "./components/Profile.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeList: null, // we use null to make the initial state empty
      urlList: null,
      pokeDataLoaded: false,
      urlDataLoaded: false
    };

    this.getUrl = this.getUrl.bind(this);
  }
  // initial call to API
  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then(response => response.json())
      .then(data => {
        this.setState({
          pokeList: data.results,
          pokeDataLoaded: true
          // we want to set these two above at the same time
        });
        //console.log(this.state.pokelist)
      })
      .catch(error => console.log(error));
  }

  getUrl(url) {
    // console.log("this is url:", url);
    fetch(`${url}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          urlList: data,
          urlDataLoaded: true
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    // terenary conditions format condition ? (true) : (false)
    return (
      <div className="main">
        {this.state.pokeDataLoaded ? (
          <List
            pokeList={this.state.pokeList}
            getUrl={url => this.getUrl(url)}
          />
        ) : (
          // may be nicer to just bind
          <p className="loading">We are loading!</p>
        )}
        {this.state.urlDataLoaded ? (
          <Profile urlList={this.state.urlList} />
        ) : (
          <p className="loading">Choose a poke from the list!</p>
        )}
      </div>
    );
  }
}
export default App;

// class App extends Component {
//   render() {
//     return <div className="Pokemon" />;
//   }
// }
// import React, { Component } from "react";
// import PokeList from "./PokeList";
// import PokeProfile from "./PokeProfile";
//
// const API = "https://pokeapi.co/api/v2/pokemon";
//
// class PokeApp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       pokemonList: [],
//       currentPokemonName: "",
//       currentPokemonInfo: {}
//     };
//   }
//
//   handlePokemonNameClick(pokemonName) {
//     this.setState({
//       currentPokemonName: pokemonName
//     });
//     fetch(API + "/" + pokemonName)
//       .then(response => response.json())
//       .then(pokemonInfoJson => {
//         this.setState({
//           currentPokemonInfo: pokemonInfoJson
//         });
//       });
//   }
//
//   componentDidMount() {
//     fetch(API + "/?limit=151")
//       .then(response => response.json())
//       .then(pokemonListJson => {
//         this.setState({
//           pokemonList: pokemonListJson.results
//         });
//       });
//   }
//
//   render() {
//     let { pokemonList } = this.state;
//     return (
//       <div className="App">
//         <header>
//           <h1>WELCOME TO THE POKÉAPP!</h1>
//         </header>
//         <div className="col-container">
//           <PokeList
//             pokemonList={this.state.pokemonList}
//             onPokemonNameClick={e => this.handlePokemonNameClick(e)}
//           />
//           <PokeProfile currentPokemonInfo={this.state.currentPokemonInfo} />
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
