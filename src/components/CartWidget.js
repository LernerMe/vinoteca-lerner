import React from 'react';
import logoCart from '../img/logocart.png';

const CartWidget = () => {
    return (
        <div className="cartWidgetStyle">
            <img className="logoCartStyle" src={logoCart} alt="shopping cart logo" />
        </div>
    );
};


export default CartWidget;