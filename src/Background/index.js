import React from 'react';

import './Background.css';

function Background({children}) {
  return (
    <>
      <div className="context">
        {children}
      </div>
      <div className="area" >
        <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
        </ul>
      </div >
    </>
  );
}

export {Background}
