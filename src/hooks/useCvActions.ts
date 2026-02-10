import {
	addEducationItem,
	addExperienceItem,
	addNewLanguage,
	addSkillItem,
	removeEducationItem,
	removeExperienceItem,
	removeLanguageItem,
	removeSkillItem,
	setContactInfo,
	setPersonalInfo,
	setSummary,
	updateEducationItem,
	updateExperienceItem,
	updateLanguageItem,
	updateSkillItem,
} from "../store/cv/slice";
import type {
	ContactInfo,
	Education,
	Experience,
	Language,
	NewEducation,
	NewExperience,
	NewLanguage,
	NewSkill,
	PersonalInfo,
	Skill,
	Summary,
} from "../store/cv/types";
import { useAppDispatch } from "./useStore";

export const useCvActions = () => {
	const dispatch = useAppDispatch();

	const updatePersonalInfo = (personalInfo: Partial<PersonalInfo>) => {
		dispatch(setPersonalInfo(personalInfo));
	};

	const updateSummary = (summary: Partial<Summary>) => {
		dispatch(setSummary(summary));
	};

	const addNewExperience = (experience: NewExperience) => {
		dispatch(addExperienceItem(experience));
	};

	const removeExperience = (experienceId: string) => {
		dispatch(removeExperienceItem(experienceId));
	};

	const updateExperience = (experience: Partial<Experience>) => {
		dispatch(updateExperienceItem(experience));
	};

	const addSkill = (skill: NewSkill) => {
		dispatch(addSkillItem(skill));
	};

	const removeSkill = (skillId: string) => {
		dispatch(removeSkillItem(skillId));
	};

	const updateSkill = (skill: Partial<Skill>) => {
		dispatch(updateSkillItem(skill));
	};

	const addEducation = (education: NewEducation) => {
		dispatch(addEducationItem(education));
	};

	const removeEducation = (educationId: string) => {
		dispatch(removeEducationItem(educationId));
	};

	const updateEducation = (education: Partial<Education>) => {
		dispatch(updateEducationItem(education));
	};

	const updateContactInfo = (contactInfo: Partial<ContactInfo>) => {
		dispatch(setContactInfo(contactInfo));
	};

	const addLanguage = (language: NewLanguage) => {
		dispatch(addNewLanguage(language));
	};

	const updateLanguage = (language: Partial<Language>) => {
		dispatch(updateLanguageItem(language));
	};

	const removeLanguage = (languageId: string) => {
		dispatch(removeLanguageItem(languageId));
	};

	return {
		updatePersonalInfo,
		updateSummary,
		addNewExperience,
		removeExperience,
		updateExperience,
		addSkill,
		removeSkill,
		updateSkill,
		addEducation,
		removeEducation,
		updateEducation,
		updateContactInfo,
		addLanguage,
		updateLanguage,
		removeLanguage,
	};
};
