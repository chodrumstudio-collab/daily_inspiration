import { BookOpen } from 'lucide-react';
import { Book } from '../types';
import { Badge } from './ui/badge';

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">
      <div className="flex items-center gap-2 mb-6">
        <BookOpen className="w-6 h-6 text-blue-500" />
        <h2 className="text-gray-900">오늘의 책</h2>
      </div>
      
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 space-y-4">
        <Badge className="bg-blue-700 hover:bg-blue-800 text-white">
          {book.genre}
        </Badge>
        
        <h3 className="text-white">{book.title}</h3>
        
        <p className="text-blue-100 text-sm">{book.author}</p>
        
        <p className="text-white/90 leading-relaxed">{book.description}</p>
      </div>
    </div>
  );
}
