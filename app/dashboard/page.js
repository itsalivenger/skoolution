import Header from "../components/client/Header";
import Sidebar from "../components/client/Sidebar";

export default function page() {
	return (
		<section className="flex">
			<Sidebar />
			<section className="flex flex-col gap-15 w-full p-5 pl-[72px] md:pl-5 bg-[#fafafa]">
				<Header />
				<div className="bg-red-100">x</div>
			</section>
		</section>
	);
}
