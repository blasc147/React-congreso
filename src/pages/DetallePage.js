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
        };

    componentDidMount(){
      this.getdetalle();
    }

    getdetalle = async () => {
        this.setState({ loading:true, error:null});
       
        try{
            const response = await api.cursos.read(this.props.match.params);
            const data = await response.json();
            this.setState({
                loading:false,
                data:  data ,    
            })
            console.log(data);


        }catch(error){
          console.log("error en la pagina");
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

        <DetalleCurso curso={this.state.data} />


        </React.Fragment>
      );
    }
  }

export default DetallePage;