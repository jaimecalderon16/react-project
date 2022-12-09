import React from "react";
import { todoContext } from "../todoContext";
import "./TodoSearch.css";

function TodoSearch(){

    const {searchValue, setSearchValue} = React.useContext(todoContext)

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)};
    return(
        <input 
        className="input-buscar" 
        placeholder="Buscar"
        value={searchValue}
        onChange={onSearchValueChange}
        />
    );
}

export {TodoSearch};