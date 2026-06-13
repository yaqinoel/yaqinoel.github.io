import type { Lang } from './languages';

type LocalizedText = Record<Lang, string>;

export const profile = {
  name: 'ZHANG Yaqi',
  location: 'Montpellier, France',
  email: 'yaqizhang.unique@outlook.com',
  github: 'https://github.com/yaqinoel',
  internship: {
    start: 'February 2027',
    duration: '6 months',
  },
  focusAreas: [
    'Computer Graphics',
    'Image Processing',
    'Artificial Intelligence',
    'Computer Vision',
    'Game Development',
    'XR / VR',
  ],
  skills: [
    'C++',
    'C#',
    'Python',
    'Java',
    'OpenGL',
    'Ray Tracing',
    'Unity',
    'OpenXR',
    'OpenMP',
    'Git',
    'CMake',
    'Linux',
    'Docker',
  ],
  education: [
    {
      school: {
        en: 'Université de Montpellier',
        fr: 'Université de Montpellier',
        zh: '蒙彼利埃大学',
      } satisfies LocalizedText,
      program: {
        en: 'Master Informatique - IMAGINE',
        fr: 'Master Informatique - IMAGINE',
        zh: '计算机科学硕士 - IMAGINE 方向',
      } satisfies LocalizedText,
      period: '2025 - 2027',
      details: {
        en: 'M1 completed, entering M2. Ranked 3/32, mention bien. The program develops engineering and research expertise in image processing and analysis, computer graphics and artificial intelligence, with applications in computer vision, XR, video games and interactive simulation.',
        fr: 'M1 terminé, entrée en M2. Classement 3/32, mention bien. Le parcours forme des ingénieurs et chercheurs en traitement et analyse d’images, informatique graphique et intelligence artificielle, avec des applications en vision, XR, jeux vidéo et simulation interactive.',
        zh: '已完成 M1，即将进入 M2。排名 3/32，mention bien。该方向围绕图像处理与分析、计算机图形学和人工智能，培养面向计算机视觉、XR、电子游戏与交互仿真的工程和科研能力。',
      } satisfies LocalizedText,
    },
    {
      school: {
        en: 'IAE Montpellier - Université de Montpellier',
        fr: 'IAE Montpellier - Université de Montpellier',
        zh: '蒙彼利埃大学 IAE 管理学院',
      } satisfies LocalizedText,
      program: {
        en: 'Master 1 Management of Technologies and Sciences - Double Degree',
        fr: 'Master 1 Management des Technologies et des Sciences - Double diplôme',
        zh: '技术与科学管理硕士一年级 - 双学位项目',
      } satisfies LocalizedText,
      period: '2025 - 2027',
      details: {
        en: 'Double-degree program with the Faculty of Sciences combining scientific expertise with project management, innovation management and digital transformation skills.',
        fr: 'Double diplôme avec la Faculté des Sciences associant expertise scientifique, gestion de projet, management de l’innovation et transformation numérique.',
        zh: '与科学学院合作的双学位项目，在保留科学技术专业能力的同时，学习项目管理、创新管理与数字化转型。',
      } satisfies LocalizedText,
    },
    {
      school: {
        en: 'Université de Perpignan Via Domitia',
        fr: 'Université de Perpignan Via Domitia',
        zh: '佩皮尼昂大学',
      } satisfies LocalizedText,
      program: {
        en: 'DUEF B2 - French Language Program',
        fr: 'DUEF B2 - Diplôme universitaire d’études françaises',
        zh: 'DUEF B2 法语语言项目',
      } satisfies LocalizedText,
      period: '2024 - 2025',
      details: {
        en: 'Completed a one-year intensive French language program in preparation for graduate studies in France.',
        fr: 'Formation intensive de français pendant un an afin de préparer la poursuite de mes études supérieures en France.',
        zh: '完成一年的法语强化学习，为之后在法国继续攻读硕士课程做准备。',
      } satisfies LocalizedText,
    },
    {
      school: {
        en: 'Beihang University',
        fr: 'Université Beihang',
        zh: '北京航空航天大学',
      } satisfies LocalizedText,
      program: {
        en: 'Master’s Program in Software Engineering',
        fr: 'Master en génie logiciel',
        zh: '软件工程硕士',
      } satisfies LocalizedText,
      period: '09/2022 - 12/2023',
      details: {
        en: 'Studied computer science and software engineering within a standard three-year Chinese master’s program for approximately one and a half years, before changing academic direction and continuing my studies in France.',
        fr: 'Études en informatique et en génie logiciel pendant environ un an et demi dans le cadre d’un master chinois d’une durée standard de trois ans, avant une réorientation académique et la poursuite de mes études en France.',
        zh: '中国硕士标准学制为三年。在该项目中学习计算机与软件工程相关内容约一年半，之后调整学业方向并赴法国继续学习。',
      } satisfies LocalizedText,
    },
    {
      school: {
        en: 'Henan University of Technology',
        fr: 'Université de technologie du Henan',
        zh: '河南工业大学',
      } satisfies LocalizedText,
      program: {
        en: 'Bachelor in Software Engineering',
        fr: 'Licence en génie logiciel',
        zh: '软件工程本科',
      } satisfies LocalizedText,
      period: '2018 - 2022',
      details: {
        en: 'Completed a standard four-year Chinese bachelor’s degree. Core coursework included OOP, data structures, operating systems, software engineering, networking and databases.',
        fr: 'Licence chinoise d’une durée standard de quatre ans. Cours principaux : POO, structures de données, systèmes d’exploitation, génie logiciel, réseaux et bases de données.',
        zh: '中国本科标准学制为四年。主要课程包括面向对象编程、数据结构、操作系统、软件工程、计算机网络和数据库。',
      } satisfies LocalizedText,
    },
  ],
};
