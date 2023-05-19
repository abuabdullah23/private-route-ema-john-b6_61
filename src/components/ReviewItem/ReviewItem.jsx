import React from 'react';
import './ReviewItem.css';
import { TrashIcon } from '@heroicons/react/20/solid';

const ReviewItem = ({ product, handleRemoveFromCart }) => {
    const {id, img, name, shipping, quantity, price } = product;
    return (
        <div className='review-item'>
            <div className='left'>
            <img src={img} alt="" />
            <div className='review-info'>
                <h4>{name}</h4>
                <p>Price: <span> ${price}</span></p>
                <p>Quantity: <span>{quantity}</span></p>
            </div>
            </div>
            <button onClick={()=>handleRemoveFromCart(id)} className='btn-delete'>D</button>

        </div>
    );
};

export default ReviewItem;