import React, {Component} from "react";
import {Row, Col} from "reactstrap";
import {Link} from "react-router";

export default class StoreItem extends Component {
    render() {
        const {store} = this.props;

        return (
            <Link to={`/loja/${store._id}`}>
                <Row>
                    <Col xs="12">
                        {store.name}
                    </Col>
                </Row>
            </Link>
        )
    }
}