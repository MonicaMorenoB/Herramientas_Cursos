import React, { Component } from 'react'

class Form extends Component{

    constructor(props){
        super(); //compoente con poderes de react
        this.state={
            name:"",
            description:"",
            imgUrl:"",
            price:""
        }

    }
handleChange = (event) =>{
    this.setState({[event.target.name]: event.target.value})
}

handleSubmit = (event)=>{
    event.preventDefault();
    const{name, description,imgUrl, price } = this.state
    fetch('https://react-mktplace.firebaseio.com/products/.json',{
        method:"POST",
        body:JSON.stringify({name, description,imgUrl, price })
    })
}
    render(){
const{name, description,imgUrl, price } = this.state

        return(
            <div className="row">
                <div className="col-12 col-sm-4 offset-sm-4 border border-secondary p-3 bg-light mt-3 rounded">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="product-name">Nombre del producto</label>
                            <input type="text" 
                                    className="form-control" 
                                    name="name"
                                    id="product-name"
                                    placeholder="Ingresa el nombre de tu producto"
                                    value={name} 
                                    onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="product-description">Descripcion</label>
                            <input type="text" 
                                    className="form-control"  
                                    name="description"  
                                    value={description} 
                                    id="product-description" 
                                    placeholder="Describe" 
                                    onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="product-price">Precio</label>
                            <input type="text" 
                                    className="form-control" 
                                    value={price} 
                                    name="price" 
                                    id="product-price"
                                    placeholder="Ingresa el precio de tu producto" 
                                    onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="product-img">Precio</label>
                            <input type="text" 
                                    className="form-control" 
                                    name="imgUrl" 
                                    value={imgUrl} 
                                    d="product-img" 
                                    placeholder="Pon una imagen para tu producto" 
                                    onChange={this.handleChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form