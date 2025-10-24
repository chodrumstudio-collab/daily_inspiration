import { Quote, Habit, Book, Travel } from '../types';

export const quotes: Quote[] = [
  // 자기계발
  { id: "1", text: "당신이 할 수 있다고 믿든 할 수 없다고 믿든, 당신이 맞다.", author: "헨리 포드", category: "자기계발", tags: ["성공", "마인드셋"], mood: "motivational", language: "ko" },
  { id: "2", text: "성공은 매일 반복한 작은 노력들의 합이다.", author: "로버트 콜리어", category: "자기계발", tags: ["성공", "노력"], mood: "motivational", language: "ko" },
  { id: "3", text: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.", author: "괴테", category: "자기계발", tags: ["꿈", "희망"], mood: "inspirational", language: "ko" },
  { id: "4", text: "시작이 반이다.", author: "아리스토텔레스", category: "자기계발", tags: ["시작", "행동"], mood: "motivational", language: "ko" },
  { id: "5", text: "변화는 고통스럽지만 성장에는 필수적이다.", author: "로이 T. 베넷", category: "자기계발", tags: ["변화", "성장"], mood: "challenging", language: "ko" },
  
  // 인생철학
  { id: "6", text: "삶이 있는 한 희망은 있다.", author: "키케로", category: "인생철학", tags: ["희망", "생명"], mood: "hopeful", language: "ko" },
  { id: "7", text: "인생은 자전거를 타는 것과 같다. 균형을 유지하려면 움직여야 한다.", author: "알버트 아인슈타인", category: "인생철학", tags: ["인생", "균형"], mood: "philosophical", language: "ko" },
  { id: "8", text: "행복은 습관이다. 그것을 몸에 지니라.", author: "허버드", category: "인생철학", tags: ["행복", "습관"], mood: "peaceful", language: "ko" },
  { id: "9", text: "오늘 할 수 있는 일을 내일로 미루지 말라.", author: "벤자민 프랭클린", category: "인생철학", tags: ["시간", "행동"], mood: "motivational", language: "ko" },
  { id: "10", text: "배움에는 왕도가 없다.", author: "유클리드", category: "인생철학", tags: ["학습", "노력"], mood: "educational", language: "ko" },
  
  // 성공
  { id: "11", text: "작은 기회로부터 종종 위대한 업적이 시작된다.", author: "데모스테네스", category: "성공", tags: ["기회", "업적"], mood: "motivational", language: "ko" },
  { id: "12", text: "실패는 성공의 어머니다.", author: "토마스 에디슨", category: "성공", tags: ["실패", "성공"], mood: "resilient", language: "ko" },
  { id: "13", text: "좋은 일을 하는데 시간을 허비하지 말라.", author: "마크 트웨인", category: "성공", tags: ["시간", "효율"], mood: "practical", language: "ko" },
  { id: "14", text: "당신의 한계는 당신의 상상력이다.", author: "익명", category: "성공", tags: ["한계", "상상력"], mood: "creative", language: "ko" },
  { id: "15", text: "긍정적인 마음은 긍정적인 결과를 만든다.", author: "익명", category: "성공", tags: ["긍정", "결과"], mood: "positive", language: "ko" },
  
  // 사랑
  { id: "16", text: "사랑은 두 사람이 서로를 바라보는 것이 아니라, 함께 같은 방향을 바라보는 것이다.", author: "생텍쥐페리", category: "사랑", tags: ["사랑", "함께"], mood: "romantic", language: "ko" },
  { id: "17", text: "진정한 사랑은 서로를 완벽하게 만드는 것이 아니라, 서로의 불완전함을 받아들이는 것이다.", author: "익명", category: "사랑", tags: ["사랑", "수용"], mood: "accepting", language: "ko" },
  { id: "18", text: "사랑은 주는 것이다. 받는 것이 아니다.", author: "빈센트 반 고흐", category: "사랑", tags: ["사랑", "베풂"], mood: "giving", language: "ko" },
  
  // 우정
  { id: "19", text: "진정한 친구는 네가 실수했을 때 너를 용서하고, 네가 옳을 때 너를 기억하는 사람이다.", author: "마야 앤젤루", category: "우정", tags: ["친구", "용서"], mood: "supportive", language: "ko" },
  { id: "20", text: "친구는 네가 혼자서는 갈 수 없는 곳으로 데려다주는 사람이다.", author: "헨리 데이비드 소로", category: "우정", tags: ["친구", "성장"], mood: "encouraging", language: "ko" },
  
  // 시간
  { id: "21", text: "시간은 가장 귀중한 자산이다. 그것을 어떻게 사용하느냐가 인생을 결정한다.", author: "토니 로빈스", category: "시간", tags: ["시간", "인생"], mood: "reflective", language: "ko" },
  { id: "22", text: "과거는 기억이고, 미래는 꿈이다. 오직 현재만이 진실이다.", author: "익명", category: "시간", tags: ["현재", "진실"], mood: "mindful", language: "ko" },
  
  // 용기
  { id: "23", text: "용기는 두려움이 없는 것이 아니라, 두려움을 느끼면서도 행동하는 것이다.", author: "마크 트웨인", category: "용기", tags: ["용기", "두려움"], mood: "brave", language: "ko" },
  { id: "24", text: "가장 큰 모험은 살아가는 것이다.", author: "헬렌 켈러", category: "용기", tags: ["모험", "삶"], mood: "adventurous", language: "ko" },
  
  // 희망
  { id: "25", text: "희망은 아침의 이슬과 같다. 보이지 않지만 모든 것을 젖게 한다.", author: "익명", category: "희망", tags: ["희망", "생명"], mood: "hopeful", language: "ko" },
  { id: "26", text: "어둠이 깊을수록 별이 더 밝게 빛난다.", author: "익명", category: "희망", tags: ["어둠", "빛"], mood: "hopeful", language: "ko" },
  
  // 영어 명언들
  { id: "27", text: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: "성공", tags: ["일", "사랑"], mood: "passionate", language: "en" },
  { id: "28", text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde", category: "자기계발", tags: ["자기", "독창성"], mood: "authentic", language: "en" },
  { id: "29", text: "Life is what happens to you while you're busy making other plans.", author: "John Lennon", category: "인생철학", tags: ["인생", "계획"], mood: "reflective", language: "en" },
  { id: "30", text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt", category: "꿈", tags: ["미래", "꿈"], mood: "inspiring", language: "en" },
];

export const habits: Habit[] = [
  { emoji: "💧", title: "물 한 잔 마시기", description: "아침에 일어나자마자 미지근한 물 한 잔을 마셔보세요. 신진대사가 활발해집니다." },
  { emoji: "🧘‍♀️", title: "5분 명상하기", description: "하루를 시작하기 전 5분간 조용히 앉아 호흡에 집중해보세요. 마음이 평온해집니다." },
  { emoji: "📝", title: "감사 일기 쓰기", description: "오늘 감사한 일 세 가지를 적어보세요. 긍정적인 마음가짐이 생깁니다." },
  { emoji: "🚶‍♀️", title: "산책하기", description: "20분 정도 가벼운 산책을 해보세요. 몸과 마음이 가볍워집니다." },
  { emoji: "📚", title: "책 10페이지 읽기", description: "하루에 10페이지씩만 읽어도 한 달이면 한 권의 책을 완독할 수 있습니다." },
  { emoji: "🎵", title: "좋아하는 음악 듣기", description: "기분 좋은 음악을 들으며 하루를 시작해보세요. 에너지가 충전됩니다." },
  { emoji: "🌱", title: "식물 돌보기", description: "화분에 물을 주며 식물을 돌봐보세요. 작은 생명을 키우는 기쁨을 느낄 수 있습니다." },
  { emoji: "☕", title: "천천히 차 마시기", description: "바쁜 일상 속에서 차 한 잔의 여유를 즐겨보세요." },
  { emoji: "🎨", title: "낙서하기", description: "생각나는 대로 자유롭게 그림을 그려보세요. 창의력이 향상됩니다." },
  { emoji: "💪", title: "스트레칭하기", description: "5분간 전신 스트레칭으로 굳은 몸을 풀어주세요." },
  { emoji: "🌅", title: "일출 감상하기", description: "이른 아침 일출을 감상하며 새로운 하루를 맞이해보세요." },
  { emoji: "📱", title: "디지털 디톡스", description: "30분간 스마트폰을 멀리하고 자신과의 시간을 가져보세요." },
  { emoji: "🍎", title: "과일 먹기", description: "신선한 과일 한 조각으로 건강한 간식 시간을 가져보세요." },
  { emoji: "😊", title: "미소 짓기", description: "거울을 보며 활짝 웃어보세요. 기분이 좋아집니다." },
  { emoji: "🧹", title: "5분 정리하기", description: "주변을 5분간 정리하면 공간도 마음도 깔끔해집니다." },
];

export const books: Book[] = [
  { genre: "자기계발", title: "아주 작은 습관의 힘", author: "제임스 클리어", description: "작은 습관이 어떻게 놀라운 결과를 만드는지 알려주는 책입니다." },
  { genre: "에세이", title: "아몬드", author: "손원평", description: "감정을 느끼지 못하는 소년의 이야기를 통해 공감의 의미를 되새기게 합니다." },
  { genre: "심리학", title: "미움받을 용기", author: "기시미 이치로", description: "아들러 심리학을 바탕으로 진정한 행복에 대해 이야기합니다." },
  { genre: "철학", title: "연금술사", author: "파울로 코엘료", description: "자신의 꿈을 찾아가는 양치기 소년의 여정을 그린 우화입니다." },
  { genre: "소설", title: "달러구트 꿈 백화점", author: "이미예", description: "꿈을 사고 파는 신비로운 백화점 이야기입니다." },
  { genre: "자기계발", title: "멈추면, 비로소 보이는 것들", author: "혜민 스님", description: "바쁜 일상에서 벗어나 진정한 나를 찾아가는 시간을 선물합니다." },
  { genre: "에세이", title: "죽고 싶지만 떡볶이는 먹고 싶어", author: "백세희", description: "우울증을 겪은 저자의 솔직한 고백과 치유의 과정입니다." },
  { genre: "심리학", title: "나는 나로 살기로 했다", author: "김수현", description: "있는 그대로의 나를 사랑하는 방법에 대한 이야기입니다." },
  { genre: "소설", title: "82년생 김지영", author: "조남주", description: "평범한 여성의 삶을 통해 우리 사회를 돌아보게 합니다." },
  { genre: "자기계발", title: "데일 카네기 인간관계론", author: "데일 카네기", description: "성공적인 인간관계를 만드는 원칙을 알려줍니다." },
  { genre: "에세이", title: "마음챙김 명상", author: "틱낫한", description: "현재 순간에 집중하며 평화를 찾는 방법을 가르쳐줍니다." },
  { genre: "철학", title: "이기적 유전자", author: "리처드 도킨스", description: "진화론의 새로운 관점을 제시하는 과학 교양서입니다." },
  { genre: "소설", title: "채식주의자", author: "한강", description: "한 여성의 선택이 가져온 파장을 섬세하게 그려냅니다." },
  { genre: "자기계발", title: "타이탄의 도구들", author: "팀 페리스", description: "세계적인 성공인들의 습관과 도구를 소개합니다." },
  { genre: "심리학", title: "호모 데우스", author: "유발 하라리", description: "인류의 미래에 대한 통찰력 있는 예측을 담았습니다." },
];

export const travels: Travel[] = [
  { country: "🇯🇵 일본", place: "교토", description: "천년의 역사를 간직한 고즈넉한 도시. 전통과 현대가 조화를 이룬 아름다운 곳입니다.", attractions: ["금각사", "후시미 이나리", "기요미즈데라"] },
  { country: "🇮🇹 이탈리아", place: "베네치아", description: "물의 도시에서 곤돌라를 타고 낭만적인 시간을 보내세요.", attractions: ["산마르코 광장", "리알토 다리", "부라노 섬"] },
  { country: "🇬🇷 그리스", place: "산토리니", description: "에게해의 푸른 바다와 하얀 건물이 만드는 절경을 감상하세요.", attractions: ["이아 마을", "레드 비치", "와이너리 투어"] },
  { country: "🇫🇷 프랑스", place: "파리", description: "예술과 낭만의 도시에서 문화를 만끽하세요.", attractions: ["에펠탑", "루브르 박물관", "몽마르트 언덕"] },
  { country: "🇨🇭 스위스", place: "인터라켄", description: "알프스의 웅장한 자연을 만날 수 있는 천국 같은 곳입니다.", attractions: ["융프라우", "하더 쿨름", "브리엔츠 호수"] },
  { country: "🇪🇸 스페인", place: "바르셀로나", description: "가우디의 건축물과 지중해의 열정이 넘치는 도시입니다.", attractions: ["사그라다 파밀리아", "구엘 공원", "람블라스 거리"] },
  { country: "🇹🇭 태국", place: "치앙마이", description: "북부 타이의 문화 중심지로 사원과 자연이 아름답습니다.", attractions: ["도이수텝 사원", "나이트 바자", "코끼리 보호구역"] },
  { country: "🇦🇺 호주", place: "시드니", description: "현대적인 도시와 아름다운 해변이 공존하는 곳입니다.", attractions: ["오페라 하우스", "본다이 비치", "하버 브릿지"] },
  { country: "🇮🇸 아이슬란드", place: "레이캬비크", description: "오로라와 빙하, 온천을 즐길 수 있는 신비로운 나라입니다.", attractions: ["블루라군", "골든 서클", "요쿨살론"] },
  { country: "🇰🇷 한국", place: "제주도", description: "아름다운 자연과 독특한 문화를 가진 섬입니다.", attractions: ["성산일출봉", "한라산", "협재 해변"] },
  { country: "🇻🇳 베트남", place: "하노이", description: "천년의 역사를 가진 베트남의 수도로 활기가 넘칩니다.", attractions: ["호안끼엠 호수", "구시가지", "하롱베이"] },
  { country: "🇵🇹 포르투갈", place: "리스본", description: "언덕 위의 도시에서 노란 트램을 타고 여행을 즐기세요.", attractions: ["벨렝 탑", "알파마 지구", "상 조르제 성"] },
  { country: "🇳🇿 뉴질랜드", place: "퀸스타운", description: "모험과 자연이 가득한 남섬의 보석 같은 도시입니다.", attractions: ["밀포드 사운드", "번지점프", "와카티푸 호수"] },
  { country: "🇦🇪 UAE", place: "두바이", description: "미래 도시의 화려함과 사막의 신비를 동시에 경험하세요.", attractions: ["부르즈 칼리파", "팜 주메이라", "사막 사파리"] },
  { country: "🇲🇽 멕시코", place: "칸쿤", description: "카리브해의 에메랄드빛 바다와 마야 유적을 만나보세요.", attractions: ["치첸이트사", "툴룸 유적", "세노테"] },
];

export function getRandomItem<T>(items: T[], seed: number): T {
  const index = seed % items.length;
  return items[index];
}

// 명언 카테고리 목록
export const quoteCategories = [
  "전체", "자기계발", "인생철학", "성공", "사랑", "우정", "시간", "용기", "희망", "꿈"
];

// 명언 무드 목록
export const quoteMoods = [
  "전체", "motivational", "inspirational", "hopeful", "peaceful", "romantic", 
  "supportive", "encouraging", "reflective", "mindful", "brave", "adventurous", 
  "creative", "positive", "challenging", "educational", "practical", "resilient", 
  "authentic", "passionate", "giving", "accepting"
];

// 명언 필터링 함수들
export function filterQuotesByCategory(quotes: Quote[], category: string): Quote[] {
  if (category === "전체") return quotes;
  return quotes.filter(quote => quote.category === category);
}

export function filterQuotesByMood(quotes: Quote[], mood: string): Quote[] {
  if (mood === "전체") return quotes;
  return quotes.filter(quote => quote.mood === mood);
}

export function filterQuotesByLanguage(quotes: Quote[], language: string): Quote[] {
  if (language === "전체") return quotes;
  return quotes.filter(quote => quote.language === language);
}

export function searchQuotes(quotes: Quote[], searchTerm: string): Quote[] {
  if (!searchTerm.trim()) return quotes;
  const term = searchTerm.toLowerCase();
  return quotes.filter(quote => 
    quote.text.toLowerCase().includes(term) ||
    quote.author.toLowerCase().includes(term) ||
    quote.tags.some(tag => tag.toLowerCase().includes(term))
  );
}

export function getRandomQuoteByCategory(quotes: Quote[], category: string, seed: number): Quote {
  const filteredQuotes = filterQuotesByCategory(quotes, category);
  return getRandomItem(filteredQuotes, seed);
}

export function getRandomQuoteByMood(quotes: Quote[], mood: string, seed: number): Quote {
  const filteredQuotes = filterQuotesByMood(quotes, mood);
  return getRandomItem(filteredQuotes, seed);
}

export function generateFortune(seed: number): {
  overall: string;
  love: string;
  career: string;
  health: string;
  luckyColor: string;
  luckyNumber: number;
} {
  const fortunes = {
    overall: [
      "오늘은 행운이 가득한 하루가 될 것입니다. ✨",
      "긍정적인 에너지가 넘치는 하루입니다. 🌟",
      "작은 기회들이 찾아올 수 있으니 주의 깊게 살펴보세요. 🍀",
      "평온하고 안정적인 하루가 예상됩니다. ☁️",
      "새로운 시작에 좋은 날입니다. 🌱",
      "주변 사람들과의 관계가 더욱 돈독해질 것입니다. 💫",
      "예상치 못한 좋은 소식이 들려올 수 있습니다. 🎁",
    ],
    love: [
      "사랑하는 사람과 특별한 시간을 보낼 수 있습니다. 💕",
      "새로운 인연이 찾아올 조짐이 보입니다. 💘",
      "상대방의 마음을 이해하려 노력하면 관계가 더욱 좋아집니다. 💗",
      "솔직한 대화가 관계를 발전시킬 것입니다. 💝",
      "작은 선물이나 관심이 큰 감동을 줄 수 있습니다. 💖",
      "오해가 풀리고 서로를 더 이해하게 됩니다. 💞",
      "달콤한 순간들이 기다리고 있습니다. 💓",
    ],
    career: [
      "업무에서 좋은 성과를 낼 수 있는 날입니다. 📈",
      "동료들과의 협력이 중요합니다. 🤝",
      "새로운 프로젝트 제안에 좋은 날입니다. 💼",
      "창의적인 아이디어가 빛을 발할 것입니다. 💡",
      "상사나 선배에게 좋은 평가를 받을 수 있습니다. ⭐",
      "신중한 결정이 좋은 결과를 가져올 것입니다. 🎯",
      "노력한 만큼의 보상이 따를 것입니다. 🏆",
    ],
    health: [
      "활력이 넘치는 하루입니다. 건강 관리에 신경 쓰세요. 💪",
      "충분한 휴식이 필요한 날입니다. 🛌",
      "가벼운 운동이 기분 전환에 도움이 됩니다. 🏃‍♀️",
      "건강한 식사를 통해 컨디션을 유지하세요. 🥗",
      "스트레스 관리에 신경 쓰면 좋습니다. 🧘‍♀️",
      "물을 많이 마시고 비타민을 챙기세요. 💧",
      "긍정적인 마음가짐이 건강에 좋은 영향을 줍니다. 😊",
    ],
  };

  const colors = ["보라색", "분홍색", "파란색", "초록색", "노란색", "주황색", "하늘색"];

  return {
    overall: fortunes.overall[seed % fortunes.overall.length],
    love: fortunes.love[(seed * 2) % fortunes.love.length],
    career: fortunes.career[(seed * 3) % fortunes.career.length],
    health: fortunes.health[(seed * 5) % fortunes.health.length],
    luckyColor: colors[seed % colors.length],
    luckyNumber: (seed % 99) + 1,
  };
}
