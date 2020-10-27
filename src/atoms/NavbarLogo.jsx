import React from 'react'
import { Link } from 'react-router-dom'
import { AppRoutes } from '../routes/appRoutes'

export const NavbarLogo = () => {
	return (
		<Link to={AppRoutes.Home} className="navbar__logo">
			porten
		</Link>
	)
}
