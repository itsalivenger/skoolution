"use client";
import { useState } from "react";
import {
	ChartNoAxesCombined,
	ChevronRight,
	GraduationCap,
	Home,
	LogOut,
} from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
	const [opensidebar, setOpensidebar] = useState(true);
	return (
		<div className="absolute md:relative  z-50">
			<aside
				className={`bg-white h-dvh px-2 md:px-5 py-6 flex flex-col justify-between gap-5 shadow-[14px_4px_42px_-8px_#e3e3e3] ${
					opensidebar ? " w-[280px]" : " w-[60px] md:w-[80px]"
				}  transition-all duration-300`}
			>
				{/* Logo + Links */}
				<div className="flex flex-col gap-5">
					{/* Logo */}
					<div
						className={`flex ${
							opensidebar ? "justify-start" : "justify-center"
						} items-center`}
					>
						<div className="font-poppins text-xl sm:text-2xl flex items-center gap-1 tracking-wide font-semibold uppercase">
							<span
								className={`${
									opensidebar
										? "w-auto text-xl sm:text-2xl h-[40px]"
										: "w-9 text-sm h-[30px]"
								} flex justify-center items-center px-3.5  bg-skblue text-white`}
							>
								sk
							</span>
							<span
								className={`${
									opensidebar ? "inline-block" : "hidden"
								} text-skblue`}
							>
								oolution
							</span>
						</div>
						<button
							onClick={() => {
								setOpensidebar(!opensidebar);
							}}
							className={`absolute right-0 top-7 text-neutral-600 cursor-pointer translate-x-1/2 ${
								opensidebar ? "" : ""
							} transition-all duration-300`}
						>
							<ChevronRight
								strokeWidth={1.5}
								className="bg-white border-2 border-skblue text-skblue rounded-full w-5 h-5 md:w-6 md:h-6"
							/>
						</button>
					</div>
					{/* Links */}
					<div className="flex items-center flex-col gap-3.5">
						<Link
							href="#"
							className={`flex ${
								opensidebar ? "justify-start" : "justify-center"
							} gap-3.5 bg-blue-50 hover:bg-blue-50 p-2 rounded-md w-full text-skblue`}
						>
							<Home size={20} className="text-skblue" />
							<span className={`${opensidebar ? "inline-block" : "hidden"}`}>
								Acceuil
							</span>
						</Link>
						<Link
							href="#"
							className={`flex ${
								opensidebar ? "justify-start" : "justify-center"
							} gap-3.5 hover:bg-blue-50 p-2 rounded-md w-full text-neutral-500`}
						>
							<GraduationCap size={20} className="text-neutral-500" />
							<span className={`${opensidebar ? "inline-block" : "hidden"}`}>
								Mes Matieres
							</span>
						</Link>
						<Link
							href="#"
							className={`flex ${
								opensidebar ? "justify-start" : "justify-center"
							} gap-3.5 hover:bg-blue-50 p-2 rounded-md w-full text-neutral-500`}
						>
							<ChartNoAxesCombined size={20} className="text-neutral-500" />
							<span className={`${opensidebar ? "inline-block" : "hidden"}`}>
								Ma Progression
							</span>
						</Link>
					</div>
				</div>
				{/* Logout */}
				<Link
					href="#"
					className={`flex ${
						opensidebar ? "justify-start" : "justify-center"
					} gap-3.5 hover:bg-blue-50 text-neutral-500 p-2 rounded-md w-fit md:w-full`}
				>
					<LogOut size={20} className="text-neutral-500" />
					<span className={`${opensidebar ? "inline-block" : "hidden"}`}>
						Logout
					</span>
				</Link>
			</aside>
		</div>
	);
}
