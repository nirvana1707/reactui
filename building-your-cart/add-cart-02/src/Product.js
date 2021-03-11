import React from 'react';
import './Product.css'


class Product extends React.Component {

    clickHandle() {
        alert(`Price for the model is Rs:${this.props.productModel.price}`)
        return this.props.cartHandler(this.props.productModel)
    }

    render() {

        let componentModel = <li className="listModels" onClick={() => this.clickHandle()}>
            <h3>{this.props.productModel.name}</h3>
            <p>{this.props.productModel.description}</p>
        </li>

        return (
            <div>
                {componentModel}
            </div>

        )
    }
}

export default Product;