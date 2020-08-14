import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Index from "./component/Index"
import Skills from "./component/Skills"
import Projects from "./component/Projects"
import { Route, Switch } from "react-router-dom"
import Contact from "./component/Contact"
import About from "./component/About"
import NotFound from './component/NotFound'
import './App.css';

function App() {
  return (
    <>
      <CssBaseline />
      <Switch>
        <Route exact path="/sumit_mali" component={Index} />
        <Route path="/skills" component={Skills} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/*" component={NotFound} />
      </Switch>

    </>
  );
}

export default App;