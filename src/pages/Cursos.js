import React from 'react';
import ListaCursos from '../components/listaCursos'
import Header from '../components/Header'
import NavBar from '../components/NavBar'

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
          data : [

          { id : 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
          titulo: 'titulo',
          descripcion: 'Freda',
          disertante: 'Grady',
        },
        {id : '2de30c42-9deb-40fc-a41f-05e62b5939a7',
          titulo: 'titulo',
          descripcion: 'Major',
          disertante: 'Rodriguez',
        },
        {id : '63c03386-33a2-4512-9ac1-354ad7bec5e9',
          titulo: 'titulo',
          descripcion: 'Daphney',
          disertante: 'Torphy',
        },
          ],
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