import { useCvActions } from "../../hooks/useCvActions";
import { useAppSelector } from "../../hooks/useStore";
import { AccordionSection } from "../common/AccordionSection";
import { DashedButton } from "../common/DashedButton";
import { AddIcon, SchoolIcon } from "../Icons";
import { EducationItem } from "./EducationItem";

export function EducationSection() {
	const { education } = useAppSelector((state) => state.cv);
	const { addEducation } = useCvActions();
	const handleAddNewEducation = () => {
		addEducation({
			institution: "",
			degree: "",
			startDate: "",
			endDate: "",
		});
	};
	return (
		<AccordionSection icon={<SchoolIcon />} title="Education">
			<div className="space-y-4 p-4">
				{education.map((edu) => (
					<EducationItem key={edu.id} education={edu} />
				))}

				<DashedButton
					text="Add Education"
					icon={<AddIcon />}
					onClick={handleAddNewEducation}
				/>
			</div>
		</AccordionSection>
	);
}
