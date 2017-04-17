import React, {Component} from "react";
import UserItem from "./user-item";

export default class UserList extends Component {
    render() {
        const {users} = this.props;

        const userList = users.map((user) =>
            <li key={user._id}>
                <UserItem user={user} />
            </li>
        );

        return (
            <ul>
                {userList}
            </ul>
        )
    }
}