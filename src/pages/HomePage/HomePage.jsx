import React from 'react'
import { Brands } from '../../components/Brands/Brands';
import { Content } from '../../components/Content/Content';
import { Footer } from '../../components/Footer/Footer';
import { HeroBlock } from '../../components/HeroBlock/HeroBlock';
import { Navbar } from '../../components/Navbar';
import './home-page.scss';

export const HomePage = () => {
	return (
		<>
			<header className="header">
				<Navbar />
				<HeroBlock />
			</header>
			<Content />
			<Brands />
			<Footer />
		</>	
	)
}
