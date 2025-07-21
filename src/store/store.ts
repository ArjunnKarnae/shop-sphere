import { configureStore } from "@reduxjs/toolkit"
import { productsApi } from "./productsApi";
import { faqApi } from "./faqApi";
import { ordersApi } from "./ordersApi";
import { usersApi } from "./usersApi";

const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        [faqApi.reducerPath]: faqApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productsApi.middleware)
                                     .concat(faqApi.middleware)
                                     .concat(ordersApi.middleware)
                                     .concat(usersApi.middleware);
    }
});

export { store };

