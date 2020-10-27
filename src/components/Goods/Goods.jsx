import React from 'react';
import { CardItem } from '../CardItem';

export const Goods = ({ title, category }) => {
	return (
		<>
			<h1>
				{title}
			</h1>
			<div className="jumbotron">
				<div className="row justify-content-around">
					{
						category.map(item => <CardItem name={item.name} desc={item.desc} img={item.img_url} id={item.id} key={item.id} />)
					}
				</div>
			</div>
		</>
	)
}
