import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../hooks/useStore";
import type { Education, Experience } from "../store/cv/types";

interface Props {
	id: string;
}

interface PageContent {
	experience: Experience[];
	education: Education[];
}

/**
 * TODO: Refactor this component
 */
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

	const [pages, setPages] = useState<PageContent[]>([
		{ experience: [], education: [] },
	]);
	const containerRef = useRef<HTMLDivElement>(null);

	// Function to distribute content into multiple pages
	useEffect(() => {
		const distributeContent = () => {
			const newPages: PageContent[] = [];
			let currentPage: PageContent = { experience: [], education: [] };

			// Estimated maximum height for the main content (excluding header and sidebar)
			// Based on the A4 aspect ratio and padding
			const maxContentHeight = 900; // Adjust this value as needed
			let currentHeight = 0;

			// Estimated height of the summary
			const summaryHeight = summary.text ? 120 : 0;
			currentHeight += summaryHeight;

			// First page always includes the summary
			if (summary.text) {
				currentPage = { experience: [], education: [] };
			}

			// Distribute experience
			for (const exp of experience) {
				// Estimated height for experience entry (adjust according to your design)
				const expHeight = 100 + (exp.description?.length || 0) / 3;

				if (
					currentHeight + expHeight > maxContentHeight &&
					currentPage.experience.length > 0
				) {
					// Guardar página actual y crear nueva
					newPages.push(currentPage);
					currentPage = { experience: [], education: [] };
					currentHeight = 0;
				}

				currentPage.experience.push(exp);
				currentHeight += expHeight;
			}

			// Distribute education
			for (const edu of education) {
				// Estimated height for education entry (adjust according to your design)
				const eduHeight = 80 + (edu.description?.length || 0) / 3;

				if (
					currentHeight + eduHeight > maxContentHeight &&
					(currentPage.experience.length > 0 ||
						currentPage.education.length > 0)
				) {
					// Guardar página actual y crear nueva
					newPages.push(currentPage);
					currentPage = { experience: [], education: [] };
					currentHeight = 0;
				}

				currentPage.education.push(edu);
				currentHeight += eduHeight;
			}

			// Add the last page if it has content
			if (
				currentPage.experience.length > 0 ||
				currentPage.education.length > 0 ||
				newPages.length === 0
			) {
				newPages.push(currentPage);
			}

			setPages(newPages);
		};

		distributeContent();
	}, [experience, education, summary.text]);

	return (
		<section className="custom-scrollbar flex flex-1 flex-col items-center overflow-y-auto bg-[#eef2f6] px-4 py-10 h-full max-h-full gap-8">
			{pages.map((page, pageIndex) => (
				<div
					// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={pageIndex}
					id={pageIndex === 0 ? id : `${id}-page-${pageIndex + 1}`}
					ref={pageIndex === 0 ? containerRef : null}
					className="flex w-full max-w-[800px] aspect-[1/1.414] flex-col gap-10 rounded-sm bg-white p-16 shadow-2xl"
				>
					{/* Header - First page */}
					{pageIndex === 0 && (
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
					)}

					{/* Header simplified for subsequent pages */}
					{pageIndex > 0 && (
						<div className="flex items-center justify-between border-b border-gray-300 pb-3">
							<h2 className="text-2xl font-bold uppercase tracking-tight text-black">
								{personalInfo.firstName} {personalInfo.lastName}
							</h2>
							<span className="text-xs text-gray-400">
								Página {pageIndex + 1}
							</span>
						</div>
					)}

					<div className="grid flex-1 grid-cols-3 gap-12">
						{/* LEFT - First page */}
						{pageIndex === 0 && (
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
																index < skill.level
																	? "text-black"
																	: "text-gray-300"
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
											<li
												key={language.id}
												className="text-[13px] text-gray-600"
											>
												{language.language} ({language.level})
											</li>
										))}
									</ul>
								</section>
							</div>
						)}

						{/* RIGHT */}
						<div
							className={`${
								pageIndex === 0 ? "col-span-2" : "col-span-3"
							} space-y-10`}
						>
							{/* Summary - Only on the first page */}
							{pageIndex === 0 && summary.text && (
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
							{page.experience.length > 0 && (
								<section>
									<h3 className="mb-6 flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-black">
										<span className="h-px flex-1 bg-gray-200" />
										Experience
										<span className="h-px flex-1 bg-gray-200" />
									</h3>

									<div className="space-y-6">
										{page.experience.map((exp) => (
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
							{page.education.length > 0 && (
								<section>
									<h3 className="mb-6 flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-black">
										<span className="h-px flex-1 bg-gray-200" />
										Education
										<span className="h-px flex-1 bg-gray-200" />
									</h3>

									<div className="space-y-4">
										{page.education.map((edu) => (
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
			))}

			<div className="h-10" />

			{/* Footer */}
			<footer className="mt-4 text-center text-sm text-gray-500">
				Made With Love by{" "}
				<a
					href="https://github.com/jdgonzalez03"
					target="_blank"
					rel="noopener noreferrer"
					className="font-medium text-gray-700 hover:text-black transition-colors"
				>
					jdgonzalez03
				</a>
			</footer>
		</section>
	);
}
