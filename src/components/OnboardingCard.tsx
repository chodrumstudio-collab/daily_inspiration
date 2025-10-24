import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';
import { Sparkles } from 'lucide-react';
import { UserInfo } from '../types';

interface OnboardingCardProps {
  onComplete: (userInfo: UserInfo) => void;
}

const zodiacs = [
  "쥐", "소", "호랑이", "토끼", "용", "뱀", 
  "말", "양", "원숭이", "닭", "개", "돼지"
];

export function OnboardingCard({ onComplete }: OnboardingCardProps) {
  const [name, setName] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [zodiac, setZodiac] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && birthYear && zodiac) {
      onComplete({
        name,
        birthYear: parseInt(birthYear),
        zodiac,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-center text-gray-900 mb-2">오늘의 추천</h1>
            <p className="text-center text-gray-600">매일 새로운 영감을 받아보세요</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">이름</Label>
              <Input
                id="name"
                type="text"
                placeholder="이름을 입력하세요"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-lg focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="birthYear">출생년도</Label>
              <Input
                id="birthYear"
                type="number"
                placeholder="예: 1990"
                value={birthYear}
                onChange={(e) => setBirthYear(e.target.value)}
                className="rounded-lg focus:ring-2 focus:ring-purple-500"
                min="1900"
                max={new Date().getFullYear()}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="zodiac">띠</Label>
              <Select value={zodiac} onValueChange={setZodiac} required>
                <SelectTrigger className="rounded-lg focus:ring-2 focus:ring-purple-500">
                  <SelectValue placeholder="띠를 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  {zodiacs.map((z) => (
                    <SelectItem key={z} value={z}>
                      {z}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg py-6 transition-all duration-200 hover:scale-105"
            >
              시작하기
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
