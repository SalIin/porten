import { render } from '@testing-library/react';
import React from 'react';
import { goods } from '../../data/goods';
import { StoredProductsListItem } from '../StoredProductsListItem/StoredProductsListItem';
import './stored-products-list.scss';

export const StoredProductsList = ({ storedProducts }) => {
	let renderGoods;
	for(let key in goods) {
		for(let id of storedProducts) {
			renderGoods = goods[key].filter(item => item.id === id);
		}
	}

	console.log(renderGoods);

	return (
		<ul className="list-group basket-list">
			{storedProducts.map(item => <StoredProductsListItem name={item.name} key={item} />)}
		</ul>
	)
}
