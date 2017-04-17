import React, {Component} from "react";
import {Row} from "react-materialize";
import StoreItem from "./store-item";

export default class StoreList extends Component {
    render() {
        const {stores} = this.props;

        const storesList = stores.map((store) => {
            <li key={store._id}>
                <StoreItem store={store} />
            </li>
        })

        return (
            <ul>
                {storesList}
            </ul>
        )
    }
}