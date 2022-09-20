import { React, useContext} from "react";
import ProductCard from "../components/ProductCard";
import { ProductContext } from "../context/productContext";
import Paginate from "../components/Paginate";
import FilterProducts from "../components/FilterProducts";

function Productos() {

  const {productsLength,currentProducts,paginate,productsPerPage, setActiveCategory} = useContext(ProductContext);
  
  return (
    <>
      <main className="container">
        <FilterProducts
        setActiveCategory={setActiveCategory}
        />
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
