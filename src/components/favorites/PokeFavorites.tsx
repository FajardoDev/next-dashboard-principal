"use client";

import { PokemonsGrid } from "@/pokemons";
import { useAppSelector } from "@/store";
// import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const PokeFavorites = () => {
	const pokeFavorite = useAppSelector((state) =>
		Object.values(state.pokeFavorites.favorites),
	);
	// console.log(pokeFavorite);
	// Mantener favoritos en favoritos hasta que recargue
	// const [pokemons, setPokemons] = useState(pokeFavorite);

	return (
		<>
			{/* <PokemonsGrid pokemons={pokeFavorite} /> */}

			{pokeFavorite.length === 0 ? (
				<Nofavorite />
			) : (
				<PokemonsGrid pokemons={pokeFavorite} />
			)}
		</>
	);
};

export const Nofavorite = () => {
	return (
		<>
			<div className="flex flex-col h-[50vh] items-center justify-center">
				<IoHeartOutline size={100} className="text-red-500" />
				<span>No hay favoritos</span>
			</div>
		</>
	);
};
