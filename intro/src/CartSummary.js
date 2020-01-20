import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Badge
  } from 'reactstrap';

export default class CartSummary extends Component {
  renderSummary(){
    return (
      <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Your Cart - {this.props.cart.length}
      </DropdownToggle>
      <DropdownMenu right>
          {
              this.props.cart.map(cartItem => (
                <DropdownItem key={cartItem.product.id}>
            {cartItem.product.productName}
              <Badge color="success">{cartItem.quantity}</Badge>
                </DropdownItem>
              ))
          }


        <DropdownItem divider />
        <DropdownItem>Reset</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
    );
  }
  renderEmptyCart(){
    return(
      <NavItem>
      <NavLink>Empty Cart</NavLink>
    </NavItem>
    )

  }
  render() {
    return (
      <div>
       {this.props.cart.length>0 ? this.renderSummary() : this.renderEmptyCart()}
      </div>
    );
  }
}
