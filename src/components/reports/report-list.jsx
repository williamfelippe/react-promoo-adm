import React, {Component} from "react";
import {Row} from "react-materialize";

export default class ReportList extends Component {
    render() {
        const {reports} = this.props;

        const reportList = reports.map((report) => {
            
        });

        return (
            <ul>
                {reportList}
            </ul>
        )
    }
}