import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import alertify from "alertifyjs";
import { Switch, Route } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";

//title = ile props oluşturuldu.Yani App.js'den CategoryList.js'e read only veri akışı sağlandı.

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };

  componentDidMount() {
    this.getProducts();
  }

  //ClickChange fonk. yazıyoruz
  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = categoryId => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  };

  //sepete ekleme işlemi
  addToChart = product => {
    let newChart = this.state.cart;
    var addedItem = newChart.find(c => c.product.id === product.id);
    //eger sepette o ürün daha önceden varsda eklenmiyor
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newChart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newChart });
    alertify.success(product.productName + " added to cart!", 2); //parametre olarak uyarı msjı 2 sn kalsın diye yazıyoruz
  };

  //Sepetten ürün çıkarma
  removeFromCart = product => {
    let newChart = this.state.cart.filter(c => c.product.id !== product.id);
    this.setState({ cart: newChart });
  };

  render() {
    let productInfo = { title: "ProductList" };
    let categoryInfo = { title: "CategoryList" };
    //this kelimesi=CategoryList'e denk geliyor.
    return (
      <div>
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              ></CategoryList>
            </Col>
            <Col xs="9">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <ProductList
                      {...props}
                      products={this.state.products}
                      addToChart={this.addToChart}
                      currentCategory={this.state.currentCategory}
                      info={productInfo}
                    />
                  )}
                />
                <Route
                  exact
                  path="/cart"
                  render={props => (
                    <CartList
                      {...props}
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                    />
                  )}
                />
                <Route component={NotFound} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
