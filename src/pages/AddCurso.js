import React from 'react';
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Curso from '../components/Curso'
import CursoForm from '../components/CursoForm'

class AddCurso extends React.Component{
    state= {
        form: {
            titulo: 'titulo',
            descripcion: 'descripcion',
            disertante:'',
        },
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        }

        )
    };
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
                                titulo={this.state.form.titulo}
                                descripcion={this.state.form.descripcion}
                                disertante = {this.state.form.disertante}
                            />
                        </div>

                        <div className="col-8">
                            <CursoForm 
                                onChange={this.handleChange}
                                formValues={this.state.form}
                                />
                        </div>
                </div>
            </div>
            </div>


        </div>
        );
      }
    
}

export default AddCurso;