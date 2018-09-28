import React, { Component } from "react";
import logo from "./logo.svg";
import svg from "./svg_1.svg";
import svg1 from "./svg_2.svg";
import "./App.scss";
import { TweenMax, Power2, TimelineLite, TweenLite } from "gsap/TweenMax";
import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";

class BodyTag1 extends Component {
    render() {
        return <div>HAHAHA</div>;
    }
}

function Clock(props) {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            title: "Pending",
            button: "Click",
            demo: {
                score: 0
            }
        };

        this.text = null;
        this.score = 0;
        this.demo = {};
    }

    componentDidMount = function() {
        TweenLite.to(this, 20, {
            score: 100,
            onUpdate: () => {
                this.setState({ demo: { score: this.score.toFixed(2) } });
                console.log(this.state.demo.score);
            }
        });
    };

    render() {
        return (
            <div>
                <div
                    ref={div => {
                        console.log(div);
                        this.text = div;
                    }}
                    onClick={this.runGsap}
                >
                    {this.state.demo.score} ddd
                </div>
                <img src={svg1} />
            </div>
        );
    }
}

export default App;

//https://greensock.com/forums/topic/18050-simple-reactgsap-animation/
