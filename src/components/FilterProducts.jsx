import React , { useEffect } from "react";

function FilterProducts({products , setFiltered , activeCategory , setActiveCategory}) {

    useEffect (()=>{

        console.log({setFiltered});

  
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
