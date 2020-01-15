import React, { Component } from 'react'

class Form extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-12 col-sm-4 offset-sm-4 border border-secondary p-3 bg-light mt-3 rounded">
                    <form>
                        <div className="form-group">
                            <label htmlFor="product-name">Nombre del producto</label>
                            <input type="text" className="form-control" id="product-name"
                                placeholder="Ingresa el nombre de tu producto" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="product-description">Descripcion</label>
                            <input type="text" className="form-control" id="product-description" placeholder="Describe" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="product-price">Precio</label>
                            <input type="text" className="form-control" id="product-price"
                                placeholder="Ingresa el precio de tu producto" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="product-img">Precio</label>
                            <input type="text" className="form-control" id="product-img" placeholder="Pon una imagen para tu producto" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form