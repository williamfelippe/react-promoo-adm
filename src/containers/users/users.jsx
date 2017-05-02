import React, {Component} from "react";
import {Row, Col, Container, Button} from "reactstrap";
import {getUsers} from "../../services/user-service";
import {publishMessage} from "../../utils/messages-publisher";
import UserList from "../../components/users/user-list";

export default class Stores extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            limit: 20,
            offset: 0,
            loading: false
        };
    }

    componentDidMount() {
        this.retrieveUsers();
    }

    retrieveUsers() {
        this.setState({loading: true});

        const {limit, offset} = this.state;

        getUsers(limit, offset)
            .then((response) => {
                if(response.status === 200)
                    this.setState({loading: false, users: response.data});
                else throw new Error(response.data);
            })
            .catch((error) => {
                this.setState({loading: false});
                publishMessage(error);
            });
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12}>
                        <h1>
                            Usuários
                        </h1>
                    </Col>

                    <Col xs="12">
                        <Button className="float-right">
                            Criar usuário
                        </Button>
                    </Col>

                    <Col xs={12}>
                        <UserList users={this.state.users} />
                    </Col>
                </Row>
            </Container>
        )
    }
}