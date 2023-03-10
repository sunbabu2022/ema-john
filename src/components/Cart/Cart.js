import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    // const total = cart.reduce((total, prd) => total + prd.price, 0);
    let total = 0;
    for(let i=0; i<cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 6.99;
    }
    const tax = total / 10;
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);
    const formateNumber = num => {
        const precition = num.toFixed(2);
        return Number(precition);
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <h3>Item Ordered: {cart.length}</h3>
           
            <p><small>Product Price: $ {formateNumber(total)}</small></p>
            <p><small>Shipping Cost: $ {shipping} </small></p>
            <p><small>Tax + VAT: $ {formateNumber(tax)} </small></p>
            <p>Total Price: $ {grandTotal}</p>
            <button className='main-button'>Review Order</button>
        </div>
    );
};

export default Cart;