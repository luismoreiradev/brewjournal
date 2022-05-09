import React from 'react';
import {BrowserRouter} from "react-router-dom";

import{Route } from "react-router";
import Home from "./pages/Home";
import Calculador from "./pages/Calculador";
import Menu from "./components/Menu";
import Diario from "./pages/Diario"


function App() {

 

  return (

    <BrowserRouter>
     <Menu/>
      <Route path="/" component={Home} exact />
      <Route path="/calculador" component={Calculador} exact />
      <Route path="/diario" component={Diario} exact />
    </BrowserRouter>
  );
}

export default App;
