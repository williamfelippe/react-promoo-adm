import React, {Component} from "react";
import {Row} from "react-materialize";
import ReportItem from "./report-item";

export default class ReportList extends Component {
    render() {
        const {reports} = this.props;

        const reportList = reports.map((report) => {
            <li key={report._id}>
                <ReportItem report={report} />
            </li>
        });

        return (
            <ul>
                {reportList}
            </ul>
        )
    }
}