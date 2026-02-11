import { FieldLabel } from "./FieldLabel";

interface Props {
	labelText: string;
	value: string;
	placeholder: string;
	onChange: (value: string) => void;
	maxLength?: number;
	type?: "text" | "email" | "tel" | "date" | "month";
}

export function InputField({
	labelText,
	value,
	onChange,
	placeholder,
	maxLength,
	type = "text",
}: Props) {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;

		// Apply maxLength limit if specified
		if (maxLength && newValue.length > maxLength) {
			return;
		}

		// Email validation
		if (type === "email" && newValue) {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegex.test(newValue) && newValue.length > 0) {
				// Allow typing but don't update if invalid email format
				// This allows users to type freely but shows visual feedback
			}
		}

		onChange(newValue);
	};

	return (
		<div className="flex flex-col gap-1">
			<FieldLabel text={labelText} />
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				maxLength={maxLength}
				onChange={handleChange}
				className={`w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 transition-colors duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-0 ${
					type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
						? "border-red-300 focus:border-red-500"
						: ""
				}`}
			/>
			{maxLength && (
				<div className="text-xs text-gray-400 text-right">
					{value.length}/{maxLength}
				</div>
			)}
		</div>
	);
}
