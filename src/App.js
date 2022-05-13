import React from 'react';
import {BrowserRouter} from "react-router-dom";

import{Route } from "react-router";
import Home from "./pages/Home";
import Calculador from "./pages/Calculador";
import Menu from "./components/Menu";
import Recetas from "./pages/Recetas"


function App() {

 

  return (

    <BrowserRouter>
     <Menu/>
      <Route path="/" component={Home} exact />
      <Route path="/calculador" component={Calculador} exact />
      <Route path="/Recetas" component={Recetas} exact />
    </BrowserRouter>
  );
}

export default App;
