export interface UserInfo {
  name: string;
  birthYear: number;
  birthMonth: number;
  birthDay: number;
  birthTime: string;
  gender: 'male' | 'female';
  zodiac: string;
  lunarCalendar: boolean;
}

export interface Quote {
  id: string;
  text: string;
  author: string;
  category: string;
  tags: string[];
  mood: string;
  language: string;
  isFavorite?: boolean;
  createdAt?: string;
}

export interface Habit {
  emoji: string;
  title: string;
  description: string;
}

export interface Book {
  genre: string;
  title: string;
  author: string;
  description: string;
}

export interface Travel {
  id: string;
  country: string;
  region: string;
  place: string;
  description: string;
  attractions: string[];
  bestTime: string;
  duration: string;
  budget: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  tags: string[];
  images: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  isFavorite?: boolean;
  rating?: number;
  reviews?: TravelReview[];
}

export interface TravelReview {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
}

export interface TravelPlan {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  destinations: string[];
  budget: number;
  isPublic: boolean;
  createdAt: string;
}

export interface TravelGuide {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  createdAt: string;
  views: number;
  helpful: number;
}

export interface Fortune {
  overall: string;
  love: string;
  career: string;
  health: string;
  luckyColor: string;
  luckyNumber: number;
  luckyDirection: string;
  luckyTime: string;
  advice: string;
  warning: string;
}

export interface DailyFortune {
  date: string;
  overall: number; // 1-100 점수
  love: number;
  career: number;
  health: number;
  money: number;
  description: string;
  luckyElements: {
    color: string;
    number: number;
    direction: string;
    time: string;
  };
  advice: string;
  warning: string;
}

export interface SajuAnalysis {
  year: string;
  month: string;
  day: string;
  time: string;
  elements: {
    wood: number;
    fire: number;
    earth: number;
    metal: number;
    water: number;
  };
  personality: string;
  compatibility: string[];
  lifePath: string;
}
