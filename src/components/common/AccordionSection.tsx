import type { ReactElement } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "../Icons";

interface Props {
	icon: ReactElement;
	title: string;
	children: ReactElement;
	isOpen?: boolean;
}

export function AccordionSection({
	icon,
	title,
	children,
	isOpen = false,
}: Props) {
	return (
		<details
			className="group overflow-hidden rounded-xl border border-gray-100 transition-all"
			open={isOpen}
		>
			<summary className="flex cursor-pointer items-center justify-between bg-gray-50/50 p-4 hover:bg-gray-50">
				<div className="flex items-center gap-3">
					{icon}
					<span className="text-sm font-semibold">{title}</span>
				</div>
				<div className="shrink-0">
					<div className="group-open:hidden">
						<ArrowDownIcon />
					</div>
					<div className="hidden group-open:block">
						<ArrowUpIcon />
					</div>
				</div>
			</summary>

			{children}
		</details>
	);
}
