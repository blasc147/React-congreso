import React from "react";
import ReactDOM from "react-dom";
import DetalleCurso from "./DetalleCurso.js";
import api from '../api';
import Header from '../components/Header';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';



class DetalleCursoContainer extends React.Component {
    state = { 
      loading: true,
      error:null,
      data: { },
      modalIsOpen: false,
        };

    componentDidMount(){
      this.getdetalle();
    }

    getdetalle = async () => {
        this.setState({ loading:true, error:null});
       
        try{
            const data = await api.cursos.read(this.props.match.params.handle);
            
            
            
            this.setState({
                loading:false,
                data:  data ,    
            })

        }catch(error){
          console.log("error en la pagina");
           this.setState({ loading:false, error:error });
        }

    };

    handleOpenModal = e => {
      this.setState({ modalIsOpen : true});
    };

    handleCloseModal = e => {
      this.setState({ modalIsOpen : false});
    };

    handleDeleteCurso = async e => {
      console.log("ver");
      this.setState({ loading:true, error:false});

      try {
        await api.cursos.remove(this.props.match.params.handle);
        this.setState({loading:false});
        this.props.history.push('/cursos');

      } catch (error) {
        this.setState({ loading:false, error:error });
        
      }
    };

  
    render() {
        if(this.state.loading === true){
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
                    

        <Header titulo={this.state.data.titulo} ></Header>

        <DetalleCurso 
            curso={this.state.data}
            modalIsOpen={this.state.modalIsOpen}
            onOpenModal={this.handleOpenModal}
            onCloseModal={this.handleCloseModal}
            onDeleteCurso={this.handleDeleteCurso}

        />




        </React.Fragment>
      );
    }
  }

export default DetalleCursoContainer;