import React from "react";
import beers from "../pages/beer/beer";
import BeerSearch from "./BeerSearch";

const SearchBox =  (props) => {
return (
    <input type='search'
    placeholder={props.placeholder}
        onChange= {props.handleChange}
        
    />
)
}
export default SearchBox;

