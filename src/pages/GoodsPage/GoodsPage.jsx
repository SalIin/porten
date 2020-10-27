import React from 'react';
import { Goods } from '../../components/Goods';
import { Navbar } from '../../components/Navbar';
import { useGoodsPage } from './hooks/useGoodsPage';
import { ToTopButton } from '../../atoms/ToTopButton';
import './goods-page.scss';

export const GoodsPage = ({ isScrolled, setIsScrolled }) => {
	useGoodsPage(setIsScrolled);
	return (
		<>
			<Navbar />
			<section className="goods container">
				<Goods />
			</section>
			{isScrolled ? <ToTopButton /> : null}
		</>
	)
}
