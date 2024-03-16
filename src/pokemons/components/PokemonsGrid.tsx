"use strict";
import { PokemonCard, SimplePokemon } from "..";

interface Props {
	pokemons: SimplePokemon[];
}

export const PokemonsGrid = ({ pokemons }: Props) => {
	return (
		<>
			<div className="flex flex-wrap gap-6 items-center justify-center">
				{pokemons.map((pokemon) => (
					<PokemonCard key={pokemon.id} pokemon={pokemon} />
				))}
			</div>
		</>
	);
};
