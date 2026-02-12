import { toast } from "sonner";
import { usePdfExport } from "../hooks/usePdfExport";
import { Button } from "./common/Button";
import { DocumentIcon, DownloadIcon, GithubIcon } from "./Icons";

export function Header() {
	const { exportToPdf } = usePdfExport();

	const handleDownload = () => {
		const cvIdElement = import.meta.env.VITE_CV_ID_ELEMENT;
		exportToPdf(cvIdElement, "cv.pdf");
		setTimeout(() => {
			toast.success("Your CV is being downloaded!");
		}, 2500);
	};
	return (
		<header className="flex items-center justify-between border-b border-solid border-gray-200 bg-white  px-6 py-3 z-10">
			{/* LOGO */}
			<div className="flex items-center gap-3">
				<div className="size-10 bg-blue-700 text-white rounded-lg flex items-center justify-center">
					<DocumentIcon />
				</div>
				<h2 className="text-lg font-bold leading-tight tracking-tight">
					CV Builder
					<span className="text-xs font-normal text-gray-500 ml-2">v0.4</span>
				</h2>
			</div>
			{/* ACTIONS */}
			<div className="flex gap-3">
				<Button text="Download" color="primary" onClick={handleDownload}>
					<DownloadIcon />
				</Button>
				<Button
					text="Github"
					color="secondary"
					onClick={() => {
						window.open("https://github.com/jdgonzalez03", "_blank");
					}}
				>
					<GithubIcon />
				</Button>
			</div>
		</header>
	);
}
