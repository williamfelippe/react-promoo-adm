import React, {Component} from "react";
import {ListGroup, ListGroupItem} from "reactstrap";
import OfferItem from "./offer-item";

export default class OfferList extends Component {
    render() {
        const {offers} = this.props;

        const offerList = offers.map((offer) =>
            <ListGroupItem key={offer._id}>
                <OfferItem offer={offer} />
            </ListGroupItem>
        )

        return (
            <ListGroup>
                {offerList}
            </ListGroup>
        )
    }
}