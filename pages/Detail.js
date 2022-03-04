import React, { Component } from "react";
import axios from "axios";
import BeerSearch from "../components/BeerSearch";

export default class New extends Component {
  static async getInitialProps(ctx) {
    const res = await axios.get(
      `https://api.punkapi.com/v2/beers/${ctx.query.id}`
    );
    const beerList = res.data;

    return {
      beerList: beerList,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      beerList: props.beerList,
    };
  }

  componentDidMount() {
    console.log("props:", this.props);
    setTimeout(() => {
      // this.setState({name: "parker"})
    }, 3000);
  }

  render() {
    return (
      <div>
        {this.state.beerList.map((beer) => {
          return (
            <div className="index-grid">
              <div className="beer-item">
                <img src={beer.image_url} width="50%" />
                <table>
                <br />
                <h3> <a>ID :</a></h3> {beer.id}
                <br />
                <h3> <a>name :</a></h3> {beer.name}
                <br />
                <h3> <a>tagline :</a></h3> {beer.tagline}
                <br />
               <h3><a>description : </a></h3> {beer.description}
                <br />
                </table>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
