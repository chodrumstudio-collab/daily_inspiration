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
  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [gender, setGender] = useState('');
  const [zodiac, setZodiac] = useState('');
  const [lunarCalendar, setLunarCalendar] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && birthYear && birthMonth && birthDay && birthTime && gender && zodiac) {
      onComplete({
        name,
        birthYear: parseInt(birthYear),
        birthMonth: parseInt(birthMonth),
        birthDay: parseInt(birthDay),
        birthTime,
        gender: gender as 'male' | 'female',
        zodiac,
        lunarCalendar: lunarCalendar === 'lunar',
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
              <Label htmlFor="gender">성별</Label>
              <Select value={gender} onValueChange={setGender} required>
                <SelectTrigger className="rounded-lg focus:ring-2 focus:ring-purple-500">
                  <SelectValue placeholder="성별을 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">남성</SelectItem>
                  <SelectItem value="female">여성</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="lunarCalendar">달력 구분</Label>
              <Select value={lunarCalendar} onValueChange={setLunarCalendar} required>
                <SelectTrigger className="rounded-lg focus:ring-2 focus:ring-purple-500">
                  <SelectValue placeholder="달력을 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="solar">양력</SelectItem>
                  <SelectItem value="lunar">음력</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="space-y-2">
                <Label htmlFor="birthYear">출생년도</Label>
                <Input
                  id="birthYear"
                  type="number"
                  placeholder="1990"
                  value={birthYear}
                  onChange={(e) => setBirthYear(e.target.value)}
                  className="rounded-lg focus:ring-2 focus:ring-purple-500"
                  min="1900"
                  max={new Date().getFullYear()}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="birthMonth">월</Label>
                <Input
                  id="birthMonth"
                  type="number"
                  placeholder="1"
                  value={birthMonth}
                  onChange={(e) => setBirthMonth(e.target.value)}
                  className="rounded-lg focus:ring-2 focus:ring-purple-500"
                  min="1"
                  max="12"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="birthDay">일</Label>
                <Input
                  id="birthDay"
                  type="number"
                  placeholder="1"
                  value={birthDay}
                  onChange={(e) => setBirthDay(e.target.value)}
                  className="rounded-lg focus:ring-2 focus:ring-purple-500"
                  min="1"
                  max="31"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="birthTime">태어난 시간</Label>
              <Select value={birthTime} onValueChange={setBirthTime} required>
                <SelectTrigger className="rounded-lg focus:ring-2 focus:ring-purple-500">
                  <SelectValue placeholder="태어난 시간을 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="00:00-01:30">자시 (00:00-01:30)</SelectItem>
                  <SelectItem value="01:31-03:30">축시 (01:31-03:30)</SelectItem>
                  <SelectItem value="03:31-05:30">인시 (03:31-05:30)</SelectItem>
                  <SelectItem value="05:31-07:30">묘시 (05:31-07:30)</SelectItem>
                  <SelectItem value="07:31-09:30">진시 (07:31-09:30)</SelectItem>
                  <SelectItem value="09:31-11:30">사시 (09:31-11:30)</SelectItem>
                  <SelectItem value="11:31-13:30">오시 (11:31-13:30)</SelectItem>
                  <SelectItem value="13:31-15:30">미시 (13:31-15:30)</SelectItem>
                  <SelectItem value="15:31-17:30">신시 (15:31-17:30)</SelectItem>
                  <SelectItem value="17:31-19:30">유시 (17:31-19:30)</SelectItem>
                  <SelectItem value="19:31-21:30">술시 (19:31-21:30)</SelectItem>
                  <SelectItem value="21:31-23:30">해시 (21:31-23:30)</SelectItem>
                  <SelectItem value="23:31-24:00">야자 (23:31-24:00)</SelectItem>
                </SelectContent>
              </Select>
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
