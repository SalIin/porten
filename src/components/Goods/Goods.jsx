import React from 'react';
import { goods } from '../../data/goods';
import { CardItem } from '../CardItem';

export const Goods = () => {
	return (
		<>
			<h1>
				Goods
			</h1>
			<div className="jumbotron">
				<div className="row justify-content-around">
					{
						goods.map(item => <CardItem name={item.name} desc={item.desc} img={item.img_url} id={item.id} key={item.id} />)
					}
				</div>
			</div>
		</>
	)
}
