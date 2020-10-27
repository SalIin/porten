import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../routes/appRoutes';
import './navbar-menu.scss';

export const NavbarMenu = () => {
	return (
		<ul className="navbar__menu menu">
			<li className="menu__item">
				<Link to={AppRoutes.Goods}>Товары</Link>
			</li>
			<li className="menu__item">
				<Link to={AppRoutes.Account}>Личный кабинет</Link>
			</li>
			<li className="menu__item">
				<Link to={AppRoutes.Basket}>Корзина</Link>
			</li>
		</ul>
	)
}
