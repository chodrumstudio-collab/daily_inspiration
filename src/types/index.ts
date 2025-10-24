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
  country: string;
  place: string;
  description: string;
  attractions: string[];
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
