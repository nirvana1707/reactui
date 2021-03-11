import React from 'react'
import './Cart.css'
import CartItemList from './CartItemList';

class Cart extends React.Component {

    constructor() {
        super();
        this.state = { cartListItems: [] };
    }


    render() {
        return (
            <div className="cartDiv">
                <CartItemList cartItems={this.state.cartListItems} />
            </div>

        )

    }

    componentDidUpdate(prevProps) {

        if (this.props != prevProps) {
            let uniqueList = [];
            for (let cartProduct of this.props.cartItems) {
                let resFind = uniqueList.find(listItem => listItem.code === cartProduct.code);
                if (resFind) {
                    // means it already exists and hence the newly added key too
                    cartProduct.quantity = cartProduct.quantity + 1;
                    //resFind.quantity = resFind.quantity + 1
                }
                else {
                    cartProduct.quantity = 1;
                    uniqueList.push(cartProduct);
                }
            }
            console.log("uniqueList:");
            console.log(uniqueList);
            console.log("this.props:");
            console.log(this.props);
            this.setState({ cartListItems: uniqueList });
        }

    }
}
export default Cart