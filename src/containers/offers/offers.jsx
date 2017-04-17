import React, {Component} from "react";
import {Row, Col} from "react-materialize";
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
                <Col s={12}>
                    <h1>
                        Ofertas
                    </h1>
                </Col>

                <Col s={12}>
                    <OfferList offers={this.state.offers} />
                </Col>
            </Row>
        )
    }
}