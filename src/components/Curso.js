import React from 'react';
import cursoImg from './images/course-02.jpg'
import teacherImg from './images/thumb-teacher-02.jpg'
import './styles/curso.css';

class Curso extends React.Component{
    render() {
        return (
            <div className="col-sm-4">
            
            <div className="course-wrapper">
                
                <div className="course-banner-wrap">
                    <img alt="Course" className="img-responsive miImagen" src={cursoImg}  />
                    <span className="cat bg-pink">Medicine</span>
                </div>
                <div className="course-detail-wrap">
                    
                    <div className="teacher-wrap">
                        <img alt="Course" className="img-responsive imgTeacher" src={teacherImg} />
                        <h5><small>with</small> <span>Marry</span></h5>
                    </div>
                    <div className="course-content">
                        <h4><a href="course-single-left.html">Chemical Engineering</a></h4>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those intereste...</p>
                        <a href="#" className="btn">Apply Now</a>
                    </div>
                </div>
            </div>
        </div>
        );
      }
    
}

export default Curso;