import React from 'react'
import { Goods } from '../components/Goods'
import { goods } from '../data/goods';

export const GoodsContainer = ({ title, goodsType }) => {
	const {watches, suits, shoes} = goods;
	let category;

	if(goodsType === 'watches') {
		category = watches;
	} else if(goodsType === 'suits') {
		category = suits;
	} else if(goodsType === 'shoes') {
		category = shoes;
	}
	return (
		<Goods title={title} goodsType={goodsType} category={category} />
	)
}
