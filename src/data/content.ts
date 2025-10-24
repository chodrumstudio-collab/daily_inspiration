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
  // 한국 여행지
  { 
    id: "1", 
    country: "🇰🇷 한국", 
    region: "제주도",
    place: "제주도", 
    description: "아름다운 자연과 독특한 문화를 가진 섬으로, 한라산과 바다가 어우러진 환상적인 풍경을 자랑합니다.", 
    attractions: ["성산일출봉", "한라산", "협재 해변", "중문관광단지", "제주 올레길"], 
    bestTime: "4월-6월, 9월-11월",
    duration: "3-5일",
    budget: "50-100만원",
    difficulty: "easy",
    category: "자연",
    tags: ["바다", "산", "올레길", "로맨틱"],
    images: ["jeju1.jpg", "jeju2.jpg"],
    coordinates: { lat: 33.4996, lng: 126.5312 },
    rating: 4.8,
    reviews: [
      { id: "1", author: "김여행", rating: 5, comment: "정말 아름다운 곳이에요! 다시 가고 싶습니다.", date: "2024-01-15", helpful: 12 },
      { id: "2", author: "박관광", rating: 4, comment: "올레길이 특히 좋았어요. 자연을 만끽할 수 있어서 좋습니다.", date: "2024-01-10", helpful: 8 }
    ]
  },
  { 
    id: "2", 
    country: "🇰🇷 한국", 
    region: "경기도",
    place: "수원 화성", 
    description: "조선시대의 대표적인 성곽으로, 유네스코 세계문화유산에 등재된 역사적 가치가 높은 곳입니다.", 
    attractions: ["화성행궁", "장안문", "팔달문", "화성성벽"], 
    bestTime: "3월-5월, 9월-11월",
    duration: "1일",
    budget: "2-5만원",
    difficulty: "easy",
    category: "역사",
    tags: ["유네스코", "성곽", "조선", "문화"],
    images: ["suwon1.jpg", "suwon2.jpg"],
    coordinates: { lat: 37.2636, lng: 127.0286 },
    rating: 4.5,
    reviews: [
      { id: "3", author: "이역사", rating: 5, comment: "역사 공부하기 좋은 곳이에요. 가이드 투어도 추천합니다.", date: "2024-01-12", helpful: 15 }
    ]
  },
  { 
    id: "3", 
    country: "🇰🇷 한국", 
    region: "강원도",
    place: "평창 알펜시아", 
    description: "2018 평창 동계올림픽의 메인 스타디움으로, 아름다운 산악 지대에 위치한 현대적인 스키 리조트입니다.", 
    attractions: ["스키장", "스노보드", "케이블카", "올림픽 스타디움"], 
    bestTime: "12월-3월",
    duration: "2-3일",
    budget: "30-80만원",
    difficulty: "medium",
    category: "스포츠",
    tags: ["스키", "올림픽", "겨울", "리조트"],
    images: ["pyeongchang1.jpg", "pyeongchang2.jpg"],
    coordinates: { lat: 37.6625, lng: 128.6778 },
    rating: 4.6,
    reviews: []
  },

  // 해외 여행지
  { 
    id: "4", 
    country: "🇯🇵 일본", 
    region: "관서",
    place: "교토", 
    description: "천년의 역사를 간직한 고즈넉한 도시로, 전통과 현대가 조화를 이룬 아름다운 곳입니다.", 
    attractions: ["금각사", "후시미 이나리", "기요미즈데라", "아라시야마", "기온"], 
    bestTime: "3월-5월, 9월-11월",
    duration: "3-4일",
    budget: "80-150만원",
    difficulty: "easy",
    category: "문화",
    tags: ["전통", "사원", "벚꽃", "단풍"],
    images: ["kyoto1.jpg", "kyoto2.jpg"],
    coordinates: { lat: 35.0116, lng: 135.7681 },
    rating: 4.9,
    reviews: [
      { id: "4", author: "일본여행러", rating: 5, comment: "정말 아름다운 도시예요. 특히 가을 단풍이 환상적입니다.", date: "2024-01-08", helpful: 20 }
    ]
  },
  { 
    id: "5", 
    country: "🇮🇹 이탈리아", 
    region: "베네토",
    place: "베네치아", 
    description: "물의 도시에서 곤돌라를 타고 낭만적인 시간을 보내세요. 유네스코 세계문화유산으로 지정된 아름다운 도시입니다.", 
    attractions: ["산마르코 광장", "리알토 다리", "부라노 섬", "두칼레 궁전", "산마르코 대성당"], 
    bestTime: "4월-6월, 9월-10월",
    duration: "2-3일",
    budget: "150-300만원",
    difficulty: "medium",
    category: "문화",
    tags: ["곤돌라", "유네스코", "낭만", "예술"],
    images: ["venice1.jpg", "venice2.jpg"],
    coordinates: { lat: 45.4408, lng: 12.3155 },
    rating: 4.7,
    reviews: []
  },
  { 
    id: "6", 
    country: "🇬🇷 그리스", 
    region: "키클라데스",
    place: "산토리니", 
    description: "에게해의 푸른 바다와 하얀 건물이 만드는 절경을 감상하세요. 세계에서 가장 아름다운 섬 중 하나입니다.", 
    attractions: ["이아 마을", "레드 비치", "와이너리 투어", "카마리 해변", "피라 마을"], 
    bestTime: "5월-9월",
    duration: "3-4일",
    budget: "200-400만원",
    difficulty: "easy",
    category: "자연",
    tags: ["섬", "해변", "일몰", "로맨틱"],
    images: ["santorini1.jpg", "santorini2.jpg"],
    coordinates: { lat: 36.3932, lng: 25.4615 },
    rating: 4.8,
    reviews: []
  },
  { 
    id: "7", 
    country: "🇫🇷 프랑스", 
    region: "일드프랑스",
    place: "파리", 
    description: "예술과 낭만의 도시에서 문화를 만끽하세요. 세계에서 가장 아름다운 도시 중 하나로 꼽힙니다.", 
    attractions: ["에펠탑", "루브르 박물관", "몽마르트 언덕", "노트르담", "샹젤리제"], 
    bestTime: "4월-6월, 9월-10월",
    duration: "4-5일",
    budget: "200-500만원",
    difficulty: "medium",
    category: "문화",
    tags: ["예술", "낭만", "미술관", "패션"],
    images: ["paris1.jpg", "paris2.jpg"],
    coordinates: { lat: 48.8566, lng: 2.3522 },
    rating: 4.9,
    reviews: []
  },
  { 
    id: "8", 
    country: "🇨🇭 스위스", 
    region: "베른주",
    place: "인터라켄", 
    description: "알프스의 웅장한 자연을 만날 수 있는 천국 같은 곳입니다. 스위스의 대표적인 관광지입니다.", 
    attractions: ["융프라우", "하더 쿨름", "브리엔츠 호수", "스키장", "케이블카"], 
    bestTime: "6월-9월, 12월-3월",
    duration: "3-4일",
    budget: "300-600만원",
    difficulty: "medium",
    category: "자연",
    tags: ["알프스", "스키", "산", "호수"],
    images: ["interlaken1.jpg", "interlaken2.jpg"],
    coordinates: { lat: 46.6863, lng: 7.8632 },
    rating: 4.8,
    reviews: []
  },
  { 
    id: "9", 
    country: "🇪🇸 스페인", 
    region: "카탈루냐",
    place: "바르셀로나", 
    description: "가우디의 건축물과 지중해의 열정이 넘치는 도시입니다. 예술과 문화의 중심지입니다.", 
    attractions: ["사그라다 파밀리아", "구엘 공원", "람블라스 거리", "카사 바틸로", "캄프 누"], 
    bestTime: "4월-6월, 9월-10월",
    duration: "3-4일",
    budget: "150-300만원",
    difficulty: "easy",
    category: "문화",
    tags: ["가우디", "예술", "축구", "지중해"],
    images: ["barcelona1.jpg", "barcelona2.jpg"],
    coordinates: { lat: 41.3851, lng: 2.1734 },
    rating: 4.7,
    reviews: []
  },
  { 
    id: "10", 
    country: "🇹🇭 태국", 
    region: "치앙마이",
    place: "치앙마이", 
    description: "북부 타이의 문화 중심지로 사원과 자연이 아름답습니다. 전통과 현대가 조화를 이룬 도시입니다.", 
    attractions: ["도이수텝 사원", "나이트 바자", "코끼리 보호구역", "치앙마이 구시가지", "와트 프라 싱"], 
    bestTime: "11월-2월",
    duration: "3-4일",
    budget: "50-100만원",
    difficulty: "easy",
    category: "문화",
    tags: ["사원", "시장", "코끼리", "전통"],
    images: ["chiangmai1.jpg", "chiangmai2.jpg"],
    coordinates: { lat: 18.7883, lng: 98.9853 },
    rating: 4.6,
    reviews: []
  }
];

