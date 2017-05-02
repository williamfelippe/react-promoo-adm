import React, {Component} from "react";
import {Container, Row, Col, Button} from "reactstrap";
import {getOffers} from "../../services/offer-service.js";
import {publishMessage} from "../../utils/messages-publisher.js";
import OfferList from "../../components/offers/offer-list";

export default class Offers extends Component {
    constructor() {
        super();
        this.state = {
            offers: [],
            limit: 20,
            offset: 0,
            loading: false
        };
    }

    componentDidMount() {
        this.retrieveOffers();
    }

    retrieveOffers() {
        this.setState({loading: true});

        const {limit, offset} = this.state;

        getOffers(limit, offset)
            .then((response) => {
                if(response.status === 200)
                    this.setState({loading: false, offers: response.data});
                else throw new Error(response.data);
            })
            .catch((error) => {
                this.setState({loading: false});
                publishMessage(error);
            });
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs="12">
                        <h1>
                            Ofertas
                        </h1>
                    </Col>

                    <Col xs="12">
                        <Button className="float-right">
                            Criar oferta
                        </Button>
                    </Col>

                    <Col xs="12">
                        <OfferList offers={this.state.offers} />
                    </Col>
                </Row>
            </Container>
        )
    }
}