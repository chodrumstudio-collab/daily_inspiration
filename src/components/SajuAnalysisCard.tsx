import { User, Calendar, Heart, Users, MapPin } from 'lucide-react';
import { UserInfo, SajuAnalysis } from '../types';

interface SajuAnalysisCardProps {
  userInfo: UserInfo;
  saju: SajuAnalysis;
}

export function SajuAnalysisCard({ userInfo, saju }: SajuAnalysisCardProps) {
  const getElementColor = (element: string) => {
    const colors = {
      wood: 'text-green-600 bg-green-50',
      fire: 'text-red-600 bg-red-50',
      earth: 'text-yellow-600 bg-yellow-50',
      metal: 'text-gray-600 bg-gray-50',
      water: 'text-blue-600 bg-blue-50'
    };
    return colors[element] || 'text-gray-600 bg-gray-50';
  };

  const getElementIcon = (element: string) => {
    const icons = {
      wood: '🌳',
      fire: '🔥',
      earth: '🏔️',
      metal: '⚔️',
      water: '💧'
    };
    return icons[element] || '⭐';
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 col-span-full">
      <div className="flex items-center gap-2 mb-6">
        <User className="w-6 h-6 text-purple-500" />
        <h2 className="text-gray-900">사주 분석</h2>
      </div>
      
      <div className="mb-6">
        <p className="text-gray-700">
          {userInfo.name}님의 사주 ({userInfo.gender === 'male' ? '남성' : '여성'}, {userInfo.zodiac}띠)
        </p>
        <p className="text-sm text-gray-500 mt-1">
          {saju.year} {saju.month} {saju.day} {saju.time}
        </p>
      </div>

      {/* 오행 분석 */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">오행 분석</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {Object.entries(saju.elements).map(([element, percentage]) => (
            <div key={element} className="text-center">
              <div className={`${getElementColor(element)} rounded-2xl p-4 mb-2`}>
                <div className="text-2xl mb-2">{getElementIcon(element)}</div>
                <div className="text-sm font-medium capitalize">{element}</div>
                <div className="text-lg font-bold">{percentage}%</div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    element === 'wood' ? 'bg-green-500' :
                    element === 'fire' ? 'bg-red-500' :
                    element === 'earth' ? 'bg-yellow-500' :
                    element === 'metal' ? 'bg-gray-500' :
                    'bg-blue-500'
                  }`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 성격 분석 */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Heart className="w-5 h-5 text-pink-500" />
          성격 분석
        </h3>
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6">
          <p className="text-gray-700 leading-relaxed">{saju.personality}</p>
        </div>
      </div>

      {/* 궁합 분석 */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-blue-500" />
          궁합 분석
        </h3>
        <div className="bg-blue-50 rounded-2xl p-6">
          <p className="text-gray-700 mb-4">
            {userInfo.zodiac}띠와 잘 맞는 띠들:
          </p>
          <div className="flex flex-wrap gap-2">
            {saju.compatibility.map((zodiac, index) => (
              <span 
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {zodiac}띠
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 인생 여정 */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-green-500" />
          인생 여정
        </h3>
        <div className="bg-green-50 rounded-2xl p-6">
          <p className="text-gray-700 leading-relaxed">{saju.lifePath}</p>
        </div>
      </div>
    </div>
  );
}
