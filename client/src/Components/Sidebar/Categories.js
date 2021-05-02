import React, { Component } from "react";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";

export default class Categories extends Component {
    state = {
        categories: [
            {categoryID: 1, categoryName: "All"},
            {categoryID: 2, categoryName: "Iced"},
            {categoryID: 3, categoryName: "Hot"}
        ],
        currentCategory: ""
    };

    changeCategory = (category)=> {
        this.setState({currentCategory: category.categoryName})
    }

  render() {
    return (
      <div className="my-2">
        <ListGroup>
            {this.state.categories.map(category => (
                <ListGroupItem onClick={()=>this.changeCategory(category)} key={category.categoryID}>{category.categoryName} <Badge pill>14</Badge></ListGroupItem>
            ))}
        </ListGroup>
        {this.state.currentCategory}
      </div>
    );
  }
}
