import { CvEditor } from "./components/CvEditor";
import { CvPreview } from "./components/CvPreview";
import { Header } from "./components/Header";
import { Layout } from "./layout/layout";

function App() {
	const cvIdElement = import.meta.env.VITE_CV_ID_ELEMENT;
	return (
		<div className="flex flex-col h-screen">
			<Header />
			<Layout>
				<CvEditor />
				<CvPreview id={cvIdElement} />
			</Layout>
		</div>
	);
}

export default App;
