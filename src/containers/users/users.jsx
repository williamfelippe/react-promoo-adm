import React, {Component} from "react";
import {Row} from "react-materialize";
import UserList from "../../components/users/user-list";

export default class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: {},
            loading: false
        };
    }

    render() {
        return (
            <Row>
                <Col s={12}>
                    <h1>
                        Usuários
                    </h1>
                </Col>

                <Col s={12}>
                    <UserList users={this.state.users} />
                </Col>
            </Row>
        )
    }
}