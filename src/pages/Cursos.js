import React from 'react';
import ListaCursos from '../components/listaCursos'
import Header from '../components/Header'
import NavBar from '../components/NavBar'

class Cursos extends React.Component{

    state = {
        data: [
          { id : 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
            titulo: 'titulo',
            descripcion: 'Freda',
            disertante: 'Grady',
          },
          {id : '2de30c42-9deb-40fc-a41f-05e62b5939a7',
            titulo: 'titulo',
            descripcion: 'Major',
            disertante: 'Rodriguez',
          },
          {id : '63c03386-33a2-4512-9ac1-354ad7bec5e9',
            titulo: 'titulo',
            descripcion: 'Daphney',
            disertante: 'Torphy',
          },
        ],
      };
    render() {
        return (
          <React.Fragment className="sticky-menu-deactive">
            

                <Header titulo="Charlas" descripcion="Lista de las charlas del congreso" ></Header>

                <ListaCursos cursos={this.state.data} />
            
            
            </React.Fragment>
        );
      }
    
}

export default Cursos;