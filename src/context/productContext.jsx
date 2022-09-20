import React , { createContext, useState, useEffect } from "react";
import { getData } from "../services/getData";

export const ProductContext = createContext();

export function ProductProvider({ children }) {

  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]); // Filtro de los productos
  const [activeCategory, setActiveCategory] = useState(0); // Activamos filtros para hacer un target (Todos sera la activa por defecto)
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  useEffect(() => {
    getData({ path: "list" })
      .then((result) => {
        setProducts(result.data);
        setFiltered(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

    // Obtengo lo productos
    const indexOfLastProducts = currentPage * productsPerPage;
    const indexOfFirstProducts = indexOfLastProducts - productsPerPage;
    const currentProducts = filtered.slice(indexOfFirstProducts, indexOfLastProducts);

    // Cambio de pagina
    const paginate = pageNumber => setCurrentPage(pageNumber);

  const values = { products, productsLength:products.length , currentProducts, paginate, productsPerPage, setFiltered, activeCategory, setActiveCategory};

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
}
