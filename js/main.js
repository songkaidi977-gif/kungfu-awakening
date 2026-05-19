// ==================== Hero Animation Replay ====================
const heroTitleWrap = document.getElementById('heroTitleWrap');
const navbar = document.getElementById('navbar');
const heroAnimatedEls = document.querySelectorAll('.hero-title-main, .hero-title-accent, .hero-title-line, .hero-title-sub, .hero-scroll-hint');
let heroWasOffScreen = false;

function restartHeroAnimation() {
  heroAnimatedEls.forEach(el => {
    el.style.animation = 'none';
    void el.offsetWidth;
    el.style.animation = '';
  });
}

// Nav visibility + animation replay on scroll
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const viewH = window.innerHeight;

  // Nav: show only when scrolled past 60% of hero
  navbar.classList.toggle('visible', scrollY > viewH * 0.6);

  // Track if hero was off screen
  if (scrollY > viewH * 0.5) {
    heroWasOffScreen = true;
  }

  // Replay animation when scrolling back to top
  if (scrollY < 5 && heroWasOffScreen) {
    restartHeroAnimation();
    heroWasOffScreen = false;
  }
}, { passive: true });

// ==================== i18n Translation System ====================
const translations = {
  en: {
    // Nav
    'nav.services': 'Services',
    'nav.process': 'How It Works',
    'nav.packages': 'Packages',
    'nav.gallery': 'Gallery',
    'nav.faq': 'FAQ',
    'nav.contact': 'Get Started',
    // Hero
    'hero.badge': 'Based in Dengfeng, Henan — Home of Shaolin',
    'hero.title': 'Kung Fu <span class="text-gold">Awakening</span>',
    'hero.subtitle': 'Your all-in-one journey to Shaolin Temple. Visa guidance, airport pickup, local guiding, kung fu school enrollment — we handle everything so you can focus on the experience.',
    'hero.cta1': 'Plan My Trip',
    'hero.cta2': 'See How It Works',
    'hero.stat1': 'Travelers Served',
    'hero.stat2': 'Partner Schools',
    'hero.stat3': 'Local Support',
    'hero.scroll': 'Scroll Down',
    // Services
    'services.tag': 'What We Do',
    'services.title': 'One Platform, Everything You Need',
    'services.desc': 'Stop juggling between travel agencies, guides, and school websites. We bring it all together.',
    'services.s1title': 'Visa Guidance',
    'services.s1desc': 'We provide invitation letters and step-by-step guidance to help you get your Chinese tourist or student visa — fast and hassle-free.',
    'services.s2title': 'Airport Pickup',
    'services.s2desc': 'We meet you at Zhengzhou (CGO) or Luoyang airport and drive you directly to Dengfeng. No confusing transfers, no stress.',
    'services.s3title': 'Local Guide & Tour',
    'services.s3desc': 'English-speaking local guide takes you deep into Shaolin Temple, Pagoda Forest, and hidden spots that tourists miss.',
    'services.s4title': 'Kung Fu School Enrollment',
    'services.s4desc': 'From 1-week trials to 6-month programs — we match you with the right school and handle enrollment. Short-term or long-term, your choice.',
    'services.s5title': 'Accommodation',
    'services.s5desc': 'Curated hotels and local guesthouses near Shaolin Temple. We book the best options for your budget.',
    'services.s6title': 'Content Creation',
    'services.s6desc': 'We capture your journey on video — training highlights, temple visits, cultural moments. Perfect for your social media or personal memory.',
    // Process
    'process.tag': 'Process',
    'process.title': 'From Your Screen to Shaolin in 4 Steps',
    'process.step1title': 'Reach Out',
    'process.step1desc': 'Contact us via WhatsApp, email, or the form below. Tell us your interests — tour, training, or both — and your preferred dates.',
    'process.step2title': 'Get Your Plan',
    'process.step2desc': 'We design a personalized itinerary and send you a clear quote. Once confirmed, we help with visa invitation letters.',
    'process.step3title': 'Arrive in China',
    'process.step3desc': 'We pick you up at the airport and bring you to Dengfeng. Your local guide is with you from day one.',
    'process.step4title': 'Live the Experience',
    'process.step4desc': 'Explore Shaolin Temple, train with real monks, learn kung fu, and immerse in Chinese culture. We capture it all on video.',
    // Packages
    'packages.tag': 'Packages',
    'packages.title': 'Choose Your Shaolin Journey',
    'packages.desc': 'All packages include airport pickup, local SIM help, and 24/7 local support.',
    'packages.badge': 'Most Popular',
    'packages.p1name': 'Explorer',
    'packages.p1dur': '3 Days / 2 Nights',
    'packages.p1l1': 'Airport pickup & drop-off',
    'packages.p1l2': 'Boutique hotel (2 nights)',
    'packages.p1l3': 'Shaolin Temple guided tour',
    'packages.p1l4': '1 kung fu class experience',
    'packages.p1l5': 'Local food tour',
    'packages.p1l6': 'Video highlights reel',
    'packages.p2name': 'Warrior',
    'packages.p2dur': '7 Days / 6 Nights',
    'packages.p2l1': 'Everything in Explorer',
    'packages.p2l2': 'Hotel (6 nights)',
    'packages.p2l3': 'Daily kung fu training',
    'packages.p2l4': 'Wushu school visits (3 schools)',
    'packages.p2l5': 'Zen meditation session',
    'packages.p2l6': 'Song Mountain hike',
    'packages.p2l7': 'Full video documentary',
    'packages.p3name': 'Scholar',
    'packages.p3dur': '1–6 Months',
    'packages.p3price': 'From',
    'packages.p3l1': 'Airport pickup',
    'packages.p3l2': 'Kung fu school enrollment',
    'packages.p3l3': 'Dormitory accommodation',
    'packages.p3l4': 'Daily training (5-6 hours)',
    'packages.p3l5': 'Chinese language classes',
    'packages.p3l6': 'Cultural excursions',
    'packages.p3l7': 'Monthly video updates',
    'packages.cta': 'Inquire Now',
    // Gallery
    'gallery.tag': 'Moments',
    'gallery.title': 'Experience Kung Fu Awakening',
    'gallery.desc': 'Real moments from our guests — training, exploring, and living the Shaolin life.',
    // Why Us
    'why.tag': 'Why Kung Fu Awakening',
    'why.title': "We're Not a Travel Agency. We're Your Local Friends.",
    'why.desc': 'Big platforms give you a ticket and a brochure. We give you a real person in Dengfeng who knows every corner, speaks English, and makes things happen when plans change.',
    'why.p1title': 'Actually local',
    'why.p1desc': 'We live in Dengfeng, right next to Shaolin Temple. Not a remote call center.',
    'why.p2title': 'Direct school access',
    'why.p2desc': 'We work directly with partner schools. No middlemen, no inflated prices.',
    'why.p3title': 'Content included',
    'why.p3desc': 'We film your journey and give you the footage. Build your social media while you train.',
    'why.p4title': 'No hidden fees',
    'why.p4desc': 'Transparent pricing. You pay for what you choose, nothing else.',
    // Social
    'social.tag': 'Follow Our Journey',
    'social.title': 'See Shaolin Through Our Eyes',
    'social.desc': 'We share daily life around Shaolin Temple and real experiences from our guests on social media.',
    'social.tiktok': 'Daily Shaolin shorts',
    'social.youtube': 'Full experience vlogs',
    'social.instagram': 'Photo stories & Reels',
    'social.whatsapp': 'Chat with us directly',
    // FAQ
    'faq.tag': 'FAQ',
    'faq.title': 'Questions You Might Have',
    'faq.q1': 'Do I need prior kung fu experience?',
    'faq.a1': 'Not at all. Our partner schools welcome complete beginners and will match training to your level. Many of our guests have never thrown a punch before arriving.',
    'faq.q2': 'Can you really help with the visa?',
    'faq.a2': 'We provide official invitation letters from our partner schools, which is the key document you need for a Chinese tourist (L) or student (X2) visa. We\'ll guide you through the entire application process step by step.',
    'faq.q3': 'Is Dengfeng safe for foreigners?',
    'faq.a3': 'Absolutely. Dengfeng is a small, peaceful city with a strong martial arts culture. We\'re with you throughout your stay, and our team is available 24/7 for anything you need.',
    'faq.q4': 'How much does it cost?',
    'faq.a4': 'Our Explorer package is $399 USD (3 days all-inclusive), Warrior is $899 (7 days), and the Scholar long-term program starts at $1,299/month. All pricing is transparent — contact us for a personalized quote with no obligation.',
    'faq.q5': 'What if I want to mix training with sightseeing?',
    'faq.a5': 'That\'s exactly what we specialize in. We\'ll build a custom schedule — train in the morning, explore temples and mountains in the afternoon. Your trip, your pace.',
    'faq.q6': 'Do you speak English?',
    'faq.a6': 'Yes! Our team speaks English and Chinese. You\'ll have no language barrier from the moment you land to the moment you leave.',
    // Contact
    'contact.tag': 'Get Started',
    'contact.title': 'Ready to Experience Shaolin?',
    'contact.desc': 'Fill out the form and we\'ll get back to you within 24 hours with a personalized plan. No strings attached.',
    'contact.location': 'Location',
    // Form
    'form.name': 'Name *',
    'form.namePh': 'Your full name',
    'form.email': 'Email *',
    'form.emailPh': 'your@email.com',
    'form.package': 'Interested In',
    'form.select': 'Select a package...',
    'form.custom': 'Custom / Not Sure',
    'form.message': 'Tell Us About Your Trip',
    'form.messagePh': 'When do you want to come? What are you most excited about? Any questions?',
    'form.submit': 'Send Inquiry',
    'form.note': 'We\'ll reply within 24 hours. Zero spam, zero pressure.',
    // Footer
    'footer.desc': 'Your all-in-one platform for Shaolin Temple visits, kung fu training, and local experiences in Dengfeng, China.',
    'footer.quick': 'Quick Links',
    'footer.follow': 'Follow Us'
  },

  zh: {
    'nav.services': '服务项目',
    'nav.process': '预订流程',
    'nav.packages': '套餐价格',
    'nav.gallery': '精彩瞬间',
    'nav.faq': '常见问题',
    'nav.contact': '立即咨询',
    'hero.badge': '中国·河南·登封 — 少林寺所在地',
    'hero.title': '功夫<span class="text-gold">觉醒</span>',
    'hero.subtitle': '一站式少林之旅。从签证指导、机场接机、本地向导、少林寺游览到武术学校入学——我们全包办，你只需专注体验。',
    'hero.cta1': '规划我的旅程',
    'hero.cta2': '了解流程',
    'hero.stat1': '已服务旅客',
    'hero.stat2': '合作武校',
    'hero.stat3': '本地支持',
    'hero.scroll': '向下滑动',
    'services.tag': '我们的服务',
    'services.title': '一个平台，满足所有需求',
    'services.desc': '不用再在旅行社、导游和学校网站之间来回切换。我们一站式搞定。',
    'services.s1title': '签证指导',
    'services.s1desc': '我们提供邀请函和分步指导，帮助你顺利获得中国旅游签证或学生签证——快速又省心。',
    'services.s2title': '机场接机',
    'services.s2desc': '我们在郑州新郑机场或洛阳机场接你，直接送达登封。无需复杂换乘，无压力。',
    'services.s3title': '本地导游服务',
    'services.s3desc': '英语导游带你深度游览少林寺、塔林和游客不知道的隐秘角落。',
    'services.s4title': '武术学校入学',
    'services.s4desc': '从一周体验到六个月长期项目——我们帮你匹配最合适的学校，办理入学手续。短期或长期任你选。',
    'services.s5title': '住宿安排',
    'services.s5desc': '精选少林寺周边的酒店和民宿。我们帮你预订性价比最高的住宿。',
    'services.s6title': '内容创作',
    'services.s6desc': '我们用视频记录你的旅程——训练精彩片段、寺庙参观、文化体验。适合你的社交媒体或个人留念。',
    'process.tag': '流程',
    'process.title': '四步抵达少林',
    'process.step1title': '联系我们',
    'process.step1desc': '通过微信、邮件或下方表单联系我们。告诉我们你的兴趣——游览、训练或两者兼顾——以及你的日期。',
    'process.step2title': '获取方案',
    'process.step2desc': '我们为你设计个性化行程并发送清晰报价。确认后，我们帮你办理签证邀请函。',
    'process.step3title': '抵达中国',
    'process.step3desc': '我们在机场接你，直接送达登封。从第一天起，本地导游全程陪伴。',
    'process.step4title': '体验开始',
    'process.step4desc': '探索少林寺、与真正的武僧一起训练、学习功夫、沉浸在中国文化中。我们用视频记录一切。',
    'packages.tag': '套餐',
    'packages.title': '选择你的少林之旅',
    'packages.desc': '所有套餐包含机场接送、本地SIM卡协助和24/7本地支持。',
    'packages.badge': '最受欢迎',
    'packages.p1name': '探索者',
    'packages.p1dur': '3天 / 2晚',
    'packages.p1l1': '机场接送',
    'packages.p1l2': '精品酒店（2晚）',
    'packages.p1l3': '少林寺导览',
    'packages.p1l4': '1次功夫课体验',
    'packages.p1l5': '本地美食之旅',
    'packages.p1l6': '精彩视频集锦',
    'packages.p2name': '武者',
    'packages.p2dur': '7天 / 6晚',
    'packages.p2l1': '探索者套餐全部内容',
    'packages.p2l2': '酒店（6晚）',
    'packages.p2l3': '每日功夫训练',
    'packages.p2l4': '武术学校参观（3所）',
    'packages.p2l5': '禅修体验',
    'packages.p2l6': '嵩山徒步',
    'packages.p2l7': '完整纪录片',
    'packages.p3name': '学者',
    'packages.p3dur': '1–6个月',
    'packages.p3price': '起价',
    'packages.p3l1': '机场接机',
    'packages.p3l2': '武校入学办理',
    'packages.p3l3': '宿舍住宿',
    'packages.p3l4': '每日训练（5-6小时）',
    'packages.p3l5': '中文课程',
    'packages.p3l6': '文化游览',
    'packages.p3l7': '月度视频更新',
    'packages.cta': '立即咨询',
    'gallery.tag': '精彩瞬间',
    'gallery.title': '体验功夫觉醒',
    'gallery.desc': '来自我们客人的真实瞬间——训练、探索、体验少林生活。',
    'why.tag': '为什么选择功夫觉醒',
    'why.title': '我们不是旅行社，我们是你的本地朋友。',
    'why.desc': '大平台给你一张票和一本宣传册。我们给你一个住在登封、熟悉每个角落、会说英语、能随机应变的真人朋友。',
    'why.p1title': '真正的本地人',
    'why.p1desc': '我们住在登封，就在少林寺旁边。不是远程客服中心。',
    'why.p2title': '直接对接学校',
    'why.p2desc': '我们直接与合作武校对接。没有中间商，没有虚高价格。',
    'why.p3title': '包含内容创作',
    'why.p3desc': '我们拍摄你的旅程，把视频给你。边训练边打造你的社交媒体。',
    'why.p4title': '无隐藏费用',
    'why.p4desc': '价格透明。你只为选择的服务付费，别无其他。',
    'social.tag': '关注我们的旅程',
    'social.title': '通过我们的眼睛看少林',
    'social.desc': '我们在社交媒体上分享少林寺周边的日常生活和客人的真实体验。',
    'social.tiktok': '每日少林短视频',
    'social.youtube': '完整体验视频',
    'social.instagram': '照片故事和Reels',
    'social.whatsapp': '直接联系我们',
    'faq.tag': '常见问题',
    'faq.title': '你可能想问的问题',
    'faq.q1': '我需要有功夫基础吗？',
    'faq.a1': '完全不需要。我们的合作学校欢迎零基础学员，会根据你的水平调整训练。很多客人来之前从未出过拳。',
    'faq.q2': '你真的能帮忙办签证吗？',
    'faq.a2': '我们提供合作学校的正式邀请函，这是申请中国旅游签证（L签）或学生签证（X2签）的关键材料。我们会一步步指导你完成整个申请流程。',
    'faq.q3': '登封对外国人安全吗？',
    'faq.a3': '绝对安全。登封是一个充满武术文化的小城市，治安良好。我们全程陪同，团队24小时待命。',
    'faq.q4': '费用是多少？',
    'faq.a4': '探索者套餐$399美元（3天全包），武者套餐$899（7天），学者长期项目起价$1,299/月。所有价格透明——联系我们获取个性化报价，无任何压力。',
    'faq.q5': '如果我想把训练和观光结合起来呢？',
    'faq.a5': '这正是我们的专长。我们会制定定制日程——上午训练，下午探索寺庙和山水。你的旅程，你的节奏。',
    'faq.q6': '你们会说英语吗？',
    'faq.a6': '是的！我们的团队会说英语和中文。从你落地那一刻到你离开，没有任何语言障碍。',
    'contact.tag': '开始旅程',
    'contact.title': '准备好体验少林了吗？',
    'contact.desc': '填写表单，我们会在24小时内回复你的个性化方案。无需任何承诺。',
    'contact.location': '地点',
    'form.name': '姓名 *',
    'form.namePh': '请输入你的全名',
    'form.email': '邮箱 *',
    'form.emailPh': '你的邮箱地址',
    'form.package': '感兴趣的套餐',
    'form.select': '请选择套餐...',
    'form.custom': '自定义 / 不确定',
    'form.message': '告诉我们你的旅行计划',
    'form.messagePh': '你打算什么时候来？最期待什么？有什么问题吗？',
    'form.submit': '发送咨询',
    'form.note': '我们会在24小时内回复。零垃圾邮件，零压力。',
    'footer.desc': '少林寺游览、功夫训练和登封本地体验的一站式平台。',
    'footer.quick': '快速链接',
    'footer.follow': '关注我们'
  },

  ko: {
    'nav.services': '서비스',
    'nav.process': '진행 절차',
    'nav.packages': '패키지',
    'nav.gallery': '갤러리',
    'nav.faq': '자주 묻는 질문',
    'nav.contact': '문의하기',
    'hero.badge': '중국 허난성 덩펑 — 소림사의 고향',
    'hero.title': '쿵푸 <span class="text-gold">어웨이크닝</span>',
    'hero.subtitle': '소림사로의 올인원 여정. 비자 안내, 공항 픽업, 현지 가이드, 소림사 투어, 쿵푸 학교 입학까지 — 우리가 모든 것을 처리하니 당신은 경험에만 집중하세요.',
    'hero.cta1': '여행 계획하기',
    'hero.cta2': '진행 절차 보기',
    'hero.stat1': '방문객',
    'hero.stat2': '제휴 학교',
    'hero.stat3': '현지 지원',
    'hero.scroll': '스크롤 다운',
    'services.tag': '서비스',
    'services.title': '하나의 플랫폼, 필요한 모든 것',
    'services.desc': '여행사, 가이드, 학교 웹사이트를 전전하지 마세요. 우리가 모두 통합했습니다.',
    'services.s1title': '비자 안내',
    'services.s1desc': '초청장과 단계별 안내를 제공하여 중국 관광비자 또는 학생비자를 빠르고 쉽게 받을 수 있도록 도와드립니다.',
    'services.s2title': '공항 픽업',
    'services.s2desc': '정저우 또는 뤄양 공항에서 만나 덩펑까지 직접 모셔다 드립니다. 복잡한 환승도, 스트레스도 없습니다.',
    'services.s3title': '현지 가이드 & 투어',
    'services.s3desc': '영어 가이드가 소림사, 탑림, 관광객이 놓치는 숨은 명소까지 깊이 있게 안내합니다.',
    'services.s4title': '쿵푸 학교 입학',
    'services.s4desc': '1주 체험부터 6개월 장기 과정까지 — 적합한 학교를 찾아 입학 절차를 처리해 드립니다.',
    'services.s5title': '숙박',
    'services.s5desc': '소림사 근처의 엄선된 호텔과 게스트하우스. 예산에 맞는 최적의 옵션을 예약해 드립니다.',
    'services.s6title': '콘텐츠 제작',
    'services.s6desc': '훈련 하이라이트, 사원 방문, 문화 체험 등 여정을 영상으로 담아드립니다.',
    'process.tag': '절차',
    'process.title': '4단계로 소림사에 도착',
    'process.step1title': '문의하기',
    'process.step1desc': 'WhatsApp, 이메일 또는 아래 양식으로 연락 주세요. 관심사 — 투어, 훈련 또는 둘 다 — 와 희망 날짜를 알려주세요.',
    'process.step2title': '계획 받기',
    'process.step2desc': '맞춤 일정과 명확한 견적을 보내드립니다. 확정 후 비자 초청장을 도와드립니다.',
    'process.step3title': '중국 도착',
    'process.step3desc': '공항에서 만나 덩펑으로 모십니다. 첫날부터 현지 가이드가 함께합니다.',
    'process.step4title': '경험하기',
    'process.step4desc': '소림사를 탐험하고, 진짜 승려와 훈련하며, 쿵푸를 배우고, 중국 문화에 빠져보세요.',
    'packages.tag': '패키지',
    'packages.title': '당신의 소림 여정을 선택하세요',
    'packages.desc': '모든 패키지에는 공항 픽업, 현지 SIM 지원, 24/7 현지 지원이 포함됩니다.',
    'packages.badge': '가장 인기',
    'packages.p1name': '탐험가',
    'packages.p1dur': '3일 / 2박',
    'packages.p1l1': '공항 픽업 및 드롭오프',
    'packages.p1l2': '부티크 호텔 (2박)',
    'packages.p1l3': '소림사 가이드 투어',
    'packages.p1l4': '쿵푸 수업 1회 체험',
    'packages.p1l5': '현지 음식 투어',
    'packages.p1l6': '하이라이트 영상',
    'packages.p2name': '무사',
    'packages.p2dur': '7일 / 6박',
    'packages.p2l1': '탐험가 패키지 모두 포함',
    'packages.p2l2': '호텔 (6박)',
    'packages.p2l3': '매일 쿵푸 훈련',
    'packages.p2l4': '무술 학교 방문 (3곳)',
    'packages.p2l5': '선 명상 세션',
    'packages.p2l6': '숭산 하이킹',
    'packages.p2l7': '풀 영상 다큐멘터리',
    'packages.p3name': '학자',
    'packages.p3dur': '1–6개월',
    'packages.p3price': '부터',
    'packages.p3l1': '공항 픽업',
    'packages.p3l2': '쿵푸 학교 입학',
    'packages.p3l3': '기숙사 숙박',
    'packages.p3l4': '매일 훈련 (5-6시간)',
    'packages.p3l5': '중국어 수업',
    'packages.p3l6': '문화 탐방',
    'packages.p3l7': '월간 영상 업데이트',
    'packages.cta': '문의하기',
    'gallery.tag': '순간들',
    'gallery.title': '쿵푸 어웨이크닝 체험',
    'gallery.desc': '게스트들의 실제 순간 — 훈련, 탐험, 소림 생활.',
    'why.tag': '왜 쿵푸 어웨이크닝인가',
    'why.title': '우리는 여행사가 아닙니다. 현지 친구입니다.',
    'why.desc': '대형 플랫폼은 티켓과 브로셔를 줍니다. 우리는 덩펑에 살며 모든 구석을 알고 영어를 구사하는 실제 사람을 제공합니다.',
    'why.p1title': '진짜 현지인',
    'why.p1desc': '우리는 덩펑, 소림사 바로 옆에 삽니다. 원격 콜센터가 아닙니다.',
    'why.p2title': '직접 학교 연결',
    'why.p2desc': '제휴 학교와 직접 협력합니다. 중간 유통업체도, 부풀려진 가격도 없습니다.',
    'why.p3title': '콘텐츠 제작 포함',
    'why.p3desc': '여정을 촬영해 영상을 드립니다. 훈련하면서 소셜 미디어를 만드세요.',
    'why.p4title': '숨은 비용 없음',
    'why.p4desc': '투명한 가격. 선택한 것만 지불하면 됩니다.',
    'social.tag': '우리의 여정을 따라오세요',
    'social.title': '우리의 눈으로 소림사를 보다',
    'social.desc': '소셜 미디어에서 소림사 주변 일상과 게스트들의 실제 경험을 공유합니다.',
    'social.tiktok': '매일 소림 쇼츠',
    'social.youtube': '풀 체험 브이로그',
    'social.instagram': '사진 스토리 & 릴스',
    'social.whatsapp': '직접 채팅하기',
    'faq.tag': '자주 묻는 질문',
    'faq.title': '궁금하실 만한 질문들',
    'faq.q1': '쿵푸 경험이 필요한가요?',
    'faq.a1': '전혀 필요 없습니다. 제휴 학교는 완전 초보자를 환영하며 수준에 맞게 훈련을 조정합니다.',
    'faq.q2': '비자를 정말 도와줄 수 있나요?',
    'faq.a2': '제휴 학교의 공식 초청장을 제공합니다 — 중국 관광비자(L) 또는 학생비자(X2)의 핵심 서류입니다. 전체 신청 과정을 단계별로 안내해 드립니다.',
    'faq.q3': '덩펑은 외국인에게 안전한가요?',
    'faq.a3': '매우 안전합니다. 덩펑은 강한 무술 문화를 가진 작고 평화로운 도시입니다. 체류 기간 내내 함께하며 24시간 대기합니다.',
    'faq.q4': '비용은 얼마인가요?',
    'faq.a4': '탐험가 패키지 $399 (3일 올인클루시브), 무사 패키지 $899 (7일), 학자 장기 프로그램 $1,299/월부터. 모든 가격은 투명합니다 — 부담 없는 맞춤 견적을 문의하세요.',
    'faq.q5': '훈련과 관광을 섞고 싶으면?',
    'faq.a5': '바로 그게 우리의 전문 분야입니다. 오전에는 훈련, 오후에는 사원과 산을 탐험하는 맞춤 일정을 만들어 드립니다.',
    'faq.q6': '영어로 소통 가능한가요?',
    'faq.a6': '네! 우리 팀은 영어와 중국어를 구사합니다. 착륙 순간부터 떠날 때까지 언어 장벽이 없습니다.',
    'contact.tag': '시작하기',
    'contact.title': '소림사를 경험할 준비가 되셨나요?',
    'contact.desc': '양식을 작성하시면 24시간 내에 맞춤 계획으로 답변 드립니다. 어떤 의무도 없습니다.',
    'contact.location': '위치',
    'form.name': '이름 *',
    'form.namePh': '전체 이름',
    'form.email': '이메일 *',
    'form.emailPh': '이메일 주소',
    'form.package': '관심 패키지',
    'form.select': '패키지 선택...',
    'form.custom': '맞춤 / 잘 모르겠음',
    'form.message': '여행에 대해 알려주세요',
    'form.messagePh': '언제 오고 싶으신가요? 가장 기대되는 것은? 질문이 있으신가요?',
    'form.submit': '문의 보내기',
    'form.note': '24시간 이내에 답변 드립니다. 스팸 없음, 부담 없음.',
    'footer.desc': '소림사 방문, 쿵푸 훈련, 덩펑 현지 체험을 위한 올인원 플랫폼.',
    'footer.quick': '빠른 링크',
    'footer.follow': '팔로우'
  },

  ru: {
    'nav.services': 'Услуги',
    'nav.process': 'Процесс',
    'nav.packages': 'Пакеты',
    'nav.gallery': 'Галерея',
    'nav.faq': 'Вопросы',
    'nav.contact': 'Начать',
    'hero.badge': 'Дэнфэн, Хэнань — Родина Шаолиня',
    'hero.title': 'Кунг-фу <span class="text-gold">Пробуждение</span>',
    'hero.subtitle': 'Ваше универсальное путешествие в Шаолинь. Визовая поддержка, встреча в аэропорту, местный гид, тур по Шаолиню, зачисление в школу кунг-фу — мы берём всё на себя.',
    'hero.cta1': 'Спланировать поездку',
    'hero.cta2': 'Как это работает',
    'hero.stat1': 'Путешественников',
    'hero.stat2': 'Школ-партнёров',
    'hero.stat3': 'Поддержка 24/7',
    'hero.scroll': 'Скролл вниз',
    'services.tag': 'Услуги',
    'services.title': 'Одна платформа — всё, что нужно',
    'services.desc': 'Хватит метаться между агентствами, гидами и сайтами школ. Мы объединили всё.',
    'services.s1title': 'Визовая поддержка',
    'services.s1desc': 'Предоставляем пригласительные письма и пошаговые инструкции для получения туристической или студенческой визы — быстро и без хлопот.',
    'services.s2title': 'Встреча в аэропорту',
    'services.s2desc': 'Встречаем в аэропорту Чжэнчжоу или Лояна и везём прямо в Дэнфэн. Без путаницы и стресса.',
    'services.s3title': 'Местный гид и тур',
    'services.s3desc': 'Англоговорящий гид проведёт вас по Шаолиню, Лесу Пагод и скрытым местам.',
    'services.s4title': 'Зачисление в школу кунг-фу',
    'services.s4desc': 'От недельных проб до 6-месячных программ — подберём подходящую школу и оформим зачисление.',
    'services.s5title': 'Проживание',
    'services.s5desc': 'Отобранные отели и гостевые дома рядом с Шаолинем. Бронируем лучшие варианты под ваш бюджет.',
    'services.s6title': 'Создание контента',
    'services.s6desc': 'Снимаем ваше путешествие на видео — тренировки, визиты в храм, культурные моменты.',
    'process.tag': 'Процесс',
    'process.title': 'От экрана до Шаолиня за 4 шага',
    'process.step1title': 'Свяжитесь с нами',
    'process.step1desc': 'Напишите через WhatsApp, email или форму ниже. Расскажите о ваших интересах и желаемых датах.',
    'process.step2title': 'Получите план',
    'process.step2desc': 'Разработаем персональный маршрут и отправим чёткую смету. После подтверждения поможем с визой.',
    'process.step3title': 'Прибытие в Китай',
    'process.step3desc': 'Встречаем в аэропорту и везём в Дэнфэн. Ваш гид с вами с первого дня.',
    'process.step4title': 'Проживите опыт',
    'process.step4desc': 'Исследуйте Шаолинь, тренируйтесь с монахами, изучайте кунг-фу и погрузитесь в китайскую культуру.',
    'packages.tag': 'Пакеты',
    'packages.title': 'Выберите своё шаолиньское путешествие',
    'packages.desc': 'Все пакеты включают трансфер из аэропорта, помощь с SIM-картой и поддержку 24/7.',
    'packages.badge': 'Самый популярный',
    'packages.p1name': 'Исследователь',
    'packages.p1dur': '3 дня / 2 ночи',
    'packages.p1l1': 'Трансфер из/в аэропорт',
    'packages.p1l2': 'Бутик-отель (2 ночи)',
    'packages.p1l3': 'Экскурсия по Шаолиню',
    'packages.p1l4': '1 занятие кунг-фу',
    'packages.p1l5': 'Гастрономический тур',
    'packages.p1l6': 'Видео-нарезка',
    'packages.p2name': 'Воин',
    'packages.p2dur': '7 дней / 6 ночей',
    'packages.p2l1': 'Всё из пакета Исследователь',
    'packages.p2l2': 'Отель (6 ночей)',
    'packages.p2l3': 'Ежедневные тренировки',
    'packages.p2l4': 'Посещение школ ушу (3 школы)',
    'packages.p2l5': 'Сеанс дзен-медитации',
    'packages.p2l6': 'Поход на гору Сун',
    'packages.p2l7': 'Полный видео-документальный фильм',
    'packages.p3name': 'Учёный',
    'packages.p3dur': '1–6 месяцев',
    'packages.p3price': 'От',
    'packages.p3l1': 'Встреча в аэропорту',
    'packages.p3l2': 'Зачисление в школу',
    'packages.p3l3': 'Проживание в общежитии',
    'packages.p3l4': 'Ежедневные тренировки (5-6 ч)',
    'packages.p3l5': 'Занятия китайским языком',
    'packages.p3l6': 'Культурные экскурсии',
    'packages.p3l7': 'Ежемесячные видео-отчёты',
    'packages.cta': 'Запросить',
    'gallery.tag': 'Моменты',
    'gallery.title': 'Испытайте Кунг-фу Пробуждение',
    'gallery.desc': 'Реальные моменты наших гостей — тренировки, исследования и жизнь в Шаолине.',
    'why.tag': 'Почему Кунг-фу Пробуждение',
    'why.title': 'Мы не турфирма. Мы ваши местные друзья.',
    'why.desc': 'Крупные платформы дают вам билет и брошюру. Мы даём реального человека в Дэнфэне, который знает каждый угол, говорит по-английски и решает вопросы.',
    'why.p1title': 'Настоящие местные',
    'why.p1desc': 'Мы живём в Дэнфэне, рядом с Шаолинем. Не удалённый колл-центр.',
    'why.p2title': 'Прямой доступ к школам',
    'why.p2desc': 'Работаем напрямую со школами-партнёрами. Без посредников и завышенных цен.',
    'why.p3title': 'Контент включён',
    'why.p3desc': 'Снимаем ваше путешествие и отдаём материал. Стройте соцсети пока тренируетесь.',
    'why.p4title': 'Без скрытых платежей',
    'why.p4desc': 'Прозрачные цены. Платите только за то, что выбрали.',
    'social.tag': 'Следите за нами',
    'social.title': 'Увидеть Шаолинь нашими глазами',
    'social.desc': 'Делимся повседневной жизнью у Шаолиня и реальными впечатлениями гостей.',
    'social.tiktok': 'Ежедневные короткие видео',
    'social.youtube': 'Полные влоги',
    'social.instagram': 'Фото-истории и Reels',
    'social.whatsapp': 'Чат с нами',
    'faq.tag': 'Вопросы',
    'faq.title': 'Часто задаваемые вопросы',
    'faq.q1': 'Нужен ли опыт кунг-фу?',
    'faq.a1': 'Совсем нет. Наши школы приветствуют новичков и подстроят тренировки под ваш уровень.',
    'faq.q2': 'Вы правда помогаете с визой?',
    'faq.a2': 'Предоставляем официальные пригласительные письма от школ-партнёров — ключевой документ для визы. Проведём через весь процесс.',
    'faq.q3': 'Безопасен ли Дэнфэн для иностранцев?',
    'faq.a3': 'Абсолютно. Дэнфэн — маленький мирный город с сильной культурой боевых искусств. Мы с вами всё время, поддержка 24/7.',
    'faq.q4': 'Сколько это стоит?',
    'faq.a4': 'Пакет Исследователь $399 (3 дня всё включено), Воин $899 (7 дней), программа Учёный от $1299/мес. Свяжитесь для персональной сметы.',
    'faq.q5': 'Можно совместить тренировки и осмотр достопримечательностей?',
    'faq.a5': 'Это наша специализация. Составим график — тренировки утром, исследования днём. Ваш темп, ваш выбор.',
    'faq.q6': 'Вы говорите по-английски?',
    'faq.a6': 'Да! Наша команда говорит на английском и китайском. Никакого языкового барьера.',
    'contact.tag': 'Начать',
    'contact.title': 'Готовы испытать Шаолинь?',
    'contact.desc': 'Заполните форму, и мы ответим в течение 24 часов с персональным планом. Без обязательств.',
    'contact.location': 'Местоположение',
    'form.name': 'Имя *',
    'form.namePh': 'Ваше полное имя',
    'form.email': 'Email *',
    'form.emailPh': 'ваш@email.com',
    'form.package': 'Интересует',
    'form.select': 'Выберите пакет...',
    'form.custom': 'Индивидуально / Не уверен',
    'form.message': 'Расскажите о поездке',
    'form.messagePh': 'Когда хотите приехать? Что больше всего интересует? Есть вопросы?',
    'form.submit': 'Отправить запрос',
    'form.note': 'Ответим в течение 24 часов. Без спама, без обязательств.',
    'footer.desc': 'Универсальная платформа для визитов в Шаолинь, тренировок кунг-фу и местных впечатлений в Дэнфэне.',
    'footer.quick': 'Быстрые ссылки',
    'footer.follow': 'Подписывайтесь'
  }
};

