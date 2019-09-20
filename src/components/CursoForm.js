import React from 'react';


class CursoForm extends React.Component{

    //state = {
    //} ;

    handleChange = e => {
      this.setState({
          [e.target.name]: e.target.value,
      });
    };


    render() {
        return (
            <div className="widget">
                <h3 className="widget-title">Formulario</h3>

                    <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>Titulo</label>
                        <input
                        onChange={this.props.onChange}
                        className="form-control"
                        type="text"
                        name="titulo"
                        value = {this.props.formValues.titulo}
                        required />
                    </div>
                    <div className="form-group">
                        <label>Descripcion</label>
                        <input
                        onChange={this.props.onChange}
                        className="form-control"
                        type="text"
                        name="descripcion"
                        value = {this.props.formValues.descripcion}
                        />
                    </div>
                    <div className="form-group">
                        <label>Disertante</label>
                        <input
                        onChange={this.props.onChange}
                        className="form-control"
                        type="text"
                        name="disertante"
                        value = {this.props.formValues.disertante}
                        />
                    </div>

                    {this.props.error && (
                        <div className="alert alert-danger" role="alert">
                        Ocurrio un error: {this.props.error.message}
                      </div>
                    )}

                    <button className="btn btn-primary" onClick={this.handleClick}>
                        Enviar
                    </button>
                    </form>
             </div>
        );
      }
    
}


export default CursoForm;