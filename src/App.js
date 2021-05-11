
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

import {BrowserRouter as Router, Switch, Route} from 
'react-router-dom';
import Home from './components/page/HomePage/Home';
import Footer from './components/page/Footer/Footer';


function App() {
  return (
   <Router>
 
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Footer/>
      </Router>
  );
}

export default App;
