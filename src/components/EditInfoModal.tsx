import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';
import { UserInfo } from '../types';

interface EditInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentInfo: UserInfo;
  onSave: (userInfo: UserInfo) => void;
}

const zodiacs = [
  "쥐", "소", "호랑이", "토끼", "용", "뱀", 
  "말", "양", "원숭이", "닭", "개", "돼지"
];

export function EditInfoModal({ isOpen, onClose, currentInfo, onSave }: EditInfoModalProps) {
  const [name, setName] = useState(currentInfo.name);
  const [birthYear, setBirthYear] = useState(currentInfo.birthYear.toString());
  const [birthMonth, setBirthMonth] = useState(currentInfo.birthMonth?.toString() || '');
  const [birthDay, setBirthDay] = useState(currentInfo.birthDay?.toString() || '');
  const [birthTime, setBirthTime] = useState(currentInfo.birthTime || '');
  const [gender, setGender] = useState(currentInfo.gender || '');
  const [zodiac, setZodiac] = useState(currentInfo.zodiac);
  const [lunarCalendar, setLunarCalendar] = useState(currentInfo.lunarCalendar ? 'lunar' : 'solar');

  useEffect(() => {
    setName(currentInfo.name);
    setBirthYear(currentInfo.birthYear.toString());
    setBirthMonth(currentInfo.birthMonth?.toString() || '');
    setBirthDay(currentInfo.birthDay?.toString() || '');
    setBirthTime(currentInfo.birthTime || '');
    setGender(currentInfo.gender || '');
    setZodiac(currentInfo.zodiac);
    setLunarCalendar(currentInfo.lunarCalendar ? 'lunar' : 'solar');
  }, [currentInfo]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && birthYear && birthMonth && birthDay && birthTime && gender && zodiac) {
      onSave({
        name,
        birthYear: parseInt(birthYear, 10) || new Date().getFullYear(),
        birthMonth: parseInt(birthMonth, 10) || 1,
        birthDay: parseInt(birthDay, 10) || 1,
        birthTime,
        gender: gender as 'male' | 'female',
        zodiac,
        lunarCalendar: lunarCalendar === 'lunar',
      });
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>정보 수정</DialogTitle>
          <DialogDescription>
            개인 정보를 수정하세요. 모든 필드는 필수입니다.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="edit-name">이름</Label>
            <Input
              id="edit-name"
              type="text"
              placeholder="이름을 입력하세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-lg focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-gender">성별</Label>
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
            <Label htmlFor="edit-lunarCalendar">달력 구분</Label>
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
              <Label htmlFor="edit-birthYear">출생년도</Label>
              <Input
                id="edit-birthYear"
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
              <Label htmlFor="edit-birthMonth">월</Label>
              <Input
                id="edit-birthMonth"
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
              <Label htmlFor="edit-birthDay">일</Label>
              <Input
                id="edit-birthDay"
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
            <Label htmlFor="edit-birthTime">태어난 시간</Label>
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
            <Label htmlFor="edit-zodiac">띠</Label>
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

          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              취소
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
            >
              저장
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
