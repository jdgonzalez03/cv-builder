import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import { useCallback } from "react";

export const usePdfExport = () => {
	const exportToPdf = useCallback(
		async (elementId: string, filename: string) => {
			const element = document.getElementById(elementId);
			if (!element) return;

			// Use HTML2Canvas to convert the DOM element to a canvas (Support Tailwind styles)
			const canvas = await html2canvas(element, {
				scale: 3, // 🔥 nitidez
				useCORS: true,
				backgroundColor: "#ffffff",
				logging: false,
			});

			// Convert canvas to image
			const imgData = canvas.toDataURL("image/jpeg", 0.98);

			// Create PDF A4
			const pdf = new jsPDF({
				orientation: "portrait",
				unit: "mm",
				format: "a4",
			});

			// Calculate dimensions
			const pdfWidth = pdf.internal.pageSize.getWidth();
			const pdfHeight = pdf.internal.pageSize.getHeight();

			const imgWidth = pdfWidth;
			const imgHeight = (canvas.height * imgWidth) / canvas.width;

			// Auto-pagination
			let heightLeft = imgHeight;
			let position = 0;

			pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
			heightLeft -= pdfHeight;

			while (heightLeft > 0) {
				position = heightLeft - imgHeight;
				pdf.addPage();
				pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
				heightLeft -= pdfHeight;
			}

			// Download PDF
			pdf.save(filename);
		},
		[],
	);

	return { exportToPdf };
};
