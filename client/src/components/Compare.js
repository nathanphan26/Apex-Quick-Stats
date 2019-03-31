import React, { Component } from 'react';

import { Container, Row, Col, InputGroup, Input, Button } from 'reactstrap';

class Compare extends Component {

    state = {
        username1: "",
        username2: "",
        profile1: "",
        profile2: ""
    }

    render() {
        let { username1 } = this.state.username1;
        let { username2 } = this.state.username2;

        return (
            <Container>
                <Row>
                    <Col xs="6">
                        <InputGroup className="mt-2">
                            <Input type="text" onChange={this.handleChange} value={username1} /> 
                            <Button color="primary" onClick={this.searchUsername}>Search</Button>
                        </InputGroup>
                    </Col>
                    <Col xs="6">
                        <InputGroup className="mt-2">
                            <Input type="text" onChange={this.handleChange} value={username2} /> 
                            <Button color="primary" onClick={this.searchUsername}>Search</Button>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Compare;