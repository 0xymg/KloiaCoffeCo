/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import * as coffeeListActions from "../../Redux/actions/coffeeListActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardHeader,
  CardFooter,
  Col,
  Row,
  Badge,
} from "reactstrap";


class CoffeCard extends Component {
  componentDidMount() {
    this.props.actions.getCoffeeList();
  }

  render() {
    return (
      <div>
       Listing by <Badge color="warning">{this.props.currentCategory.categoryName}</Badge>
        {this.props.coffeeList.map(coffee => (
          <Card key={coffee.id} className="mt-2">
            <CardHeader className="bg-dark text-white">
              <CardTitle tag="h5">{coffee.title}</CardTitle>
            </CardHeader>
            <CardBody>
              <Row>
                <Col className="col-9">
                  <CardText>{coffee.description}</CardText>
                </Col>
              </Row>
            </CardBody>
            <CardFooter>Ingredients: {coffee.ingredients.map(ingr => (
              <span className="font-weight-bold"> {ingr}, </span>
              
              
              ))}</CardFooter>
          </Card>
        ))}
        <br></br>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    coffeeList: state.coffeeListReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCoffeeList: bindActionCreators(coffeeListActions.getCoffeeList, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoffeCard);
