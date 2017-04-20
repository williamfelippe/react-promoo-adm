import React, {Component} from "react";
import {Container, Row, Col} from "reactstrap";
import {Link} from "react-router";
import logo from "../images/logo.png";

export default class NoMatch extends Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col xs="12">
                        <Link to="/">
                            <img alt="Promoo" src={logo} className="responsive-img"/>
                        </Link>

                        <h1 className="404">
                            404
                        </h1>

                        <p>
                            Você acessou uma página que não existe
                        </p>
                    </Col>
                </Row>
            </Container>
        )
    }
}