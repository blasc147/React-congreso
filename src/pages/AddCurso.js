import React from 'react';
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Curso from '../components/Curso'
import CursoForm from '../components/CursoForm'
import PageLoading from '../components/PageLoading'
import api from '../api';

class AddCurso extends React.Component{
    state= {
        form: {
            titulo: '',
            descripcion: '',
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

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({loading : true, error : null});

        try {
            await api.cursos.create(this.state.form);
            this.setState({loading:false});
            this.props.history.push('/cursos');
        } catch (error) {
            this.setState({loading:false, error:error})
        }
    }

    
    render() {

        if (this.state.loading){
            return <PageLoading></PageLoading>;
        }


        return (
            <React.Fragment>

            <Header titulo="Agregar charla" descripcion="Formulario para agregar charla" ></Header>

            <div className="page-default bg-grey typo-dark">
            <div className="container">
                <div className="row">
                        <div className="col-4">
                            <Curso
                                titulo={this.state.form.titulo || 'Titulo'}
                                descripcion={this.state.form.descripcion || 'Aqui va la Descripcion'}
                                disertante = {this.state.form.disertante || 'Disertante'}
                            />
                        </div>

                        <div className="col-8">
                            <CursoForm 
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error = {this.state.error}
                                />
                        </div>
                </div>
            </div>
            </div>


            </React.Fragment>
        );
      }
    
}

export default AddCurso;