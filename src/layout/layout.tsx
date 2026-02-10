import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

export function Layout({ children }: Props) {
	return (
		<main className="flex flex-1 overflow-hidden max-h-full h-full">{children}</main>
	);
}
