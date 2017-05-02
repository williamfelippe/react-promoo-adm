import React, {Component} from "react";
import {ListGroup, ListGroupItem} from "reactstrap";
import ReportItem from "./report-item";

export default class ReportList extends Component {
    render() {
        const {reports} = this.props;

        const reportList = reports.map((report) => {
            <ListGroupItem key={report._id}>
                <ReportItem report={report} />
            </ListGroupItem>
        });

        return (
            <ListGroup>
                {reportList}
            </ListGroup>
        )
    }
}