// import { useState } from "react";

// function Data() {
//   const [searctdata, setSearchdata] = useState("");

//   return <div className="">
// <input type="text"
// placeholder="Search....."
// onChange={(event) => {
//     setSearchdata(event.target.value);
// }}
// />

//   </div>;
// }
// import searchtest from "./searchtest.json";

// function search() {
//   return (
//     <div>
//       <input type="text" placeholder="Search......."
//       onChange={(event) =>{
//           setsearch
//       }}></input>
//       {searchtest.map((beer) => {
//         return (
//           <div className="user" name={name}>
//             <p>{beer.name}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
// export default Data;

import React, { useState } from 'react';


// This holds a list of some fiction people
// Some  have the same name but different age and id
const USERS = [
  { id: 1, name: 'Andy', age: 32 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Tom Hulk', age: 40 },
  { id: 4, name: 'Tom Hank', age: 50 },
  { id: 5, name: 'Audra', age: 30 },
  { id: 6, name: 'Anna', age: 68 },
  { id: 7, name: 'Tom', age: 34 },
  { id: 8, name: 'Tom Riddle', age: 28 },
  { id: 9, name: 'Bolo', age: 23 },
];

function App() {
  // the value of the search field 
  const [name, setName] = useState('');

  // the search result
  const [foundUsers, setFoundUsers] = useState(USERS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = USERS.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  return (
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />

      <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((beer) => (
            <li key={user.id} className="user">
              <span className="user-id">{user.id}</span>
              <span className="user-name">{user.name}</span>
              <span className="user-age">{user.age} year old</span>
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import Link from "next/link";
// import Detail from "./Detail";
// import BeerSearch from "../components/BeerSearch";
// import react from "react";
// import searchtest from './searchtest.json'
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

// export default Page;

// class Page extends React.Component {
//   static async getInitialProps(ctx) {
//     const res = await fetch("https://api.punkapi.com/v2/beers");
//     // const [searchText, setSearchText] = useState (); 
//     const json = await res.json();
  
   

//     return { list_beer: json };
    
//   }

  

//   render() {
//     return (
//       <div>
//         {}
//         <div className="index">
//           <headder className="index-header">
//             <p>Listbeer</p>
//           </headder>
//           <BeerSearch/>
//           <section className="index-section">
            
//             <div className="index-containner">
           
//               <div className="beer-random">{/* <BeerRandom /> */}</div>
//               {/* <div className="index-grid">{beerElements}</div> */}
//               {this.props.list_beer
//                 // .filter((list_beer) => {
//                 //   return list_beer.name.includes(searchText)
//                 // })
//                 .map(function (l_b, index) {
//                   return (
//                     <div className="index-grid">
//                       <i class="fa fa-search" aria-hidden="true"></i>
//                       <div className="beer-item">
//                         <table>
//                           <tr>
//                             <td>
//                               <img
//                                 src={l_b.image_url}
//                                 width="50%"
//                                 height="100%"
//                               />
//                             </td>
//                             <td>
//                               <Link href={`/Detail?id=${String(l_b.id)}`}>
//                                 {/* <Link href="Detail"> */}
//                                 <div>
//                                   <h4>{l_b.name}</h4>
//                                 </div>
//                               </Link>
//                             </td>
//                           </tr>
//                         </table>
//                       </div>
//                     </div>
//                   );
//                 })}
//             </div>
//           </section>
//         </div>
//       </div>
      
//     );
//   }
// }

// export default Page;
