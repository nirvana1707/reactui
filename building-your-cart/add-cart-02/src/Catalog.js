import React from 'react';
import './Catalog.css';
import ProductList from './ProductList'
import Cart from './Cart';

class Catalog extends React.Component {
    constructor() {
        super();
        this.state = {
            productList: [],
            cartList: [],
            countDict: {}
        };


        /*
            let modifiedList = []
        for (let jsonElement of this.state.productList) {
            jsonElement.count = 0
            modifiedList.push(jsonElement)
        }
        console.log("Old list:")
        console.log(this.state.productList)
        console.log("New list:")
        console.log(modifiedList)
        */

    }

    componentDidMount() {
        fetch("products_temp.json")
            .then(response => response.json())
            .then(json => {
                this.setState({ productList: json })
            })
            .catch(error => console.log(error));
    }


    addToCart(item) {
        this.setState({ cartList: [...this.state.cartList, item] })
        console.log(this.state.cartList.length)
    }

    render() {

        return (
            <div>
                <div className="productCatalog">
                    <header className="catalogHeader">
                        <h2>ML Model Catalog</h2>
                    </header>
                    <ProductList items={this.state.productList} cartHandler={this.addToCart.bind(this)} />
                </div>
                <div className="cartCatalog">
                    <header className="cartHeader">
                        <h2>Cart</h2>
                    </header>
                    <Cart cartItems={this.state.cartList} />
                </div>
            </div >
        )

    }
}

export default Catalog;