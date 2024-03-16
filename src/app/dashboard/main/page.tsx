import { WidgetsGrid } from "../../../components/WidgetsGrid";

export const metadata = {
	title: "Admin Dashboard",
	description: "Carrito de compras global",
};

export default function MainPage() {
	return (
		<div className="">
			<h1 className="text-4xl p-4 font-semibold">Dashboard</h1>
			<span className="text-2xl p-4">Información General</span>

			<WidgetsGrid />
		</div>
	);
}
