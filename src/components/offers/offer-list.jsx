import React, {Component} from "react";
import OfferItem from "./offer-item";

export default class OfferList extends Component {
    render() {
        const {offers} = this.props;

        const offerList = offers.map((offer) =>
            <li key={offer._id}>
                <OfferItem offer={offer} />
            </li>
        )

        return (
            <ul>
                {offerList}
            </ul>
        )
    }
}