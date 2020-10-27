import React from 'react';
import { NavbarLogo } from '../../atoms/NavbarLogo';
import { NavbarMenu } from '../NavbarMenu/NavbarMenu';
import './navbar.scss';

export const Navbar = () => {
	return (
		<nav className="header__navbar navbar">
			<div className="container">
				<NavbarLogo />
				<NavbarMenu />
			</div>
		</nav>
	)
}
