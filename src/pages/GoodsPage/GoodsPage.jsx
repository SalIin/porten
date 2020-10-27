import React from 'react';
import { Navbar } from '../../components/Navbar';
import { GoodsContainer } from '../../containers/GoodsContainer';
import './goods-page.scss';

export const GoodsPage = () => {
	return (
		<>
			<Navbar />
			<section className="goods container">
				<GoodsContainer title="Watches" goodsType="watches" />
			</section>
			<section className="suits container">
				<GoodsContainer title="Suits" goodsType="suits" />
			</section>
			<section className="shoes container">
				<GoodsContainer title="Shoes" goodsType="shoes" />
			</section>
		</>
	)
}
