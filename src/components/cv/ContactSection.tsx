import { useCvActions } from "../../hooks/useCvActions";
import { useAppSelector } from "../../hooks/useStore";
import { AccordionSection } from "../common/AccordionSection";
import { InputField } from "../common/InputField";
import { PhoneIcon } from "../Icons";

export function ContactSection() {
	const { contactInfo } = useAppSelector((state) => state.cv);
	const { updateContactInfo } = useCvActions();

	const handleUpdateEmail = (value: string) => {
		updateContactInfo({ email: value });
	};

	const handleUpdatePhone = (value: string) => {
		updateContactInfo({ phone: value });
	};

	const hanldeUpdateCity = (value: string) => {
		updateContactInfo({ city: value });
	};

	const hanldeUpdateCountry = (value: string) => {
		updateContactInfo({ country: value });
	};

	const handleUpdatePortfolio = (value: string) => {
		updateContactInfo({ portfolio: value });
	};

	return (
		<AccordionSection icon={<PhoneIcon />} title="Contact">
			<div className="space-y-4 p-4">
				<div className="grid grid-cols-1 gap-4">
					<InputField
						labelText="Email"
						value={contactInfo?.email || ""}
						placeholder="joe@example.com"
						onChange={handleUpdateEmail}
					/>
				</div>

				<div className="grid grid-cols-1 gap-4">
					<InputField
						labelText="Phone"
						value={contactInfo?.phone || ""}
						placeholder="+57 301 499 5544"
						onChange={handleUpdatePhone}
					/>
				</div>

				<div className="grid grid-cols-2 gap-4">
					<InputField
						labelText="City"
						value={contactInfo?.city || ""}
						placeholder="City"
						onChange={hanldeUpdateCity}
					/>

					<InputField
						labelText="Country"
						value={contactInfo?.country || ""}
						placeholder="Country"
						onChange={hanldeUpdateCountry}
					/>
				</div>

				<div className="grid grid-cols-1 gap-4">
					<InputField
						labelText="Portfolio"
						placeholder="https://joe-rivers.com"
						value={contactInfo?.portfolio || ""}
						onChange={handleUpdatePortfolio}
					/>
				</div>
			</div>
		</AccordionSection>
	);
}
