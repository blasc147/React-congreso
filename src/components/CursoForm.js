import React from 'react';


class CursoForm extends React.Component{



    render() {
        return (
            <div className="widget">
                <h3 className="widget-title">Formulario</h3>

                    <form>
                    <div className="form-group">
                        <label>Titulo</label>
                        <input
                        className="form-control"
                        type="text"
                        name="firstName"
                        />
                    </div>
                    <div className="form-group">
                        <label>Descripcion</label>
                        <input
                        className="form-control"
                        type="text"
                        name="firstName"
                        />
                    </div>
                    <div className="form-group">
                        <label>Disertante</label>
                        <input
                      
                        className="form-control"
                        type="text"
                        name="firstName"
                        />
                    </div>

                    <button className="btn btn-primary">
                        Enviar
                    </button>
                    </form>
             </div>
        );
      }
    
}


export default CursoForm;