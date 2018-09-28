import React, { Component } from "react";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <header>{this.props.title}</header>;
    }
}

export default Header;
