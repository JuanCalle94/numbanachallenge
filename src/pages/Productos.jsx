import { React, useContext} from "react";
import ProductCard from "../components/ProductCard";
import { ProductContext } from "../context/ProductContext";
import Paginate from "../components/Paginate";
import FilterProducts from "../components/FilterProducts";

function Productos() {

  const {productsLength,currentProducts,paginate,productsPerPage, setActiveCategory, activeCategory} = useContext(ProductContext);
  
  return (
    <>
      <main className="container">
        <div className="main__nav">
        <h2 className="main__nav__tittle">Productos</h2>
          <FilterProducts
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          />
        </div>
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
