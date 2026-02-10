import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
	ContactInfo,
	CvState,
	Education,
	Experience,
	Language,
	NewEducation,
	NewExperience,
	NewLanguage,
	NewSkill,
	Skill,
} from "./types";

const DEFAULT_CV: CvState = {
	personalInfo: {
		firstName: "Alex",
		lastName: "Rivers",
		jobTitle: "Senior Product Designer",
	},
	contactInfo: {
		email: "alex.rivers@example.com",
		phone: "+1 (555) 123-4567",
		city: "San Francisco",
		country: "USA",
		portfolio: "https://alex-rivers.design",
	},
	summary: {
		text: "",
	},
	experience: [],
	skills: [
		{ id: "1", name: "Figma", level: 5 },
		{ id: "2", name: "React", level: 4 },
		{ id: "3", name: "Tailwind", level: 4 },
	],
	education: [],
	languages: [],
};

export const cvSlice = createSlice({
	name: "cv",
	initialState: DEFAULT_CV,
	reducers: {
		setPersonalInfo: (state, action) => {
			state.personalInfo = { ...state.personalInfo, ...action.payload };
		},
		setSummary: (state, action) => {
			state.summary = { ...state.summary, ...action.payload };
		},
		addExperienceItem: (state, action: PayloadAction<NewExperience>) => {
			const id = crypto.randomUUID();
			state.experience = [...state.experience, { ...action.payload, id }];
		},
		removeExperienceItem: (state, action: PayloadAction<string>) => {
			state.experience = state.experience.filter(
				(exp) => exp.id !== action.payload,
			);
		},
		updateExperienceItem: (
			state,
			action: PayloadAction<Partial<Experience>>,
		) => {
			state.experience = state.experience.map((exp) => {
				if (exp.id === action.payload.id) {
					return { ...exp, ...action.payload };
				}
				return exp;
			});
		},
		addSkillItem: (state, action: PayloadAction<NewSkill>) => {
			const id = crypto.randomUUID();
			state.skills = [...state.skills, { ...action.payload, id }];
		},

		removeSkillItem: (state, action: PayloadAction<string>) => {
			state.skills = state.skills.filter(
				(skill) => skill.id !== action.payload,
			);
		},

		updateSkillItem: (state, action: PayloadAction<Partial<Skill>>) => {
			state.skills = state.skills.map((skill) => {
				if (skill.id === action.payload.id) {
					return { ...skill, ...action.payload };
				}
				return skill;
			});
		},
		addEducationItem: (state, action: PayloadAction<NewEducation>) => {
			const id = crypto.randomUUID();
			state.education = [...state.education, { ...action.payload, id }];
		},
		removeEducationItem: (state, action: PayloadAction<string>) => {
			state.education = state.education.filter(
				(edu) => edu.id !== action.payload,
			);
		},
		updateEducationItem: (state, action: PayloadAction<Partial<Education>>) => {
			state.education = state.education.map((edu) => {
				if (edu.id === action.payload.id) {
					return { ...edu, ...action.payload };
				}
				return edu;
			});
		},
		setContactInfo: (state, action: PayloadAction<Partial<ContactInfo>>) => {
			state.contactInfo = { ...state.contactInfo, ...action.payload };
		},
		addNewLanguage: (state, action: PayloadAction<NewLanguage>) => {
			const id = crypto.randomUUID();
			state.languages = [...state.languages, { ...action.payload, id }];
		},
		removeLanguageItem: (state, action: PayloadAction<string>) => {
			state.languages = state.languages.filter(
				(lang) => lang.id !== action.payload,
			);
		},
		updateLanguageItem: (state, action: PayloadAction<Partial<Language>>) => {
			state.languages = state.languages.map((lang) => {
				if (lang.id === action.payload.id) {
					return { ...lang, ...action.payload };
				}
				return lang;
			});
		},
	},
});

export const {
	setPersonalInfo,
	setSummary,
	addExperienceItem,
	removeExperienceItem,
	updateExperienceItem,
	addSkillItem,
	removeSkillItem,
	updateSkillItem,
	addEducationItem,
	removeEducationItem,
	updateEducationItem,
	setContactInfo,
	addNewLanguage,
	removeLanguageItem,
	updateLanguageItem,
} = cvSlice.actions;
export default cvSlice.reducer;
export { DEFAULT_CV };
