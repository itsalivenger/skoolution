import { AlignJustify, LogIn, Sun, X } from "lucide-react";
import Button from "./ui/Button";
import ChooseLanguage from "./ui/ChooseLanguage";
import Mode from "./ui/Mode";

export default function Header({ isOpenMenu, setIsOpenMenu }) {
	return (
		<section
			className="
		w-full px-5 xl:px-0 lg:w-11/12 xl:w-10/12 max-w-[1260px]
		z-50 relative flex justify-between items-center py-3"
		>
			{/* Logo */}
			<div className=" font-poppins text-2xl sm:text-3xl flex justify-center items-center gap-1 tracking-wide font-semibold uppercase">
				<span className="flex justify-center items-center px-3.5 h-[40px] bg-skblue dark:bg-white dark:text-skblue text-white">
					SK
				</span>
				<span className="text-skblue dark:text-white hidden sm:inline-block">
					oolution
				</span>
			</div>
			{/* Navbar */}
			<nav className="hidden lg:flex gap-[38px] lg:gap-5 xl:gap-[38px]">
				<a
					href="#"
					className="relative font-semibold text-skblue before:absolute before:-bottom-1 before:w-[calc(100%)] before:-left-[0px] before:h-0.5 before:bg-skblue"
				>
					Accueil
				</a>
				<a href="#services">Services</a>
				<a href="#fonctionnalité">Fonctionnalité</a>
				<a href="#témoignage">Témoignage</a>
				{/* <a href="#faqs">FAQs</a> */}
			</nav>
			{/* Login + Menu*/}
			<div className="flex justify-center items-center">
				{/* Lang + Mode + Login */}
				<div className="flex gap-2">
					<ChooseLanguage />
					<Mode />
					{/* Login */}
					<div className="hidden sm:flex">
						
						<Button

							href="/commencez"

						

							color="text-white"
							bg="bg-skblue"
							text="Commencer"
						/>
					</div>
					<a
						href="/login"
						className="flex sm:hidden border cursor-pointer  border-gray-400 p-2.5 rounded-full  hover:bg-neutral-100 bg-neutral-50 dark:bg-neutral-800 dark:hover:bg-neutral-700"
					>
						<LogIn size={20} strokeWidth={2} className="text-skblue" />
					</a>
				</div>
				{/* Humberger Menu */}
				<div className="lg:hidden relative w-[41px]">
					<AlignJustify
						className={`cursor-pointer transition-all duration-300 absolute right-0 -translate-y-1/2 ${
							!isOpenMenu ? "scale-100 rotate-0" : "scale-0 rotate-180"
						}`}
						size={28}
						onClick={() => {
							setIsOpenMenu(!isOpenMenu);
						}}
					/>
					<X
						className={`cursor-pointer transition-all duration-300 absolute right-0 -translate-y-1/2 ${
							!isOpenMenu ? "scale-0 rotate-180" : "scale-100 rotate-0"
						}`}
						size={28}
						onClick={() => {
							setIsOpenMenu(!isOpenMenu);
						}}
					/>
					{/* List Menu */}
					<div
						className={`w-screen bg-white dark:bg-skblack py-8 flex flex-col items-center absolute -right-5 top-8 gap-9 transition-all duration-500 ${
							isOpenMenu
								? "translate-x-0 opacity-100"
								: "translate-x-[100%] opacity-100"
						} h-[calc(100vh-66px)] `}
					>
						<a
							href="#accueil"
							className="relative font-semibold text-skblue before:absolute before:bottom-0 before:w-[calc(100%+10px)] before:-left-[5px] before:h-0.5 before:bg-skblue"
						>
							Accueil
						</a>
						<a href="#services">Services</a>
						<a href="#fonctionnalité">Fonctionnalité</a>
						<a href="#témoignage">Témoignage</a>
						<a href="#faqs">FAQs</a>
					</div>
				</div>
			</div>
		</section>
	);
}
