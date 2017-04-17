import React, {Component} from "react";
import {Row, Col} from "react-materialize";
import Brand from "./brand";
import Menu from "./menu";

export default class Header extends Component {
    render() {
        return (
            <header>
                <Row>
                    <Col s={12} m={3}>
                        <Brand />
                    </Col>
                    <Col s={12} m={9}>
                        <Menu />
                    </Col>
                </Row>
            </header>
        )
    }
}