import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import pokeFavoriteReducer from "./pokemons/favorites";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import { localStorageMiddleware } from "./middlewares/localStorage-middleware";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		pokeFavorites: pokeFavoriteReducer,
	},
	// middleware: (getDefaultMiddleware) =>
	// 	getDefaultMiddleware().concat(localStorageMiddleware),
});

// Inferir los tipos `RootState` y `AppDispatch` de la propia tienda
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
