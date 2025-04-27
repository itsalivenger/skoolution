import Header from "../components/client/Header";
import Home from "../components/client/Home";
import Sidebar from "../components/client/Sidebar";

export default function page() {
	return (
		<section className="flex h-dvh overflow-hidden">
			<Sidebar />
			<section className="flex flex-col w-full pt-5 pr-[12px] md:pr-5 pl-[72px] md:pl-5 bg-[#fafafa]  overflow-y-scroll">
				<Header
					title={`Accueil`}
					description={`Bienvenue dans ton espace personnalisé !`}
				/>
				<Home />
			</section>
		</section>
	);
}
