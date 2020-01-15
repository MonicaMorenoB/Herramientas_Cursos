import React, { Component } from 'react'
import Card from './Card';

class Cardwrapper extends Component{

    state = {products:[]}

    async componentDidMount(){
        const response = await fetch('https://react-mktplace.firebaseio.com/products/.json')
        const dataInJson = await response.json();
        let productsArray = [];
        for(const prop in dataInJson){
            let item = dataInJson[prop];
            productsArray.push(item)
        }

        this.setState({products:productsArray})
    }

    render(){
        return(
            <div className="container">
                <div className="row pt-3 d-flex align-items-stretch">
                    {
                        this.state.products.map(( product, index) => {
                            return  <Card
                                        imgUrl = {product.imgUrl}
                                        name = {product.name}
                                        description = {product.description}
                                        price = {product.price}
                                        key = {index}
                                    />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Cardwrapper