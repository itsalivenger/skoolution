"use client";
import { useEffect, useRef, useState } from "react";
import useClickOutside from "../hooks/UseClickOutside";
import { ChartNoAxesCombined, GraduationCap, Home, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
	// Close and Open The Sidebar On Focus Change
	const [opensidebar, setOpensidebar] = useState();
	const sidebarRef = useRef(null);
	useClickOutside(sidebarRef, () => setOpensidebar(false));
	useEffect(() => {
		// Detect screen width when component mounts
		if (window.innerWidth >= 768) {
			setOpensidebar(true); // md and above => open
		}
	}, []);
	// Change color of current Link
	const pathname = usePathname();
	const links = [
		{
			href: "/dashboard",
			label: "dashboard",
			logo: <Home size={20} />,
		},
		{
			href: "/subjects",
			label: "subjects",
			logo: <GraduationCap size={20} />,
		},
		{
			href: "/progression",
			label: "progression",
			logo: <ChartNoAxesCombined size={20} />,
		},
	];
	return (
		<div className="absolute md:relative z-50">
			<aside
				className={`bg-white h-dvh px-2 md:px-5 py-6 flex flex-col justify-between gap-5 shadow-sm md:shadow-[14px_4px_42px_-8px_#e3e3e3] ${
					opensidebar ? " w-[280px]" : " w-[60px] md:w-[80px]"
				}  transition-all duration-300`}
				ref={sidebarRef}
				onClick={() => setOpensidebar(true)}
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
									opensidebar ? "scale-100 w-auto" : "scale-0 w-0"
								} text-skblue transition-all duration-200`}
							>
								oolution
							</span>
						</div>
					</div>
					{/* Links */}
					<div className="flex items-center flex-col gap-3.5">
						{links.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={`relative flex hover:bg-blue-50 p-2 rounded-md w-full text-neutral-500 
									${opensidebar ? "justify-start gap-3.5" : "justify-center gap-0"} 
									${
										pathname.startsWith(link.href)
											? "bg-blue-50 text-skblue"
											: "bg-white text-neutral-500"
									}
									`}
							>
								{link.logo}
								<span
									className={`${
										opensidebar ? "scale-100 w-full" : "scale-0 w-0"
									} text-nowrap transition-all duration-200`}
								>
									{link.label}
								</span>
							</Link>
						))}
					</div>
				</div>
				{/* Logout */}
				<Link
					href="/login"
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
