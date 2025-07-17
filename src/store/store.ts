import { configureStore } from "@reduxjs/toolkit"
import { productsApi } from "./productsApi";
import { faqApi } from "./faqApi";

const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        [faqApi.reducerPath]: faqApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productsApi.middleware)
                                     .concat(faqApi.middleware);
    }
});

export { store };

