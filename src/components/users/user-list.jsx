import React, {Component} from "react";
import {Row} from "react-materialize";

export default class UserList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {users} = this.props;

        const userList = user.map((user) => {
            <li>
                <UserItem user={user} />
            </li>
        });

        return (
            <ul>
                {userList}
            </ul>
        )
    }
}