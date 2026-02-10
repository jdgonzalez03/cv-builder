import type { ReactNode } from "react";

interface Props {
	children: ReactNode;
	onRemove: () => void;
	removeIcon: ReactNode;
}

export function SkillChip({ children, onRemove, removeIcon }: Props) {
	return (
		<span className="flex items-center gap-1 rounded bg-gray-100 px-2 py-1 text-xs dark:bg-gray-800">
			{children}
			<button type="button" className="size-4" onClick={onRemove}>
				{removeIcon}
			</button>
		</span>
	);
}
