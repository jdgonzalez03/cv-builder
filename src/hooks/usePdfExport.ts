import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import { useCallback } from "react";

export const usePdfExport = () => {
	const exportToPdf = useCallback(
		async (elementId: string, filename: string) => {
			// Search for the main element
			const mainElement = document.getElementById(elementId);
			if (!mainElement) {
				console.error(`Element with id "${elementId}" not found`);
				return;
			}

			// Search for all pages (including the main and additional pages)
			const pages: HTMLElement[] = [mainElement];

			// Search for additional pages with IDs like "cv-page-2", "cv-page-3", etc.
			let pageIndex = 2;
			while (true) {
				const pageElement = document.getElementById(
					`${elementId}-page-${pageIndex}`,
				);
				if (!pageElement) break;
				pages.push(pageElement);
				pageIndex++;
			}

			console.log(`Found ${pages.length} page(s) to export`);

			// Create PDF A4
			const pdf = new jsPDF({
				orientation: "portrait",
				unit: "mm",
				format: "a4",
			});

			const pdfWidth = pdf.internal.pageSize.getWidth();
			const pdfHeight = pdf.internal.pageSize.getHeight();

			// Process each page
			for (let i = 0; i < pages.length; i++) {
				const pageElement = pages[i];

				// Convert the page to canvas
				const canvas = await html2canvas(pageElement, {
					scale: 3, // 🔥 nitidez
					useCORS: true,
					backgroundColor: "#ffffff",
					logging: false,
				});

				// Convert the canvas to an image
				const imgData = canvas.toDataURL("image/jpeg", 0.98);

				// Calculate dimensions maintaining the aspect ratio
				const imgWidth = pdfWidth;
				const imgHeight = (canvas.height * imgWidth) / canvas.width;

				// If it's not the first page, add a new page to the PDF
				if (i > 0) {
					pdf.addPage();
				}

				// Add the image to the PDF page
				const yOffset = imgHeight < pdfHeight ? (pdfHeight - imgHeight) / 2 : 0;
				pdf.addImage(imgData, "JPEG", 0, yOffset, imgWidth, imgHeight);
			}

			pdf.save(filename);
		},
		[],
	);

	return { exportToPdf };
};
