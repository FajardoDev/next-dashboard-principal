import Image from "next/image";
import { SidebarMenuItems } from ".";
import {
	IoAperture,
	IoBrowsersOutline,
	IoCalculator,
	IoHeadsetOutline,
	IoHeartOutline,
	IoLogoReact,
} from "react-icons/io5";

const menuItems = [
	{
		path: "/dashboard/main",
		icon: <IoBrowsersOutline size={30} />,
		title: "Dashboard",
		subTitle: "Visualización",
	},
	{
		path: "/dashboard/counter",
		icon: <IoCalculator size={30} />,
		title: "Contador",
		subTitle: "Contador Lado del Cliente ",
	},
	{
		path: "/dashboard/pokemons",
		icon: <IoAperture size={30} />,
		title: "Pokemons",
		subTitle: "Generación Estática",
	},
	{
		path: "/dashboard/favorites",
		// icon: <IoHeadsetOutline size={30} />,
		icon: <IoHeartOutline size={30} />,
		title: "Favoritos",
		subTitle: "Global State",
	},
];

export const Sidebar = () => {
	return (
		<div className="md:flex md:min-h-screen md:w-[27%]">
			<div
				id="menu"
				// style={{ width: "400px" }}
				className="bg-gray-900 z-10 text-slate-300"
			>
				<div id="logo" className="my-4 px-6">
					<h1 className="flex items-center space-x-1 text-base md:text-2xl font-bold text-white">
						<IoLogoReact />
						<span>Dash</span>
						<span className="text-blue-500">F</span>.
					</h1>
					<p className="text-slate-500 text-sm">
						Gestiona tus acciones y actividades
					</p>
				</div>
				<div id="profile" className="px-6 py-10">
					<p className="text-slate-500">Bienvenido de nuevo,</p>
					<a href="#" className="inline-flex space-x-2 items-center">
						<span>
							<Image
								src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
								width={50}
								height={50}
								alt="Picture of the author"
								className="rounded-full w-8 h-8"
							/>
						</span>
						<span className="text-sm md:text-base font-bold">Ariel Fajardo</span>
					</a>
				</div>
				<div id="nav" className="w-full px-6 space-y-1">
					{menuItems.map((item) => (
						<SidebarMenuItems key={item.path} {...item} />
					))}
				</div>
			</div>
		</div>
	);
};
