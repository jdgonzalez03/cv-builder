import { useState } from "react";
import { useCvActions } from "../../hooks/useCvActions";
import { useAppSelector } from "../../hooks/useStore";
import { AccordionSection } from "../common/AccordionSection";
import { FieldLabel } from "../common/FieldLabel";
import { ListIcon } from "../Icons";
import { AddChipButton } from "./AddChipButton";
import { SkillBadge } from "./SkillBadge";

export function SkillsSection() {
	const [skillInput, setSkillInput] = useState("");
	const { skills } = useAppSelector((state) => state.cv);
	const { removeSkill, addSkill, updateSkill } = useCvActions();

	const handleRemoveSkill = (skillId: string) => {
		removeSkill(skillId);
	};

	const handleAddSkill = () => {
		if (skillInput.trim()) {
			addSkill({
				name: skillInput.trim(),
				level: 3, // Default level
			});
			setSkillInput("");
		}
	};

	const handleLevelChange = (skillId: string, level: 1 | 2 | 3 | 4 | 5) => {
		updateSkill({ id: skillId, level });
	};

	return (
		<AccordionSection icon={<ListIcon />} title="Professional Skills">
			<div className="space-y-4 p-4">
				<div className="flex flex-col gap-1">
					<FieldLabel text="Technical Skills" />

					<div className="mt-1 flex flex-wrap gap-2">
						{skills.map((skill) => (
							<SkillBadge
								key={skill.id}
								skill={skill}
								onRemove={() => handleRemoveSkill(skill.id)}
								onLevelChange={(level) => handleLevelChange(skill.id, level)}
							/>
						))}

						<AddChipButton onClick={handleAddSkill} />
					</div>

					<input
						type="text"
						value={skillInput}
						onChange={(e) => setSkillInput(e.target.value)}
						maxLength={50}
						onKeyPress={(e) => e.key === "Enter" && handleAddSkill()}
						placeholder="Type skill name and press Enter or click +"
						className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
					/>
				</div>
			</div>
		</AccordionSection>
	);
}
