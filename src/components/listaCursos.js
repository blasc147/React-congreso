import React from 'react';
import Curso from './Curso'

class ListaCursos extends React.Component {
  

  render(){

    if(this.props.cursos.length === 0){
      return (
        <div>
          <h3>No hay cursos cargados</h3>
        </div>
      );
    }

    return (
        <div className="page-default bg-grey typo-dark">
          <div className="container">
              <div className="row course-container">
  
              {this.props.cursos.map(curso => {
                return (
                  <div className="col-sm-4" key={curso.id}>
                      <Curso  
                        titulo={curso.titulo} 
                        disertante={curso.disertante} 
                        descripcion={curso.descripcion}>
                      </Curso>
                  </div>
                );
              })}
              </div>
          </div>
      </div>
    );
  }
  
  }
  

export default ListaCursos;