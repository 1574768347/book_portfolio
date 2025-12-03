import React from 'react';
import { MapPin, Globe, Sparkles, Brain, Leaf, Mail, Phone, ExternalLink, Github, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { DoveBackground } from './components/DoveAnimation';
import { BookFlip } from './components/BookFlip';
import { Timeline } from './components/Timeline';
import { SkillCloud } from './components/SkillCloud';
import { HandDrawnWave, HandDrawnSeparator } from './components/HandDrawnElements';
import { RedFlower, ScribbleHighlight, Tape, StarDoodle, ArrowDoodle, MessyCircle } from './components/HandDrawnAssets';
import { TimelineItem, Skill } from './types';

const App: React.FC = () => {

  const education: TimelineItem[] = [
    {
      year: '2025.04 - 2027.03 (予定)',
      title: '修士課程 (情報科学)',
      organization: '北海道大学 情報科学院',
      description: [
        '研究テーマ：深層学習を用いた農業用ロボットの視覚認識',
        '農業ロボット×深層学習で労働力不足の解決を目指す'
      ],
      icon: 'school'
    },
    {
      year: '2020.09 - 2024.06',
      title: '学士課程 (データ科学)',
      organization: '南京農業大学',
      description: [
        'データサイエンスとビッグデータ技術を専攻',
        'プログラミング未経験からスタートし、主席クラスの成績を維持'
      ],
      icon: 'school'
    }
  ];

  const experience: TimelineItem[] = [
    {
      year: 'Student Council',
      title: '学生会広報部 部長',
      organization: '南京農業大学',
      description: [
        'データに基づいた広報改革を実行し、イベント来場者数を2倍に増加',
        'PDCAサイクルを導入し、SNS投稿の分析・改善を主導'
      ],
      icon: 'users'
    },
    {
      year: 'Research',
      title: '農業ロボット研究',
      organization: '大学院ゼミ',
      description: [
        'Data-Centric AIアプローチによるデータセット品質の向上',
        '半教師あり学習を導入し、手作業のアノテーションコストを削減'
      ],
      icon: 'sprout'
    }
  ];

  const skills: Skill[] = [
    { name: 'Python', level: 90, category: 'tech' },
    { name: 'PyTorch', level: 85, category: 'tech' },
    { name: 'Data Analysis', level: 85, category: 'tech' },
    { name: 'Machine Learning', level: 80, category: 'tech' },
    { name: 'YOLOv8', level: 85, category: 'tech' },
    { name: 'OpenCV', level: 75, category: 'tech' },
    { name: 'Japanese (N1)', level: 95, category: 'language' },
    { name: 'English (TOEIC 925)', level: 90, category: 'language' },
    { name: 'Chinese (Native)', level: 100, category: 'language' },
    { name: 'Team Leadership', level: 85, category: 'soft' },
    { name: 'Problem Solving', level: 90, category: 'soft' },
    { name: 'Communication', level: 90, category: 'soft' },
  ];

  const timelineData = [...education, ...experience].sort((a, b) => b.year.localeCompare(a.year));

  // --- PAGES CONTENT ---

  // Page 1: Cover
  const CoverPage = (
    <div className="h-full flex flex-col items-center justify-center text-center relative p-4">
       <RedFlower className="w-32 h-32 absolute top-10 right-10 animate-pulse" />
       <StarDoodle className="w-12 h-12 text-highlight absolute bottom-20 left-10" />
       
       <div className="border-4 border-ink p-8 rounded-sm relative bg-white shadow-sm rotate-1 max-w-md">
          <Tape className="-top-4 left-1/2 -translate-x-1/2" />
          <Tape className="-bottom-4 left-1/2 -translate-x-1/2" rotate={180} />
          
          <h2 className="text-xl font-hand text-gray-500 mb-2 tracking-widest">PORTFOLIO</h2>
          <h1 className="text-6xl font-hand font-bold text-ink mb-4">劉 姝延</h1>
          <p className="text-2xl text-gray-600 font-hand">Liu Shuyan</p>
          
          <div className="my-6 w-full h-0.5 bg-ink/20 rounded-full"></div>
          
          <div className="flex justify-center gap-4 text-sm text-gray-500 font-hand">
             <span>Data Science</span>
             <span>•</span>
             <span>AI Research</span>
          </div>
       </div>

       <div className="absolute bottom-10 animate-bounce text-gray-400">
          <p className="text-sm font-hand">Open the book</p>
       </div>
    </div>
  );

  // Page 2: Intro / About
  const IntroPage = (
    <div className="h-full flex flex-col justify-center relative">
       <Tape className="-top-2 -left-8 -rotate-12 bg-accent/30" />
       
       <h2 className="text-4xl font-bold mb-8 relative inline-block">
          About Me
          <ScribbleHighlight className="absolute -bottom-2 left-0 w-full h-4 -z-10" />
       </h2>

       <div className="space-y-6 text-lg leading-relaxed font-hand text-gray-700">
          <p>
             <span className="text-2xl font-bold text-accent">H</span>ello! 私は北海道大学で情報科学を専攻している劉 姝延です。
             中国の南京農業大学でデータサイエンスを学び、現在は日本で<span className="font-bold bg-highlight/30 px-1">農業ロボットの視覚認識</span>について研究しています。
          </p>
          <p>
             未知の世界を楽しみながら挑戦することが私の原動力です。
             言語や文化の壁を乗り越え、新しい環境に適応しながら、技術で社会課題を解決することに情熱を注いでいます。
          </p>
       </div>

       <div className="mt-12 grid grid-cols-2 gap-6">
          <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm rotate-1 relative">
             <MapPin className="text-accent mb-2" />
             <h3 className="font-bold">Location</h3>
             <p className="text-sm">Sapporo, Japan</p>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm -rotate-1 relative">
             <Globe className="text-blue-400 mb-2" />
             <h3 className="font-bold">Language</h3>
             <p className="text-sm">JP (N1), EN, CN</p>
          </div>
       </div>
       
       <HandDrawnWave />
    </div>
  );

  // Page 3: Research Left
  const ResearchPageLeft = (
    <div className="h-full flex flex-col p-4">
       <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-green-100 rounded-full text-green-700 border-2 border-green-200 border-dashed">
             <Leaf size={32} />
          </div>
          <h2 className="text-3xl font-bold">Research Focus</h2>
       </div>

       <div className="flex-1 relative">
          <div className="absolute inset-0 bg-white p-6 shadow-sm border border-gray-200 rotate-1">
             <Tape className="-top-3 right-10 rotate-3" color="#a3e635" />
             <h3 className="text-2xl font-bold mb-4 text-center">農業ロボット × AI</h3>
             
             <div className="flex justify-center mb-6">
                <MessyCircle className="w-32 h-32 text-green-500 absolute opacity-20" />
                <img 
                  src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=400&h=300" 
                  alt="Agriculture" 
                  className="w-full h-48 object-cover rounded-md filter sepia-[.3]"
                />
             </div>

             <p className="text-lg mb-4">
                <span className="font-bold border-b-2 border-accent">課題:</span> 労働力不足 & 農薬コスト
             </p>
             <ArrowDoodle className="w-16 h-8 text-gray-400 mx-auto my-2 rotate-90" />
             <p className="text-lg">
                <span className="font-bold border-b-2 border-blue-400">解決策:</span> 自動除草ロボット
             </p>
          </div>
       </div>
    </div>
  );

  // Page 4: Research Right
  const ResearchPageRight = (
    <div className="h-full flex flex-col justify-center p-4">
       <h3 className="text-2xl font-bold mb-6">Deep Learning Approach</h3>
       
       <ul className="space-y-8 relative">
          <li className="relative pl-8">
             <StarDoodle className="absolute left-0 top-1 w-6 h-6 text-yellow-400" />
             <h4 className="font-bold text-xl">茎の位置特定</h4>
             <p className="text-gray-600">YOLOv8をベースに、複雑な屋外環境でもミリ単位で雑草の茎を検出するアルゴリズムを開発。</p>
          </li>
          
          <li className="relative pl-8">
             <StarDoodle className="absolute left-0 top-1 w-6 h-6 text-blue-400" />
             <h4 className="font-bold text-xl">半教師あり学習</h4>
             <p className="text-gray-600">大量のアノテーション作業を削減するため、ラベルなしデータを活用した学習パイプラインを構築。</p>
          </li>

          <li className="relative pl-8">
             <StarDoodle className="absolute left-0 top-1 w-6 h-6 text-red-400" />
             <h4 className="font-bold text-xl">成果</h4>
             <p className="text-gray-600">認識精度を60%から<span className="text-red-500 font-bold text-2xl mx-1">80%</span>へ向上させることに成功。</p>
          </li>
       </ul>

       <div className="mt-10 p-4 bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg text-sm font-mono text-gray-500">
          Technologies: Python, PyTorch, OpenCV, Docker
       </div>
    </div>
  );

  // Page 5: Timeline Left (Education)
  const TimelineEducation = (
    <div className="h-full">
       <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <BookOpen size={28} /> Education
       </h2>
       <Timeline items={education} />
       <div className="mt-8 text-center opacity-50">
          <ArrowDoodle className="w-24 h-12 mx-auto text-gray-400" />
       </div>
    </div>
  );

  // Page 6: Timeline Right (Experience)
  const TimelineExperience = (
    <div className="h-full">
       <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Sparkles size={28} /> Experience
       </h2>
       <Timeline items={experience} />
    </div>
  );

  // Page 7: Skills
  const SkillsPage = (
    <div className="h-full flex flex-col justify-center">
       <h2 className="text-3xl font-bold mb-8 text-center relative">
          My Skillset
          <RedFlower className="absolute -top-6 -right-6 w-16 h-16 opacity-50" />
       </h2>
       
       <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 relative">
          <Tape className="-top-3 left-1/2 -translate-x-1/2" />
          <SkillCloud skills={skills} />
       </div>

       <div className="mt-12 grid grid-cols-2 gap-4 text-center">
          <div className="p-4 bg-orange-50 rounded-full">
             <span className="block font-bold text-orange-800">TOEIC 925</span>
          </div>
          <div className="p-4 bg-green-50 rounded-full">
             <span className="block font-bold text-green-800">JLPT N1</span>
          </div>
       </div>
    </div>
  );

  // Page 8: Contact
  const ContactPage = (
    <div className="h-full flex flex-col items-center justify-center text-center">
       <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
       <p className="mb-10 text-gray-600 max-w-sm">
          もし私の経験や研究に興味を持っていただけましたら、ぜひご連絡ください。
       </p>

       <div className="space-y-6 w-full max-w-sm">
          <a href="mailto:yan532123@gmail.com" className="block p-4 bg-white border-2 border-ink rounded-lg hover:translate-x-1 hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-3 group">
             <Mail className="group-hover:text-accent" />
             <span className="font-bold">yan532123@gmail.com</span>
          </a>
          
          <div className="block p-4 bg-white border-2 border-ink rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-3">
             <Phone />
             <span className="font-bold">070-9133-5189</span>
          </div>
       </div>

       <div className="mt-16 relative">
          <RedFlower className="w-24 h-24 mx-auto animate-spin-slow" />
          <p className="mt-4 text-sm text-gray-400 font-hand">Thank you for reading!</p>
       </div>
    </div>
  );

  const pages = [
    CoverPage,
    IntroPage,
    ResearchPageLeft,
    ResearchPageRight,
    TimelineEducation,
    TimelineExperience,
    SkillsPage,
    ContactPage
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#e0dcd3] flex flex-col items-center justify-center">
       <DoveBackground />
       
       <div className="relative z-10 w-full px-4">
          <BookFlip>
             {pages}
          </BookFlip>
       </div>

       <div className="fixed bottom-4 text-xs text-gray-500 font-hand">
          © 2025 Liu Shuyan - Hand-crafted Portfolio
       </div>
    </div>
  );
};

export default App;
