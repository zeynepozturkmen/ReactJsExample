import React from 'react';
import Navi from './Navi'
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import {Container,Row,Col} from 'reactstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Container>
        <Row>
<Navi></Navi>
        </Row>
        <Row>
          <Col xs="3">
          <CategoryList></CategoryList>
          </Col> 
          <Col xs="9">
          <ProductList></ProductList>
          </Col>       
        </Row>
        </Container>
    </div>
 
  );
}

export default App;
