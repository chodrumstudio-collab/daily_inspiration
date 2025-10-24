import { Heart } from 'lucide-react';
import { Habit } from '../types';

interface HabitCardProps {
  habit: Habit;
}

export function HabitCard({ habit }: HabitCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">
      <div className="flex items-center gap-2 mb-6">
        <Heart className="w-6 h-6 text-pink-500" />
        <h2 className="text-gray-900">오늘의 추천 습관</h2>
      </div>
      
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="text-6xl mb-2">{habit.emoji}</div>
        <h3 className="text-gray-900">{habit.title}</h3>
        <p className="text-gray-600 leading-relaxed">{habit.description}</p>
      </div>
    </div>
  );
}
