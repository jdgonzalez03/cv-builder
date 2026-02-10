import { useCvActions } from "../../hooks/useCvActions";
import { useAppSelector } from "../../hooks/useStore";
import { AccordionSection } from "../common/AccordionSection";
import { InputField } from "../common/InputField";
import { PersonIcon } from "../Icons";

export function PersonalInfoSection() {
	const { personalInfo } = useAppSelector((state) => state.cv);
	const { updatePersonalInfo } = useCvActions();

	const handleFirstNameChange = (value: string) => {
		updatePersonalInfo({ firstName: value });
	};

	const handleLastNameChange = (value: string) => {
		updatePersonalInfo({ lastName: value });
	};

	const handleJobTitleChange = (value: string) => {
		updatePersonalInfo({ jobTitle: value });
	};

	if (!personalInfo) {
		return null;
	}

	return (
		<AccordionSection title="Personal Information" icon={<PersonIcon />}>
			<div className="space-y-4 p-4">
				<div className="grid grid-cols-2 gap-4">
					<InputField
						labelText="First Name"
						value={personalInfo.firstName || ""}
						placeholder="Joe"
						onChange={handleFirstNameChange}
					/>
					<InputField
						labelText="Last Name"
						placeholder="Rivers"
						value={personalInfo.lastName || ""}
						onChange={handleLastNameChange}
					/>
				</div>

				<InputField
					labelText="Jon Title"
					placeholder="FullStack Developer"
					value={personalInfo.jobTitle || ""}
					onChange={handleJobTitleChange}
				/>
			</div>
		</AccordionSection>
	);
}
