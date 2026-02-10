import { FieldLabel } from "./FieldLabel";

interface Props {
	labelText: string;
	value: string;
	placeholder: string;
	onChange: (value: string) => void;
}

export function InputField({ labelText, value, onChange, placeholder }: Props) {
	return (
		<div className="flex flex-col gap-1">
			<FieldLabel text={labelText} />
			<input
				type="text"
				placeholder={placeholder}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 transition-colors duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-0"
			/>
		</div>
	);
}
