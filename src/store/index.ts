import { type Middleware, configureStore } from "@reduxjs/toolkit";
import cvReducer, { DEFAULT_CV } from "./cv/slice";
import type { CvState } from "./cv/types";

const persistanceMiddleware: Middleware = (store) => (next) => (action) => {
	next(action);
	localStorage.setItem(
		"__redux_state_cv_builder",
		JSON.stringify(store.getState()),
	);
};

const getPreloadedState = (): { cv: CvState } => {
	try {
		const storedState = localStorage.getItem("__redux_state_cv_builder");
		if (storedState) {
			const parsed = JSON.parse(storedState);
			if (parsed?.cv?.personalInfo) {
				// Ensure all required properties exist
				return {
					cv: {
						...parsed.cv,
						languages: parsed.cv.languages || [],
						skills: parsed.cv.skills || [],
						education: parsed.cv.education || [],
						experience: parsed.cv.experience || [],
					},
				};
			}
		}
	} catch (error) {
		console.error("Error parsing stored CV state:", error);
	}
	return { cv: DEFAULT_CV };
};

export const store = configureStore({
	reducer: {
		cv: cvReducer,
	},
	preloadedState: getPreloadedState(),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(persistanceMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
