import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BasketPage } from '../pages/BasketPage/BasketPage';
import { GoodsPage } from '../pages/GoodsPage/GoodsPage';
import { HomePage } from '../pages/HomePage/HomePage';
import { StoredProductsProvider } from '../providers/StoredProductsProvider/StoredProductsProvider';
import { AppRoutes } from '../routes/appRoutes';

export const AppContainer = () => {
	const [storedProducts, setStoredProducts] = useState([]);
	return (
		<BrowserRouter>
			<StoredProductsProvider value={setStoredProducts}>
				<Switch>
					<Route path={AppRoutes.Basket}>
						<BasketPage storedProducts={storedProducts} />
					</Route>
					<Route path={AppRoutes.Goods} component={GoodsPage} />
					<Route path={AppRoutes.Home} component={HomePage} exact />
				</Switch>
			</StoredProductsProvider>
		</BrowserRouter>
	)
}
