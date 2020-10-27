import React from 'react'
import { EmptyBasketWarn } from '../../atoms/EmptyBasketWarn';
import { Navbar } from '../../components/Navbar';
import { StoredProductsList } from '../../components/StoredProductsList';
import './basket-page.scss';

export const BasketPage = ({ storedProducts }) => {
	return (
		<div className="basket">
			<Navbar />
			<div className="container">
				<h1>
					Basket
				</h1>
				{storedProducts.length ? <StoredProductsList storedProducts={storedProducts} /> : <EmptyBasketWarn />}
			</div>
		</div>
	)
}
