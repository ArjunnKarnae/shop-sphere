import { configureStore } from "@reduxjs/toolkit"
import { productsApi } from "./productsApi";
import { faqApi } from "./faqApi";
import { ordersApi } from "./ordersApi";

const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        [faqApi.reducerPath]: faqApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productsApi.middleware)
                                     .concat(faqApi.middleware)
                                     .concat(ordersApi.middleware);
    }
});

export { store };

