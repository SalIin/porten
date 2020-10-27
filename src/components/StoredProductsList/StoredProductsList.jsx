import { render } from '@testing-library/react';
import React from 'react';
import { goods } from '../../data/goods';
import { StoredProductsListItem } from '../StoredProductsListItem/StoredProductsListItem';
import './stored-products-list.scss';

export const StoredProductsList = ({ storedProducts }) => {
	const renderGoods = [];
	for(let id of storedProducts) {
		for(let item of goods) {
			if(id === item.id) {
				renderGoods.push(item);
			}
		}
	}

	return (
		<ul className="list-group basket-list">
			{renderGoods.map(item => <StoredProductsListItem name={item.name} key={item.id * Math.random()} />)}
		</ul>
	)
}
