import { useState, useEffect } from 'react';
import { Search, Filter, Heart, Share2, MapPin, Star, Clock, DollarSign, Calendar, X } from 'lucide-react';
import { Travel, TravelGuide } from '../types';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { travels, travelGuides } from '../data/content';

interface TravelBrowserProps {
  onClose: () => void;
  onFavorite?: (travelId: string) => void;
  onShare?: (travel: Travel) => void;
}

export function TravelBrowser({ onClose, onFavorite, onShare }: TravelBrowserProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('전체');
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedDifficulty, setSelectedDifficulty] = useState('전체');
  const [filteredTravels, setFilteredTravels] = useState<Travel[]>(travels || []);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState('destinations');

  useEffect(() => {
    let result = travels || [];
    
    // 검색어 필터링
    if (searchTerm.trim()) {
      result = result.filter(travel => 
        travel.place?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        travel.country?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        travel.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        travel.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // 국가 필터링
    if (selectedCountry !== '전체') {
      result = result.filter(travel => travel.country?.includes(selectedCountry));
    }
    
    // 카테고리 필터링
    if (selectedCategory !== '전체') {
      result = result.filter(travel => travel.category === selectedCategory);
    }
    
    // 난이도 필터링
    if (selectedDifficulty !== '전체') {
      result = result.filter(travel => travel.difficulty === selectedDifficulty);
    }
    
    setFilteredTravels(result);
  }, [searchTerm, selectedCountry, selectedCategory, selectedDifficulty]);

  const handleFavorite = (travelId: string) => {
    setFavorites(prev => 
      prev.includes(travelId) 
        ? prev.filter(id => id !== travelId)
        : [...prev, travelId]
    );
    onFavorite?.(travelId);
  };

  const handleShare = (travel: Travel) => {
    if (navigator.share) {
      navigator.share({
        title: '여행지 추천',
        text: `${travel.place} - ${travel.description}`,
        url: window.location.href
      });
    } else {
      onShare?.(travel);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'hard': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '쉬움';
      case 'medium': return '보통';
      case 'hard': return '어려움';
      default: return difficulty;
    }
  };

  const countries = ['전체', '🇰🇷 한국', '🇯🇵 일본', '🇮🇹 이탈리아', '🇬🇷 그리스', '🇫🇷 프랑스', '🇨🇭 스위스', '🇪🇸 스페인', '🇹🇭 태국'];
  const categories = ['전체', '자연', '문화', '역사', '스포츠'];
  const difficulties = ['전체', 'easy', 'medium', 'hard'];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
        {/* 헤더 */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-2">
            <MapPin className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-bold text-gray-900">여행 브라우저</h2>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1">
          <TabsList className="grid w-full grid-cols-2 mx-6 mt-6">
            <TabsTrigger value="destinations">여행지</TabsTrigger>
            <TabsTrigger value="guides">여행 가이드</TabsTrigger>
          </TabsList>

          <TabsContent value="destinations" className="p-6">
            {/* 필터 섹션 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="여행지, 국가, 태그 검색..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                  <SelectTrigger>
                    <SelectValue placeholder="국가" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map(country => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="카테고리" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                  <SelectTrigger>
                    <SelectValue placeholder="난이도" />
                  </SelectTrigger>
                  <SelectContent>
                    {difficulties.map(difficulty => (
                      <SelectItem key={difficulty} value={difficulty}>
                        {difficulty === '전체' ? '전체' : getDifficultyText(difficulty)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* 결과 섹션 */}
            <div className="mb-4 flex items-center justify-between">
              <p className="text-gray-600">
                {filteredTravels.length}개의 여행지를 찾았습니다
              </p>
              <div className="flex gap-2">
                <Badge variant="outline">
                  <Filter className="w-3 h-3 mr-1" />
                  필터 적용됨
                </Badge>
              </div>
            </div>

            <div className="grid gap-6">
              {filteredTravels.map((travel) => (
                <Card key={travel.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{travel.country}</span>
                        <div>
                          <CardTitle className="text-xl">{travel.place}</CardTitle>
                          <p className="text-sm text-gray-500">{travel.region}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {travel.category}
                        </Badge>
                        <Badge className={`text-xs ${getDifficultyColor(travel.difficulty)}`}>
                          {getDifficultyText(travel.difficulty)}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{travel.rating}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{travel.description}</p>
                    
                    {/* 여행 정보 */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        <div>
                          <p className="text-xs text-gray-500">최적 시기</p>
                          <p className="text-sm font-medium">{travel.bestTime}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-green-500" />
                        <div>
                          <p className="text-xs text-gray-500">소요 시간</p>
                          <p className="text-sm font-medium">{travel.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-yellow-500" />
                        <div>
                          <p className="text-xs text-gray-500">예상 비용</p>
                          <p className="text-sm font-medium">{travel.budget}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-red-500" />
                        <div>
                          <p className="text-xs text-gray-500">주요 명소</p>
                          <p className="text-sm font-medium">{travel.attractions.length}개</p>
                        </div>
                      </div>
                    </div>

                    {/* 태그 */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {travel.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* 주요 명소 */}
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">주요 명소</p>
                      <div className="flex flex-wrap gap-2">
                        {travel.attractions.slice(0, 5).map((attraction, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {attraction}
                          </Badge>
                        ))}
                        {travel.attractions.length > 5 && (
                          <Badge variant="outline" className="text-xs">
                            +{travel.attractions.length - 5}개 더
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* 리뷰 */}
                    {travel.reviews && travel.reviews.length > 0 && (
                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">최근 리뷰</p>
                        <div className="space-y-2">
                          {travel.reviews.slice(0, 2).map((review) => (
                            <div key={review.id} className="bg-gray-50 rounded-lg p-3">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-medium">{review.author}</span>
                                <div className="flex items-center gap-1">
                                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                                  <span className="text-xs">{review.rating}</span>
                                </div>
                              </div>
                              <p className="text-xs text-gray-600">{review.comment}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* 액션 버튼들 */}
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleFavorite(travel.id)}
                        className={`transition-colors ${
                          favorites.includes(travel.id) ? 'text-red-500 hover:text-red-600' : 'text-gray-500 hover:text-red-500'
                        }`}
                      >
                        <Heart className={`w-4 h-4 mr-1 ${favorites.includes(travel.id) ? 'fill-current' : ''}`} />
                        {favorites.includes(travel.id) ? '즐겨찾기됨' : '즐겨찾기'}
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleShare(travel)}
                        className="text-gray-500 hover:text-blue-500"
                      >
                        <Share2 className="w-4 h-4 mr-1" />
                        공유
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="guides" className="p-6">
            <div className="space-y-4">
              {travelGuides.map((guide) => (
                <Card key={guide.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{guide.title}</CardTitle>
                      <Badge variant="outline">{guide.category}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>작성자: {guide.author}</span>
                      <span>조회: {guide.views}</span>
                      <span>도움: {guide.helpful}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{guide.content}</p>
                    <div className="flex flex-wrap gap-2">
                      {guide.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
