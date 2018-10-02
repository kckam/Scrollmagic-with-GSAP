import React, { Component } from "react";
import { TimelineMax, Sine } from "TweenMax";
import ScrollMagic from "scrollmagic";
import "animation.gsap";
import "debug.addIndicators";

class ScrollMagicAnimate extends Component {
    constructor(props) {
        super(props);
        this.controller = new ScrollMagic.Controller();
        this.state = {
            pinText: "Unpinned."
        };
    }

    componentDidMount() {
        // build scenes
        new ScrollMagic.Scene({ triggerElement: "#trigger", duration: 150 })
            .setPin("#pin")
            .setClassToggle("#pin", "green")
            .on("enter leave", this.updateBox)
            .addIndicators() // add indicators (requires plugin)
            .addTo(this.controller);

        new ScrollMagic.Scene({
            triggerElement: "#trigger",
            duration: 150,
            offset: 300
        })
            .setPin("#pin")
            .setClassToggle("#pin", "green")
            .on("enter leave", this.updateBox)
            .addIndicators() // add indicators (requires plugin)
            .addTo(this.controller);

        new ScrollMagic.Scene({
            triggerElement: "#trigger",
            duration: 150,
            offset: 600
        })
            .setPin("#pin")
            .setClassToggle("#pin", "green")
            .on("enter leave", this.updateBox)
            .addIndicators() // add indicators (requires plugin)
            .addTo(this.controller);
    }

    updateBox = e => {
        let newPinText = "";
        if (e.type === "enter") {
            newPinText = "Pinned.";
        } else {
            newPinText = "Unpinned.";
        }
        this.setState({ pinText: newPinText });
    };

    render() {
        const { pinText } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>

                <div className="spacer s1" />
                <div id="trigger" className="spacer s1" />
                <div className="spacer s0" />
                <div id="pin" className="box1 red">
                    <p>{pinText}</p>
                    <a href="#" className="viewsource">
                        view source
                    </a>
                </div>
                <div className="spacer s2" />
            </div>
        );
    }
}

export default ScrollMagicAnimate;
