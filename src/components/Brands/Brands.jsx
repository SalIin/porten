import React from 'react';
import './brands.scss';

export const Brands = () => {
	return (
		<div className="brands">
			<div className="container">
				<h2 className="brands__header">
					наши бренды
				</h2>
				<ul className="brands__list list">
					<li className="list__item">
						<img src="https://bit.ly/2HA5mSu" alt=""/>
					</li>
					<li className="list__item">
						<img src="https://bit.ly/2HA5mSu" alt=""/>
					</li>
					<li className="list__item">
						<img src="https://bit.ly/2HA5mSu" alt=""/>
					</li>
				</ul>
			</div>
		</div>
	)
}