// ==================== Apply Language ====================
const langNames = { en: 'EN', zh: '中文', ko: '한국', ru: 'РУС' };

function applyLanguage(lang) {
  const t = translations[lang] || translations['en'];
  document.documentElement.lang = lang;

  // Translate elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) {
      if (t[key].includes('<span')) {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key]) {
      el.placeholder = t[key];
    }
  });

  // Update body class
  document.body.classList.remove('lang-en', 'lang-zh', 'lang-ko', 'lang-ru');
  document.body.classList.add('lang-' + lang);

  // Update welcome language buttons
  document.querySelectorAll('.wlang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.wlang === lang);
  });

  // Update nav dropdown
  const navDropdown = document.getElementById('langDropdown');
  if (navDropdown) {
    navDropdown.querySelectorAll('.lang-option').forEach(o => o.classList.remove('active'));
    const match = navDropdown.querySelector(`[data-lang="${lang}"]`);
    if (match) match.classList.add('active');
  }

  // Update nav button label
  const navBtn = document.getElementById('langToggle');
  if (navBtn) {
    const label = navBtn.querySelector('.lang-label');
    if (label) label.textContent = langNames[lang] || lang.toUpperCase();
  }

  // Store
  localStorage.setItem('kfa-lang', lang);
}

// ==================== Language Switcher (Nav) ====================
(function() {
  const langSwitch = document.querySelector('.lang-switch');
  const langToggle = document.getElementById('langToggle');
  const langDropdown = document.getElementById('langDropdown');
  if (!langSwitch || !langToggle || !langDropdown) return;

  langToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    langSwitch.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!langSwitch.contains(e.target)) {
      langSwitch.classList.remove('open');
    }
  });

  langDropdown.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = option.dataset.lang;
      applyLanguage(lang);
      langSwitch.classList.remove('open');
    });
  });

  // Restore saved language
  const savedLang = localStorage.getItem('kfa-lang');
  if (savedLang && savedLang !== 'en') {
    applyLanguage(savedLang);
  }
})();

