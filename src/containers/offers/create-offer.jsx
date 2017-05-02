import React, {Component} from "react";
import {Container, Form, FormGroup, Input, Button} from "reactstrap";

export default class CreateOffer extends Component {
    render() {
        return (
            <Container>
                <Form>
                    <FormGroup>
                        <Input type="text" name="name" placeholder="Nome"/>
                    </FormGroup>

                    <FormGroup>
                        <Input type="number" name="price" placeholder="Nome"/>
                    </FormGroup>

                    <Button>
                        Salvar
                    </Button>
                </Form>
            </Container>
        );
    }
}