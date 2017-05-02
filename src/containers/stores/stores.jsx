import React, {Component} from "react";
import {Row, Col, Container, Button} from "reactstrap";
import {getStores} from "../../services/store-service.js";
import {publishMessage} from "../../utils/messages-publisher.js";
import StoreList from "../../components/stores/store-list";

export default class Stores extends Component {
    constructor() {
        super();
        this.state = {
            stores: [],
            limit: 20,
            offset: 0,
            loading: false
        };
    }

    componentDidMount() {
        this.retrieveStores();
    }

    retrieveStores() {
        this.setState({loading: true});

        const {limit, offset} = this.state;

        getStores(limit, offset)
            .then((response) => {
                if(response.status === 200)
                    this.setState({loading: false, stores: response.data});
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
                            Lojas
                        </h1>
                    </Col>

                    <Col xs="12">
                        <Button className="float-right">
                            Criar loja
                        </Button>
                    </Col>

                    <Col xs={12}>
                        <StoreList stores={this.state.stores} />
                    </Col>
                </Row>
            </Container>
        )
    }
}