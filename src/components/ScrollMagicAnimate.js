import React, { Component } from "react";
import TimelineMax from "gsap/TimelineMax";
import ScrollMagic from "scrollmagic";
import { TweenMax } from "gsap";
import "animation.gsap";
import "debug.addIndicators";

class ScrollMagicAnimate extends Component {
    constructor(props) {
        super(props);
        this.controller = new ScrollMagic.Controller();

        this.state = {
            pinText: "Unpinned.",
            animateTime: 0
        };

        this.tl = new TimelineMax({ paused: true });
        this.t = 0;

        this.duration = 0;
    }

    componentDidMount() {
        let tween = TweenMax.fromTo(
            "#animate1",
            1,
            { left: -100 },
            { left: 100, repeat: -1, yoyo: true }
        );

        // build scenes
        new ScrollMagic.Scene({
            triggerElement: "#trigger1",
            duration: "100"
        })
            .setTween(tween) // trigger a TweenMax.to tween
            .addIndicators({ name: "1 (duration: 0)" }) // add indicators (requires plugin)
            .addTo(this.controller)
            .on("end", this.updateBox);

        this.tl.add(TweenMax.to('.timeline', 1, { color: 'red', onComplete: function () { console.log("running") } }));
        this.tl.add(TweenMax.to('.timeline', 3, { x: 100, onComplete: function () { console.log("running") } }));
        this.tl.add(TweenMax.to('.timeline', 3, { x: -100, onComplete: function () { console.log("running") } }));
        this.tl.add(TweenMax.to('.timeline', 3, { y: 100, onComplete: function () { console.log("running") } }));
        this.tl.add(TweenMax.to('.timeline', 3, { y: 0, onComplete: function () { /*tl.totalTime(5);*/ /*tl.progress(0.5)*/ } }));
        this.tl.add(TweenMax.to('.timeline', 3, { z: -50, color: 'black', onComplete: function () { /*tl.totalTime(5);*/ /*tl.progress(0.5)*/ } }));

        setTimeout(() => {
            this.trigger();
        }, 1000);
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

    shifting = () => {
        console.log(123);
        this.controller.scrollTo(() => {
            TweenMax.to(window, 0.5, { y: "100" });
        });
    };

    trigger = () => {
        // setInterval(() => {
        //     // tl.restart();
        //     this.tl.progress(this.t);
        //     this.t += 0.001;
        // }, 20); //20 sec
    }

    playMusic = (e) => {
        this.tl.play();
    }

    musicTime = (e) => {
        console.log(e.target.currentTime);
    }

    pauseMusic = (e) => {
        this.tl.pause();
    }

    showTime = (e) => {
        this.duration = e.target.duration;
    }

    seeked = (e) => {
        this.tl.time(e.target.currentTime);
    }

    render() {

        const { pinText } = this.state;
        return (
            <div className="App demo" style={{ "perspective": "1000px" }}>
                <audio id='music' controls='controls' onTimeUpdate={this.musicTime} onPlay={this.playMusic} onPause={this.pauseMusic} onLoadedMetadata={this.showTime} onSeeked={this.seeked}>
                    <source src='http://sheriffderek.consulting/audio/mp3/short.mp3' type='audio/mp3' />
                </audio>
                <div className="timeline">TIMELINE</div>
                <span onClick={this.shifting}>GERE</span>
                <div className="spacer s2" />
                <a id="trigger2" />
                <div id="trigger1" className="spacer s0" />
                <div id="animate1" className="box2 skin">
                    <p>You wouldn't like me, when I'm angry!</p>
                    <a href="#" className="viewsource">
                        view source
                    </a>
                </div>
                <div className="spacer s2" />
                <div className="spacer s2" />
                <div className="spacer s2" />
                <div className="spacer s2" />
                <div className="spacer s2" />
                <div className="spacer s2" />
                <div className="spacer s2" />
            </ div>
        );
    }
}

export default ScrollMagicAnimate;
