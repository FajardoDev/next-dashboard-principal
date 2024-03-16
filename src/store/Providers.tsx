"use client";

import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from ".";
import { setFavoritePokemons } from "./pokemons/favorites";

interface Props {
	children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
	useEffect(() => {
		const favorites = JSON.parse(
			localStorage.getItem("fovorite-pokemons") ?? "{}",
		);
		console.log(favorites);
		store.dispatch(setFavoritePokemons(favorites));
	}, []);

	return <Provider store={store}>{children}</Provider>;
};
