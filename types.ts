import React from 'react';

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface ProjectItem {
  title: string;
  subtitle?: string;
  description: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  details: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}