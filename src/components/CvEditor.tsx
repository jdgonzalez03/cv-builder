import { DownloadIcon } from "./Icons";
import { DashedButton } from "./common/DashedButton";
import { EducationSection } from "./cv/EducationSection";
import { ExperienceSection } from "./cv/ExperienceSection";
import { SkillsSection } from "./cv/SkillsSection";

import { usePdfExport } from "../hooks/usePdfExport";
import { ContactSection } from "./cv/ContactSection";
import { LanguagesSection } from "./cv/LanguagesSection";
import { PanelHeader } from "./cv/PanelHeader";
import { PersonalInfoSection } from "./cv/PersonalInfoSection";
import { SummarySection } from "./cv/SummarySection";

export function CvEditor() {
	const { exportToPdf } = usePdfExport();
	const handleDownload = () => {
		const cvIdElement = import.meta.env.VITE_CV_ID_ELEMENT;

		exportToPdf(cvIdElement, "cv.pdf");
	};
	return (
		<aside className="flex w-112.5 flex-col overflow-y-auto border-r border-gray-200 bg-white h-full max-h-full">
			<div className="p-6">
				{/* HEADER */}
				<PanelHeader
					title="Personal Information"
					description="Fill in your basic details to start your professional CV."
				/>

				{/* SECTIONS */}
				<div className="space-y-2">
					{/* PERSONAL INFO */}
					<PersonalInfoSection />

					{/* CONTACT */}
					<ContactSection />

					{/* SUMMARY */}
					<SummarySection />

					{/* EXPERIENCE */}
					<ExperienceSection />

					{/* SKILLS */}
					<SkillsSection />

					{/* EDUCATION */}
					<EducationSection />

					{/* LANGUAGES */}
					<LanguagesSection />
				</div>
			</div>

			{/* FOOTER */}

			<div className="sticky bottom-0 mt-auto border-t border-gray-100 bg-white p-6">
				<DashedButton
					text="Download CV"
					color="primary"
					icon={<DownloadIcon />}
					onClick={handleDownload}
				/>
			</div>
		</aside>
	);
}
