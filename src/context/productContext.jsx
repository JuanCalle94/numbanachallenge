import { createContext, React, useState, useEffect } from "react";
import { getData } from "../services/getData";

export const ProductContext = createContext();

export function ProductProvider({ children }) {

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  useEffect(() => {
    getData({ path: "list" })
      .then((result) => {
        setProducts(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

    // Get current posts
    const indexOfLastProducts = currentPage * productsPerPage;
    const indexOfFirstProducts = indexOfLastProducts - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProducts, indexOfLastProducts);
  
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

  const values = { productsLength:products.length , currentProducts, paginate, productsPerPage};

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
}
