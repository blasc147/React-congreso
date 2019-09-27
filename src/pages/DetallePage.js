import React from "react";
import ReactDOM from "react-dom";
import DetalleCurso from "../components/DetalleCurso.js";
import api from '../api';
import Header from '../components/Header';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';



class DetallePage extends React.Component {
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
      this.setState({ modalIsOpen: true });
    };
  
    handleCloseModal = e => {
      this.setState({ modalIsOpen: false });
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
         onCloseModal={this.handleCloseModal}
         onOpenModal={this.handleOpenModal}
         modalIsOpen={this.state.modalIsOpen}
         curso={this.state.data} 
         />


        </React.Fragment>
      );
    }
  }

export default DetallePage;