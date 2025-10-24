import { DailyFortune, SajuAnalysis, UserInfo } from '../types';

// 시간대별 운세 데이터
const timeSlots = [
  { time: '00:00-01:30', name: '자시', element: '水', description: '새벽의 고요함 속에서 깊은 사고가 가능한 시간' },
  { time: '01:31-03:30', name: '축시', element: '土', description: '안정과 휴식을 취하기 좋은 시간' },
  { time: '03:31-05:30', name: '인시', element: '木', description: '새로운 시작과 성장의 에너지가 강한 시간' },
  { time: '05:31-07:30', name: '묘시', element: '木', description: '활발한 활동과 운동에 적합한 시간' },
  { time: '07:31-09:30', name: '진시', element: '土', description: '업무와 학습에 집중하기 좋은 시간' },
  { time: '09:31-11:30', name: '사시', element: '火', description: '열정과 에너지가 넘치는 시간' },
  { time: '11:31-13:30', name: '오시', element: '火', description: '사교와 소통이 활발한 시간' },
  { time: '13:31-15:30', name: '미시', element: '土', description: '안정적인 업무 처리에 좋은 시간' },
  { time: '15:31-17:30', name: '신시', element: '金', description: '결정과 판단력이 필요한 시간' },
  { time: '17:31-19:30', name: '유시', element: '金', description: '정리와 마무리에 적합한 시간' },
  { time: '19:31-21:30', name: '술시', element: '土', description: '가족과의 시간을 보내기 좋은 시간' },
  { time: '21:31-23:30', name: '해시', element: '水', description: '휴식과 명상에 적합한 시간' },
  { time: '23:31-24:00', name: '야자', element: '水', description: '하루를 마무리하고 내일을 준비하는 시간' }
];

// 오행 색상
const elementColors = {
  wood: ['초록색', '청록색', '연두색'],
  fire: ['빨간색', '주황색', '분홍색'],
  earth: ['노란색', '갈색', '베이지색'],
  metal: ['흰색', '은색', '회색'],
  water: ['파란색', '검은색', '남색']
};

// 방향
const directions = ['동', '서', '남', '북', '동남', '동북', '서남', '서북'];

// 운세 메시지 템플릿
const fortuneMessages = {
  excellent: [
    '오늘은 모든 일이 순조롭게 진행될 것입니다.',
    '새로운 기회가 찾아올 좋은 날입니다.',
    '주변 사람들과의 관계가 더욱 돈독해질 것입니다.'
  ],
  good: [
    '전반적으로 긍정적인 하루가 될 것입니다.',
    '작은 노력으로 큰 성과를 얻을 수 있습니다.',
    '건강한 하루를 보내실 수 있습니다.'
  ],
  average: [
    '안정적인 하루를 보내실 것입니다.',
    '꾸준한 노력이 필요한 시기입니다.',
    '인내심을 갖고 차근차근 진행하세요.'
  ],
  caution: [
    '신중한 판단이 필요한 하루입니다.',
    '급하게 서두르지 말고 신중하게 결정하세요.',
    '건강 관리에 더욱 주의를 기울이세요.'
  ]
};

export function generateDailyFortune(userInfo: UserInfo): DailyFortune {
  const today = new Date();
  const dateStr = today.toISOString().split('T')[0];
  
  // 사용자 정보 기반으로 운세 점수 생성 (일관성을 위해 시드 사용)
  const seed = userInfo.birthYear + userInfo.birthMonth + userInfo.birthDay;
  const random = (multiplier: number) => (seed * multiplier) % 100;
  
  const overall = Math.floor(random(1.7) + 30); // 30-100
  const love = Math.floor(random(2.3) + 20); // 20-100
  const career = Math.floor(random(1.9) + 25); // 25-100
  const health = Math.floor(random(2.1) + 30); // 30-100
  const money = Math.floor(random(1.8) + 25); // 25-100
  
  // 운세 등급 결정
  const getFortuneLevel = (score: number) => {
    if (score >= 80) return 'excellent';
    if (score >= 60) return 'good';
    if (score >= 40) return 'average';
    return 'caution';
  };
  
  const overallLevel = getFortuneLevel(overall);
  const description = fortuneMessages[overallLevel][Math.floor(random(3.1)) % fortuneMessages[overallLevel].length];
  
  // 행운의 요소들
  const elements = ['wood', 'fire', 'earth', 'metal', 'water'];
  const luckyElement = elements[Math.floor(random(4.2)) % elements.length];
  const luckyColor = elementColors[luckyElement][Math.floor(random(2.7)) % elementColors[luckyElement].length];
  const luckyNumber = Math.floor(random(5.3)) % 9 + 1;
  const luckyDirection = directions[Math.floor(random(6.1)) % directions.length];
  const luckyTime = timeSlots[Math.floor(random(7.2)) % timeSlots.length];
  
  // 조언과 주의사항
  const advice = getAdvice(overallLevel, userInfo.zodiac);
  const warning = getWarning(overallLevel, userInfo.gender);
  
  return {
    date: dateStr,
    overall,
    love,
    career,
    health,
    money,
    description,
    luckyElements: {
      color: luckyColor,
      number: luckyNumber,
      direction: luckyDirection,
      time: luckyTime.time
    },
    advice,
    warning
  };
}

