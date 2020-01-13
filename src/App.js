import React from 'react';
import Navi from './Navi'
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import {Container,Row} from 'reactstrap';

function App() {
  return (
    <div>
      <Container>
        <Row>
<Navi></Navi>
        </Row>
        <Row>
        <CategoryList></CategoryList>
    <ProductList></ProductList>
        </Row>
        </Container>
    </div>
 
  );
}

export default App;
