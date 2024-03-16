"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
	path: string; // path? Obligatorio
	icon: JSX.Element;
	title: string;
	subTitle: string;
}

export const SidebarMenuItems = ({ path, icon, title, subTitle }: Props) => {
	const pathname = usePathname();

	return (
		<>
			<Link
				href={path}
				className={`${
					pathname === path && "bg-blue-800 border-s-2 border-s-rose-600"
				} w-full px-2 inline-flex space-x-2 py-3 items-center border-b border-slate-700 hover:bg-white/5 transition ease-linear duration-100`}
			>
				<div className="text-orange-600">{icon}</div>

				<div className="flex flex-col">
					<span className="text-base font-bold leading-5 text-white">{title}</span>
					<span className="text-sm text-white/50 hidden md:block">{subTitle}</span>
				</div>
			</Link>
		</>
	);
};
