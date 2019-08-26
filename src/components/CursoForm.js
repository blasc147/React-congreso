import React from 'react';


class CursoForm extends React.Component{

    state = {
    } ;

    handleChange = e => {
      this.setState({
          [e.target.name]: e.target.value,
      });
    };

    handleClick = e => {
      console.log('Click!!!!');
    };

    handleSubmit = e => {
      e.preventDefault();
      console.log('Formulario enviado!');
      console.log(this.state);
    };

    render() {
        return (
            <div className="widget">
                <h3 className="widget-title">Formulario</h3>

                    <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Titulo</label>
                        <input
                        onChange={this.handleChange}
                        className="form-control"
                        type="text"
                        name="titulo"
                        value = {this.state.titulo}
                        />
                    </div>
                    <div className="form-group">
                        <label>Descripcion</label>
                        <input
                        onChange={this.handleChange}
                        className="form-control"
                        type="text"
                        name="descripcion"
                        value = {this.state.descripcion}
                        />
                    </div>
                    <div className="form-group">
                        <label>Disertante</label>
                        <input
                        onChange={this.handleChange}
                        className="form-control"
                        type="text"
                        name="disertante"
                        value = {this.state.disertante}
                        />
                    </div>

                    <button className="btn btn-primary" onClick={this.handleClick}>
                        Enviar
                    </button>
                    </form>
             </div>
        );
      }
    
}


export default CursoForm;