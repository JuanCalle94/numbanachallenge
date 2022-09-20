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
        if(activeCategory === 0){
          setProducts(result.data);
          setFiltered(result.data);
        }
        if(activeCategory === 1){
          setFiltered(result.data.sort((a, b)=>{return a.nombre.localeCompare(b.nombre)}));
        }
        if (activeCategory === 2){
          const filteredAsc = result.data.sort((a, b) => parseFloat(a.precio) - parseFloat(b.precio));
          setFiltered(filteredAsc);
        }
        if (activeCategory === 3){
          const filteredDesc = result.data.sort((a, b) => parseFloat(b.precio) - parseFloat(a.precio));
          setFiltered(filteredDesc);
      }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [activeCategory]);

    // Obtengo lo productos
    const indexOfLastProducts = currentPage * productsPerPage;
    const indexOfFirstProducts = indexOfLastProducts - productsPerPage;
    const currentProducts = filtered.slice(indexOfFirstProducts, indexOfLastProducts);

    // Cambio de pagina
    const paginate = pageNumber => setCurrentPage(pageNumber);

  const values = { productsLength:products.length , currentProducts, paginate, productsPerPage, setActiveCategory};

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
}
