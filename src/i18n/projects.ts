import type { Lang } from './languages';

type LocalizedText = Record<Lang, string>;

type ProjectImage = {
  src: string;
  alt: LocalizedText;
  caption?: LocalizedText;
};

type ProjectSection = {
  title: LocalizedText;
  body?: LocalizedText;
  items?: LocalizedText[];
};

export type Project = {
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  category: LocalizedText;
  tags: string[];
  repositoryUrl?: string;
  demoUrl?: string;
  sourceNote?: LocalizedText;
  coverImage?: ProjectImage;
  image?: ProjectImage;
  images?: ProjectImage[];
  video?: {
    webm?: string;
    mp4?: string;
    poster?: string;
    caption?: LocalizedText;
  };
  sections?: ProjectSection[];
  highlights?: LocalizedText[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'position-based-dynamics',
    title: {
      en: 'NomRigide - Position Based Dynamics Soft-Body Simulator',
      fr: 'NomRigide - Simulateur de corps déformables par Position Based Dynamics',
      zh: 'NomRigide - 基于 Position Based Dynamics 的软体物理仿真器',
    },
    category: {
      en: 'Research-oriented TER project',
      fr: 'Projet TER orienté recherche',
      zh: '科研导向 TER 项目',
    },
    summary: {
      en: 'NomRigide is a group TER research project on real-time soft-body simulation with Position Based Dynamics. The goal was to reproduce position-based simulation methods from graphics research and build an interactive simulator for visually plausible non-rigid deformation.',
      fr: 'NomRigide est un projet TER de groupe sur la simulation en temps réel de corps déformables avec Position Based Dynamics. L’objectif était de reproduire des méthodes de simulation positionnelle issues de la recherche en informatique graphique et de construire un simulateur interactif de déformation non rigide visuellement plausible.',
      zh: 'NomRigide 是一个小组合作完成的 TER 科研导向项目，主题是基于 Position Based Dynamics 的实时软体物理模拟。项目目标是复现图形学论文中的位置动力学方法，并开发一个能够交互展示非刚体形变的仿真器。',
    },
    tags: ['C++', 'OpenGL', 'OpenMP', 'PBD', 'Soft-Body Simulation', 'Collision Detection'],
    repositoryUrl: 'https://github.com/yaqinoel/HAI823I-ProjetTER-PBD',
    demoUrl:
      'https://youtube.com/playlist?list=PLYodcN4rsfQpwS9PmS207VJiBoG1fg8dE&si=uHDoopbiGgacPyaI',
    sourceNote: {
      en: 'For detailed implementation notes, build instructions, references and full results, see the source code repository.',
      fr: 'Pour les détails d’implémentation, les instructions de compilation, les références et les résultats complets, consultez le dépôt du code source.',
      zh: '如果想查看更详细的实现说明、编译运行方法、参考论文和完整结果，可以进入源码仓库。',
    },
    coverImage: {
      src: '/media/projects/pbd/page_image.png',
      alt: {
        en: 'NomRigide project cover image',
        fr: 'Image de couverture du projet NomRigide',
        zh: 'NomRigide 项目封面图',
      },
      caption: {
        en: 'NomRigide project cover image.',
        fr: 'Image de couverture du projet NomRigide.',
        zh: 'NomRigide 项目封面图。',
      },
    },
    images: [
      {
        src: 'https://raw.githubusercontent.com/yaqinoel/HAI823I-ProjetTER-PBD/main/results/collision-comparison.png',
        alt: {
          en: 'Collision constraints comparison from the NomRigide simulator',
          fr: 'Comparaison des contraintes de collision du simulateur NomRigide',
          zh: 'NomRigide 仿真器中的碰撞约束对比结果',
        },
        caption: {
          en: 'Collision constraints comparison. From left to right, more collision cases are enabled, reducing visible penetrations during simulation.',
          fr: 'Comparaison des contraintes de collision. De gauche à droite, davantage de cas de collision sont activés, ce qui réduit les pénétrations visibles pendant la simulation.',
          zh: '碰撞约束对比结果。从左到右，启用的碰撞情况逐渐增加，从而减少模拟过程中的可见穿透。',
        },
      },
      {
        src: 'https://raw.githubusercontent.com/yaqinoel/HAI823I-ProjetTER-PBD/main/results/small-steps-comparison.png',
        alt: {
          en: 'Small Steps comparison from the NomRigide soft-body simulator',
          fr: 'Comparaison Small Steps du simulateur de corps déformables NomRigide',
          zh: 'NomRigide 软体物理仿真器中的 Small Steps 对比结果',
        },
        caption: {
          en: 'Small Steps comparison showing how substepping improves simulation stability and reduces visible penetration.',
          fr: 'Comparaison Small Steps montrant comment les sous-pas améliorent la stabilité et réduisent les pénétrations visibles.',
          zh: 'Small Steps 对比结果，展示子步进如何提升仿真稳定性并减少可见穿透。',
        },
      },
    ],
    video: {
      webm: '/media/projects/pbd/demo.webm',
      mp4: '/media/projects/pbd/demo.mp4',
      poster: '/media/projects/pbd/page_image.png',
      caption: {
        en: 'Real-time soft-body simulation demo from the NomRigide PBD simulator.',
        fr: 'Démo en temps réel de simulation de corps déformables avec le simulateur PBD NomRigide.',
        zh: 'NomRigide PBD 仿真器中的实时软体物理模拟演示。',
      },
    },
    sections: [
      {
        title: {
          en: 'What the team built',
          fr: 'Ce que l’équipe a réalisé',
          zh: '小组实现的内容',
        },
        items: [
          {
            en: 'Real-time 3D simulation of deformable non-rigid objects represented by particles, mesh elements and constraints.',
            fr: 'Simulation 3D en temps réel d’objets déformables non rigides représentés par des particules, des éléments de maillage et des contraintes.',
            zh: '基于粒子、网格元素和约束表示的实时 3D 非刚体软体模拟。',
          },
          {
            en: 'Position Based Dynamics pipeline with external forces, damping, position prediction, collision detection, iterative constraint projection and velocity update.',
            fr: 'Pipeline Position Based Dynamics avec forces externes, amortissement, prédiction des positions, détection de collisions, projection itérative des contraintes et mise à jour des vitesses.',
            zh: '完整的 Position Based Dynamics 流程，包括外力、阻尼、位置预测、碰撞检测、迭代约束投影和速度更新。',
          },
          {
            en: 'Distance, bending, volume, collision and self-collision constraints for deformable objects.',
            fr: 'Contraintes de distance, flexion, volume, collision et auto-collision pour les objets déformables.',
            zh: '面向可变形物体的距离、弯曲、体积、碰撞和自碰撞约束。',
          },
          {
            en: 'Interactive OpenGL/ImGui application with multiple rendering modes, test scenes, profiling panels and OpenMP-based acceleration.',
            fr: 'Application interactive OpenGL/ImGui avec plusieurs modes de rendu, scènes de test, panneaux de profilage et accélération basée sur OpenMP.',
            zh: '基于 OpenGL/ImGui 的交互式程序，支持多种渲染模式、测试场景、性能分析面板和 OpenMP 加速。',
          },
        ],
      },
      {
        title: {
          en: 'My contributions',
          fr: 'Mes contributions',
          zh: '我负责的内容',
        },
        items: [
          {
            en: 'Implemented dynamic edge vs. static triangle collision detection and the corresponding collision constraint.',
            fr: 'Implémentation de la détection de collision entre une arête dynamique et un triangle statique, ainsi que de la contrainte de collision correspondante.',
            zh: '实现动态边与静态三角形之间的碰撞检测以及对应的碰撞约束。',
          },
          {
            en: 'Implemented dynamic triangle vs. static point collision detection and constraint projection using barycentric correction distribution.',
            fr: 'Implémentation de la détection de collision entre un triangle dynamique et un point statique, ainsi que de la projection de contrainte avec distribution barycentrique des corrections.',
            zh: '实现动态三角形与静态点之间的碰撞检测，并使用重心坐标分配约束修正量。',
          },
          {
            en: 'Implemented the Small Steps strategy to improve stability and reduce visible penetration during simulation.',
            fr: 'Implémentation de la stratégie Small Steps pour améliorer la stabilité et réduire les pénétrations visibles pendant la simulation.',
            zh: '实现 Small Steps 子步进策略，提高模拟稳定性并减少可见穿透。',
          },
          {
            en: 'Developed and parallelized a Jacobi-style solver, then parallelized several collision detection loops with OpenMP.',
            fr: 'Développement et parallélisation d’un solveur de type Jacobi, puis parallélisation de plusieurs boucles de détection de collision avec OpenMP.',
            zh: '开发并并行化 Jacobi 风格的求解器，同时使用 OpenMP 并行化多个碰撞检测循环。',
          },
          {
            en: 'Added profiling support to compare bottlenecks and OpenMP speedups across collision and constraint projection stages.',
            fr: 'Ajout du profilage pour comparer les goulots d’étranglement et les gains OpenMP dans les étapes de collision et de projection des contraintes.',
            zh: '加入性能分析功能，用于比较碰撞检测与约束投影阶段的瓶颈和 OpenMP 加速效果。',
          },
        ],
      },
    ],
    highlights: [
      {
        en: 'Implemented dynamic edge vs. static triangle collision constraints to reduce penetration when an edge crosses a static surface.',
        fr: 'Implémentation de contraintes de collision entre une arête dynamique et un triangle statique pour réduire les pénétrations lorsqu’une arête traverse une surface statique.',
        zh: '实现了动态边与静态三角形之间的碰撞约束，减少边穿过静态表面时产生的穿透现象。',
      },
      {
        en: 'Implemented dynamic triangle vs. static point collision constraints, distributing corrections over triangle vertices using barycentric coordinates.',
        fr: 'Implémentation de contraintes de collision entre un triangle dynamique et un point statique, avec distribution des corrections sur les sommets du triangle via des coordonnées barycentriques.',
        zh: '实现了动态三角形与静态点之间的碰撞约束，并使用重心坐标将修正量分配到三角形顶点。',
      },
      {
        en: 'Implemented a Small Steps substepping strategy to improve simulation stability and reduce abrupt corrections.',
        fr: 'Implémentation d’une stratégie Small Steps avec sous-pas pour améliorer la stabilité de la simulation et réduire les corrections brusques.',
        zh: '实现了 Small Steps 子步进策略，提高模拟稳定性并减少突兀的约束修正。',
      },
      {
        en: 'Developed a Jacobi-style solver and parallelized it with OpenMP, while also parallelizing several collision detection loops.',
        fr: 'Développement d’un solveur de type Jacobi parallélisé avec OpenMP, ainsi que parallélisation de plusieurs boucles de détection de collision.',
        zh: '开发了 Jacobi 风格的约束求解器并使用 OpenMP 并行化，同时并行化了多个碰撞检测循环。',
      },
      {
        en: 'Added profiling tools to compare simulation bottlenecks and measure OpenMP speedups across collision and constraint projection steps.',
        fr: 'Ajout d’outils de profilage pour comparer les goulots d’étranglement et mesurer les gains OpenMP dans les étapes de collision et de projection de contraintes.',
        zh: '加入性能分析工具，用于比较仿真瓶颈并测量碰撞检测与约束投影阶段的 OpenMP 加速效果。',
      },
    ],
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
      fr: 'Un ray tracer CPU en C++ développé à partir d’un viewer OpenGL/GLUT minimal. Il rend une scène de type Cornell box avec réflexion et réfraction récursives, ombres douces, textures, maillages triangulaires, accélération Kd-Tree, rendu parallèle OpenMP et anti-crénelage multi-échantillons.',
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
        fr: 'Rendu final de la Cornell box avec maillage Suzanne, sphère miroir, sphère de verre, mur texturé et ombres douces.',
        zh: '最终 Cornell-box 渲染结果，包含 Suzanne 网格、镜面球、玻璃球、纹理墙面和软阴影。',
      },
    },
    highlights: [
      {
        en: 'Implemented ray-sphere, ray-plane, ray-square and ray-triangle intersection tests with nearest-hit selection.',
        fr: 'Implémentation des intersections rayon-sphère, rayon-plan, rayon-carré et rayon-triangle avec sélection de l’intersection la plus proche.',
        zh: '实现了 ray-sphere、ray-plane、ray-square 和 ray-triangle 相交测试，并完成最近交点选择。',
      },
      {
        en: 'Added Blinn-Phong shading, hard shadows and stochastic soft shadows using spherical area-light sampling.',
        fr: 'Ajout du shading Blinn-Phong, des ombres dures et des ombres douces stochastiques par échantillonnage d’une lumière sphérique.',
        zh: '实现了 Blinn-Phong 光照、硬阴影，并通过球形面积光源采样实现随机软阴影。',
      },
      {
        en: 'Implemented recursive mirror reflection and glass refraction with Snell refraction, Fresnel reflection and Schlick approximation.',
        fr: 'Implémentation de la réflexion miroir récursive et de la réfraction du verre avec la loi de Snell, la réflexion de Fresnel et l’approximation de Schlick.',
        zh: '实现了递归镜面反射和玻璃折射，包含 Snell 折射、Fresnel 反射和 Schlick 近似。',
      },
      {
        en: 'Accelerated triangle mesh intersection with a Kd-Tree and parallelized pixel rendering with OpenMP.',
        fr: 'Accélération des intersections de maillages triangulaires avec un Kd-Tree et parallélisation du rendu des pixels avec OpenMP.',
        zh: '使用 Kd-Tree 加速三角网格求交，并使用 OpenMP 对像素渲染进行并行化。',
      },
    ],
    featured: true,
  },
  {
    slug: 'physicraft-game-engine',
    title: {
      en: 'Physicraft - 3D Voxel Game Engine',
      fr: 'Physicraft - Moteur de jeu voxel 3D',
      zh: 'Physicraft - 3D 体素游戏引擎',
    },
    category: {
      en: 'Game engine course group project',
      fr: 'Projet de groupe du cours de moteur de jeu',
      zh: '游戏引擎课程小组项目',
    },
    summary: {
      en: 'Physicraft is a group project developed for a game engine course using C++17 and OpenGL. Its playable voxel-world demo combines procedural terrain, block interactions, PBR rendering and a custom rigid-body physics engine. I was primarily responsible for the rendering and physics systems.',
      fr: 'Physicraft est un projet de groupe réalisé dans le cadre d’un cours de moteur de jeu avec C++17 et OpenGL. Sa démonstration jouable dans un monde voxel combine terrain procédural, interactions avec les blocs, rendu PBR et moteur physique de corps rigides. J’étais principalement responsable des systèmes de rendu et de physique.',
      zh: 'Physicraft 是一个使用 C++17 和 OpenGL 开发的游戏引擎课程小组项目。其可交互体素世界演示结合了程序化地形、方块交互、PBR 渲染和自研刚体物理引擎。我主要负责渲染系统与物理引擎。',
    },
    tags: ['C++', 'OpenGL', 'GLSL', 'PBR', 'Rigid-Body Physics', 'Game Engine', 'Procedural Generation'],
    repositoryUrl: 'https://github.com/yaqinoel/HAI819I-Moteur-de-jeux',
    demoUrl:
      'https://github.com/yaqinoel/HAI819I-Moteur-de-jeux/blob/main/rapport/videos/demo_mid_quality.mp4',
    sourceNote: {
      en: 'For the complete architecture, implementation details, controls and build instructions, see the source code repository.',
      fr: 'Pour consulter l’architecture complète, les détails d’implémentation, les commandes et les instructions de compilation, voir le dépôt du code source.',
      zh: '完整的引擎架构、实现细节、操作方式和编译说明可在源码仓库中查看。',
    },
    coverImage: {
      src: '/media/projects/physicraft/poster.jpg',
      alt: {
        en: 'Physicraft voxel-world gameplay',
        fr: 'Démonstration du monde voxel de Physicraft',
        zh: 'Physicraft 体素世界演示画面',
      },
    },
    video: {
      mp4: '/media/projects/physicraft/demo.mp4',
      poster: '/media/projects/physicraft/poster.jpg',
      caption: {
        en: 'Gameplay demo combining procedural voxel terrain, block interactions, PBR materials and rigid-body physics.',
        fr: 'Démonstration jouable combinant terrain voxel procédural, interactions avec les blocs, matériaux PBR et physique des corps rigides.',
        zh: '项目演示：程序化体素地形、方块交互、PBR 材质与刚体物理模拟。',
      },
    },
    images: [
      {
        src: 'https://raw.githubusercontent.com/yaqinoel/HAI819I-Moteur-de-jeux/main/rapport/figures/cube_pbr_gold_IBL.png',
        alt: {
          en: 'Gold PBR material reflecting the HDR environment',
          fr: 'Matériau PBR doré reflétant l’environnement HDR',
          zh: '反射 HDR 环境的金属 PBR 材质',
        },
        caption: {
          en: 'Cook-Torrance PBR material with image-based lighting and environment reflections.',
          fr: 'Matériau PBR Cook-Torrance avec éclairage basé sur l’image et réflexions de l’environnement.',
          zh: '使用基于图像的光照与环境反射的 Cook-Torrance PBR 材质。',
        },
      },
      {
        src: 'https://raw.githubusercontent.com/yaqinoel/HAI819I-Moteur-de-jeux/main/rapport/figures/shadow_mapping.png',
        alt: {
          en: 'Directional-light shadow mapping in the voxel scene',
          fr: 'Shadow mapping d’une lumière directionnelle dans la scène voxel',
          zh: '体素场景中的方向光阴影映射',
        },
        caption: {
          en: 'Directional-light shadow mapping integrated into the forward rendering pipeline.',
          fr: 'Shadow mapping d’une lumière directionnelle intégré au pipeline de rendu forward.',
          zh: '集成到前向渲染管线中的方向光 Shadow Mapping。',
        },
      },
      {
        src: 'https://raw.githubusercontent.com/yaqinoel/HAI819I-Moteur-de-jeux/main/rapport/figures/physique_cube_voxel_collision.png',
        alt: {
          en: 'Collision between a rigid cube and a voxel structure',
          fr: 'Collision entre un cube rigide et une structure voxel',
          zh: '刚体立方体与体素结构之间的碰撞',
        },
        caption: {
          en: 'Cube-voxel collision handled by the custom broad phase, narrow phase and impulse solver.',
          fr: 'Collision cube-voxel traitée par la broad phase, la narrow phase et le solveur d’impulsions développés pour le moteur.',
          zh: '通过自研粗阶段、窄阶段碰撞检测与冲量求解器处理的 cube–voxel 碰撞。',
        },
      },
    ],
    sections: [
      {
        title: {
          en: 'What the team built',
          fr: 'Ce que l’équipe a réalisé',
          zh: '小组实现的内容',
        },
        items: [
          {
            en: 'A Godot-inspired scene graph with hierarchical nodes, local/world transforms and a fixed-step main loop.',
            fr: 'Un graphe de scène inspiré de Godot avec nœuds hiérarchiques, transformations locales/globales et boucle principale à pas fixe.',
            zh: '受 Godot 启发的场景树，支持层级节点、局部/世界变换与固定时间步主循环。',
          },
          {
            en: 'Chunk-based procedural voxel terrain, first-person controls, inventory and block placement/removal.',
            fr: 'Un terrain voxel procédural organisé en chunks, avec contrôles à la première personne, inventaire et ajout/suppression de blocs.',
            zh: '基于区块的程序化体素地形、第一人称控制、物品栏和方块放置/移除。',
          },
          {
            en: 'A real-time rendering stack with classic and PBR materials, HDR skybox, image-based lighting and shadows.',
            fr: 'Une chaîne de rendu temps réel avec matériaux classiques et PBR, skybox HDR, éclairage basé sur l’image et ombres.',
            zh: '包含经典/PBR 材质、HDR 天空盒、基于图像的光照与阴影的实时渲染系统。',
          },
          {
            en: 'A custom rigid-body simulation supporting cubes, spheres, capsules, triangle meshes, voxel structures and voxel terrain.',
            fr: 'Une simulation personnalisée de corps rigides prenant en charge cubes, sphères, capsules, maillages triangulaires, structures voxel et terrain voxel.',
            zh: '自研刚体模拟系统，支持立方体、球体、胶囊体、三角网格、体素结构和体素地形。',
          },
        ],
      },
      {
        title: {
          en: 'My contributions',
          fr: 'Mes contributions',
          zh: '我负责的内容',
        },
        items: [
          {
            en: 'Designed the RenderSystem and forward rendering architecture, including explicit depth, color, skybox and GUI passes.',
            fr: 'Conception du RenderSystem et de l’architecture de rendu forward, avec passes explicites pour la profondeur, la couleur, la skybox et l’interface.',
            zh: '设计 RenderSystem 与前向渲染架构，划分深度、颜色、天空盒和 GUI 等渲染阶段。',
          },
          {
            en: 'Implemented Cook-Torrance PBR materials, reusable material management, HDR image-based lighting and directional shadow mapping.',
            fr: 'Implémentation des matériaux PBR Cook-Torrance, de la gestion réutilisable des matériaux, de l’IBL HDR et du shadow mapping directionnel.',
            zh: '实现 Cook-Torrance PBR 材质、可复用材质管理、HDR IBL 和方向光 Shadow Mapping。',
          },
          {
            en: 'Redesigned the physics architecture around fixed-step rigid bodies, colliders, collision shapes, contact caching and an impulse solver.',
            fr: 'Refonte de l’architecture physique autour de corps rigides à pas fixe, colliders, formes de collision, cache de contacts et solveur d’impulsions.',
            zh: '重构固定时间步刚体、碰撞体、碰撞形状、接触缓存和冲量求解器组成的物理架构。',
          },
          {
            en: 'Implemented Sweep and Prune broad-phase detection, shape-specific narrow-phase tests and stable reduced contact manifolds.',
            fr: 'Implémentation de la broad phase Sweep and Prune, des tests de narrow phase propres aux formes et de variétés de contacts réduites et stables.',
            zh: '实现 Sweep and Prune 粗阶段、针对不同形状的窄阶段检测以及稳定的精简接触流形。',
          },
          {
            en: 'Developed voxel-aware collision handling and dynamic updates of mass, center of mass, inertia, collider data and generated meshes.',
            fr: 'Développement des collisions adaptées aux voxels et de la mise à jour dynamique de la masse, du centre de masse, de l’inertie, des colliders et des maillages générés.',
            zh: '实现体素专用碰撞处理，以及质量、质心、惯性、碰撞数据和生成网格的动态更新。',
          },
          {
            en: 'Improved contact stability with friction, restitution, cached impulses, positional correction, sleeping and micro-bounce damping.',
            fr: 'Amélioration de la stabilité des contacts avec friction, restitution, impulsions mises en cache, correction de position, mise en sommeil et réduction des micro-rebonds.',
            zh: '通过摩擦、恢复系数、冲量缓存、位置修正、休眠机制和微反弹抑制提升接触稳定性。',
          },
        ],
      },
    ],
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
      fr: 'Une application Android en Kotlin et Firebase pour le partage de photos de voyage et la planification d’itinéraires. J’ai travaillé sur les fonctions sociales comme les publications, les mentions J’aime, les favoris, les commentaires, les abonnements et la gestion des utilisateurs.',
      zh: '一个使用 Kotlin 和 Firebase 开发的旅行照片分享与行程规划安卓应用。我主要负责照片分享、点赞、收藏、评论、关注、帖子和用户管理等社交功能。',
    },
    tags: ['Kotlin', 'Android', 'Firebase'],
  },
];

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}
