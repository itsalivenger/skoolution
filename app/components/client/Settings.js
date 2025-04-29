export default function Settings() {
	return (
		<section className="px-0 md:px-5 py-5 flex flex-col gap-6">
			{/* Title + Cards */}
			<div className="flex flex-col gap-6">
				{/* Titles */}
				<div className="flex flex-col gap-1.5">
					<h1 className="font-bold text-3xl">Profile settings</h1>
					<p className="text-neutral-500 text-[13px] sm:text-sm">
						Gère ton compte et personnalise ton expérience.
					</p>
				</div>
				{/* Fields */}
				<section className="bg-white px-6 py-8">
					<div>
						<div>
							<div></div>
							<div>
								<p>Amina El Fassi</p>
								<p>Aminaelfassi17@gmail.com</p>
							</div>
						</div>
						<div>Enregistrer</div>
					</div>
					<form className="flex flex-col">
						{/* First Fields */}
						<div className="flex gap-4 w-[calc(33.3333%-40px)]">
							<div className="flex flex-col gap-1">
								<label className="px-5">Nom complet</label>
								<input
									type="text"
									className="border border-neutral-400 outline-0 py-2.5 pl-5"
									placeholder="Ecrivez votre Nom..."
								/>
							</div>
							<div className="flex flex-col gap-1">
								<label className="px-5">Numéro de téléphone</label>
								<input
									type="text"
									className="border border-neutral-400 outline-0 py-2.5 pl-5"
									placeholder="Ecrivez votre numéro..."
								/>
							</div>
						</div>
						<button>Supprimer le compte</button>
					</form>
				</section>
			</div>
		</section>
	);
}
