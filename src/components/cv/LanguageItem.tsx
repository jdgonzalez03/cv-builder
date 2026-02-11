import { useCvActions } from "../../hooks/useCvActions";
import type { Language } from "../../store/cv/types";
import { InputField } from "../common/InputField";
import { CloseIcon } from "../Icons";

interface Props {
	language: Language;
}

export function LanguageItem({ language }: Props) {
	const { updateLanguage, removeLanguage } = useCvActions();

	const handleRemoveLanguage = () => {
		removeLanguage(language.id);
	};

	return (
		<div className="space-y-4 relative rounded-lg border border-gray-200 p-4">
			<button
				type="button"
				className="absolute top-2 right-2 cursor-pointer hover:scale-125 transition-transform"
				onClick={handleRemoveLanguage}
			>
				<CloseIcon />
			</button>
			<div className="flex items-center justify-between">
				<h4 className="text-sm font-semibold text-gray-900">Language Entry</h4>
			</div>

			<div className="grid grid-cols-1 gap-4">
				<InputField
					labelText="Language"
					value={language.language}
					maxLength={50}
					placeholder="e.g., English, Spanish, French"
					onChange={(value) => {
						updateLanguage({ ...language, language: value });
					}}
				/>
			</div>

			<div className="grid grid-cols-1 gap-4">
				<InputField
					labelText="Proficiency Level"
					value={language.level}
					maxLength={50}
					placeholder="e.g., Native, Fluent, B2, Elementary"
					onChange={(value) => {
						updateLanguage({ ...language, level: value });
					}}
				/>
			</div>
		</div>
	);
}
