import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
 HEAD
   //props anahtar kelimesi ile props oluşturuldu.Super kelimesiyle extends edildi.
    //Eski sürümde bunu yazmaya zorunlu tutuyor galiba,şuanda bunu yazmadan direk,this.props diyerek erişebiliriz.
  state={ categories:[
            {categoryId:1,categoryName:"Beverages"},
            {categoryId:2,categoryName:"Condinents"},
            ],
        };
  //componentlerin sayfaya yerleşmesini sağlıyor
        componentDidMount(){
            this.getCategories();
        }

  //props anahtar kelimesi ile props oluşturuldu.Super kelimesiyle extends edildi.
  //Eski sürümde bunu yazmaya zorunlu tutuyor galiba,şuanda bunu yazmadan direk,this.props diyerek erişebiliriz.
  state = {
    categories: [
      { categoryId: 1, categoryName: "Beverages" },
      { categoryId: 2, categoryName: "Condinents" }
    ]
  };
  //komponentlerin sayfaya yerleşmesini sağlıyor
  componentDidMount() {
    this.getCategories();
  }


  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then(response => response.json())
      .then(data => this.setState({ categories: data }));
  };

  render() {
    //this kelimesi=CategoryList'e denk geliyor.
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <h3>{this.state.counter}</h3>
        <ListGroup>
          {this.state.categories.map(category => (
            <ListGroupItem
              key={category.id}
              active={
                category.categoryName === this.props.currentCategory
                  ? true
                  : false
              }
              onClick={() => this.props.changeCategory(category)}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.props.currentCategory}</h4>
      </div>
    );
  }
}
