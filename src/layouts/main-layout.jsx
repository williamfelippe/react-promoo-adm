import React, {Component} from "react";

export default class MainLayout extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}