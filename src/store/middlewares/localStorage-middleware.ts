import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localStorageMiddleware = (state: MiddlewareAPI) => {
	return (next: Dispatch) => (action: Action) => {
		next(action);
		// console.log({ store: state.getState() });
		// console.log({ action });
		if (action.type === "pokemons/toggleFavorite") {
			const { pokeFavorites } = state.getState() as RootState;
			localStorage.setItem("fovorite-pokemons", JSON.stringify(pokeFavorites));
			return;
		}
	};
};
