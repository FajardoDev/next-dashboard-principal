import { Sidebar } from "@/components";
import { Errores } from "@/pokemons";

export default function NotFound() {
	return (
		<div className="bg-slate-100 antialiased text-slate-800 selection:bg-blue-600 selection:text-white">
			<div className="flex">
				<Sidebar />

				<div className="md:w-full py-4 md:h-screen overflow-y-scroll">
					<h2 className="text-center text-2xl text-indigo-500">
						Esto es un error global
					</h2>
					<Errores />
				</div>
			</div>
		</div>
	);
}
