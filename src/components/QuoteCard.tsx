import { useState } from 'react';
import { Heart, Share2, Copy, Tag, Calendar, Star } from 'lucide-react';
import { Quote } from '../types';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface QuoteCardProps {
  quote: Quote;
  onFavorite?: (quoteId: string) => void;
  onShare?: (quote: Quote) => void;
}

export function QuoteCard({ quote, onFavorite, onShare }: QuoteCardProps) {
  const [isFavorited, setIsFavorited] = useState(quote.isFavorite || false);
  const [isCopied, setIsCopied] = useState(false);

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
    onFavorite?.(quote.id);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: '오늘의 명언',
        text: `"${quote.text}" - ${quote.author}`,
        url: window.location.href
      });
    } else {
      onShare?.(quote);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`"${quote.text}" - ${quote.author}`);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
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
    <div className="bg-white rounded-3xl shadow-lg p-8 col-span-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{getMoodEmoji(quote.mood)}</span>
          <h2 className="text-gray-900">오늘의 명언</h2>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-xs">
            {quote.category}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {quote.language === 'ko' ? '한국어' : 'English'}
          </Badge>
        </div>
      </div>
      
      <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6 italic">
        "{quote.text}"
      </blockquote>
      
      <div className="flex items-center justify-between mb-4">
        <cite className="text-gray-600 font-medium">
          — {quote.author}
        </cite>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-500" />
          <span className="text-sm text-gray-500">{quote.mood}</span>
        </div>
      </div>

      {/* 태그 */}
      <div className="flex flex-wrap gap-2 mb-6">
        {quote.tags.map((tag, index) => (
          <Badge key={index} variant="outline" className="text-xs">
            <Tag className="w-3 h-3 mr-1" />
            {tag}
          </Badge>
        ))}
      </div>
      
      {/* 액션 버튼들 */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleFavorite}
            className={`transition-colors ${
              isFavorited ? 'text-red-500 hover:text-red-600' : 'text-gray-500 hover:text-red-500'
            }`}
          >
            <Heart className={`w-4 h-4 mr-1 ${isFavorited ? 'fill-current' : ''}`} />
            {isFavorited ? '즐겨찾기됨' : '즐겨찾기'}
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={handleShare}
            className="text-gray-500 hover:text-blue-500"
          >
            <Share2 className="w-4 h-4 mr-1" />
            공유
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="text-gray-500 hover:text-green-500"
          >
            <Copy className="w-4 h-4 mr-1" />
            {isCopied ? '복사됨!' : '복사'}
          </Button>
        </div>
        
        {quote.createdAt && (
          <div className="flex items-center gap-1 text-sm text-gray-400">
            <Calendar className="w-4 h-4" />
            {new Date(quote.createdAt).toLocaleDateString()}
          </div>
        )}
      </div>
    </div>
  );
}