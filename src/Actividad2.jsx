import React from "react";

function Actividad2({ reyes }) {
    
  
  const eliminar=(e)=>{
e.target.parentNode.remove()
  }
  
  const eliminar2=(e)=>{
    e.target.parentNode.remove()
      }
  return (
  <>
 {reyes.filter(e=>!e.nombre.includes('g')).
 map(e=><div key={e.nombre}>{e.nombre}<button
 onClick={eliminar}>Borra
  </button></div>)}     { /*(/**si le pongo el singo ! le digo escoja lo que tiene no la g) */}

<div className="eliminar2">
  <h1>Otra forma</h1>

 {reyes.filter(e=> e.nombre.includes('g')).
 map(e=><div key={e.nombre}>{e.nombre}<button
 onClick={eliminar2}>Borra
  </button></div>)}

</div>
 
     </>
  );
}

export default Actividad2;