export const travelGuides: TravelGuide[] = [
  {
    id: "1",
    title: "제주도 완벽 가이드: 3박 4일 코스",
    content: "제주도 여행의 모든 것을 담은 완벽한 가이드입니다. 성산일출봉에서 일출을 보고, 한라산에서 등산을 즐기며, 협재 해변에서 휴식을 취하는 등 제주도의 매력을 모두 경험할 수 있는 코스를 소개합니다.",
    category: "여행 코스",
    tags: ["제주도", "3박4일", "일출", "등산", "해변"],
    author: "제주여행러",
    createdAt: "2024-01-15",
    views: 1250,
    helpful: 89
  },
  {
    id: "2",
    title: "일본 교토 벚꽃 시즌 완벽 가이드",
    content: "교토의 벚꽃 명소와 시즌별 정보를 담은 가이드입니다. 기요미즈데라, 아라시야마, 후시미 이나리 등 교토의 대표적인 벚꽃 명소들을 시간대별로 정리했습니다.",
    category: "시즌 가이드",
    tags: ["교토", "벚꽃", "봄", "사원", "일본"],
    author: "일본여행러",
    createdAt: "2024-01-10",
    views: 980,
    helpful: 67
  },
  {
    id: "3",
    title: "유럽 배낭여행 초보자를 위한 완벽 가이드",
    content: "유럽 배낭여행을 처음 계획하는 분들을 위한 상세한 가이드입니다. 비자, 숙소, 교통편, 예산 등 모든 것을 체계적으로 정리했습니다.",
    category: "배낭여행",
    tags: ["유럽", "배낭여행", "초보자", "비자", "예산"],
    author: "유럽여행러",
    createdAt: "2024-01-08",
    views: 2100,
    helpful: 156
  }
];

