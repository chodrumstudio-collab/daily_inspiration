import { Sparkles } from 'lucide-react';
import { Quote } from '../types';

interface QuoteCardProps {
  quote: Quote;
}

export function QuoteCard({ quote }: QuoteCardProps) {
  return (
    <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl shadow-lg p-8 text-white col-span-full">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-6 h-6" />
        <h2 className="text-white">오늘의 명언</h2>
      </div>
      
      <blockquote className="space-y-4">
        <p className="text-2xl italic font-serif leading-relaxed">
          "{quote.text}"
        </p>
        <footer className="text-right text-white/90 text-sm">
          — {quote.author}
        </footer>
      </blockquote>
    </div>
  );
}
