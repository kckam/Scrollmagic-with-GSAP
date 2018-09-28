import React, { Component } from "react";

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = { button: 123, active: false };

        this.handleClick = this.handleClick.bind(this);
    }

    //use of arrow function to get this without using bind
    handleClick() {
        this.setState({ button: 789, active: true });
    }

    render() {
        return (
            <button
                onClick={this.handleClick}
                className={`hi ${this.state.active ? "active" : ""}`}
            >
                {this.props.text}
                {this.state.button}
            </button>
        );
    }
}

export default Button;
