import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/pokemons";

/**
 Idea para almacenar los pokemons favoritos crear un obj con la key q es id del pokemon
 ¿ existe el pokemon 2 lo borro si no lo inserto
 {
    '1': {id: 1, name: 'bulbasaur'}
    '2': {id: 1, name: 'yvysaur'}
 }*/

interface PokemonsState {
	favorites: { [key: string]: SimplePokemon };
}

// #2 leer del localStorage
// const getInitialState = (): PokemonsState => {
// 	if (typeof localStorage === undefined) return {};

// 	const favorites = JSON.parse(
// 		localStorage.getItem("fovorite-pokemons") ?? "{}",
// 	);
// 	return favorites;
// };

const initialState: PokemonsState = {
	favorites: {},
	// ...getInitialState(),
	// "1": { id: "1", name: "bulbasaur" }, valores iniciales
	// "2": { id: "2", name: "yvysaur" },
	// "4": { id: "4", name: "charmander" },
};

const favoritesSlice = createSlice({
	name: "pokemons",
	initialState,
	reducers: {
		setFavoritePokemons(
			state,
			action: PayloadAction<{ [key: string]: SimplePokemon }>,
		) {
			state.favorites = action.payload;
		},

		// Si existe lo elimino si no existe lo agrego
		toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
			// Ver si el pokemon existe en el initialState
			const pokemon = action.payload;
			const { id } = pokemon;
			// Preguntar si el id existe en el initialState !! true | !!state[id]
			if (state.favorites[id] !== undefined) {
				delete state.favorites[id]; // si existe lo elimino
				// return;
			} else {
				// Si no existe recibo ese pokemon de la action
				state.favorites[id] = pokemon;
			}
			// Todo #1 no se debe de hacer en Redux
			localStorage.setItem("fovorite-pokemons", JSON.stringify(state.favorites));
		},
	},
});

export const { toggleFavorite, setFavoritePokemons } = favoritesSlice.actions;

export default favoritesSlice.reducer;
