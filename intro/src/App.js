import React, { Component } from 'react';
import Navi from './Navi'
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import {Container,Row,Col} from 'reactstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//title = ile props oluşturuldu.Yani App.js'den CategoryList.js'e read only veri akışı sağlandı.

export default class App extends Component {

  state={currentCategory:""}

//ClickChange fonk. yazıyoruz
changeCategory=(category)=>{
  this.setState({currentCategory:category.categoryName})
}

  render() {
    let productInfo={title:"ProductList",baskaBiSey:"bisey"}
    let categoryInfo={title:"CategoryList"}
    //this kelimesi=CategoryList'e denk geliyor.
return (
  <div>
      <Container>
        <Row>
<Navi></Navi>
        </Row>
        <Row>
          <Col xs="3">        
          <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo}></CategoryList>
          </Col> 
          <Col xs="9">
          <ProductList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={productInfo}></ProductList>
          </Col>       
        </Row>
        </Container>
    </div>
 
);

  }
}




