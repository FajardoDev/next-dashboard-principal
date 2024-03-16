"use client";
import { useRouter } from "next/navigation";

export const Buton = () => {
	const router = useRouter();
	return (
		<div className="flex items-end justify-end pt-2">
			<button
				className="group relative h-12 w-40 overflow-hidden rounded-md bg-blue-500 text-md font-bold text-white"
				onClick={() => router.push("/dashboard/pokemons")}
			>
				Regresar
				<div className="absolute inset-0 h-full w-full scale-0 rounded-md transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
			</button>
		</div>
	);
};
