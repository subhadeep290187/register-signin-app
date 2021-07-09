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

  const[height, setHeight] = useState <string>();

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
      // setHeight(`${screen.height*0.80}%`)
  },[])
  return (<>
    {res && <StoreContent.Provider value={res}>
    <header className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand header">Register Page</div>
    </header>
      <div className="container">        
        <section style={{
          height: `${height}`
        }}>
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
      </div>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="footer">Footer</section>
      </footer>
    </StoreContent.Provider>}
    {!res&& "loading..."}
    </>
  );
}

export default App;
