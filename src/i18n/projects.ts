import type { Lang } from './languages';

type LocalizedText = Record<Lang, string>;

export type Project = {
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  category: LocalizedText;
  tags: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'position-based-dynamics',
    title: {
      en: 'Position-Based Dynamics Simulation Engine',
      fr: 'Moteur de simulation base sur la dynamique positionnelle',
      zh: '基于位置动力学的物理模拟引擎',
    },
    category: {
      en: 'Research-oriented TER project',
      fr: 'Projet TER oriente recherche',
      zh: '科研导向 TER 项目',
    },
    summary: {
      en: 'A real-time non-rigid body simulation engine reproducing core ideas from Position Based Dynamics, with collision constraints, a parallel Jacobi solver, OpenMP collision detection and Small Steps stabilization.',
      fr: 'Un moteur de simulation temps reel pour corps non rigides, base sur la reproduction des idees principales de Position Based Dynamics, avec contraintes de collision, solveur Jacobi parallele, detection de collision avec OpenMP et stabilisation Small Steps.',
      zh: '一个实时非刚体物理模拟引擎，复现 Position Based Dynamics 论文中的核心算法，实现了碰撞约束、并行 Jacobi 求解器、OpenMP 碰撞检测和 Small Steps 稳定化。',
    },
    tags: ['C++', 'OpenMP', 'PBD', 'Collision Detection', 'Simulation'],
    featured: true,
  },
  {
    slug: 'ray-tracing-renderer',
    title: {
      en: 'Ray Tracing Renderer',
      fr: 'Moteur de rendu Ray Tracing',
      zh: '光线追踪渲染器',
    },
    category: {
      en: 'Personal coursework project',
      fr: 'Projet individuel de cours',
      zh: '个人课程项目',
    },
    summary: {
      en: 'A ray tracing project implementing diffuse reflection, specular reflection, refraction, soft shadows, textures, OpenMP acceleration and Kd-tree acceleration.',
      fr: 'Un projet de ray tracing avec reflexion diffuse, reflexion speculaire, refraction, ombres douces, textures, acceleration OpenMP et acceleration par Kd-tree.',
      zh: '一个光线追踪项目，实现了漫反射、镜面反射、透明物体折射、软阴影、纹理、OpenMP 多线程加速和 Kd-tree 加速。',
    },
    tags: ['C++', 'Ray Tracing', 'OpenMP', 'Kd-tree'],
    featured: true,
  },
  {
    slug: 'educational-game-engine',
    title: {
      en: 'Educational Game Engine',
      fr: 'Moteur de jeux pedagogique',
      zh: '课程游戏引擎项目',
    },
    category: {
      en: 'Group coursework project',
      fr: 'Projet de groupe',
      zh: '小组课程项目',
    },
    summary: {
      en: 'A basic game engine including a scene tree, procedural generation, physics simulation and rendering. My contributions focused on collision handling, physics response, forward rendering, shadow mapping, material management, shader management and PBR rendering.',
      fr: 'Un moteur de jeux de base avec arbre de scene, generation procedurale, simulation physique et rendu. Mes contributions portent sur les collisions, la reponse physique, le rendu forward, shadow mapping, la gestion des materiaux, des shaders et le rendu PBR.',
      zh: '一个基础游戏引擎项目，包括场景树、程序化生成、物理模拟和渲染。我主要负责碰撞检测、物理响应、前向渲染、shadow mapping、材质管理、shader 管理和 PBR 渲染。',
    },
    tags: ['C++', 'OpenGL', 'PBR', 'Shadow Mapping', 'Physics'],
    featured: true,
  },
  {
    slug: 'color-harmonisation',
    title: {
      en: 'Color Harmonisation Paper Reproduction',
      fr: 'Reproduction d un article sur l harmonisation des couleurs',
      zh: 'Color Harmonisation 论文复现',
    },
    category: {
      en: 'Image processing group project',
      fr: 'Projet de traitement d images',
      zh: '图像处理课程小组项目',
    },
    summary: {
      en: 'A course project reproducing an algorithm from a color harmonisation paper, focused on implementing and evaluating the image processing method.',
      fr: 'Un projet de cours reproduisant un algorithme issu d un article sur l harmonisation des couleurs, avec implementation et evaluation de la methode.',
      zh: '一个图像处理课程项目，围绕 Color Harmonisation 论文中的算法进行复现、实现和结果分析。',
    },
    tags: ['Image Processing', 'Paper Reproduction', 'Python'],
    featured: true,
  },
  {
    slug: 'vr-navigation-evaluation',
    title: {
      en: 'VR Spatial Navigation Assessment System',
      fr: 'Systeme VR d evaluation de la navigation spatiale',
      zh: 'VR 空间导航评估系统',
    },
    category: {
      en: 'Research lab experience',
      fr: 'Experience en laboratoire',
      zh: '实验室经历',
    },
    summary: {
      en: 'A Unity and OpenXR-based virtual reality assessment system for spatial navigation, developed in collaboration with psychology researchers and deployed with Oculus Quest devices.',
      fr: 'Un systeme d evaluation en realite virtuelle base sur Unity et OpenXR pour la navigation spatiale, developpe avec des chercheurs en psychologie et utilise avec des casques Oculus Quest.',
      zh: '一个基于 Unity 和 OpenXR 的空间导航能力 VR 评估系统，与心理学研究团队合作开发，并集成 Oculus Quest 设备。',
    },
    tags: ['Unity', 'OpenXR', 'Oculus Quest', 'Blender', 'VR'],
    featured: true,
  },
  {
    slug: 'traveling-android-app',
    title: {
      en: 'Traveling Android App',
      fr: 'Application Android Traveling',
      zh: 'Traveling 安卓应用',
    },
    category: {
      en: 'Android group coursework project',
      fr: 'Projet Android de groupe',
      zh: '安卓课程小组项目',
    },
    summary: {
      en: 'A Kotlin and Firebase Android app for travel photo sharing and trip planning. My work focused on social features including posts, likes, favorites, comments, follows and user management.',
      fr: 'Une application Android en Kotlin et Firebase pour le partage de photos de voyage et la planification d itineraires. J ai travaille sur les fonctions sociales comme les posts, likes, favoris, commentaires, abonnements et la gestion des utilisateurs.',
      zh: '一个使用 Kotlin 和 Firebase 开发的旅行照片分享与行程规划安卓应用。我主要负责照片分享、点赞、收藏、评论、关注、帖子和用户管理等社交功能。',
    },
    tags: ['Kotlin', 'Android', 'Firebase'],
  },
];

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}
