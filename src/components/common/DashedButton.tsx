import type { ReactElement } from "react";

interface Props {
	text: string;
	color?: "primary" | "secondary";
	icon: ReactElement;
	onClick: () => void;
}

export function DashedButton({
	text,
	color = "secondary",
	icon,
	onClick,
}: Props) {
	const bgColorButton =
		color === "primary"
			? "bg-blue-700 text-white hover:bg-blue-800 border-blue-700"
			: "bg-gray-100 text-[#0d121b] hover:bg-gray-200 border-gray-200";

	return (
		<button
			onClick={onClick}
			type="button"
			className={`cursor-pointer flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed py-2 text-sm font-bold transition-colors ${bgColorButton}`}
		>
			{icon}
			{text}
		</button>
	);
}
