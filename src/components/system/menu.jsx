import React, {Component} from "react";
import {Link} from "react-router";

export default class Menu extends Component {
    render() {
        return (
            <ul>
                <li>
                    <Link to="/ofertas">
                        Ofertas
                    </Link>
                </li>
                <li>
                    <Link to="/lojas">
                        Lojas
                    </Link>
                </li>
                <li>
                    <Link to="/usuarios">
                        Usuários
                    </Link>
                </li>
                <li>
                    <a style={{cursor: "pointer"}}>
                        Sair
                    </a>
                </li>
            </ul>
        )
    }
}