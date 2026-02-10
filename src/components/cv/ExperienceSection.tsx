import { useCvActions } from "../../hooks/useCvActions";
import { useAppSelector } from "../../hooks/useStore";
import { AddIcon, WorkIcon } from "../Icons";
import { AccordionSection } from "../common/AccordionSection";
import { DashedButton } from "../common/DashedButton";
import { ExperienceItem } from "./ExperienceItem";

export function ExperienceSection() {
	const { experience } = useAppSelector((state) => state.cv);
	const { addNewExperience } = useCvActions();

	const handleAddNewExperience = () => {
		addNewExperience({
			company: "",
			position: "",
			startDate: "",
			endDate: "",
			description: "",
		});
	};

	return (
		<AccordionSection icon={<WorkIcon />} title="Experience" isOpen={true}>
			<div className="space-y-4 p-4">
				{experience.map((exp) => (
					<ExperienceItem key={exp.id} experience={exp} />
				))}

				<DashedButton
					text="Add Experience"
					icon={<AddIcon />}
					onClick={handleAddNewExperience}
				/>
			</div>
		</AccordionSection>
	);
}
