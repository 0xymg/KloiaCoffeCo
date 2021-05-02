/* eslint-disable no-useless-constructor */
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
    constructor(props){
        super(props)
    }
    state ={coffees : []}

    getCoffees = () => {
        fetch("http://localhost:3001/coffees")
        .then(response => response.json())
        .then(data => this.setState({coffees : data}))
    }
    componentDidMount(){
        this.getCoffees();
    }
  render() {
    return (
      <div>
        {this.state.coffees.map(
            coffee => (
                <Card className="mt-2">
          <CardHeader className="bg-dark text-white">
            <CardTitle tag="h5">{coffee.title}</CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
                <Col className="col-3">img</Col>
                <Col className="col-9">
                <CardText>{coffee.description}</CardText>

                </Col>
            </Row>
          </CardBody>
          <CardFooter>Ingredients: {coffee.ingredients} " " </CardFooter>
        </Card> 
            )
        )
        }
        <br></br>
      </div> 
    );
  }
}
