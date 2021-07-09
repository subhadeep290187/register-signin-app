import React from 'react';
import './App.css';
import { BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';
import Step1 from './Forms/step1'

function App() {
  return (
    <div className="container">
      <header className="col-md-12">Menu Bar</header>
      <section>
          <Router>
          <Switch>
          <Route exact path="/">
            {/* <Home /> */}
            <Step1 />
          </Route>
          <Route exact path="/step1">
            {/* <Home /> */}
            <Step1 />
          </Route>
          <Route exact path="/step2">
            {/* <Home /> */}
            step2
          </Route>
          
        </Switch>
          </Router>
      </section>
      <footer className="col-md-12">Footer</footer>
    </div>
  );
}

export default App;
