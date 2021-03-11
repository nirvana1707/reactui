import React from 'react'
import CartItem from './CartItem';

class CartItemList extends React.Component {


    render() {
        let returnCartComponents = []
        for (let cartEntity of this.props.cartItems) {
            returnCartComponents.push(<CartItem cartItem={cartEntity} />)
        }

        return (
            <div className="cartListDiv">
                <ul className="cartListUI">
                    {returnCartComponents}
                </ul>
            </div>

        )
    }
}
export default CartItemList;