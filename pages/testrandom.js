import React, { Component,useState, useEffect } from "react";
import axios from "axios";
import Beeritem from "../components/Beeritem";
import BeerRandom from "../components/BeerRandom";
import Link from "next/link";
import RELoading from "./RELoading";
import Lottie from "react-lottie";

// function Button(){
//   const [name,setName] = useState('Click pls');
// }

export default class New extends Component {
  static async getInitialProps() {
    const res = await axios.get(`https://api.punkapi.com/v2/beers/random`);
    const beerList = res.data;


    return {
      beerList: beerList
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      beerList: props.beerList,
      reload: props.BeerRandom
      
    };
  }
  
  componentDidMount () {
    setTimeout(() => { this.setState({ test: !this.state.test }) }, 5000);

  }

  render() {
    return (
      <div>
        <div className="beer-random">
           
         <button onClick={() => 
          reload(beer)}>Click </button>
          {/*หน้านี้น่าจะต้องทำเป็นปุ่ม Random ปุ่มเดียว แล้วตอนกด ค่อยแสดง ออกมา แต่ต้องแสดงโหลดก่อนแล้วข้อมูลค่อยมา */}
        </div>
        {this.state.beerList.map((beer) => {
          return (
            <div className="random-grid">
              <div className="random-item img">
                <img src={beer.image_url} width="200px" height="50%" />
              </div>
              <div class="col-md-3"></div>
              <h3> <a>ID :</a></h3> {beer.id}
                <br />
                <h3> <a>name :</a></h3> {beer.name}
                <br />
                <h3> <a>tagline :</a></h3> {beer.tagline}
                <br />
               <h3><a>description : </a></h3> {beer.description}
                <br />
            </div>
          );
        })}
      </div>
    );
  }
}
