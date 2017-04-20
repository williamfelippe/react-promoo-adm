import React, {Component} from "react";
import {Row, Col} from "reactstrap";
import Brand from "./brand";
import "./footer.css";

export default class Footer extends Component {
    render() {
        return (
            <footer className="page-footer">
                <div className="container">
                    <Row>
                        <Col xs={5} m={3}>
                            <Brand />
                        </Col>

                        <Col xs={7} m={9}>
                            <Row className="row">
                                <Col xs={12} m={4} l={3} offset="l3">
                                    <strong className="white-text">Apps</strong>
                                    <ul>
                                        <li>
                                            <a href="#">Android</a>
                                        </li>
                                        <li>
                                            <a href="#">IOS</a>
                                        </li>
                                    </ul>
                                </Col>

                                <Col xs={12} m={4} l={3}>
                                    <strong className="white-text">Redes sociais</strong>
                                    <ul className="moo-social-media">
                                        <li>
                                            <a href="#" target="_blank">
                                                Facebook
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                Twitter
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                Google+
                                            </a>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

                <div className="footer-copyright">
                    <div className="container">
                        <div className="hide-on-small-and-down">
                            Copyright © 2016 por Promoo. Todos os direitos reservados.
                        </div>
                        <div className="hide-on-med-and-up center-align">
                            © Promoo. Todos os direitos reservados.
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}