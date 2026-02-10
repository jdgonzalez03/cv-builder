export interface PersonalInfo {
	firstName: string;
	lastName: string;
	jobTitle: string;
}

export interface Summary {
	text: string;
}

export interface Experience {
	id: string;
	company: string;
	position: string;
	startDate: string;
	endDate?: string;
	description: string;
}

export type NewExperience = Omit<Experience, "id">;

export interface Skill {
	id: string;
	name: string;
	level: 1 | 2 | 3 | 4 | 5;
}

export type NewSkill = Omit<Skill, "id">;

export interface Education {
	id: string;
	institution: string;
	degree: string;
	startDate: string;
	endDate?: string;
	description?: string;
}

export type NewEducation = Omit<Education, "id">;

export interface ContactInfo {
	email: string;
	phone: string;
	city: string;
	country: string;
	portfolio: string;
}

export interface Language {
	id: string;
	language: string;
	level: string; // Could be a A2, Native, Elementary, etc
}

export type NewLanguage = Omit<Language, "id">;

export interface CvState {
	personalInfo: PersonalInfo;
	contactInfo: ContactInfo;
	summary: Summary;
	experience: Experience[];
	skills: Skill[];
	education: Education[];
	languages: Language[];
}
