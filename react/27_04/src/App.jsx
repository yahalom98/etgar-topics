import { useEffect, useState } from "react";
import Products from "./components/Products/Products";

export default function App() {
  let [productsApi, setProductApi] = useState([]);

  async function getProducts() {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    setProductApi(data);
    console.log(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {productsApi.map(function (value, id) {
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