export function getRandomItem<T>(items: T[], seed: number): T {
  if (!items || items.length === 0) {
    return {} as T;
  }
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
  if (!quotes || quotes.length === 0) return [];
  if (category === "전체") return quotes;
  return quotes.filter(quote => quote?.category === category);
}

export function filterQuotesByMood(quotes: Quote[], mood: string): Quote[] {
  if (!quotes || quotes.length === 0) return [];
  if (mood === "전체") return quotes;
  return quotes.filter(quote => quote?.mood === mood);
}

export function filterQuotesByLanguage(quotes: Quote[], language: string): Quote[] {
  if (!quotes || quotes.length === 0) return [];
  if (language === "전체") return quotes;
  return quotes.filter(quote => quote?.language === language);
}

export function searchQuotes(quotes: Quote[], searchTerm: string): Quote[] {
  if (!quotes || quotes.length === 0) return [];
  if (!searchTerm.trim()) return quotes;
  const term = searchTerm.toLowerCase();
  return quotes.filter(quote => 
    quote?.text?.toLowerCase().includes(term) ||
    quote?.author?.toLowerCase().includes(term) ||
    quote?.tags?.some(tag => tag.toLowerCase().includes(term))
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
    overall: fortunes.overall[seed % fortunes.overall.length] || "오늘은 평범한 하루입니다.",
    love: fortunes.love[(seed * 2) % fortunes.love.length] || "사랑하는 사람과 좋은 시간을 보내세요.",
    career: fortunes.career[(seed * 3) % fortunes.career.length] || "업무에 집중하세요.",
    health: fortunes.health[(seed * 5) % fortunes.health.length] || "건강 관리에 신경 쓰세요.",
    luckyColor: colors[seed % colors.length] || "파란색",
    luckyNumber: (seed % 99) + 1,
  };
}
