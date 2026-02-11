import { useAppSelector } from "../hooks/useStore";

interface Props {
	id: string;
}

export function CvPreview({ id }: Props) {
	const {
		personalInfo,
		summary,
		experience,
		skills,
		education,
		contactInfo,
		languages,
	} = useAppSelector((state) => state.cv);

	return (
		<section className="custom-scrollbar flex flex-1 flex-col items-center overflow-y-auto bg-[#eef2f6] px-4 py-10 h-full max-h-full">
			{/* PAPER */}
			<div
				id={id}
				className="flex w-full max-w-[800px] aspect-[1/1.414] flex-col gap-10 rounded-sm bg-white p-16 shadow-2xl"
			>
				{/* Header */}
				<div className="flex flex-col gap-2 border-b-2 border-black pb-4">
					<h1 className="text-5xl font-extrabold uppercase tracking-tighter text-black">
						{personalInfo.firstName} {personalInfo.lastName}
					</h1>
					<p className="text-xl font-medium uppercase tracking-widest text-gray-600">
						{personalInfo.jobTitle}
					</p>
					{contactInfo?.email && (
						<p className="text-sm text-gray-600 break-words">
							{contactInfo.email}
						</p>
					)}
				</div>

				<div className="grid flex-1 grid-cols-3 gap-12">
					{/* LEFT */}
					<div className="space-y-8">
						<section>
							<h3 className="mb-4 border-b border-gray-200 pb-1 text-xs font-black uppercase tracking-widest text-black">
								Contact
							</h3>
							<ul className="space-y-2 text-[13px] leading-relaxed text-gray-600">
								<li>{contactInfo?.phone}</li>
								<li>
									{contactInfo?.city}, {contactInfo?.country}
								</li>
								<li>{contactInfo?.portfolio}</li>
							</ul>
						</section>

						<section>
							<h3 className="mb-4 border-b border-gray-200 pb-1 text-xs font-black uppercase tracking-widest text-black">
								Skills
							</h3>

							<div className="flex flex-col gap-3">
								{skills.map((skill) => (
									<div
										key={skill.id}
										className="flex items-center justify-between"
									>
										<p className="text-[12px] font-bold text-black">
											{skill.name}
										</p>
										<div className="flex items-center gap-0.5">
											{Array.from({ length: 5 }, (_, index) => (
												<span
													key={`${skill.id}-level-${index}`}
													className={`text-xs ${
														index < skill.level ? "text-black" : "text-gray-300"
													}`}
												>
													{index < skill.level ? "●" : "○"}
												</span>
											))}
										</div>
									</div>
								))}
							</div>
						</section>

						<section>
							<h3 className="mb-4 border-b border-gray-200 pb-1 text-xs font-black uppercase tracking-widest text-black">
								Languages
							</h3>
							<ul>
								{languages?.map((language) => (
									<li key={language.id} className="text-[13px] text-gray-600">
										{language.language} ({language.level})
									</li>
								))}
							</ul>
						</section>
					</div>

					{/* RIGHT */}
					<div className="col-span-2 space-y-10">
						{summary.text && (
							<section>
								<h3 className="mb-6 flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-black">
									<span className="h-px flex-1 bg-gray-200" />
									Profile
									<span className="h-px flex-1 bg-gray-200" />
								</h3>
								<p className="text-[14px] italic leading-relaxed text-gray-700">
									{summary.text}
								</p>
							</section>
						)}

						{/* Experience */}
						{experience.length > 0 && (
							<section>
								<h3 className="mb-6 flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-black">
									<span className="h-px flex-1 bg-gray-200" />
									Experience
									<span className="h-px flex-1 bg-gray-200" />
								</h3>

								<div className="space-y-6">
									{experience.map((exp) => (
										<div key={exp.id}>
											<div className="mb-1 flex items-baseline justify-between">
												<h4 className="text-[14px] font-bold text-black">
													{exp.position}
												</h4>
												<span className="text-[11px] font-bold text-gray-400">
													{exp.startDate.split("-").reverse().join("/")} —{" "}
													{exp.endDate?.split("-").reverse().join("/") ||
														"PRESENT"}
												</span>
											</div>
											<p className="mb-2 text-[12px] font-medium text-gray-500">
												{exp.company}
											</p>
											<ul className="list-inside list-disc space-y-1 text-[13px] leading-normal text-gray-600">
												<li>{exp.description}</li>
											</ul>
										</div>
									))}
								</div>
							</section>
						)}

						{/* Education */}
						{education.length > 0 && (
							<section>
								<h3 className="mb-6 flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-black">
									<span className="h-px flex-1 bg-gray-200" />
									Education
									<span className="h-px flex-1 bg-gray-200" />
								</h3>

								<div className="space-y-4">
									{education.map((edu) => (
										<div key={edu.id}>
											<div className="flex items-baseline justify-between">
												<h4 className="text-[14px] font-bold text-black">
													{edu.degree}
												</h4>
												<span className="text-[11px] font-bold text-gray-400">
													{edu.startDate.split("-").reverse().join("/")} —{" "}
													{edu.endDate?.split("-").reverse().join("/") ||
														"PRESENT"}
												</span>
											</div>
											<p className="text-[12px] text-gray-500">
												{edu.institution}
											</p>
											{edu.description && (
												<ul className="mt-2 list-inside list-disc text-[13px] leading-normal text-gray-600">
													<li>{edu.description}</li>
												</ul>
											)}
										</div>
									))}
								</div>
							</section>
						)}
					</div>
				</div>
			</div>

			<div className="h-10" />
		</section>
	);
}
