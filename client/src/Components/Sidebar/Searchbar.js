import React, { Component } from "react";
import { InputGroup, InputGroupText, InputGroupAddon, Input } from "reactstrap";

export default class Searchbar extends Component {
  render() {
    return (
      <div className="my-2">
        <InputGroup>
          <Input placeholder="Keywords..."/>
          <InputGroupAddon addonType="append">
            <InputGroupText>Search</InputGroupText>
          </InputGroupAddon>
        </InputGroup>{" "}
      </div>
    );
  }
}
