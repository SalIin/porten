import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../routes/appRoutes';
import { WatchesList } from '../WatchesList/WatchesList';
import './content.scss';

export const Content = () => {
	return (
		<div className="content">
			<div className="row no-gutters">
				<div className="col-6">
					<h2 className="content__header">
						Сезон 2020/21
					</h2>
					<WatchesList />
				</div>
				<div className="col-6">
					<h2 className="content__header">
						Новая коллекция
					</h2>
					<Link to={AppRoutes.Goods}>каталог</Link>
				</div>
			</div>
		</div>
	)
}
