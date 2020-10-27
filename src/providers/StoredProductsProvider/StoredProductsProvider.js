import React from 'react';

export const StoredProductsContext = React.createContext();
export const StoredProductsProvider = ({ children, value }) => (
	<StoredProductsContext.Provider value={value}>
		{children}
	</StoredProductsContext.Provider>
);