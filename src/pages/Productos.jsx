import { React, useState, useEffect } from "react";
import { getData } from "../services/getData";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

function Productos() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData({ path: "list" })
      .then((result) => {
        setProducts(result.data.slice(0, 10));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header />
      <main className="container">
        <h2>Productos</h2>
        <div className="row">
          {products.map((product) => {
            return <ProductCard {...product} key={product.id} />;
          })}
        </div>
      </main>
    </>
  );
}

export default Productos;
