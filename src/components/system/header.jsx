import React, {Component} from "react";
import {Row, Col, Container} from "reactstrap";
import Brand from "./brand";
import Menu from "./menu";
import "./header.css";

export default class Header extends Component {
    render() {
        return (
            <header>
                <Container>
                    <Row>
                        <Col xs={12} md={3}>
                            <Brand />
                        </Col>
                        <Col xs={12} md={9}>
                            <Menu />
                        </Col>
                    </Row>
                </Container>
            </header>
        )
    }
}