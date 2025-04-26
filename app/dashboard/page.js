import Header from "../components/client/Header";
import Sidebar from "../components/client/Sidebar";

export default function page() {
	return (
		<section className="flex h-dvh overflow-y-hidden">
			<Sidebar />
			<section className="scroll-auto flex flex-col gap-15 w-full p-5 pl-[72px] md:pl-5 bg-[#fafafa]">
				<Header />
				<div className="flex flex-col gap-5">
					<div className="flex bg-neutral-100 w-full rounded-lg py-20"></div>
					<div className="flex bg-neutral-100 w-full rounded-lg py-20"></div>
					<div className="flex bg-neutral-100 w-full rounded-lg py-20"></div>
					<div className="flex bg-neutral-100 w-full rounded-lg py-20"></div>
					<div className="flex bg-neutral-100 w-full rounded-lg py-20"></div>
				</div>
			</section>
		</section>
	);
}
