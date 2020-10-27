import React from 'react'
import { HeroLogo } from '../../atoms/HeroLogo';
import './hero-block.scss';

export const HeroBlock = () => {
	return (
		<div className="header__hero hero">
			<div className="overlay"></div>
			<HeroLogo />
			<p className="hero__text">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra.
			</p>
		</div>
	)
}
