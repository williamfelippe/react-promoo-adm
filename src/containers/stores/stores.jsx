import React, {Component} from "react";
import {Row, Col} from "reactstrap";
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
                <Col xs={12}>
                    <h1>
                        Lojas
                    </h1>
                </Col>

                <Col xs={12}>
                    <StoreList stores={this.state.stores} />
                </Col>
            </Row>
        )
    }
}