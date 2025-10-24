import { useState } from 'react';
import { Plus, Calendar, MapPin, DollarSign, Users, Save, Share2, X } from 'lucide-react';
import { TravelPlan } from '../types';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { travels } from '../data/content';

interface TravelPlannerProps {
  onClose: () => void;
  onSave?: (plan: TravelPlan) => void;
}

export function TravelPlanner({ onClose, onSave }: TravelPlannerProps) {
  const [plan, setPlan] = useState<Partial<TravelPlan>>({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    destinations: [],
    budget: 0,
    isPublic: false
  });
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
  const [isCreating, setIsCreating] = useState(false);

  const handleDestinationAdd = (destination: string) => {
    if (!selectedDestinations.includes(destination)) {
      setSelectedDestinations([...selectedDestinations, destination]);
      setPlan(prev => ({
        ...prev,
        destinations: [...(prev.destinations || []), destination]
      }));
    }
  };

  const handleDestinationRemove = (destination: string) => {
    setSelectedDestinations(selectedDestinations.filter(d => d !== destination));
    setPlan(prev => ({
      ...prev,
      destinations: prev.destinations?.filter(d => d !== destination) || []
    }));
  };

  const handleSave = () => {
    if (!plan.title || !plan.startDate || !plan.endDate) {
      alert('제목, 시작일, 종료일을 모두 입력해주세요.');
      return;
    }

    const newPlan: TravelPlan = {
      id: Date.now().toString(),
      title: plan.title,
      description: plan.description || '',
      startDate: plan.startDate,
      endDate: plan.endDate,
      destinations: plan.destinations || [],
      budget: plan.budget || 0,
      isPublic: plan.isPublic || false,
      createdAt: new Date().toISOString()
    };

    onSave?.(newPlan);
    setIsCreating(false);
    setPlan({
      title: '',
      description: '',
      startDate: '',
      endDate: '',
      destinations: [],
      budget: 0,
      isPublic: false
    });
    setSelectedDestinations([]);
  };

  const calculateDuration = () => {
    if (plan.startDate && plan.endDate) {
      const start = new Date(plan.startDate);
      const end = new Date(plan.endDate);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
    return 0;
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* 헤더 */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-green-500" />
            <h2 className="text-2xl font-bold text-gray-900">여행 계획 만들기</h2>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[70vh]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 여행 계획 정보 */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">기본 정보</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      여행 제목 *
                    </label>
                    <Input
                      placeholder="예: 제주도 3박 4일 여행"
                      value={plan.title}
                      onChange={(e) => setPlan(prev => ({ ...prev, title: e.target.value }))}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      여행 설명
                    </label>
                    <Textarea
                      placeholder="여행에 대한 간단한 설명을 작성해주세요"
                      value={plan.description}
                      onChange={(e) => setPlan(prev => ({ ...prev, description: e.target.value }))}
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        시작일 *
                      </label>
                      <Input
                        type="date"
                        value={plan.startDate}
                        onChange={(e) => setPlan(prev => ({ ...prev, startDate: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        종료일 *
                      </label>
                      <Input
                        type="date"
                        value={plan.endDate}
                        onChange={(e) => setPlan(prev => ({ ...prev, endDate: e.target.value }))}
                      />
                    </div>
                  </div>

                  {calculateDuration() > 0 && (
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-sm text-blue-700">
                        총 {calculateDuration()}일 여행입니다
                      </p>
                    </div>
                  )}

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      예상 비용 (원)
                    </label>
                    <Input
                      type="number"
                      placeholder="1000000"
                      value={plan.budget || ''}
                      onChange={(e) => setPlan(prev => ({ ...prev, budget: parseInt(e.target.value) || 0 }))}
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="isPublic"
                      checked={plan.isPublic}
                      onChange={(e) => setPlan(prev => ({ ...prev, isPublic: e.target.checked }))}
                      className="rounded"
                    />
                    <label htmlFor="isPublic" className="text-sm text-gray-700">
                      공개 여행 계획으로 만들기
                    </label>
                  </div>
                </CardContent>
              </Card>

              {/* 여행지 선택 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">여행지 선택</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Select onValueChange={handleDestinationAdd}>
                      <SelectTrigger>
                        <SelectValue placeholder="여행지를 선택하세요" />
                      </SelectTrigger>
                      <SelectContent>
                        {(travels || []).map((travel) => (
                          <SelectItem key={travel.id} value={travel.place}>
                            {travel.country} {travel.place}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {selectedDestinations.length > 0 && (
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-700">선택된 여행지</p>
                        <div className="flex flex-wrap gap-2">
                          {selectedDestinations.map((destination) => (
                            <Badge key={destination} variant="secondary" className="flex items-center gap-1">
                              {destination}
                              <button
                                onClick={() => handleDestinationRemove(destination)}
                                className="ml-1 hover:text-red-500"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 여행지 목록 */}
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">추천 여행지</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {(travels || []).map((travel) => (
                      <div
                        key={travel.id}
                        className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{travel.country}</span>
                          <div>
                            <p className="font-medium">{travel.place}</p>
                            <p className="text-sm text-gray-500">{travel.region}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {travel.category}
                          </Badge>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                            <span className="text-xs">{travel.rating}</span>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDestinationAdd(travel.place)}
                            disabled={selectedDestinations.includes(travel.place)}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* 액션 버튼들 */}
          <div className="flex justify-end gap-3 mt-6 pt-6 border-t">
            <Button variant="outline" onClick={onClose}>
              취소
            </Button>
            <Button onClick={handleSave} className="bg-green-500 hover:bg-green-600">
              <Save className="w-4 h-4 mr-2" />
              여행 계획 저장
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
