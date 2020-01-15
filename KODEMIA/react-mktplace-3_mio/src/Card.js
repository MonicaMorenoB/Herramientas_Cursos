import React, { Component } from 'react'

class Card extends Component {
    render() {
        return(
            <div className="col-12 col-sm-4 d-flex justify-content-between">
            <div className="card d-flex justify-content-between">
                <img src={this.props.imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text">{this.props.description}</p>
                    <p className="text-danger text-right">{this.props.price}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        );
    }
}

export default Card;