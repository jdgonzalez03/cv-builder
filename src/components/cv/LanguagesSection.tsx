import { useCvActions } from "../../hooks/useCvActions";
import { useAppSelector } from "../../hooks/useStore";
import { AccordionSection } from "../common/AccordionSection";
import { DashedButton } from "../common/DashedButton";
import { AddIcon, LanguagesIcon } from "../Icons";
import { LanguageItem } from "./LanguageItem";

export function LanguagesSection() {
	const { languages } = useAppSelector((state) => state.cv);

	const { addLanguage } = useCvActions();

	const handleAddNewLanguage = () => {
		addLanguage({
			language: "",
			level: "",
		});
	};
	return (
		<AccordionSection icon={<LanguagesIcon />} title="Languages">
			<div className="space-y-4 p-4">
				{languages.map((language) => (
					<LanguageItem key={language.id} language={language} />
				))}
				<DashedButton
					text="Add Language"
					icon={<AddIcon />}
					onClick={handleAddNewLanguage}
				/>
			</div>
		</AccordionSection>
	);
}
