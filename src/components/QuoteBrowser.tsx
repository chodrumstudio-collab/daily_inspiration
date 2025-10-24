import { useState, useEffect } from 'react';
import { Search, Filter, Heart, Share2, Copy, Tag, Star, X } from 'lucide-react';
import { Quote } from '../types';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { 
  quotes, 
  quoteCategories, 
  quoteMoods, 
  filterQuotesByCategory, 
  filterQuotesByMood, 
  filterQuotesByLanguage, 
  searchQuotes 
} from '../data/content';

interface QuoteBrowserProps {
  onClose: () => void;
  onFavorite?: (quoteId: string) => void;
  onShare?: (quote: Quote) => void;
}

export function QuoteBrowser({ onClose, onFavorite, onShare }: QuoteBrowserProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedMood, setSelectedMood] = useState('전체');
  const [selectedLanguage, setSelectedLanguage] = useState('전체');
  const [filteredQuotes, setFilteredQuotes] = useState<Quote[]>(quotes || []);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    let result = quotes || [];
    
    // 검색어 필터링
    if (searchTerm.trim()) {
      result = searchQuotes(result, searchTerm);
    }
    
    // 카테고리 필터링
    result = filterQuotesByCategory(result, selectedCategory);
    
    // 무드 필터링
    result = filterQuotesByMood(result, selectedMood);
    
    // 언어 필터링
    result = filterQuotesByLanguage(result, selectedLanguage);
    
    setFilteredQuotes(result);
  }, [searchTerm, selectedCategory, selectedMood, selectedLanguage]);

  const handleFavorite = (quoteId: string) => {
    setFavorites(prev => 
      prev.includes(quoteId) 
        ? prev.filter(id => id !== quoteId)
        : [...prev, quoteId]
    );
    onFavorite?.(quoteId);
  };

  const handleShare = (quote: Quote) => {
    if (navigator.share) {
      navigator.share({
        title: '명언 공유',
        text: `"${quote.text}" - ${quote.author}`,
        url: window.location.href
      });
    } else {
      onShare?.(quote);
    }
  };

  const handleCopy = async (quote: Quote) => {
    try {
      await navigator.clipboard.writeText(`"${quote.text}" - ${quote.author}`);
    } catch (err) {
      console.error('복사 실패:', err);
    }
  };

  const getMoodEmoji = (mood: string) => {
    const moodEmojis: { [key: string]: string } = {
      motivational: '💪',
      inspirational: '✨',
      hopeful: '🌟',
      peaceful: '🕊️',
      romantic: '💕',
      supportive: '🤝',
      encouraging: '👏',
      reflective: '🤔',
      mindful: '🧘',
      brave: '🦁',
      adventurous: '🗺️',
      creative: '🎨',
      positive: '😊',
      challenging: '⚡',
      educational: '📚',
      practical: '🔧',
      resilient: '🌱',
      authentic: '💎',
      passionate: '🔥',
      giving: '🎁',
      accepting: '🤗'
    };
    return moodEmojis[mood] || '💭';
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
        {/* 헤더 */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">명언 브라우저</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* 필터 섹션 */}
        <div className="p-6 border-b bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="명언, 작가, 태그 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="카테고리" />
              </SelectTrigger>
              <SelectContent>
                {quoteCategories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={selectedMood} onValueChange={setSelectedMood}>
              <SelectTrigger>
                <SelectValue placeholder="무드" />
              </SelectTrigger>
              <SelectContent>
                {quoteMoods.map(mood => (
                  <SelectItem key={mood} value={mood}>
                    {mood}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger>
                <SelectValue placeholder="언어" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="전체">전체</SelectItem>
                <SelectItem value="ko">한국어</SelectItem>
                <SelectItem value="en">English</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* 결과 섹션 */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-gray-600">
              {filteredQuotes.length}개의 명언을 찾았습니다
            </p>
            <div className="flex gap-2">
              <Badge variant="outline">
                <Filter className="w-3 h-3 mr-1" />
                필터 적용됨
              </Badge>
            </div>
          </div>

          <div className="grid gap-4">
            {filteredQuotes.map((quote) => (
              <Card key={quote.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{getMoodEmoji(quote.mood)}</span>
                      <CardTitle className="text-lg">{quote.category}</CardTitle>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {quote.language === 'ko' ? '한국어' : 'English'}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {quote.mood}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-lg italic text-gray-800 mb-4">
                    "{quote.text}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between mb-4">
                    <cite className="text-gray-600 font-medium">
                      — {quote.author}
                    </cite>
                  </div>

                  {/* 태그 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {quote.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* 액션 버튼들 */}
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleFavorite(quote.id)}
                      className={`transition-colors ${
                        favorites.includes(quote.id) ? 'text-red-500 hover:text-red-600' : 'text-gray-500 hover:text-red-500'
                      }`}
                    >
                      <Heart className={`w-4 h-4 mr-1 ${favorites.includes(quote.id) ? 'fill-current' : ''}`} />
                      {favorites.includes(quote.id) ? '즐겨찾기됨' : '즐겨찾기'}
                    </Button>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleShare(quote)}
                      className="text-gray-500 hover:text-blue-500"
                    >
                      <Share2 className="w-4 h-4 mr-1" />
                      공유
                    </Button>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleCopy(quote)}
                      className="text-gray-500 hover:text-green-500"
                    >
                      <Copy className="w-4 h-4 mr-1" />
                      복사
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
