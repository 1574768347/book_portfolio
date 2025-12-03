export interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string[];
  icon?: 'school' | 'work' | 'award' | 'users' | 'sprout';
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'tech' | 'language' | 'soft';
}

export interface Project {
  title: string;
  role: string;
  description: string;
  tech: string[];
  image?: string;
}