import React, { Component } from "react";
import logo from '../logo.png'
export default class Header extends Component {
  render() {
    return <div className=" container d-flex flex-wrap m-3 ">
        
        <img src={logo} alt='logo' width='70'></img>
        <h5 className="mt-4">Best Coffee in Town</h5>         
        </div>;
  }
}
