import React, {Component} from "react";
import {Input, Button} from "react-materialize";
import {Link} from "react-router";
import "./auth.css";

export default class ForgotPassword extends Component {
    constructor() {
        super();
        this.state = { email: "" };
    }

    handleEmailChange() {

    }
    
    handleSubmit() {

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <Input s={12} label="E-mail" type="text"
                    onChangeEmail={this.handleEmailChange.bind(this)} />

                <Button type="submit" waves="light">
                    Enviar
                </Button>

                <Link to="/entrar">
                    Entrar
                </Link>
            </form>
        )
    }
}