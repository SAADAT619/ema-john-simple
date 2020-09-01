import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, prod) => total + prod.price, 0);
    let total =0;
    for(let i=0; i< cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if(total > 35){
        shipping = 25.99;
    }
    if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }


    const tax = total /10;
    const grandTotal =(total + shipping + Number(tax).toFixed(2));

    const formatNumber = num => {
        const presition = num.toFixed(2);
        return Number(presition);
    }

    return (
        <div>
            <h4>Order Summary: </h4>
            <p>Items ordered: {cart.length}</p>
            <p>Product price: {formatNumber(total)}</p>
            <p><small>Tax + VAT: {tax}</small></p>
            <p>Shipping cost: {shipping}</p>
            <p>Total price: {grandTotal}</p>
        </div>
    );
};

export default Cart;