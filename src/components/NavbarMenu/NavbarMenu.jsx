import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoredProductsContext } from '../../providers/StoredProductsProvider/StoredProductsProvider';
import { AppRoutes } from '../../routes/appRoutes';
import './navbar-menu.scss';

export const NavbarMenu = () => {
	const context = useContext(StoredProductsContext);
	const [storedProducts, _] = context;
	let basketClasses = "menu__item";
	if(storedProducts.length) {
		basketClasses += " not-empty"
	}
	return (
		<ul className="navbar__menu menu">
			<li className="menu__item">
				<Link to={AppRoutes.Goods}>Товары</Link>
			</li>
			<li className="menu__item">
				<Link to={AppRoutes.Account}>Личный кабинет</Link>
			</li>
			<li className={basketClasses}>
				<Link to={AppRoutes.Basket}>Корзина</Link>
			</li>
		</ul>
	)
}
