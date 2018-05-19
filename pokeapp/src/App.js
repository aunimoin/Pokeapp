import React, { Component } from "react";
import "./App.css";
import List from "./components/List.js";
import Profile from "./components/Profile.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokeList: null, // we use null to make the initial state empty
      poke: null,
      listDataLoaded: false,
      pokeDataLoaded: false
    };
    // this binds the getUrl method to the App class
    // this.getUrl = this.getUrl.bind(this);
  }
  // initial call to API
  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then(response => response.json())
      .then(data => {
        this.setState({
          pokeList: data.results,
          listDataLoaded: true
          // we want to set these two above at the same time
        });
        //console.log(this.state.pokelist)
      })
      .catch(error => console.log(error));
  }
  // All methods created in a class Component MUST be "binded"
  // or have fat arrow func. like below instead of getUrl(url)
  getUrl = url => {
    console.log("this is url:", url);
    // fetch("https://pokeapi.co/api/v2/pokemon/1/")
    fetch(`${url}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          poke: data,
          pokeDataLoaded: true
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    // terenary conditions format condition ? (true) : (false)
    return (
      <div className="main">
        {this.state.listDataLoaded ? (
          <List pokeList={this.state.pokeList} getUrl={this.getUrl} />
        ) : (
          // may be nicer to just bind
          <p className="loading">We are loading!</p>
        )}
        {this.state.pokeDataLoaded ? (
          <Profile poke={this.state.poke} />
        ) : (
          <h1 className="loading">Choose a Pokemon from the list!</h1>
        )}
      </div>
    );
  }
}
export default App;
