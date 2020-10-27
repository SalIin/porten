import React, { useContext } from 'react'
import { StoredProductsContext } from '../../providers/StoredProductsProvider/StoredProductsProvider'

export const CardItem = ({ name, desc, img, id }) => {
	const context = useContext(StoredProductsContext);
	const [_, setStoredProducts] = context;
	const onAddToCart = () => setStoredProducts((storedProducts) =>  [...storedProducts, id]);
	return (
		<div className="col-md-4 mr-auto">
			<div className="card mb-4">
				<img src={img} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<p>{desc}</p>
					<button className="btn btn-outline-light btn-sm mt-3" onClick={onAddToCart}>Add to cart</button>
				</div>
			</div>
		</div>
	)
}
