import { compile } from "sass";
import "./ItemListContainer.css";
import { Component, useEffect, useState } from "react";
import BaseComponent from "bootstrap/js/dist/base-component";

const MOCK_DATA = [
  {
    id: 1,
    nombre: "producto 1",
    descripcion: "fsdamflkasndisdojfioas",
    precio: 1500,
    img: "https://dummyimage.com/200x200/000/fff",
  },
  {
    id: 2,
    nombre: "producto 2",
    descripcion: "fsdamflkasndisdojfioas",
    precio: 1500,
    img: "https://dummyimage.com/200x200/000/fff",
  },
  {
    id: 3,
    nombre: "producto 3",
    descripcion: "fsdamflkasndisdojfioas",
    precio: 1500,
    img: "https://dummyimage.com/200x200/000/fff",
  },
  {
    id: 4,
    nombre: "producto 4",
    descripcion: "fsdamflkasndisdojfioas",
    precio: 1500,
    img: "https://dummyimage.com/200x200/000/fff",
  },
  {
    id: 5,
    nombre: "producto 5",
    descripcion: "fsdamflkasndisdojfioas",
    precio: 1500,
    img: "https://dummyimage.com/200x200/000/fff",
  },
  {
    id: 6,
    nombre: "producto 6",
    descripcion: "fsdamflkasndisdojfioas",
    precio: 1500,
    img: "https://dummyimage.com/200x200/000/fff",
  },
];

const PedirDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MOCK_DATA);
    }, 2000);
  });
};

const ItemListContainer = () => {
  const [Productos, setProductos] = useState([]);
  console.log(Productos);

  useEffect(() => {
    PedirDatos()
      .then((res) => {
        setProductos(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="listcontainer">
      <h2>Item List Container</h2>
      <hr />
      {Productos.length === 0
        ? "no hay productos todavia"
        : "se cargaron los productos"}
    </div>
  );
};

export default ItemListContainer;
