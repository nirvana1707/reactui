import React from 'react';
import Product from './Product';

class ProductList extends React.Component {


    render() {

        let productComponents = []

        for (let prod of this.props.items) {
            let listComponent = <Product productModel={prod} cartHandler={this.props.cartHandler} />
            productComponents.push(listComponent)
        }

        return (
            <div>
                <ul className="listModels">
                    {productComponents}
                </ul>
            </div>

        );
    }

}

export default ProductList;