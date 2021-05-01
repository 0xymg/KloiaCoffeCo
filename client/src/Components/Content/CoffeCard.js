/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardHeader,
  CardFooter,
  Col,
  Row
} from "reactstrap";

export default class CoffeCard extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardHeader className="bg-dark text-white">
            <CardTitle tag="h5">Coffee Name</CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
                <Col className="col-3">img</Col>
                <Col className="col-9">
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>

                </Col>
            </Row>
          </CardBody>
          <CardFooter>Ingredients: </CardFooter>
        </Card>
      </div>
    );
  }
}
