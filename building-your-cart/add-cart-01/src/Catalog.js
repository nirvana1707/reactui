import React from 'react';
import './Catalog.css';
import ProductList from './ProductList'
import Cart from './Cart';

class Catalog extends React.Component {
    constructor() {
        super();
        this.state = { productList: [] };


        fetch("products_temp.json")
            .then(response => response.json())
            .then(json => {
                this.setState({ productList: json })
            })
            .catch(error => console.log(error));

    }

    render() {

        return (
            <div>
                <div className="productCatalog">
                    <header className="catalogHeader">
                        <h2>Model Catalog</h2>
                    </header>
                    <ProductList items={this.state.productList} />
                </div>
                <div className="cartCatalog">
                    <header className="cartHeader">
                        <h2>Cart</h2>
                    </header>
                    <Cart />
                </div>
            </div>
        )

    }
}

export default Catalog;