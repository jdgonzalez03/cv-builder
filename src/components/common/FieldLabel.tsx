interface Props {
	text: string;
}

export function FieldLabel({ text }: Props) {
	return (
		<p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
			{text}
		</p>
	);
}
