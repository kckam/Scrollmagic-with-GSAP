import React, { Component } from "react";
import posed from "react-pose";

function imagesLoaded(parentNode) {
    const imgElement = parentNode.querySelectorAll("img");
    const vidElement = parentNode.querySelectorAll("video");

    for (let i = 0; i < imgElement.length; i++) {
        const img = imgElement[i];
        if (!img.complete) {
            return false;
        }
    }
    return true;
}

const Square = posed.div({
    pressable: true,
    init: { scale: 1 },
    press: { scale: 0.8 }
});

class Gallery extends Component {
    constructor() {
        super();
        this.image = [
            "https://dummyimage.com/300x200/000/fff",
            "https://dummyimage.com/300x200/111/fff",
            "https://dummyimage.com/300x200/222/fff",
            "https://dummyimage.com/300x200/333/fff",
            "https://dummyimage.com/300x200/444/fff",
            "https://dummyimage.com/300x200/555/fff"
        ];

        this.state = {
            loading: true
        };
    }

    handleImageChange = () => {
        this.setState({
            loading: !imagesLoaded(this.galleryElement)
        });
    };

    renderSpinner() {
        if (!this.state.loading) {
            return;
        }

        return <span>Loading...</span>;
    }

    renderImage(src) {
        return (
            <li key={src}>
                <img
                    onLoad={this.handleImageChange}
                    onError={this.handleImageChange}
                    src={src}
                    alt=""
                />
            </li>
        );
    }

    handleVideo() {
        console.log("Video Loaded");
    }

    render() {
        return (
            <div>
                {this.renderSpinner()}
                <video controls onCanPlayThrough={this.handleVideo}>
                    <source
                        src="http://techslides.com/demos/sample-videos/small.mp4"
                        type="video/mp4"
                    />
                </video>

                <div>Gallery</div>
                <ul className="gallery" ref={el => (this.galleryElement = el)}>
                    {this.image.map(el => this.renderImage(el))}
                </ul>

                <div className="box_container">
                    <Square className="box" />
                </div>
            </div>
        );
    }
}

export default Gallery;
