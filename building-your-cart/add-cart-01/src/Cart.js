import React from 'react'
import './Cart.css'

class Cart extends React.Component {

    render() {

        let returnCartList = <ul className="cartList">
            <li>
                <h3>Cart Item#001</h3>
                <p>Description</p>
            </li>
            <li>
                <h3>Cart Item#002</h3>
                <p>Description</p>
            </li>
        </ul>

        return (
            <div>
                {returnCartList}
            </div>

        )

    }
}
export default Cart