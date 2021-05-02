import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../Redux/actions/categoryActions";
import * as coffeeListActions from "../../Redux/actions/coffeeListActions";

class Categories extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }

  selectCategory = (category) => {
    this.props.actions.changeCategory(category);
    this.props.actions.getCoffeeList(category.category)
  };

  render() {
    return (
      <div className="my-2">
        <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroupItem
              active={category.id === this.props.currentCategory.id}
              onClick={() => this.selectCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getCoffeeList: bindActionCreators(
        coffeeListActions.getCoffeeList,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
