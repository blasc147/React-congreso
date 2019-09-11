import React from 'react';
import ListaCursos from '../components/listaCursos';
import Header from '../components/Header';
import api from '../api';

class Cursos extends React.Component{
    
    state = {
      loading: true,
      error: null, 
      data: undefined
    };

    componentDidMount(){
      this.getCursos();
      
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

    render() {

        if(this.state.loading === true){
          return 'Loading...';
        }

        if (this.state.error) {
          return `Error: ${this.state.error.message}`;
        }
        return (
          <React.Fragment className="sticky-menu-deactive">
            

                <Header titulo="Charlas" descripcion="Lista de las charlas del congreso" ></Header>

                <ListaCursos cursos={this.state.data} />
            
            
            </React.Fragment>
        );
      }
    
}

export default Cursos;