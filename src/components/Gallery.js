import React, { Component } from "react";

function imagesLoaded(parentNode) {
    const imgElement = parentNode.querySelectorAll("img");
    for (let i = 0; i < imgElement.length; i++) {
        const img = imgElement[i];
        if (!img.complete) {
            return false;
        }
    }
    return true;
}

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

    render() {
        return (
            <div>
                {this.renderSpinner()}
                <div>Gallery</div>
                <ul className="gallery" ref={el => (this.galleryElement = el)}>
                    {this.image.map(el => this.renderImage(el))}
                </ul>
            </div>
        );
    }
}

export default Gallery;
