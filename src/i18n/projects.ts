import type { Lang } from './languages';

type LocalizedText = Record<Lang, string>;

export type Project = {
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  category: LocalizedText;
  tags: string[];
  repositoryUrl?: string;
  image?: {
    src: string;
    alt: LocalizedText;
    caption?: LocalizedText;
  };
  highlights?: LocalizedText[];
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
      en: 'CPU Ray Tracer',
      fr: 'Ray tracer CPU',
      zh: 'CPU 光线追踪渲染器',
    },
    category: {
      en: 'Programmation 3D coursework project',
      fr: 'Projet de cours Programmation 3D',
      zh: 'Programmation 3D 课程项目',
    },
    summary: {
      en: 'A C++ CPU ray tracer built from a minimal OpenGL/GLUT viewer. It renders a Cornell-box scene with recursive reflection and refraction, soft shadows, textured surfaces, triangle meshes, Kd-Tree acceleration, OpenMP parallel rendering and multi-sample anti-aliasing.',
      fr: 'Un ray tracer CPU en C++ developpe a partir d un viewer OpenGL/GLUT minimal. Il rend une scene de type Cornell box avec reflection et refraction recursives, ombres douces, textures, maillages triangulaires, acceleration Kd-Tree, rendu parallele OpenMP et anti-crenelage multi-echantillons.',
      zh: '一个基于 C++ 的 CPU 光线追踪器，从最小 OpenGL/GLUT viewer 扩展而来。项目渲染了 Cornell-box 场景，支持递归反射与折射、软阴影、纹理表面、三角网格、Kd-Tree 加速、OpenMP 并行渲染和多重采样抗锯齿。',
    },
    tags: ['C++', 'OpenGL/GLUT', 'Ray Tracing', 'OpenMP', 'Kd-Tree', 'Textures'],
    repositoryUrl: 'https://github.com/yaqinoel/HAI719I-Projet-Raytracer',
    image: {
      src: 'https://raw.githubusercontent.com/yaqinoel/HAI719I-Projet-Raytracer/main/img/results/final-render.png',
      alt: {
        en: 'Final Cornell-box render produced by the CPU ray tracer',
        fr: 'Rendu final de la Cornell box produit par le ray tracer CPU',
        zh: 'CPU 光线追踪器渲染的 Cornell-box 最终结果',
      },
      caption: {
        en: 'Final Cornell-box render with Suzanne mesh, mirror sphere, glass sphere, textured wall and soft shadows.',
        fr: 'Rendu final de la Cornell box avec maillage Suzanne, sphere miroir, sphere de verre, mur texture et ombres douces.',
        zh: '最终 Cornell-box 渲染结果，包含 Suzanne 网格、镜面球、玻璃球、纹理墙面和软阴影。',
      },
    },
    highlights: [
      {
        en: 'Implemented ray-sphere, ray-plane, ray-square and ray-triangle intersection tests with nearest-hit selection.',
        fr: 'Implementation des intersections rayon-sphere, rayon-plan, rayon-carre et rayon-triangle avec selection de l intersection la plus proche.',
        zh: '实现了 ray-sphere、ray-plane、ray-square 和 ray-triangle 相交测试，并完成最近交点选择。',
      },
      {
        en: 'Added Blinn-Phong shading, hard shadows and stochastic soft shadows using spherical area-light sampling.',
        fr: 'Ajout du shading Blinn-Phong, des ombres dures et des ombres douces stochastiques par echantillonnage d une lumiere spherique.',
        zh: '实现了 Blinn-Phong 光照、硬阴影，并通过球形面积光源采样实现随机软阴影。',
      },
      {
        en: 'Implemented recursive mirror reflection and glass refraction with Snell refraction, Fresnel reflection and Schlick approximation.',
        fr: 'Implementation de la reflection miroir recursive et de la refraction du verre avec loi de Snell, reflection de Fresnel et approximation de Schlick.',
        zh: '实现了递归镜面反射和玻璃折射，包含 Snell 折射、Fresnel 反射和 Schlick 近似。',
      },
      {
        en: 'Accelerated triangle mesh intersection with a Kd-Tree and parallelized pixel rendering with OpenMP.',
        fr: 'Acceleration des intersections de maillages triangulaires avec un Kd-Tree et parallelisation du rendu des pixels avec OpenMP.',
        zh: '使用 Kd-Tree 加速三角网格求交，并使用 OpenMP 对像素渲染进行并行化。',
      },
    ],
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