// ==================== Welcome Language Buttons ====================
document.querySelectorAll('.wlang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.wlang;
    applyLanguage(lang);
  });
});

// ==================== Navbar Scroll Effect ====================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ==================== Mobile Menu ====================
const toggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ==================== FAQ Accordion ====================
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(f => f.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
    btn.setAttribute('aria-expanded', !isOpen);
  });
});

// ==================== Form Submission ====================
const form = document.getElementById('inquiry-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  btn.textContent = 'Sending...';
  btn.disabled = true;

  setTimeout(() => {
    const lang = localStorage.getItem('kfa-lang') || 'en';
    const msgs = {
      en: "Inquiry sent! We'll get back to you within 24 hours.",
      zh: '咨询已发送！我们会在24小时内回复。',
      ko: '문의가 전송되었습니다! 24시간 내에 답변 드리겠습니다.',
      ru: 'Запрос отправлен! Мы ответим в течение 24 часов.'
    };
    showToast(msgs[lang] || msgs.en);
    form.reset();
    btn.textContent = originalText;
    btn.disabled = false;
  }, 1000);
});

// ==================== Toast ====================
function showToast(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

// ==================== Scroll Reveal ====================
const observerOptions = {
  threshold: 0.08,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.service-card, .package-card, .step, .social-card, .image-gallery-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  observer.observe(el);
});
