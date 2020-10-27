import React from 'react';
import './footer.scss';

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="container d-flex">
				<p className="footer__copyright">
					© 2020 Все права защищены
				</p>
				<p className="footer__developer ml-auto">
					Егор Белокриницкий
				</p>
			</div>
		</footer>
	)
}
