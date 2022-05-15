import React from 'react';
import Loguito from '../imagenes/freecodecamp-logo.png'
import '../App.css';

function Logo() {
  return (
    <div className='freecodecamp-logo-contenedor'>
      <img
        src={Loguito}
        className='freecodecamp-logo'
        alt='logo de freecodecamp'
      />
    </div>
  );
}

export default Logo