import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from './Login';
  
class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">Apex Quick Stats</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to='/compare'>Compare</NavLink>
                        </NavItem>
                    </Nav>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to='/login'>Login</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
        );
    }
}

export default Header;