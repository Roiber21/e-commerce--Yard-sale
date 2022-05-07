import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '../context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addToCartImage2 from '@icons/bt_added_to_cart.svg';


const ProductItem = ({ product }) => {
	const { state, addToCart } = useContext(AppContext);

	const handleClick = (item) => {
		if(state.cart.includes(item)) {
			return;
		} else {
			addToCart(item);
		}
	}

	const verifyAdded = (item) => {
		if(state.cart.includes(item)) {
			return addToCartImage2;
		} else {
			return addToCartImage;
		}
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick= {() => handleClick (product)} >
					<img src={verifyAdded(product)} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
