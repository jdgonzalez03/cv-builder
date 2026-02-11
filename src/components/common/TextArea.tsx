interface Props {
	value: string;
	placeholder: string;
	onChange: (value: string) => void;
	maxLength?: number;
}

export function TextArea({
	value,
	placeholder,
	onChange,
	maxLength = 3500,
}: Props) {
	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const newValue = e.target.value;

		// Apply maxLength limit if specified
		if (maxLength && newValue.length > maxLength) {
			return;
		}

		onChange(newValue);
	};

	const wordCount = value
		.trim()
		.split(/\s+/)
		.filter((word) => word.length > 0).length;
	const isNearLimit = value.length > maxLength * 0.9;
	const isAtLimit = value.length >= maxLength;

	return (
		<div className="flex flex-col gap-1">
			<textarea
				value={value}
				onChange={handleChange}
				maxLength={maxLength}
				className={`min-h-30 w-full resize-none rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 transition-colors duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-0 ${
					isAtLimit
						? "border-red-300 focus:border-red-500"
						: isNearLimit
						? "border-yellow-300 focus:border-yellow-500"
						: ""
				}`}
				placeholder={placeholder}
			/>
			<div className="flex justify-between text-xs text-gray-500">
				<span>Words: {wordCount}</span>
				<span
					className={
						isAtLimit ? "text-red-500" : isNearLimit ? "text-yellow-600" : ""
					}
				>
					{value.length}/{maxLength} characters
				</span>
			</div>
		</div>
	);
}
