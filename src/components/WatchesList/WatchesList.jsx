import React from 'react'
import { WATCH_URL } from '../../constants/constants'

export const WatchesList = () => {
	return (
		<ul className="content__watches watches row">
			<li className="watches__item col-3">
				<img src={WATCH_URL} alt=""/>
				<p>
					Louis XVI ATHOS<br/>
					56.000 грн
				</p>
			</li>
			<li className="watches__item col-3">
				<img src={WATCH_URL} alt=""/>
				<p>
					Louis XVI ATHOS<br/>
					56.000 грн
				</p>
			</li>
			<li className="watches__item col-3">
				<img src={WATCH_URL} alt=""/>
				<p>
					Louis XVI ATHOS<br/>
					56.000 грн
				</p>
			</li>
		</ul>
	)
}
