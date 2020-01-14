import React, { Component } from 'react';
import Navi from './Navi'
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import {Container,Row,Col} from 'reactstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//title = ile props oluşturuldu.Yani App.js'den CategoryList.js'e read only veri akışı sağlandı.

export default class App extends Component {

  state={currentCategory:"",products:[]};

  componentDidMount(){
    this.getProducts();
}


//ClickChange fonk. yazıyoruz
changeCategory=(category)=>{
  this.setState({currentCategory:category.categoryName})
  this.getProducts(category.id);
};

getProducts=categoryId => {
  let url="http://localhost:3000/products";
  if(categoryId){
    url+="?categoryId="+categoryId;
  }
  fetch(url)
  .then(response=>response.json()).then(data=>this.setState({products:data}));;
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
          <ProductList products={this.state.products} currentCategory={this.state.currentCategory}  info={productInfo}></ProductList>
          </Col>       
        </Row>
        </Container>
    </div>
 
);

  }
}




