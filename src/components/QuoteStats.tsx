import { useState, useEffect } from 'react';
import { BarChart3, Heart, Share2, Copy, TrendingUp, Calendar } from 'lucide-react';
import { Quote } from '../types';
import { quotes } from '../data/content';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface QuoteStatsProps {
  favoriteQuotes: string[];
  onClose: () => void;
}

export function QuoteStats({ favoriteQuotes, onClose }: QuoteStatsProps) {
  const [stats, setStats] = useState({
    totalQuotes: quotes.length,
    favoriteCount: favoriteQuotes.length,
    categoryStats: {} as { [key: string]: number },
    moodStats: {} as { [key: string]: number },
    languageStats: {} as { [key: string]: number },
    recentFavorites: [] as Quote[]
  });

  useEffect(() => {
    const quotesArray = quotes || [];
    const favoritesArray = favoriteQuotes || [];
    
    // 카테고리별 통계
    const categoryStats = quotesArray.reduce((acc, quote) => {
      if (quote?.category) {
        acc[quote.category] = (acc[quote.category] || 0) + 1;
      }
      return acc;
    }, {} as { [key: string]: number });

    // 무드별 통계
    const moodStats = quotesArray.reduce((acc, quote) => {
      if (quote?.mood) {
        acc[quote.mood] = (acc[quote.mood] || 0) + 1;
      }
      return acc;
    }, {} as { [key: string]: number });

    // 언어별 통계
    const languageStats = quotesArray.reduce((acc, quote) => {
      if (quote?.language) {
        acc[quote.language] = (acc[quote.language] || 0) + 1;
      }
      return acc;
    }, {} as { [key: string]: number });

    // 최근 즐겨찾기한 명언들
    const recentFavorites = quotesArray.filter(quote => favoritesArray.includes(quote.id));

    setStats({
      totalQuotes: quotesArray.length,
      favoriteCount: favoritesArray.length,
      categoryStats,
      moodStats,
      languageStats,
      recentFavorites
    });
  }, [favoriteQuotes]);

  const getTopCategories = () => {
    return Object.entries(stats.categoryStats)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5);
  };

  const getTopMoods = () => {
    return Object.entries(stats.moodStats)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* 헤더 */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-purple-500" />
            <h2 className="text-2xl font-bold text-gray-900">명언 통계</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[70vh]">
          {/* 전체 통계 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  전체 명언
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600">
                  {stats.totalQuotes}
                </div>
                <p className="text-sm text-gray-500 mt-1">총 명언 개수</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  즐겨찾기
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-red-600">
                  {stats.favoriteCount}
                </div>
                <p className="text-sm text-gray-500 mt-1">즐겨찾기한 명언</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  즐겨찾기 비율
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">
                  {Math.round((stats.favoriteCount / stats.totalQuotes) * 100)}%
                </div>
                <p className="text-sm text-gray-500 mt-1">전체 대비 즐겨찾기 비율</p>
              </CardContent>
            </Card>
          </div>

          {/* 카테고리별 통계 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">인기 카테고리</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {getTopCategories().map(([category, count], index) => (
                <Card key={category}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-purple-600">
                            {index + 1}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{category}</p>
                          <p className="text-sm text-gray-500">{count}개</p>
                        </div>
                      </div>
                      <Badge variant="secondary">
                        {Math.round((count / stats.totalQuotes) * 100)}%
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 무드별 통계 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">인기 무드</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {getTopMoods().map(([mood, count]) => (
                <Card key={mood}>
                  <CardContent className="p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{mood}</p>
                        <p className="text-xs text-gray-500">{count}개</p>
                      </div>
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-600">
                          {count}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 언어별 통계 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">언어별 분포</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(stats.languageStats).map(([language, count]) => (
                <Card key={language}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">
                          {language === 'ko' ? '한국어' : 'English'}
                        </p>
                        <p className="text-sm text-gray-500">{count}개</p>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">
                          {Math.round((count / stats.totalQuotes) * 100)}%
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 즐겨찾기한 명언들 */}
          {stats.recentFavorites.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">즐겨찾기한 명언</h3>
              <div className="space-y-3">
                {stats.recentFavorites.map((quote) => (
                  <Card key={quote.id}>
                    <CardContent className="p-4">
                      <blockquote className="text-sm italic text-gray-700 mb-2">
                        "{quote.text}"
                      </blockquote>
                      <div className="flex items-center justify-between">
                        <cite className="text-xs text-gray-500">— {quote.author}</cite>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="text-xs">
                            {quote.category}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {quote.mood}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
