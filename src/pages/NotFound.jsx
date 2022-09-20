import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <div className="container">
        <div className="notfound">
            <p className="notfound__text">Oo<span className="purple">ps!</span></p>
            <p className="notfound__content"> ERR_CONNECTION<span className="purple">_FAILED</span></p>
            <p className="notfound__save">No entres en panico podemos ayudarte</p>
            <Link to="/">
                <button className="notfound__button" type="submit">Regresar</button>
            </Link>
        </div>
      </div>
    </>
  )
}

export default NotFound