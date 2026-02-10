import { useCvActions } from "../../hooks/useCvActions";
import type { Experience } from "../../store/cv/types";
import { InputField } from "../common/InputField";
import { TextArea } from "../common/TextArea";
import { CloseIcon } from "../Icons";

interface Props {
	experience: Experience;
}

export function ExperienceItem({ experience }: Props) {
	const { removeExperience, updateExperience } = useCvActions();

	const handleRemoveExperience = () => {
		removeExperience(experience.id);
	};

	return (
		<div className="space-y-4 relative rounded-lg border border-gray-200 p-4">
			<button
				type="button"
				className="absolute top-2 right-2 cursor-pointer hover:scale-125 transition-transform"
				onClick={handleRemoveExperience}
			>
				<CloseIcon />
			</button>
			<div className="flex items-center justify-between">
				<h4 className="text-sm font-semibold text-gray-900">
					Experience Entry
				</h4>
			</div>

			<div className="grid grid-cols-1 gap-4">
				<InputField
					labelText="Company"
					value={experience.company}
					placeholder="Company name"
					onChange={(value) => {
						updateExperience({ ...experience, company: value });
					}}
				/>
			</div>
			<div className="grid grid-cols-1 gap-4">
				<InputField
					labelText="Position"
					value={experience.position}
					placeholder="Job title"
					onChange={(value) => {
						updateExperience({ ...experience, position: value });
					}}
				/>
			</div>

			<div className="grid grid-cols-2 gap-4">
				<InputField
					labelText="Start Date"
					value={experience.startDate}
					placeholder="MM/YYYY"
					onChange={(value) => {
						updateExperience({ ...experience, startDate: value });
					}}
				/>
				<InputField
					labelText="End Date"
					value={experience.endDate || ""}
					placeholder="MM/YYYY or leave empty"
					onChange={(value) => {
						updateExperience({ ...experience, endDate: value });
					}}
				/>
			</div>

			<TextArea
				value={experience.description}
				placeholder="Describe your responsibilities and achievements..."
				onChange={(value) => {
					updateExperience({ ...experience, description: value });
				}}
			/>
		</div>
	);
}
