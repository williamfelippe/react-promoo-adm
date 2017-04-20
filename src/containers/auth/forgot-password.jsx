import React, {Component} from "react";
import {Container, Row, Col, Form, FormGroup, Input, Button} from 'reactstrap';
import {Link, browserHistory} from "react-router";
import {forgotPassword} from "../../services/auth-service";
import {createUserStore} from "../../utils/user-information-store";
import {REQUEST_SUCCESS} from "../../utils/constants";
import logo from "../../images/logo.png";
import "./auth.css";

export default class ForgotPassword extends Component {
    constructor() {
        super();
        this.state = { email: "", loading: false };
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({loading: true});

        forgotPassword({ email: this.state.email})
            .then((response) => {
                const statusCode = response.status;

                if(statusCode === REQUEST_SUCCESS) {
                    createUserStore(response.data);
                    browserHistory.push('/');
                }
                else {
                    throw new Error(response);
                }
            })
            .catch((error) => {
                console.log(error);
                this.setState({loading: false});
            });
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs="12" md={{ size: 6, offset: 3 }}>
                        <Link to="/">
                            <img alt="Promoo" src={logo} className="responsive-img"/>
                        </Link>

                        <h1 className="center-align">
                            Esqueci minha senha
                        </h1>
                        
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            <FormGroup row>
                                <Col xs={12}>
                                    <Input type="email" name="email" placeholder="E-mail"/>
                                </Col>
                            </FormGroup>

                            <Button type="submit">
                                Enviar
                            </Button>
                        </Form>

                        <Link to="/entrar">
                            Entrar
                        </Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}