import React, {Component} from "react";
import Header from "../components/system/header";
import Footer from "../components/system/footer";

export default class DashboardLayout extends Component {
    render() {
        return (
            <div className="moo-app">
                <Header />

                <main>
                    {this.props.children}
                </main>

                <Footer />
            </div>
        )
    }
}