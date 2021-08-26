

import React, { Component } from 'react';
import Nav from './Component/Navber/Nav'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import Menu from './Component/Menu/Menu'
import Mobile from './Component/Menu/Menu-Phones/Mobile';
import Home from './Home/Home';
import Laptops from './Laptops/Laptops';
import Footer from './Footer/Footer';
import Tv from "./Tv/Tv"
import Accessories from './Accessories/Accessories';
import Speaker from './Speaker/Speaker';
import Printers from './Printers/Printers';
import Cloth from './Fashion/Cloth';
import Baby from './Baby/Baby';
import Bloglist from './Component/Bloglist/Bloglist';
import Blog1 from './Component/Blog1';
import Blog2 from './Component/Blog2';
import Blog3 from './Component/Blog3';
import Blog4 from './Component/Blog4';
import Blog5 from './Component/Blog5'
import Blog6 from './Component/Blog6';
import Blog7 from './Component/Blog7';


class App extends Component {
  render() {
    return (
      <>
         <Router>
        
        <Container>
          <Row>
           
          <Nav />
            <Menu />
            <Switch>
           <Route exact path="/" component={Home} />
          <Route path="/mobile" component={Mobile} />
           <Route path="/laptops" component ={Laptops} />
           <Route path="/tv" component={Tv} />
           <Route path="/accessories" component={Accessories} />
           <Route path="/speaker" component={Speaker} />
           <Route path="/printer" component={Printers}>
           <Route path="/fashion" component={Cloth} />
           <Route path="/baby" component={Baby} />
           <Route path="/blogs/:id" />
             <Bloglist />
           </Route>
  
          <Route path="/blog1/:id" component={Blog1} />
          <Route path="/blog2/:id" component ={Blog2} />
          <Route path="/blog3/:id" component ={Blog3} />
          <Route path="/blog4/:id" component ={Blog4} />
          <Route path="/blog5/:id" component ={Blog5} />
          <Route path="/blog6/:id" component ={Blog6} />
          <Route path="/blog7/:id" component ={Blog7} />
         
           </Switch>
           </Row>
        </Container>
        <Footer />
        </Router>
      </>
    );
  }
}

export default App;

