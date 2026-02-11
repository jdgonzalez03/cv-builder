import { useCvActions } from "../../hooks/useCvActions";
import { useAppSelector } from "../../hooks/useStore";
import { AccordionSection } from "../common/AccordionSection";
import { TextArea } from "../common/TextArea";
import { SummaryIcon } from "../Icons";

export function SummarySection() {
	const { summary } = useAppSelector((state) => state.cv);
	const { updateSummary } = useCvActions();
	const handleSummaryChange = (value: string) => {
		updateSummary({ text: value });
	};
	return (
		<AccordionSection title="Summary" icon={<SummaryIcon />}>
			<div className="p-4">
				<TextArea
					value={summary.text}
					onChange={handleSummaryChange}
					placeholder="Briefly describe your career and goals..."
					maxLength={700}
				/>
			</div>
		</AccordionSection>
	);
}
