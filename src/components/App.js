import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Cursos from '../pages/Cursos'
import AddCurso from '../pages/AddCurso'
import DetalleCursoContainer from '../pages/DetalleCursoContainer'
import EditCurso from '../pages/EditCurso'
//import Home from '../pages/Home'
import Layout from './Layout'
import NotFound from './NotFound'


function App() {
  return (
    <BrowserRouter>
      <Layout>
      <Switch>
        <Route exact path="/cursos" component={Cursos} />
        <Route exact path="/curso/new" component={AddCurso} />
        <Route exact path="/curso/:handle" component={DetalleCursoContainer} />
        <Route exact path="/curso/:handle/edit" component={EditCurso} />
        <Route path="/404" component={NotFound} />
        <Redirect from="" to="/cursos"/>
      </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
