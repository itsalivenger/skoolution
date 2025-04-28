// Start Health Icons

// End Health Icons

import { faSquareRootVariable } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	ICertificatePaperOutline,
	IExamMultipleChoiceOutline,
	IExamQualificationOutline,
} from "healthicons-react";
import { Brain } from "lucide-react";
import Link from "next/link";
import RadarChart from "./Radarchart";

export default function Progression() {
	return (
		<section className="px-0 md:px-5 py-5 flex flex-col gap-6">
			{/* Title + Cards */}
			<div className="flex flex-col gap-6">
				{/* Titles */}
				<div className="flex flex-col gap-1.5">
					<h1 className="flex gap-1 font-bold text-3xl">Ma progression</h1>
					<p className="text-neutral-500 text-[13px] sm:text-sm">
						Visualise ton chemin vers la réussite.
					</p>
				</div>
				{/* Cards */}
				<section className="grid grid-cols-12 gap-y-5 gap-0 sm:gap-5 lg:gap-y-10 lg:gap-10">
					{/* Card One */}
					<div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-white p-3 pb-6 flex flex-col justify-start items-center gap-5 shadow-[3px_3px_10px_0px_rgba(0,_0,_0,_0.1)] border border-neutral-200">
						<p className="font-semibold text-base sm:text-2xl self-start w-full">
							Moyenne générale
						</p>
						<div className="flex justify-center items-center border-10 border-neutral-300 rounded-full w-1/2 aspect-square">
							<p className="text-2xl xl:text-5xl font-semibold">
								17.5
								<span className="text-xs text-neutral-400 font-normal">
									/20
								</span>
							</p>
						</div>
					</div>
					{/* Card Two */}
					<div className="col-span-12 sm:col-span-6 lg:col-span-8 bg-white p-3 pb-0 flex flex-col justify-start items-center shadow-[3px_3px_10px_0px_rgba(0,_0,_0,_0.1)] border border-neutral-200">
						<p className="font-semibold text-base sm:text-2xl self-start w-full">
							Compétence développée
						</p>
						<div className="-mt-5 w-[260px] min-[400px]:w-[300px]">
							<RadarChart />
						</div>
					</div>
					{/* Card 3 */}
					<div className="col-span-12 sm:col-span-4 xl:col-span-3 bg-white p-3 pb-6 flex flex-col justify-start items-center gap-5 shadow-[3px_3px_10px_0px_rgba(0,_0,_0,_0.1)] border border-neutral-200">
						<div className="flex justify-between self-start w-full">
							<p className="font-semibold">Mathématiques</p>
							<p className="bg-[#135EA555] font-bold text-[#135EA5] text-[8px] flex justify-center items-center p-1 h-4">
								TOP 5%
							</p>
						</div>
						<div className="flex justify-center items-center border-10 border-neutral-300 rounded-full w-1/2 aspect-square">
							<p className="text-2xl sm:text-xl lg:text-3xl font-semibold">
								18
								<span className="text-xs text-neutral-400 font-normal">
									/20
								</span>
							</p>
						</div>
					</div>
					{/* Card 4 */}
					<div className="col-span-12 sm:col-span-4 xl:col-span-3 bg-white p-3 pb-6 flex flex-col justify-start items-center gap-5 shadow-[3px_3px_10px_0px_rgba(0,_0,_0,_0.1)] border border-neutral-200">
						<p className="font-semibold self-start w-full">Physique</p>
						<div className="flex justify-center items-center border-10 border-neutral-300 rounded-full w-1/2 aspect-square">
							<p className="text-2xl sm:text-xl lg:text-3xl font-semibold">
								16.5
								<span className="text-xs text-neutral-400 font-normal">
									/20
								</span>
							</p>
						</div>
					</div>
					{/* Card 5 */}
					<div className="col-span-12 sm:col-span-4 xl:col-span-3 bg-white p-3 pb-6 flex flex-col justify-start items-center gap-5 shadow-[3px_3px_10px_0px_rgba(0,_0,_0,_0.1)] border border-neutral-200">
						<p className="font-semibold self-start w-full">Chimie</p>
						<div className="flex justify-center items-center border-10 border-neutral-300 rounded-full w-1/2 aspect-square">
							<p className="text-2xl sm:text-xl lg:text-3xl font-semibold">
								14
								<span className="text-xs text-neutral-400 font-normal">
									/20
								</span>
							</p>
						</div>
					</div>
					{/* Card 6 */}
					<div className="col-span-12 sm:col-span-4 xl:col-span-3 bg-white p-3 pb-6 flex flex-col justify-start items-center gap-5 shadow-[3px_3px_10px_0px_rgba(0,_0,_0,_0.1)] border border-neutral-200">
						<p className="font-semibold self-start w-full">S.V.T</p>
						<div className="flex justify-center items-center border-10 border-neutral-300 rounded-full w-1/2 aspect-square">
							<p className="text-2xl sm:text-xl lg:text-3xl font-semibold">
								15.75
								<span className="text-xs text-neutral-400 font-normal">
									/20
								</span>
							</p>
						</div>
					</div>
					{/* Card 7 */}
					<div className="col-span-12 sm:col-span-4 xl:col-span-3 bg-white p-3 pb-6 flex flex-col justify-start items-center gap-5 shadow-[3px_3px_10px_0px_rgba(0,_0,_0,_0.1)] border border-neutral-200">
						<div className="flex justify-between self-start w-full">
							<p className="font-semibold">Anglais</p>
							<p className="bg-[#8E24AA55] font-bold text-[#8E24AA] text-[8px] flex justify-center items-center p-1 h-4">
								TOP 10%
							</p>
						</div>
						<div className="flex justify-center items-center border-10 border-neutral-300 rounded-full w-1/2 aspect-square">
							<p className="text-2xl sm:text-xl lg:text-3xl font-semibold">
								18.5
								<span className="text-xs text-neutral-400 font-normal">
									/20
								</span>
							</p>
						</div>
					</div>
					{/* Card 8 */}
					<div className="col-span-12 sm:col-span-4 xl:col-span-3 bg-white p-3 pb-6 flex flex-col justify-start items-center gap-5 shadow-[3px_3px_10px_0px_rgba(0,_0,_0,_0.1)] border border-neutral-200">
						<div className="flex justify-between self-start w-full">
							<p className="font-semibold">Philosophie</p>
							<p className="bg-[#00606455] font-bold text-[#006064] text-[8px] flex justify-center items-center p-1 h-4">
								TOP 1%
							</p>
						</div>
						<div className="flex justify-center items-center border-10 border-neutral-300 rounded-full w-1/2 aspect-square">
							<p className="text-2xl sm:text-xl lg:text-3xl font-semibold">
								19
								<span className="text-xs text-neutral-400 font-normal">
									/20
								</span>
							</p>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
}
