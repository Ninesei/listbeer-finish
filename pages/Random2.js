import React, { Component } from "react";
import RELoading from "./RELoading";
import Lottie from "react-lottie";

let onbuttonclick = (text) => {
  alert(text);
};

const a = 10;
export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null,
      loading: true,
    };
  }
  componentDidMount = async () => {
    const res = await fetch(`https://api.punkapi.com/v2/beers/random`);
    const json = await res.json();
    console.log(json);

    this.setState({
      beer: json[0],
      loading: false,
    });
    setTimeout(() => {
      this.setState({});
    }, 10000);
  };

  onClick = async () => {
    this.setState({
      loading: true,
    });

    const res = await fetch(`https://api.punkapi.com/v2/beers/random`);
    const json = await res.json();

    setTimeout(
      () =>
        this.setState({
          loading: false,
          beer: json[0],
        }),
      10000
    );

    // onbuttonclick ("คุณแน่ใจที่จะลบ!!!!") -sting
    // {} opject
  };

  render() {
    return (
      <div>
        {this.state.Message}
        <button onClick={this.onClick}>Click</button>
        {this.state.loading ? (
          <div>
            {" "}
            <RELoading />{" "}
          </div>
        ) : (
          <div>
            id: {this.state.beer.id} <br />
            name: {this.state.beer.name} <br />
            description: {this.state.beer.description} <br />
            tagline: {this.state.beer.tagline} <br />
            first_brewed: {this.state.beer.first_brewed} <br />
            image_url: {this.state.beer.image_url} <br />
            abv: {this.state.beer.abv} <br />
            ibu: {this.state.beer.ibu} <br />
            target_fg: {this.state.beer.target_fg} <br />
            target_og: {this.state.beer.target_og} <br />
            ebc: {this.state.beer.ebc} <br />
            srm: {this.state.beer.srm} <br />
            ph: {this.state.beer.ph} <br />
            attenuation_level: {this.state.beer.attenuation_level} <br />
          </div>
        )}
      </div>
    );
  }
}

export default index;
