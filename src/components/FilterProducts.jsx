import React , { useEffect } from "react";

function FilterProducts({products , setFiltered , activeCategory , setActiveCategory}) {

    useEffect (()=>{
      if(activeCategory === 1){
          products.sort(function(a, b) {
          return a.nombre.localeCompare(b.nombre);
       });
      } else if (activeCategory === 2){
          const filteredAsc = products.sort((a, b) => parseFloat(a.precio) - parseFloat(b.precio));
          return setFiltered(filteredAsc);
      } else if (activeCategory === 3){
          const filteredDesc = products.sort((a, b) => parseFloat(b.precio) - parseFloat(a.precio));
          return setFiltered(filteredDesc);
      }
    }, [activeCategory] )
  
    return (
      <>
        <div className="nav__general">
          <button onClick={()=>{setActiveCategory(1)}}>Nombre</button>
          <button onClick={()=>{setActiveCategory(2)}}>Precio asc</button>
          <button onClick={()=>{setActiveCategory(3)}}>Precio desc</button>
        </div>
      </>
    );
  }

export default FilterProducts;
