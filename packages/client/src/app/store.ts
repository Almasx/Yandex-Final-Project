import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import bookReducer from '../features/book/bookSlice';
import cartReducer from '../features/cart/cartSlice';
import catalogReducer from '../features/catalog/catalogSlice';
import genreReducer from '../features/genre/genreSlice';

export const store = configureStore({
  reducer: { catalog: catalogReducer, genre: genreReducer, book: bookReducer, cart: cartReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