export function generateSajuAnalysis(userInfo: UserInfo): SajuAnalysis {
  // 간단한 사주 분석 (실제로는 더 복잡한 계산이 필요)
  const elements = {
    wood: Math.floor(Math.random() * 20) + 10,
    fire: Math.floor(Math.random() * 20) + 10,
    earth: Math.floor(Math.random() * 20) + 10,
    metal: Math.floor(Math.random() * 20) + 10,
    water: Math.floor(Math.random() * 20) + 10
  };
  
  // 총합을 100으로 정규화
  const total = Object.values(elements).reduce((sum, val) => sum + val, 0);
  Object.keys(elements).forEach(key => {
    elements[key] = Math.round((elements[key] / total) * 100);
  });
  
  const personality = getPersonalityDescription(elements, userInfo.zodiac);
  const compatibility = getCompatibility(userInfo.zodiac);
  const lifePath = getLifePathDescription(userInfo.birthYear, userInfo.gender);
  
  return {
    year: `${userInfo.birthYear}년`,
    month: `${userInfo.birthMonth}월`,
    day: `${userInfo.birthDay}일`,
    time: userInfo.birthTime,
    elements,
    personality,
    compatibility,
    lifePath
  };
}

function getAdvice(level: string, zodiac: string): string {
  const adviceByZodiac = {
    '쥐': '신중한 판단과 계획적인 접근이 필요합니다.',
    '소': '꾸준한 노력과 인내심이 성공의 열쇠입니다.',
    '호랑이': '용기와 결단력을 발휘할 때입니다.',
    '토끼': '부드러운 소통과 협력이 중요합니다.',
    '용': '리더십을 발휘할 좋은 기회입니다.',
    '뱀': '깊이 있는 사고와 전략적 접근이 필요합니다.',
    '말': '활동적이고 적극적인 자세가 중요합니다.',
    '양': '따뜻한 마음과 배려심을 보여주세요.',
    '원숭이': '창의적이고 유연한 사고가 필요합니다.',
    '닭': '체계적이고 정확한 접근이 중요합니다.',
    '개': '성실함과 충성심이 인정받을 것입니다.',
    '돼지': '넓은 마음과 관대함이 필요합니다.'
  };
  
  return adviceByZodiac[zodiac] || '오늘 하루 긍정적인 마음가짐을 유지하세요.';
}

function getWarning(level: string, gender: string): string {
  const warnings = {
    excellent: '좋은 기운이 계속되도록 겸손한 마음을 유지하세요.',
    good: '안일함에 빠지지 말고 꾸준히 노력하세요.',
    average: '급하게 서두르지 말고 차근차근 진행하세요.',
    caution: '신중한 판단과 주의깊은 행동이 필요합니다.'
  };
  
  return warnings[level] || '건강 관리에 주의를 기울이세요.';
}

function getPersonalityDescription(elements: any, zodiac: string): string {
  const maxElement = Object.keys(elements).reduce((a, b) => elements[a] > elements[b] ? a : b);
  
  const personalityTraits = {
    wood: '창의적이고 진취적인 성격',
    fire: '열정적이고 활발한 성격',
    earth: '안정적이고 신뢰할 수 있는 성격',
    metal: '체계적이고 원칙적인 성격',
    water: '지혜롭고 유연한 성격'
  };
  
  return `${personalityTraits[maxElement]}으로, ${zodiac}띠의 특성과 함께 독특한 매력을 지니고 있습니다.`;
}

function getCompatibility(zodiac: string): string[] {
  const compatibilityMap = {
    '쥐': ['용', '원숭이', '소'],
    '소': ['뱀', '닭', '쥐'],
    '호랑이': ['말', '개', '돼지'],
    '토끼': ['양', '돼지', '개'],
    '용': ['쥐', '원숭이', '닭'],
    '뱀': ['소', '닭', '원숭이'],
    '말': ['호랑이', '양', '개'],
    '양': ['토끼', '말', '돼지'],
    '원숭이': ['쥐', '용', '뱀'],
    '닭': ['소', '뱀', '용'],
    '개': ['호랑이', '토끼', '말'],
    '돼지': ['토끼', '양', '호랑이']
  };
  
  return compatibilityMap[zodiac] || [];
}

function getLifePathDescription(birthYear: number, gender: string): string {
  const age = new Date().getFullYear() - birthYear + 1;
  
  if (age < 30) {
    return '청춘의 에너지가 넘치는 시기로, 새로운 도전과 경험을 통해 성장할 수 있습니다.';
  } else if (age < 50) {
    return '인생의 황금기로, 안정과 성장을 동시에 추구할 수 있는 시기입니다.';
  } else {
    return '지혜와 경험이 풍부한 시기로, 후배들을 이끌고 사회에 기여할 수 있습니다.';
  }
}
