import { defaultLang, type Lang } from './languages';

export const ui = {
  en: {
    siteTitle: 'ZHANG Yaqi | Portfolio',
    navHome: 'Home',
    navAbout: 'About',
    navProjects: 'Projects',
    navCV: 'CV',
    heroRole: 'M2 Computer Science Student',
    profilePhotoAlt: 'Portrait of ZHANG Yaqi',
    heroTitle: 'Computer Graphics, Image Processing & AI',
    heroSummary:
      'M2 student in the IMAGINE master’s program at Université de Montpellier, working across computer graphics, image processing, game development and AI. Seeking a six-month internship from February 2027.',
    viewProjects: 'View projects',
    contactMe: 'Contact',
    focusLabel: 'Core interests',
    internshipLabel: 'Internship availability',
    internshipValue: 'February 2027 · 6 months',
    mobilityLabel: 'Location',
    mobilityValue: 'France · Europe · Remote',
    selectedProjects: 'Selected projects',
    technicalFocus: 'Technical focus',
    education: 'Education',
    experience: 'Experience',
    sourceCode: 'Source code',
    demo: 'Demo',
    keyHighlights: 'Key highlights',
    myContributions: 'My contributions',
    projectsIntro:
      'A focused selection of academic, research-oriented and software engineering projects.',
    cvIntro: 'CV download will be added here once the latest version is ready.',
  },
  fr: {
    siteTitle: 'ZHANG Yaqi | Portfolio',
    navHome: 'Accueil',
    navAbout: 'À propos',
    navProjects: 'Projets',
    navCV: 'CV',
    heroRole: 'Étudiant en M2 Informatique',
    profilePhotoAlt: 'Portrait de ZHANG Yaqi',
    heroTitle: 'Informatique graphique, traitement d’images & IA',
    heroSummary:
      'Étudiant en M2 du master IMAGINE à l’Université de Montpellier, je travaille en informatique graphique, traitement d’images, développement de jeux et IA. Je recherche un stage de six mois à partir de février 2027.',
    viewProjects: 'Voir les projets',
    contactMe: 'Contact',
    focusLabel: 'Domaines principaux',
    internshipLabel: 'Disponibilité pour un stage',
    internshipValue: 'Février 2027 · 6 mois',
    mobilityLabel: 'Localisation',
    mobilityValue: 'France · Europe · Télétravail',
    selectedProjects: 'Projets sélectionnés',
    technicalFocus: 'Axes techniques',
    education: 'Formation',
    experience: 'Expérience',
    sourceCode: 'Code source',
    demo: 'Démo',
    keyHighlights: 'Points clés',
    myContributions: 'Mes contributions',
    projectsIntro:
      'Une sélection de projets académiques, de recherche appliquée et de développement logiciel.',
    cvIntro: 'Le CV sera ajouté ici lorsque la version la plus récente sera prête.',
  },
  zh: {
    siteTitle: '张亚奇 | 个人作品集',
    navHome: '首页',
    navAbout: '关于我',
    navProjects: '项目',
    navCV: '简历',
    heroRole: '计算机科学 M2 学生',
    profilePhotoAlt: '张亚奇的个人头像',
    heroTitle: '计算机图形学、图像处理与人工智能',
    heroSummary:
      '我目前就读于蒙彼利埃大学 IMAGINE 计算机硕士 M2，主要方向包括计算机图形学、图像处理、游戏开发和人工智能。我正在寻找 2027 年 2 月开始的六个月实习。',
    viewProjects: '查看项目',
    contactMe: '联系我',
    focusLabel: '核心方向',
    internshipLabel: '实习时间',
    internshipValue: '2027 年 2 月 · 6 个月',
    mobilityLabel: '可接受地点',
    mobilityValue: '法国 · 欧洲 · 远程',
    selectedProjects: '精选项目',
    technicalFocus: '技术方向',
    education: '教育背景',
    experience: '经历',
    sourceCode: '源代码',
    demo: '演示',
    keyHighlights: '技术亮点',
    myContributions: '我负责的内容',
    projectsIntro: '这里展示我的课程项目、科研导向项目和软件开发项目。',
    cvIntro: '最新版 CV 准备好后会放在这里下载。',
  },
} as const;

export function useTranslations(lang: Lang) {
  const dictionary = ui[lang] ?? ui[defaultLang];

  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return dictionary[key] ?? ui[defaultLang][key];
  };
}
