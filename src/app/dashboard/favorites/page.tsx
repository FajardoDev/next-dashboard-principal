import { PokeFavorites } from "@/components";

export const metadata = {
	title: "Favoritos",
	description: "este es el listado de todos los favoritos ",
};

export default async function PokemonsPage() {
	return (
		<>
			<div className="flex flex-col">
				<span className="text-4xl pl-20 mb-4 bg-clip-text text-transparent bg-gradient-to-t from-red-500 to-green-500 py-4 font-bold text-center">
					Pokémons Favoritos
				</span>

				<PokeFavorites />
			</div>
		</>
	);
}
