import React from 'react';
import ListaCursos from '../components/listaCursos'
import Header from '../components/Header'
import NavBar from '../components/NavBar'

class Cursos extends React.Component{
    render() {
        return (
            <div className="sticky-menu-deactive">
                <NavBar />

                <Header titulo="Charlas" descripcion="Lista de las charlas del congreso" ></Header>

                <ListaCursos />
            
            </div>
        );
      }
    
}

export default Cursos;