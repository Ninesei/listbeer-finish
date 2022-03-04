import React, { useState } from "react";
import Link from "next/link";
import Detail from "./Detail";
import BeerSearch from "../components/BeerSearch";
import react from "react";
import SearchBox from "../components/SearchBox";
// class Page extends React.Component {
//   static async getInitialProps(ctx) {
//     const res = await fetch(`https://api.punkapi.com/v2/beers`)
//     const json = await res.json()
// const beerDetail = res.data
//     return {
//        beerDetail: beerDetail
//       }
//   }
//   // async function load_beer() {
//   //   let result = await axios.get(`https://api.punkapi.com/v2/beers`);
//   //   // this.setState({lawListByGroupId:result.data})
//   //   return result.data;
//   // }
//   render() {
//     return (
//     <div>Next stars: {this.props.stars}</div>
//       );
//   }
// }

// export default Page

class Page extends React.Component {
  static async getInitialProps(ctx) {
    const res = await fetch("https://api.punkapi.com/v2/beers");
    // const [searchText, setSearchText] = useState("");
    const json = await res.json();
console.log (json)
    return { list_beer: json };
  }
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      stats: [],
      searchField: "",
      
    };
  }
  componentDidMount= () =>{
    fetch("https://api.punkapi.com/v2/beers");
  }

  render() {
    console.log ('asdasdasdasd')
    console.log(this.props.list_beer)
    console.log (this.state.searchField)


    let filterlist = this.props.list_beer.filter(
      (x) => x.name.toLowerCase().includes(this.state.searchField.toLowerCase()) || this.state.searchField == ""
    );
    return (
      <div>
        {}
        <div className="index">
          <headder className="index-header">
            <p>Listbeer</p>
          </headder>
          <section className="index-section">
            <div className="index-containner">
              <SearchBox
                placeholder="ค้นหา......."
                handleChange={(e) => this.setState({ searchField: e.target.value })}
              />
              <div className="beer-random">{/* <BeerRandom /> */}</div>
              {/* <div className="index-grid">{beerElements}</div> */}
              {filterlist.map(function (l_b, index) {
                return (
                  <div className="index-containner">
                    <div className="index-grid">
                      <div className="beer-item">
                        <table>
                          <tr>
                            <td>
                              <img
                                src={l_b.image_url}
                                width="50%"
                                height="100%"
                              />
                            </td>
                            <td>
                              <Link href={`/Detail?id=${String(l_b.id)}`}>
                                {/* <Link href="Detail"> */}
                                <div>
                                  <h4>{l_b.name}</h4>
                                </div>
                              </Link>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Page;
