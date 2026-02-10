interface Props {
	onClick: () => void;
}

export function AddChipButton({ onClick }: Props) {
	return (
		<button
			type="button"
			onClick={onClick}
			className="rounded border border-dashed border-gray-300 px-2 py-1 text-xs text-gray-400 cursor-pointer hover:bg-gray-50 hover:scale-115 transition-transform"
		>
			+ Add
		</button>
	);
}
