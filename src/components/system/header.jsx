import React, {Component} from "react";
import {Row, Col} from "reactstrap";
import Brand from "./brand";
import Menu from "./menu";

export default class Header extends Component {
    render() {
        return (
            <header>
                <Row>
                    <Col xs={12} m={3}>
                        <Brand />
                    </Col>
                    <Col xs={12} m={9}>
                        <Menu />
                    </Col>
                </Row>
            </header>
        )
    }
}