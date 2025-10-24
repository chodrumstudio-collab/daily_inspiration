import { Calendar, Star, Heart, Briefcase, Activity, DollarSign, AlertTriangle, Lightbulb } from 'lucide-react';
import { UserInfo, DailyFortune } from '../types';

interface FortuneCardProps {
  userInfo: UserInfo;
  fortune: DailyFortune;
}

export function FortuneCard({ userInfo, fortune }: FortuneCardProps) {
  const age = new Date().getFullYear() - (userInfo.birthYear || new Date().getFullYear()) + 1;
  
  // 안전한 점수 처리
  const safeScore = (score: number) => {
    if (isNaN(score) || score === null || score === undefined) return 50;
    return Math.max(0, Math.min(100, score));
  };

  const overallScore = safeScore(fortune.overall);
  const loveScore = safeScore(fortune.love);
  const careerScore = safeScore(fortune.career);
  const healthScore = safeScore(fortune.health);
  const moneyScore = safeScore(fortune.money);
  
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-blue-600';
    if (score >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return 'bg-green-50';
    if (score >= 60) return 'bg-blue-50';
    if (score >= 40) return 'bg-yellow-50';
    return 'bg-red-50';
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 col-span-full">
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="w-6 h-6 text-purple-500" />
        <h2 className="text-gray-900">오늘의 운세</h2>
        <span className="text-sm text-gray-500 ml-auto">{fortune.date}</span>
      </div>
      
      <div className="mb-6">
        <p className="text-gray-700">
          {userInfo.name}님의 오늘의 운세 ({userInfo.zodiac}띠, {age}세)
        </p>
        <p className="text-gray-600 mt-2">{fortune.description}</p>
      </div>

      {/* 운세 점수 표시 */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <div className={`${getScoreBg(overallScore)} rounded-2xl p-4`}>
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-5 h-5 text-purple-600" />
            <h3 className="text-purple-900 font-medium">전체운</h3>
          </div>
          <div className={`text-2xl font-bold ${getScoreColor(overallScore)}`}>
            {overallScore}
          </div>
        </div>

        <div className={`${getScoreBg(loveScore)} rounded-2xl p-4`}>
          <div className="flex items-center gap-2 mb-2">
            <Heart className="w-5 h-5 text-pink-600" />
            <h3 className="text-pink-900 font-medium">애정운</h3>
          </div>
          <div className={`text-2xl font-bold ${getScoreColor(loveScore)}`}>
            {loveScore}
          </div>
        </div>

        <div className={`${getScoreBg(careerScore)} rounded-2xl p-4`}>
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="w-5 h-5 text-blue-600" />
            <h3 className="text-blue-900 font-medium">사업운</h3>
          </div>
          <div className={`text-2xl font-bold ${getScoreColor(careerScore)}`}>
            {careerScore}
          </div>
        </div>

        <div className={`${getScoreBg(healthScore)} rounded-2xl p-4`}>
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-5 h-5 text-green-600" />
            <h3 className="text-green-900 font-medium">건강운</h3>
          </div>
          <div className={`text-2xl font-bold ${getScoreColor(healthScore)}`}>
            {healthScore}
          </div>
        </div>

        <div className={`${getScoreBg(moneyScore)} rounded-2xl p-4`}>
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-5 h-5 text-yellow-600" />
            <h3 className="text-yellow-900 font-medium">재물운</h3>
          </div>
          <div className={`text-2xl font-bold ${getScoreColor(moneyScore)}`}>
            {moneyScore}
          </div>
        </div>
      </div>

      {/* 행운의 요소들 */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-2xl">🍀</span>
            행운의 요소
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">색상</p>
              <p className="font-medium text-gray-900">{fortune.luckyElements.color}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">숫자</p>
              <p className="font-medium text-gray-900">{fortune.luckyElements.number}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">방향</p>
              <p className="font-medium text-gray-900">{fortune.luckyElements.direction}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">시간</p>
              <p className="font-medium text-gray-900">{fortune.luckyElements.time}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-blue-50 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="w-5 h-5 text-blue-600" />
              <h3 className="text-blue-900 font-medium">오늘의 조언</h3>
            </div>
            <p className="text-gray-700 text-sm">{fortune.advice}</p>
          </div>

          <div className="bg-orange-50 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-orange-600" />
              <h3 className="text-orange-900 font-medium">주의사항</h3>
            </div>
            <p className="text-gray-700 text-sm">{fortune.warning}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
