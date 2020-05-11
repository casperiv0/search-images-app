import React, { Component } from 'react'

class FoundImages extends Component {
    render() {
        return (
            <div className="found-images">
                {
                    !this.props.images[0] ? <h1>No images found</h1> :
                    this.props.images.map((image, index) => {
                        return <img key={index} src={image.image} alt={image.title} />
                    })
                }
            </div>
        )
    }
}

export default FoundImages;