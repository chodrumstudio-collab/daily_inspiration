import { useState } from 'react';
import { Button } from './ui/button';
import { UserInfo } from '../types';
import { QuoteCard } from './QuoteCard';
import { HabitCard } from './HabitCard';
import { FortuneCard } from './FortuneCard';
import { BookCard } from './BookCard';
import { TravelCard } from './TravelCard';
import { EditInfoModal } from './EditInfoModal';
import { quotes, habits, books, travels, getRandomItem, generateFortune } from '../data/content';

interface DashboardProps {
  userInfo: UserInfo;
  onUpdateInfo: (userInfo: UserInfo) => void;
}

function getDailySeed() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  return year * 10000 + month * 100 + day;
}

function formatDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = days[today.getDay()];
  
  return `${year}년 ${month}월 ${day}일 ${dayOfWeek}요일`;
}

export function Dashboard({ userInfo, onUpdateInfo }: DashboardProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  
  const seed = getDailySeed();
  const todayQuote = getRandomItem(quotes, seed);
  const todayHabit = getRandomItem(habits, seed + 1);
  const todayBook = getRandomItem(books, seed + 2);
  const todayTravel = getRandomItem(travels, seed + 3);
  const todayFortune = generateFortune(seed);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-gray-900 mb-2">
                안녕하세요, {userInfo.name}님! 👋
              </h1>
              <p className="text-gray-600">{formatDate()}</p>
            </div>
            <Button
              onClick={() => setIsEditModalOpen(true)}
              variant="outline"
              className="rounded-lg hover:bg-gray-100"
            >
              정보 수정
            </Button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Quote Card - Full Width */}
          <QuoteCard quote={todayQuote} />

          {/* Habit Card */}
          <HabitCard habit={todayHabit} />

          {/* Fortune Card - Full Width */}
          <FortuneCard userInfo={userInfo} fortune={todayFortune} />

          {/* Book Card */}
          <BookCard book={todayBook} />

          {/* Travel Card */}
          <TravelCard travel={todayTravel} />
        </div>

        {/* Footer */}
        <div className="text-center py-6">
          <p className="text-gray-500 text-sm">
            💝 매일 자정에 새로운 추천이 업데이트됩니다
          </p>
        </div>
      </div>

      {/* Edit Modal */}
      <EditInfoModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        currentInfo={userInfo}
        onSave={onUpdateInfo}
      />
    </div>
  );
}
