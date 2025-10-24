import { useState } from 'react';
import { Button } from './ui/button';
import { UserInfo } from '../types';
import { QuoteCard } from './QuoteCard';
import { QuoteBrowser } from './QuoteBrowser';
import { TravelBrowser } from './TravelBrowser';
import { HabitCard } from './HabitCard';
import { FortuneCard } from './FortuneCard';
import { SajuAnalysisCard } from './SajuAnalysisCard';
import { BookCard } from './BookCard';
import { TravelCard } from './TravelCard';
import { EditInfoModal } from './EditInfoModal';
import { quotes, habits, books, travels, getRandomItem, generateFortune } from '../data/content';
import { generateDailyFortune, generateSajuAnalysis } from '../utils/fortuneUtils';
import { Search, BookOpen, MapPin } from 'lucide-react';

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
  const [isQuoteBrowserOpen, setIsQuoteBrowserOpen] = useState(false);
  const [isTravelBrowserOpen, setIsTravelBrowserOpen] = useState(false);
  const [favoriteQuotes, setFavoriteQuotes] = useState<string[]>([]);
  const [favoriteTravels, setFavoriteTravels] = useState<string[]>([]);
  
  const seed = getDailySeed();
  const todayQuote = getRandomItem(quotes || [], seed);
  const todayHabit = getRandomItem(habits || [], seed + 1);
  const todayBook = getRandomItem(books || [], seed + 2);
  const todayTravel = getRandomItem(travels || [], seed + 3);
  const todayFortune = generateDailyFortune(userInfo);
  const sajuAnalysis = generateSajuAnalysis(userInfo);

  const handleQuoteFavorite = (quoteId: string) => {
    setFavoriteQuotes(prev => 
      prev.includes(quoteId) 
        ? prev.filter(id => id !== quoteId)
        : [...prev, quoteId]
    );
  };

  const handleQuoteShare = (quote: any) => {
    if (navigator.share) {
      navigator.share({
        title: '오늘의 명언',
        text: `"${quote.text}" - ${quote.author}`,
        url: window.location.href
      });
    } else {
      // 폴백: 클립보드에 복사
      navigator.clipboard.writeText(`"${quote.text}" - ${quote.author}`);
    }
  };

  const handleTravelFavorite = (travelId: string) => {
    setFavoriteTravels(prev => 
      prev.includes(travelId) 
        ? prev.filter(id => id !== travelId)
        : [...prev, travelId]
    );
  };

  const handleTravelShare = (travel: any) => {
    if (navigator.share) {
      navigator.share({
        title: '여행지 추천',
        text: `${travel.place} - ${travel.description}`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(`${travel.place} - ${travel.description}`);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-2 sm:p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-6 md:p-8">
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl text-gray-900 mb-2">
                안녕하세요, {userInfo.name}님! 👋
              </h1>
              <p className="text-sm sm:text-base text-gray-600">{formatDate()}</p>
            </div>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3">
              <Button
                onClick={() => setIsQuoteBrowserOpen(true)}
                variant="outline"
                size="sm"
                className="rounded-lg hover:bg-gray-100 text-xs sm:text-sm"
              >
                <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">오늘의 명언</span>
                <span className="sm:hidden">명언</span>
              </Button>
              <Button
                onClick={() => setIsTravelBrowserOpen(true)}
                variant="outline"
                size="sm"
                className="rounded-lg hover:bg-gray-100 text-xs sm:text-sm"
              >
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">추천 여행지</span>
                <span className="sm:hidden">여행</span>
              </Button>
              <Button
                onClick={() => setIsEditModalOpen(true)}
                variant="outline"
                size="sm"
                className="rounded-lg hover:bg-gray-100 text-xs sm:text-sm"
              >
                정보 수정
              </Button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Quote Card - Full Width */}
          <QuoteCard 
            quote={todayQuote} 
            onFavorite={handleQuoteFavorite}
            onShare={handleQuoteShare}
          />

          {/* Habit Card */}
          <HabitCard habit={todayHabit} />

          {/* Fortune Card - Full Width */}
          <FortuneCard userInfo={userInfo} fortune={todayFortune} />

          {/* Saju Analysis Card - Full Width */}
          <SajuAnalysisCard userInfo={userInfo} saju={sajuAnalysis} />

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

      {/* Quote Browser */}
      {isQuoteBrowserOpen && (
        <QuoteBrowser
          onClose={() => setIsQuoteBrowserOpen(false)}
          onFavorite={handleQuoteFavorite}
          onShare={handleQuoteShare}
        />
      )}

      {/* Travel Browser */}
      {isTravelBrowserOpen && (
        <TravelBrowser
          onClose={() => setIsTravelBrowserOpen(false)}
          onFavorite={handleTravelFavorite}
          onShare={handleTravelShare}
        />
      )}

    </div>
  );
}
