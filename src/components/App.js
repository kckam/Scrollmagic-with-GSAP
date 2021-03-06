import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import AlbumList from "./AlbumList";
import { TweenLite } from "gsap";
import ReactDOM from "react-dom";
import Gallery from "./Gallery";
import ScrollMagicAnimate from "./ScrollMagicAnimate";
import ThreeJS from "./ThreeJS";

const Header = () => {
    return <div>Header</div>;
};

class Body1 extends Component {
    componentDidMount() {
        console.log("Body1 Loaded.");
        console.log(ReactDOM.findDOMNode(this));
    }

    render() {
        return (
            <Link to="/">
                <div>Body1</div>
            </Link>
        );
    }
}

class Body extends Component {
    componentDidMount() {
        console.log(ReactDOM.findDOMNode(this));
    }

    render() {
        return (
            <div class="loader">
                <div>

                </div>

                <div>

                </div>

                <div>

                </div>
            </div>
        );
    }
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            score: 0
        };

        this.temp_score = 0;
        this.dom = {};
        this.node = null;
    }

    componentDidMount() {
        this.dom.root = ReactDOM.findDOMNode(this);

        TweenLite.to(this, 10, {
            temp_score: 5,
            onUpdate: () => {
                this.setState({ score: this.temp_score.toFixed(2) });
            }
        });
    }

    render() {
        return (
            <div className="container">
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <BrowserRouter>
                    <div>
                        {/* <Gallery />
                        <h2
                            ref="here"
                            onClick={e => {
                                console.log(this.refs.here.innerHTML);
                            }}
                        >
                            Score {this.state.score} {this.root}
                        </h2>
                        <Header />
                        <AlbumList /> */}
                        <Route exact path="/" component={Body} />
                        <Route path="/1" component={Body1} />
                        <Route path="/three" component={ThreeJS} />
                        <Route path="/gsap" component={ScrollMagicAnimate} />
                        {/* <ScrollMagicAnimate /> */}
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
