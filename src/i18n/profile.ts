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
    'Physics-Based Simulation',
    'Game Development',
    'Computer Vision',
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
      school: 'Université de Montpellier',
      program: {
        en: 'Master Informatique - IMAGINE',
        fr: 'Master Informatique - IMAGINE',
        zh: '计算机科学硕士 - IMAGINE 方向',
      } satisfies LocalizedText,
      period: '2025 - 2027',
      details: {
        en: 'M1 completed, entering M2. Ranked 3/32, mention bien.',
        fr: 'M1 terminé, entrée en M2. Classement 3/32, mention bien.',
        zh: '已完成 M1，即将进入 M2。排名 3/32，mention bien。',
      } satisfies LocalizedText,
    },
    {
      school: 'Henan University of Technology',
      program: {
        en: 'Bachelor in Software Engineering',
        fr: 'Licence en génie logiciel',
        zh: '软件工程本科',
      } satisfies LocalizedText,
      period: '2018 - 2022',
      details: {
        en: 'Core coursework in OOP, data structures, operating systems, software engineering, networking and databases.',
        fr: 'Cours principaux en POO, structures de données, systèmes d’exploitation, génie logiciel, réseaux et bases de données.',
        zh: '主要课程包括面向对象编程、数据结构、操作系统、软件工程、计算机网络和数据库。',
      } satisfies LocalizedText,
    },
  ],
};
