import React, { Component } from 'react'
import Card from './Card';

class Cardwrapper extends Component{

    

    state = {products:[]} 
    
    async componentDidMount(){
        const response = await fetch('https://react-mktplace.firebaseio.com/products/.json') // fetch('URL_BD') para consultar la BD
        const dataInJson = await response.json();
        console.log(dataInJson)
        let productsArray = [];
        for(const prop in dataInJson){
            let item = dataInJson[prop];
            productsArray.push(item)
        }
        console.log(productsArray)
        this.setState({products:productsArray}) // cambia el estado asignando datos de un arreglo a otro
    }


    render(){
        return(
            <div className="container">
                <div className="row ">
                    {
                        //map tomar el index de los objetos
                        this.state.products.map((product, index) =>{
                            return <Card
                                            imgUrl={product.imgUrl}
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