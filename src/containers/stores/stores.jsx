import React, {Component} from "react";
import {Row} from "react-materialize";
import StoreList from "../../components/stores/store-list";

export default class Stores extends Component {
    constructor() {
        super();
        this.state = {
            stores: {},
            loading: false
        };
    }

    render() {
        return (
            <Row>
                <Col s={12}>
                    <h1>
                        Lojas
                    </h1>
                </Col>

                <Col s={12}>
                    <StoreList stores={this.state.stores} />
                </Col>
            </Row>
        )
    }
}