import React, {Component} from "react";
import {Link} from "react-router";

export default class Menu extends Component {
    render() {
        return (
            <ul>
                <li>
                    <Link to="/ofertas"></Link>
                </li>
                <li>
                    <Link to="/lojas"></Link>
                </li>
                <li>
                    <Link to="/usuarios"></Link>
                </li>
            </ul>
        )
    }
}