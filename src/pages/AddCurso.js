import React from 'react';
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Curso from '../components/Curso'
import CursoForm from '../components/CursoForm'

class AddCurso extends React.Component{
    render() {
        return (
            <div>
            <NavBar />

            <Header titulo="Agregar charla" descripcion="Formulario para agregar charla" ></Header>

            <div className="page-default bg-grey typo-dark">
            <div className="container">
                <div className="row">
                        <div className="col-4">
                            <Curso
                                titulo="El titulo" descripcion="la descripcion"
                            />
                        </div>

                        <div className="col-8">
                            <CursoForm />
                        </div>
                </div>
            </div>
            </div>


        </div>
        );
      }
    
}

export default AddCurso;