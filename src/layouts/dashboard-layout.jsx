import React, {Component} from "react";
import "../components/system/header";
import "../components/system/footer";

export default class DashboardLayout extends Component {
    render() {
        return (
            <div>
                <Header />

                <main></main>

                <Footer />
            </div>
        )
    }
}