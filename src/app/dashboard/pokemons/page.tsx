import { PokemonsGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata = {
	title: "listado de los pokemons ",
	description: "este es el listado de todos los pokemons ",
};

const getPokemons = async (
	limit = 20,
	offset = 0,
): Promise<SimplePokemon[]> => {
	const data: PokemonsResponse = await fetch(
		`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
	).then((rep): Promise<any> => rep.json());

	// Construyendo el obj
	const pokemons = data.results.map(
		(pokemon): { id: string; name: string } => ({
			id: pokemon.url.split("/").at(-2)!,
			name: pokemon.name,
		}),
	);
	// throw new Error("Esto es un error forzado");

	return pokemons;
};

export default async function PokemonsPage() {
	const pokemons = await getPokemons(153);

	return (
		<>
			{/* {JSON.stringify(pokemons)} */}
			<div className="flex flex-col">
				<span className="text-4xl pl-20 mb-4 bg-clip-text text-transparent bg-gradient-to-t from-red-500 to-green-500 py-4 font-bold">
					Listado de Pokémons{" "}
					<small className="font-normal">Estado Estático</small>
				</span>

				<PokemonsGrid pokemons={pokemons} />
			</div>
		</>
	);
}
