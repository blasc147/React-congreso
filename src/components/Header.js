

import React from 'react';
import './styles/navbar.css';

class Header extends React.Component{
    render() {

        return (
            <div className="page-header bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        
                        <div className="page-header-wrapper">
                    
                            <h3 className="title">{this.props.titulo}</h3>
                            <h6 className="sub-title">{this.props.descripcion}</h6>
                            <ol className="breadcrumb">
                                <li><a href="index.html">Home</a></li>
                                <li className="active">{this.props.titulo}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
      }
    
}

export default Header;