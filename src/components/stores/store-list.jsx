import React, {Component} from "react";
import {ListGroup, ListGroupItem} from "reactstrap";
import StoreItem from "./store-item";

export default class StoreList extends Component {
    render() {
        const {stores} = this.props;

        const storesList = stores.map((store) =>
            <ListGroupItem key={store._id}>
                <StoreItem store={store} />
            </ListGroupItem>
        );

        return (
            <ListGroup>
                {storesList}
            </ListGroup>
        );
    }
}