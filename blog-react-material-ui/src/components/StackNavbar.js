import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './StackNavbar.css'

export default class StackNavbar extends Component {
  render() {
    return (
        <Nav bsStyle="tabs" stacked >
          <NavItem eventKey={1} componentClass={Link} href="/" to="/">
            Home
          </NavItem>
          <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
            About
          </NavItem>
          <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
            News
          </NavItem>
          <NavItem eventKey={4} componentClass={Link} href="/products" to="/products">
            Products
          </NavItem>
        </Nav>
    )
  }
}