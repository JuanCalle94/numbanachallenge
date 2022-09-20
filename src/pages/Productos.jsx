import { React, useContext } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { ProductContext } from "../context/productContext";
import Paginate from "../components/Paginate";

function Productos() {

  const {productsLength,currentProducts,paginate,productsPerPage} = useContext(ProductContext);

  return (
    <>
      <Header />
      <main className="container">
        <h2 className="main__tittle">Productos</h2>
        <div className="products">
          {currentProducts && currentProducts.map((product) => {
            return <ProductCard {...product} key={product.id} />;
          })}
        </div>
        <Paginate
        productsPerPage = {productsPerPage}
        totalProducts = {productsLength}
        paginate = {paginate}
        />
      </main>
    </>
  );
}

export default Productos;
