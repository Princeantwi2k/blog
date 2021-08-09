import React, { Component } from 'react';

import Product from './Component/Product'
import Menu from './Component/Menu/Menu'
import MenuCaro from './Component/MenuCaro/MenuCaro'
import { Container, Row ,Col} from 'react-bootstrap';
import Delivery from './Component/Delivery/Delivery'
import Nav from './Component/Navber/Nav'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Official from './Component/Official/Official';
import Deli from './Component/Deli/Deli';
import Brand from './Component/Brand/Brand'
import Olympic from './Component/Brand/Olympics'
import Andriod from './Component/Android/Android'
import Discount from './Component/Discount/Discount'
import axios from 'axios';
import Iphone from './Component/Iphone/Iphone';
import Fashion from './Component/Fashion/Fashion';
import Fashion1 from './Component/Fashion/Fashion1';
import Fashion2 from './Component/Fashion/Fashion2';
import Fashion3 from './Component/Fashion/Fashion3';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      topsell:[{
        name:"Nova Professional Rechargeable Hair Trimmer",
        price:"GH₵ 26.00",
        imgUrl:"https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/06/962571/1.jpg?3169"
      },
      {
        name:'E-Life 17G1 Digital Satellite TV - 17" Black',
        price:"GH₵ 370.50",
        imgUrl:"https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/81/677131/1.jpg?6433"
      },
      { 
        name:'Rectangle Computer Glasses',
        price:"GH₵ 46.00",
        imgUrl:"https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/36/431171/1.jpg?5802"
      },
      {
        name:'T WS Bluetooth headset + ios smart watch',
        price:"GH₵ 98.00",
        imgUrl:"https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/09/930512/1.jpg?5158"
      },
      {
        name:'LLOYD V989S USB 3.1 Mini Bass Subwoofer ',
        price:"GH₵ 225.00",
        imgUrl:"https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/53/187902/1.jpg?4570"
      },
      ],
      phone:[{
        name:"Nova Professional Rechargeable Hair Trimmer",
        price:"GH₵ 26.00",
        imgUrl:"https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/06/962571/1.jpg?3169"
      },
      {
        name:'E-Life 17G1 Digital Satellite TV - 17" Black',
        price:"GH₵ 370.50",
        imgUrl:"https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/81/677131/1.jpg?6433"
      },
      { 
        name:'Rectangle Computer Glasses',
        price:"GH₵ 46.00",
        imgUrl:"https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/36/431171/1.jpg?5802"
      },
      {
        name:'T WS Bluetooth headset + ios smart watch',
        price:"GH₵ 98.00",
        imgUrl:"https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/09/930512/1.jpg?5158"
      },
      {
        name:'LLOYD V989S USB 3.1 Mini Bass Subwoofer ',
        price:"GH₵ 225.00",
        imgUrl:"https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/53/187902/1.jpg?4570"
      },
      ],
      tv:[]
    }
    
  }
  componentDidMount () {
    axios.get().then((response)=>{
      this.setState({
  tv:response.data.result
      })
    }).catch(
      (erro)=>{
        console.log(erro)
      }
    )
  }


  render() {
    return (
      <Router>
        <Container>
          <Row>
            <Nav />
            <Col sm={3} md={3}> <Menu /></Col>
            <Col sm={6} md={6}><MenuCaro/></Col>
            <Col sm={3} md={3}><Delivery /></Col>
            <Official />
            <h3
            style={{
              textAlign: `center`,
              backgroundColor: `orangered`,
              color: `white`,
              padding: `20px`,
            }}
          >
            Top selling items
          </h3>
            <div className="box">
        <Product product={this.state.topsell}/>
        </div>
        <Deli />
        <Brand />
        <Olympic />
        <Andriod />
        <Discount />
        <Iphone />
        <Fashion />
        <Fashion1 />
        <Fashion2 />
        <Fashion3 />
        </Row>
        </Container>
        </Router>
    );
  }
}

export default App;
