import React  from "react";

function FilterProducts({setActiveCategory, activeCategory}) {

    return (
      <>
        <div className="filter">
          <p className="filter__tittle">Filtrar:</p>
          <div className="filter__buttons">
            <button className={activeCategory === 1 ? 'selected' : null} onClick={()=>{setActiveCategory(1)}}>Nombre</button>
            <button className={activeCategory === 2 ? 'selected' : null} onClick={()=>{setActiveCategory(2)}}>Precio asc</button>
            <button className={activeCategory === 3 ? 'selected' : null} onClick={()=>{setActiveCategory(3)}}>Precio desc</button>
          </div>
        </div>
      </>
    );
  }

export default FilterProducts;
