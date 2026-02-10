interface Props {
	value: string;
	placeholder: string;
	onChange: (value: string) => void;
}

export function TextArea({ value, placeholder, onChange }: Props) {
	return (
		<textarea
			value={value}
			onChange={(e) => onChange(e.target.value)}
			className="min-h-30 w-full resize-none rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 transition-colors duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-0"
			placeholder={placeholder}
		/>
	);
}
