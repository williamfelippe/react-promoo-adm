import React, {Component} from "react";
import {Row, Col} from "reactstrap";
import OfferList from "../../components/offers/offer-list";

export default class Offers extends Component {
    constructor() {
        super();
        this.state = {
            offers: {},
            loading: false
        };
    }

    render() {
        return (
            <Row>
                <Col xs="12">
                    <h1>
                        Ofertas
                    </h1>
                </Col>

                <Col xs="12">
                    <OfferList offers={this.state.offers} />
                </Col>
            </Row>
        )
    }
}