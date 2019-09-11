import React from 'react';
import ListaCursos from '../components/listaCursos'
import Header from '../components/Header'
import data from '../data.json'

class Cursos extends React.Component{
    
    constructor(props){
      super(props);
      console.log('1. constructor() ');

      this.state = {
        data: [ ],
      };
    }

    componentDidMount(){
      console.log('3. componentDidMount()');

      this.timeOut = setTimeout(() => {
        this.setState({
          data : [ data ],
        });
      }, 3000);
    }

    componentDidUpdate(prevProps, prevState){
      console.log('5. componentDidUpdate');
      console.log({
        propsAnteriores : prevProps,
        stateAnterior: prevState,
      });

      console.log({
        propsActuales: this.props,
        stateActual: this.state,
      });
    }

    componentWillUnmount(){
      console.log('6. componentWillUnmount');
      clearTimeout(this.timeOut);
    }
    
    render() {
        console.log('2/4. render()');
        return (
          <React.Fragment className="sticky-menu-deactive">
            

                <Header titulo="Charlas" descripcion="Lista de las charlas del congreso" ></Header>

                <ListaCursos cursos={this.state.data} />
            
            
            </React.Fragment>
        );
      }
    
}

export default Cursos;