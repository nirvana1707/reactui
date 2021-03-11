import React from 'react';

class CartItem extends React.Component {

    render() {

        return (
            <div className="cartModelItem">
                <li>
                    <h3>{this.props.cartItem.name} ({this.props.cartItem.quantity})</h3>
                    <p>{this.props.cartItem.description}</p>
                </li>
            </div>
        )

    }
}
export default CartItem;