import React, { Component } from "react";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";

export default class Categories extends Component {
  render() {
    return (
      <div className="my-2">
        <ListGroup>
          <ListGroupItem>Iced <Badge pill>14</Badge></ListGroupItem>
          <ListGroupItem>Hot <Badge pill>14</Badge></ListGroupItem>

        </ListGroup>
      </div>
    );
  }
}
