import { useCvActions } from "../../hooks/useCvActions";
import type { Education } from "../../store/cv/types";
import { InputField } from "../common/InputField";
import { TextArea } from "../common/TextArea";
import { CloseIcon } from "../Icons";

interface Props {
	education: Education;
}

export function EducationItem({ education }: Props) {
	const { updateEducation, removeEducation } = useCvActions();

	const handleRemoveEducation = () => {
		removeEducation(education.id);
	};

	return (
		<div className="space-y-4 relative rounded-lg border border-gray-200 p-4">
			<button
				type="button"
				className="absolute top-2 right-2 cursor-pointer hover:scale-125 transition-transform"
				onClick={handleRemoveEducation}
			>
				<CloseIcon />
			</button>
			<div className="flex items-center justify-between">
				<h4 className="text-sm font-semibold text-gray-900">Education Entry</h4>
			</div>

			<div className="grid grid-cols-1 gap-4">
				<InputField
					labelText="Institution"
					value={education.institution}
					placeholder="Institution name"
					onChange={(value) => {
						updateEducation({ ...education, institution: value });
					}}
				/>
			</div>

			<div className="grid grid-cols-1 gap-4">
				<InputField
					labelText="Degree"
					value={education.degree}
					placeholder="Degree"
					onChange={(value) => {
						updateEducation({ ...education, degree: value });
					}}
				/>
			</div>

			<div className="grid grid-cols-2 gap-4">
				<InputField
					labelText="Start Date"
					value={education.startDate}
					placeholder="MM/YYYY"
					type="month"
					onChange={(value) => {
						updateEducation({ ...education, startDate: value });
					}}
				/>
				<InputField
					labelText="End Date"
					value={education.endDate || ""}
					placeholder="MM/YYYY or leave empty"
					type="month"
					onChange={(value) => {
						updateEducation({ ...education, endDate: value });
					}}
				/>
			</div>

			<TextArea
				value={education.description || ""}
				placeholder="Describe your academic achievements, honors, relevant coursework, or activities..."
				maxLength={700}
				onChange={(value: string) => {
					updateEducation({ ...education, description: value });
				}}
			/>
		</div>
	);
}
