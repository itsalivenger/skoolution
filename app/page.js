"use client";
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/guest/Footer";
import Subscribe from "./components/guest/Subscribe";
import WhySK from "./components/WhySK";
import OffreSK from "./components/OffreSK";
import Functionality from "./components/Functionality";
import Testimony from "./components/Testimony";
import Faqs from "./components/guest/Faqs";
import Steps from "./components/Steps";

export default function Home() {
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	return (
		<section
			className={`w-full flex flex-col items-center overflow-x-hidden text-skblack dark:text-neutral-100   bg-white dark:bg-skblack`}
		>
			<Header isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
			<Hero />
			<WhySK />
			<OffreSK />
			<Functionality />
			<Steps />
			<Testimony />
			<Faqs />
			<Subscribe />
			<Footer />
		</section>
	);
}
