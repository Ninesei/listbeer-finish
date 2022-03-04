import React, { useState } from "react";
import indexHead from "../components/indexHead";
import Beeritem from "../components/Beeritem";
import Beerpost from "../components/Beerpost";
import beers from "./beer/beer";
import Beerrandom from "../components/BeerRandom";
import BeerSearch from "../components/BeerSearch";
import BeerRandom from "../components/BeerRandom";

export default function Index() {
  const [selectedBeer, setselectedBeer] = useState(null);
  const [searchText, setSearchText] = useState("");

  const beer_load = beers;
  console.log(beer_load);

  const beerElements = beers
    .filter((beer) => {
      return beer.title.includes(searchText);
    })
    .map((beer, Index) => {
      return <Beeritem key={Index} beer={beer} />;
    });

  return (
    <div className="index">
      <headder className="index-header">
        <indexHead />
        <p>Listbeer</p>
      </headder>
      <section className="index-section">
        <div className="index-containner">
          <BeerSearch value={searchText} onValueChange={setSearchText} />

          <div className="beer-random">
            <BeerRandom />
          </div>
          <div className="index-grid">{beerElements}</div>
        </div>
      </section>
    </div>
  );
}
//     <div>
//       <div className="index-containner">
//         <BeerSearch value={searchText} onValueChange={setSearchText} />
//         <beer></beer>
//       </div>
//     </div>
//   );
// }
