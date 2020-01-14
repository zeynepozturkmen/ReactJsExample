import React from 'react';
import Navi from './Navi'
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import {Container,Row,Col} from 'reactstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//title = ile props oluşturuldu.Yani App.js'den CategoryList.js'e read only veri akışı sağlandı.

function App() {
  let productInfo={title:"ProductList",baskaBiSey:"bisey"}
  let categoryInfo={title:"CategoryList"}
  return (
    <div>
      <Container>
        <Row>
<Navi></Navi>
        </Row>
        <Row>
          <Col xs="3">        
          <CategoryList info={categoryInfo}></CategoryList>
          </Col> 
          <Col xs="9">
          <ProductList info={productInfo}></ProductList>
          </Col>       
        </Row>
        </Container>
    </div>
 
  );
}

export default App;
