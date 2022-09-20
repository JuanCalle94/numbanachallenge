import React from 'react'

const Paginate = ({ productsPerPage, totalProducts, paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className='pagination'>
          {pageNumbers.map(number => (
            <li key={number} className='page-item'>
              <button onClick={() => paginate(number)} type="button" className='page-link'>
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

export default Paginate