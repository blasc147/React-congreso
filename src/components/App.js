import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Cursos from '../pages/Cursos'
import AddCurso from '../pages/AddCurso'
import Layout from './Layout'
import NotFound from './NotFound'


function App() {
  return (
    <BrowserRouter>
      <Layout>
      <Switch>
        <Route path="/cursos" component={Cursos} />
        <Route path="/curso/new" component={AddCurso} />
        <Route path="/404" component={NotFound} />
        <Redirect from="*" to="/404"/>
      </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
