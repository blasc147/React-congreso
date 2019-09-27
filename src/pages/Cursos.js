import React from 'react';
import ListaCursos from '../components/listaCursos';
import Header from '../components/Header';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';
import loader from '../images/default/preloader-color.gif'


class Cursos extends React.Component{
    
    state = {
      loading: true,
      error: null, 
      data: undefined
    };

    componentDidMount(){
      this.getCursos();

      this.intervalId =setInterval(this.getCursos, 5000);
      
    }

    getCursos = async() => {
        this.setState({ loading: true, error:null});
        
        try{
            const data = await api.cursos.list();
            this.setState({loading:false, data: data});
        }catch(error){
            this.setState({loading:false, error:error});
        }
    };
    componentWillUnmount(){
      clearInterval(this.intervalId);
    }

    render() {

        if(this.state.loading === true && !this.state.data){
          return (
            <PageLoading></PageLoading>
          );
        }

        if (this.state.error) {
          return (
            <PageError></PageError>
          );
        }

        return (
          <React.Fragment className="sticky-menu-deactive">
            

                <Header titulo="Charlas" descripcion="Lista de las charlas del congreso" ></Header>

                <ListaCursos cursos={this.state.data} />
            
                {this.state.loading && <p className="text-center">Loading...</p> }
            </React.Fragment>
        );
      }
    
}

export default Cursos;