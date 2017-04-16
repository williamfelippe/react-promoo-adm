import React, {Component} from "react";
import {Input, Button} from "react-materialize";
import {Link} from "react-router";
import "./auth.css";

export default class Signin extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        };
    }

    handleEmailChange(event) {

    }

    handlePasswordChange(event) {
        
    }

    handleSubmit() {

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <Input s={12} label="E-mail" type="text"
                    onChangeEmail={this.handleEmailChange.bind(this)} />

                <Input s={12} label="Senha" type="password"
                    onChangePassword={this.handlePasswordChange.bind(this)} />

                <Button type="submit" waves="light">
                    Entrar
                </Button>

                <Link to="/esqueci-a-senha">
                    Esqueci minha senha
                </Link>
            </form>
        )
    }
}