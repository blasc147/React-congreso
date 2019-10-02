import React from 'react';
import Curso from './Curso'
import './styles/curso.css';

function useSearchCurso(cursos){
  const [query, setQuery] = React.useState('');
  const [cursosFiltrados, setCursosFiltrados] = React.useState(cursos);

  React.useMemo(() =>{
    const resultado = cursos.filter(curso => {
      return `${curso.titulo} ${curso.disertante}`.toLowerCase().includes(query.toLowerCase());});
      setCursosFiltrados (resultado);
    }, [cursos, query]);
  
  return [query, setQuery, cursosFiltrados]

}


function ListaCursos(props) {

  const cursos = props.cursos;

  const [query, setQuery, cursosFiltrados] = useSearchCurso(cursos);
  
  console.log(cursosFiltrados);

    if(cursosFiltrados.length === 0){
      return (
        <div className="container">
          <div className="form-group">
              <label >Filtrar</label>
              <input type="text" 
                     className="form-control"
                     value={query}
                     onChange={(e) => {
                        setQuery(e.target.value)
                      }}


              />

            </div>
          <h3>No hay cursos con esa descripcion</h3>
        </div>
      );
    }

    return (
        <div className="page-default bg-grey typo-dark">
          <div className="container">
            <div className="form-group">
              <label >Filtrar</label>
              <input type="text" 
                     className="form-control"
                     value={query}
                     onChange={(e) => {
                        setQuery(e.target.value)
                      }}


              />

            </div>
              <div className="row course-container">
  
              {cursosFiltrados.map(curso => {
                return (
                  <div className="cardCol" key={curso.id}>
                      <Curso  
                        titulo={curso.titulo} 
                        disertante={curso.disertante} 
                        descripcion={curso.descripcion}
                        id = {curso.id}>
                        
                      </Curso>
                  </div>
                );
              })}
              </div>
          </div>
      </div>
    );
  }
  

export default ListaCursos;