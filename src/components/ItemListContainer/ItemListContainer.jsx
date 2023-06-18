import { compile } from "sass"
import "./ItemListContainer.css"
import { Component } from "react"
import BaseComponent from "bootstrap/js/dist/base-component"

const ItemListContainer = ( { mensaje } ) => {
return(
    <div className="listcontainer">
    <h2>Item List Container</h2>
    <hr />
    <p>{mensaje}</p>
    </div>
)
} 

export default ItemListContainer

