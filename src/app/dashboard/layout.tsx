// lrc

import { Sidebar } from "@/components";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="bg-gradient-to-r from-black via-cyan-950 to-indigo-950 antialiased text-slate-800 selection:bg-blue-600 selection:text-white">
			<div className="flex">
				<Sidebar />

				<div className="md:w-full md:h-screen overflow-y-scroll text-white dark:text-slate-300">
					{children}
				</div>
			</div>
		</div>
	);
}
