import { MapPin } from 'lucide-react';
import { Travel } from '../types';
import { Badge } from './ui/badge';

interface TravelCardProps {
  travel: Travel;
}

export function TravelCard({ travel }: TravelCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">
      <div className="flex items-center gap-2 mb-6">
        <MapPin className="w-6 h-6 text-green-500" />
        <h2 className="text-gray-900">오늘의 여행지</h2>
      </div>
      
      <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 space-y-4">
        <Badge className="bg-green-700 hover:bg-green-800 text-white">
          {travel.country}
        </Badge>
        
        <h3 className="text-white">{travel.place}</h3>
        
        <p className="text-white/90 leading-relaxed">{travel.description}</p>
        
        <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
          <p className="text-white mb-2">주요 명소</p>
          <div className="flex flex-wrap gap-2">
            {travel.attractions.map((attraction, index) => (
              <span
                key={index}
                className="bg-white/30 text-white text-sm px-3 py-1 rounded-full"
              >
                {attraction}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
