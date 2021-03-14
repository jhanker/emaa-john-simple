import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, prd) => total + prd.price, 0);
    let total = 0;
    for(let i = 0; i< cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }
    let shipping = 12.99;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    const tax = Math.round(total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);
    const formatNumber = num => {
        const precition = num.toFixed(2);
        return Number(precition)
    }
    return (
        <div>
            <h4>Order summury</h4>
            <p>Items ordered: {cart.length}</p>
            <p>product price: {formatNumber(total) }</p>
            <p><small>shippingCost: {shipping}</small></p>
            <p><small>tax + vat: {tax}</small></p>
            <p>Total price {grandTotal}</p>
        </div>
    );
};

export default Cart;