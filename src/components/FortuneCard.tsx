import { Calendar } from 'lucide-react';
import { UserInfo } from '../types';

interface FortuneCardProps {
  userInfo: UserInfo;
  fortune: {
    overall: string;
    love: string;
    career: string;
    health: string;
    luckyColor: string;
    luckyNumber: number;
  };
}

export function FortuneCard({ userInfo, fortune }: FortuneCardProps) {
  const age = new Date().getFullYear() - userInfo.birthYear + 1;

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 col-span-full">
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="w-6 h-6 text-purple-500" />
        <h2 className="text-gray-900">오늘의 운세</h2>
      </div>
      
      <div className="mb-6">
        <p className="text-gray-700">
          {userInfo.name}님의 오늘의 운세 ({userInfo.zodiac}띠, {age}세)
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="bg-purple-50 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🌟</span>
              <h3 className="text-purple-900">전체운</h3>
            </div>
            <p className="text-gray-700">{fortune.overall}</p>
          </div>

          <div className="bg-pink-50 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">💕</span>
              <h3 className="text-pink-900">애정운</h3>
            </div>
            <p className="text-gray-700">{fortune.love}</p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">💼</span>
              <h3 className="text-blue-900">사업운</h3>
            </div>
            <p className="text-gray-700">{fortune.career}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-green-50 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">💪</span>
              <h3 className="text-green-900">건강운</h3>
            </div>
            <p className="text-gray-700">{fortune.health}</p>
          </div>

          <div className="bg-yellow-50 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🍀</span>
              <h3 className="text-yellow-900">행운의 요소</h3>
            </div>
            <div className="space-y-2 text-gray-700">
              <p>행운의 색상: <span className="font-medium">{fortune.luckyColor}</span></p>
              <p>행운의 숫자: <span className="font-medium">{fortune.luckyNumber}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
