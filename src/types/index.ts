export interface UserInfo {
  name: string;
  birthYear: number;
  zodiac: string;
}

export interface Quote {
  text: string;
  author: string;
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
}
