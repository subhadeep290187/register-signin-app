import './App.css';
import { BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';
import Step1 from './Forms/Step1/step1'
import Step2 from './Forms/Step2/step2';
import { useEffect, useState } from 'react';
import ApiCall from './Services/apiRequest';
import { StoreContent } from './Context/content';

export interface ContextData {
  fname?: string,
  lname?: string,
  phone?: string,
  reguiredMsg?: string,
  noOnly?: string
}
function App() {

  const[res, setRes] = useState <any>();

  const getApiCall = async()=>{
    // fetch("../src/TextDocument/text.json")
    const response:any = await ApiCall.get('./TextDocument/text.json')
    console.log(response)
    if(response){
      setRes(response)
    }else{
      setRes(null)
    }
  }
  useEffect(()=>{
      getApiCall();
  },[])
  return (<>
    {res && <StoreContent.Provider value={res}>
      <div className="container">
        <header className="col-md-12">Register</header>
        <section>
            <Router>
            <Switch>
            <Route exact path="/">
              {/* <Home /> */}
              <Step1 />
            </Route>
            <Route exact path="/register">
              {/* <Home /> */}
              <Step1 />
            </Route>
            <Route exact path="/review">
              {/* <Home /> */}
              <Step2 />
            </Route>
            
          </Switch>
            </Router>
        </section>
        <footer className="col-md-12">Footer</footer>
      </div>
    </StoreContent.Provider>}
    {!res&& "loading..."}
    </>
  );
}

export default App;
