import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AccountPage } from '../pages/AccountPage/AccountPage';
import { BasketPage } from '../pages/BasketPage/BasketPage';
import { GoodsPage } from '../pages/GoodsPage/GoodsPage';
import { HomePage } from '../pages/HomePage/HomePage';
import { StoredProductsProvider } from '../providers/StoredProductsProvider/StoredProductsProvider';
import { AppRoutes } from '../routes/appRoutes';

export const AppContainer = () => {
	const [storedProducts, setStoredProducts] = useState([]);
	const [isScrolled, setIsScrolled] = useState(false);

	return (
		<BrowserRouter>
			<StoredProductsProvider value={[storedProducts, setStoredProducts]}>
				<Switch>
					<Route path={AppRoutes.Account} component={AccountPage} />
					<Route path={AppRoutes.Basket}>
						<BasketPage storedProducts={storedProducts} />
					</Route>
					<Route path={AppRoutes.Goods}>
						<GoodsPage isScrolled={isScrolled} setIsScrolled={setIsScrolled} />
					</Route>
					<Route path={AppRoutes.Home} component={HomePage} exact />
				</Switch>
			</StoredProductsProvider>
		</BrowserRouter>
	)
}
