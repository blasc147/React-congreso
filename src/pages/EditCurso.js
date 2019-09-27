import React from 'react';
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Curso from '../components/Curso'
import CursoForm from '../components/CursoForm'
import PageLoading from '../components/PageLoading'
import api from '../api';

class EditCurso extends React.Component{
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

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async e => {

        try {
          const data = await api.cursos.read(this.props.match.params.handle);
          console.log(this.props.match.params.handle); 
          this.setState({loading:false, form:data});

        } catch (error) {
           this.setState({loading: false, error:error});
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({loading : true, error : null});

        try {
           //update()
           //setstate
           //this.props.history.push('/cursos') 
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

            <Header titulo="Editar charla" descripcion="Formulario para editar charla" ></Header>

            <div className="page-default bg-grey typo-dark">
            <div className="container">
                <div className="row">

                        <div className="col-12">
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

export default EditCurso;