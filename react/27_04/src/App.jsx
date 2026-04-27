import { useEffect, useState } from "react";
import Products from "./components/Products/Products";

import axios from 'axios';
import Nav from "./components/Nav/Nav";

export default function App() {
  let [productsApi, setProductApi] = useState([]);

  // async function getProducts() {
  //   let response = await fetch("https://fakestoreapi.com/products");
  //   let data = await response.json();
  //   setProductApi(data);
  //   console.log(data);
  // }

    async function getProducts() {
    let response = await axios.get('https://fakestoreapi.com/products')
    console.log(response.data);
        setProductApi(response.data);

  }


  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>

      <Nav/>



      {productsApi.map(function (value, id) {
        console.log(value);
        return (
          <Products key={id}
            title={value.title}
            price={value.price}
            description={value.description}
            image={value.image}
          />
        );
      })}
    </div>
  );
}
