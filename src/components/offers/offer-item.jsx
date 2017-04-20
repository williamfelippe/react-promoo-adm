import React, {Component} from "react";
import {Row, Col} from "reactstrap";
import {Link} from "react-router";

export default class OfferItem extends Component {
    render() {
        const {offer} = this.props;

        return (
            <Link to={`/oferta/${offer._id}`}>
                <Row>
                    <Col xs="12">
                        {offer.name}
                    </Col>
                </Row>
            </Link>
        )
    }
}