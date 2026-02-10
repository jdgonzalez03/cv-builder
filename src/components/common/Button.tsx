import type { ReactElement } from "react";

interface Props {
	text: string;
	color: "primary" | "secondary";
	children: ReactElement;
	onClick: () => void;
}

export function Button({ text, color, children, onClick }: Props) {
	const bgColorButton =
		color === "primary"
			? "bg-blue-700 text-white hover:bg-blue-800"
			: "bg-gray-100 text-[#0d121b] hover:bg-gray-200";

	return (
		<button
			onClick={onClick}
			type="button"
			className={`cursor-pointer flex gap-2 min-w-20 items-center justify-center rounded-lg h-9 px-4 ${bgColorButton} text-sm font-bold `}
		>
			{children}
			<span>{text}</span>
		</button>
	);
}
