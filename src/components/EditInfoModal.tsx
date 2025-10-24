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
  const [zodiac, setZodiac] = useState(currentInfo.zodiac);

  useEffect(() => {
    setName(currentInfo.name);
    setBirthYear(currentInfo.birthYear.toString());
    setZodiac(currentInfo.zodiac);
  }, [currentInfo]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && birthYear && zodiac) {
      onSave({
        name,
        birthYear: parseInt(birthYear),
        zodiac,
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
            <Label htmlFor="edit-birthYear">출생년도</Label>
            <Input
              id="edit-birthYear"
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
