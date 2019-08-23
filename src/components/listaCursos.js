import React from 'react';
import Curso from './Curso'

class ListaCursos extends React.Component {
render(){
  return (
      <div className="page-default bg-grey typo-dark">
        <div className="container">
            <div className="row course-container">
            <Curso titulo="Ortopedia" disertante="Dr.Luis Aponte" descripcion="Generalidades, estadificacion y biopsia en Tumores Oseos">
            </Curso>
            
            <Curso titulo="Oncologia" disertante="Dr.German Farfalli " descripcion="Sarcomas de partes blandas - tratamiento quirurgico"/>
            
            <Curso titulo="Oncologia" disertante="Dr.Federico Cayol" descripcion="Osteosarcoma/Sarcoma de Ewing. Rol de la quimioterapia">
            </Curso>
            </div>
        </div>
    </div>
  );
}

}

export default ListaCursos;