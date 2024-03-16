"use client";

import Link from "next/link";

interface Props {
	title: string;
	subTitle?: string;
	label?: string;
	icon?: React.ReactNode | JSX.Element;
	path: string;
}

export const SimpleWidget = ({
	title,
	subTitle,
	label,
	icon,
	path,
}: Props) => {
	return (
		<div className="bg-white shadow-md shadow-blue-800/50 p-3 sm:min-w-[25%] min-w-full rounded-2xl border-1 border-gray-50 mx-2 my-3 ">
			<div className="flex flex-col">
				<div>
					{label && (
						<h2 className="font-bold text-gray-600 text-center">{label}</h2>
					)}
				</div>

				<div className="my-3">
					<div className="flex flex-row items-center justify-center space-x-1 ">
						{/* Icono irá aquí */}
						{icon}

						<div id="temp" className="text-center">
							<h4 className="text-4xl text-gray-600">{title}</h4>

							{subTitle && <p className="text-xs text-gray-500">{subTitle}</p>}
						</div>
					</div>
				</div>

				{path && (
					<div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
						<Link href={path} className="text-indigo-600 text-xs font-medium">
							Más
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};
