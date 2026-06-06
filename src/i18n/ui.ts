import { defaultLang, type Lang } from './languages';

export const ui = {
  en: {
    siteTitle: 'ZHANG Yaqi | Portfolio',
    navHome: 'Home',
    navAbout: 'About',
    navProjects: 'Projects',
    navCV: 'CV',
    heroRole: 'M2 Computer Science Student',
    heroTitle: 'Computer Graphics, Image Processing and Physics-Based Simulation',
    heroSummary:
      'I am a computer science student at Universite de Montpellier, specializing in computer graphics, image processing, game development and AI. I am seeking a 6-month internship starting in February 2027.',
    viewProjects: 'View projects',
    contactMe: 'Contact',
    selectedProjects: 'Selected projects',
    technicalFocus: 'Technical focus',
    education: 'Education',
    experience: 'Experience',
    projectsIntro:
      'A focused selection of academic, research-oriented and software engineering projects.',
    cvIntro: 'CV download will be added here once the latest version is ready.',
  },
  fr: {
    siteTitle: 'ZHANG Yaqi | Portfolio',
    navHome: 'Accueil',
    navAbout: 'A propos',
    navProjects: 'Projets',
    navCV: 'CV',
    heroRole: 'Etudiant en M2 Informatique',
    heroTitle: 'Informatique graphique, traitement d images et simulation physique',
    heroSummary:
      'Je suis etudiant en informatique a l Universite de Montpellier, specialise en informatique graphique, traitement d images, developpement de jeux et IA. Je recherche un stage de 6 mois a partir de fevrier 2027.',
    viewProjects: 'Voir les projets',
    contactMe: 'Contact',
    selectedProjects: 'Projets selectionnes',
    technicalFocus: 'Axes techniques',
    education: 'Formation',
    experience: 'Experience',
    projectsIntro:
      'Une selection de projets academiques, de recherche appliquee et de developpement logiciel.',
    cvIntro: 'Le CV sera ajoute ici lorsque la version la plus recente sera prete.',
  },
  zh: {
    siteTitle: '张亚奇 | 个人作品集',
    navHome: '首页',
    navAbout: '关于我',
    navProjects: '项目',
    navCV: '简历',
    heroRole: '计算机科学 M2 学生',
    heroTitle: '计算机图形学、图像处理与物理仿真',
    heroSummary:
      '我目前就读于蒙彼利埃大学计算机专业，方向包括计算机图形学、图像处理、游戏开发和人工智能。我正在寻找 2027 年 2 月开始的 6 个月实习。',
    viewProjects: '查看项目',
    contactMe: '联系我',
    selectedProjects: '精选项目',
    technicalFocus: '技术方向',
    education: '教育背景',
    experience: '经历',
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
