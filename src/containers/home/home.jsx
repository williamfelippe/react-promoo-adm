import React, {Component} from "react";
import {Card, CardDeck, CardImg, CardText, CardTitle, CardImgOverlay} from "reactstrap";

class HomeCard extends Component {
    render() {
        return (
            <Card inverse>
                <CardImg
                    width="100%"
                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666"
                    alt="Card image cap"/>
                <CardImgOverlay>
                    <CardTitle>Card Title</CardTitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.</CardText>
                    <CardText>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText>
                </CardImgOverlay>
            </Card>
        );
    }
}

class HomeCards extends Component {
    render() {
        const cards = this.props.infos.map((card, index) => {
            <HomeCard card={card} key={index} />
        });

        return ({cards});
    }
}

export default class Home extends Component {
    render() {
        return (
            <CardDeck>
                <HomeCards />
            </CardDeck>
        );
    }
}