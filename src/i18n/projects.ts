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
  detailSummary?: LocalizedText;
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
      en: 'Physicraft is a group project developed for a game engine course using C++ and OpenGL. Its playable voxel-world demo combines procedural terrain, block interactions, PBR rendering and a custom rigid-body physics engine. I was primarily responsible for the rendering and physics systems.',
      fr: 'Physicraft est un projet de groupe réalisé dans le cadre d’un cours de moteur de jeu avec C++ et OpenGL. Sa démonstration jouable dans un monde voxel combine terrain procédural, interactions avec les blocs, rendu PBR et moteur physique de corps rigides. J’étais principalement responsable des systèmes de rendu et de physique.',
      zh: 'Physicraft 是一个使用 C++ 和 OpenGL 开发的游戏引擎课程小组项目。其可交互体素世界演示结合了程序化地形、方块交互、PBR 渲染和自研刚体物理引擎。我主要负责渲染系统与物理引擎。',
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
    slug: 'gj-fly-platformer',
    title: {
      en: 'GJ Fly - 2D Platformer GameJam Project',
      fr: 'GJ Fly - Plateformer 2D de GameJam',
      zh: 'GJ Fly - GameJam 2D 平台跳跃游戏',
    },
    category: {
      en: 'GameJam group project',
      fr: 'Projet de groupe GameJam',
      zh: 'GameJam 小组项目',
    },
    summary: {
      en: 'A Unity 2D platformer developed during a GameJam. I worked mainly as the programmer, building the player state machine, jump/dash/combat mechanics, enemies, object pooling, event-driven level triggers, collectibles, hazards, audio hooks and scene flow.',
      fr: 'Un plateformer 2D Unity développé pendant une GameJam. J’ai principalement travaillé comme programmeur, en réalisant la machine à états du joueur, les mécaniques de saut, dash et combat, les ennemis, l’object pooling, les déclencheurs de niveau événementiels, les collectibles, les dangers, les hooks audio et le déroulement des scènes.',
      zh: '一个在 GameJam 中使用 Unity 开发的 2D 平台跳跃游戏。我主要担任程序开发，负责玩家状态机、跳跃/冲刺/战斗机制、敌人行为、对象池、事件驱动的关卡触发器、收集物、危险区域、音频钩子和场景流程。',
    },
    detailSummary: {
      en: 'GJ Fly is a Unity 2D platformer developed as a GameJam group project. The game combines responsive platforming controls, double jump, dash, projectile attacks, enemy encounters, hazards, collectibles, gate triggers and multi-level progression. My main role was gameplay programming: character control, state machines, combat logic, enemy behavior, object pooling, event channels, audio integration and scene interactions.',
      fr: 'GJ Fly est un plateformer 2D Unity développé comme projet de groupe pendant une GameJam. Le jeu combine des contrôles de plateforme réactifs, double saut, dash, attaques par projectiles, ennemis, dangers, collectibles, déclencheurs de portes et progression multi-niveaux. Mon rôle principal était la programmation gameplay : contrôle du personnage, machines à états, logique de combat, comportements ennemis, object pooling, event channels, intégration audio et interactions de scène.',
      zh: 'GJ Fly 是一个在 GameJam 中合作开发的 Unity 2D 平台跳跃游戏。游戏包含响应式平台跳跃控制、二段跳、冲刺、投射物攻击、敌人遭遇、危险区域、收集物、门触发器和多关卡推进。我主要负责 gameplay 编程，包括角色控制、状态机、战斗逻辑、敌人行为、对象池、事件通道、音频集成和场景交互。',
    },
    tags: [
      'Unity',
      'C#',
      '2D Platformer',
      'GameJam',
      'State Machine',
      'ScriptableObject',
      'Object Pooling',
      'Unity Input System',
      'Physics2D',
      'Gameplay Programming',
    ],
    sourceNote: {
      en: 'This GameJam project is currently presented through gameplay media. Source code or a playable build link can be added later if published.',
      fr: 'Ce projet GameJam est actuellement présenté à travers des médias de gameplay. Un lien vers le code source ou une version jouable pourra être ajouté plus tard s’il est publié.',
      zh: '这个 GameJam 项目目前通过玩法视频和截图展示。如果之后发布源码或可玩版本，可以再补充链接。',
    },
    coverImage: {
      src: '/media/projects/GJ_Fly/cover.png',
      alt: {
        en: 'Gameplay screenshot from GJ Fly showing the player, collectibles and an enemy in a 2D level',
        fr: 'Capture de gameplay de GJ Fly montrant le joueur, des collectibles et un ennemi dans un niveau 2D',
        zh: 'GJ Fly 玩法截图，展示 2D 关卡中的玩家、收集物和敌人',
      },
      caption: {
        en: 'Gameplay screenshot showing the player, collectibles and enemy placement in a hand-drawn 2D level.',
        fr: 'Capture de gameplay montrant le joueur, les collectibles et le placement des ennemis dans un niveau 2D dessiné à la main.',
        zh: '玩法截图：手绘风格 2D 关卡中的玩家、收集物与敌人布局。',
      },
    },
    video: {
      mp4: '/media/projects/GJ_Fly/gameplay-demo.mp4',
      poster: '/media/projects/GJ_Fly/cover.png',
      caption: {
        en: 'Gameplay demo showing platforming movement, collectibles, enemies and level progression.',
        fr: 'Démonstration de gameplay montrant les déplacements de plateforme, les collectibles, les ennemis et la progression de niveau.',
        zh: '玩法演示：平台移动、收集物、敌人和关卡推进。',
      },
    },
    images: [
      {
        src: '/media/projects/GJ_Fly/main_menu.png',
        alt: {
          en: 'Main menu scene of GJ Fly',
          fr: 'Scène du menu principal de GJ Fly',
          zh: 'GJ Fly 主菜单场景',
        },
        caption: {
          en: 'Main menu scene introducing the hand-drawn classroom theme.',
          fr: 'Menu principal introduisant l’ambiance de salle de classe dessinée à la main.',
          zh: '主菜单场景，展示手绘教室主题氛围。',
        },
      },
      {
        src: '/media/projects/GJ_Fly/scene_classroom.png',
        alt: {
          en: 'Classroom scene from GJ Fly',
          fr: 'Scène de salle de classe de GJ Fly',
          zh: 'GJ Fly 教室场景',
        },
        caption: {
          en: 'Classroom scene used as part of the game’s level and story flow.',
          fr: 'Scène de salle de classe utilisée dans le déroulement des niveaux et de l’histoire.',
          zh: '教室场景，用于游戏的关卡和叙事流程。',
        },
      },
      {
        src: '/media/projects/GJ_Fly/movement.png',
        alt: {
          en: 'Player movement screenshot from GJ Fly',
          fr: 'Capture du déplacement du joueur dans GJ Fly',
          zh: 'GJ Fly 玩家移动截图',
        },
        caption: {
          en: 'Movement gameplay built around jump buffering, coyote time, double jump and dash states.',
          fr: 'Gameplay de déplacement construit autour du jump buffer, du coyote time, du double saut et des états de dash.',
          zh: '移动系统围绕跳跃缓冲、土狼时间、二段跳和冲刺状态构建。',
        },
      },
      {
        src: '/media/projects/GJ_Fly/combat-level.png',
        alt: {
          en: 'Colorful level screenshot from GJ Fly with enemy and collectible placement',
          fr: 'Capture d’un niveau coloré de GJ Fly avec placement d’ennemi et de collectible',
          zh: 'GJ Fly 彩色关卡截图，包含敌人与收集物布局',
        },
        caption: {
          en: 'Level variation with enemy placement, collectibles and player traversal challenges.',
          fr: 'Variation de niveau avec placement d’ennemis, collectibles et défis de traversée.',
          zh: '关卡变化示例，包含敌人布局、收集物和移动挑战。',
        },
      },
      {
        src: '/media/projects/GJ_Fly/rainbow-level.png',
        alt: {
          en: 'Rainbow level screenshot from GJ Fly',
          fr: 'Capture du niveau arc-en-ciel de GJ Fly',
          zh: 'GJ Fly 彩虹关卡截图',
        },
        caption: {
          en: 'A later level with a brighter visual mood and different platform layout.',
          fr: 'Un niveau plus avancé avec une ambiance visuelle plus lumineuse et une disposition différente des plateformes.',
          zh: '后续关卡画面，使用更明亮的视觉氛围和不同的平台布局。',
        },
      },
    ],
    sections: [
      {
        title: {
          en: 'Project highlights',
          fr: 'Points clés du projet',
          zh: '项目亮点',
        },
        items: [
          {
            en: 'Responsive 2D platforming controller with walking, jumping, double jump, dash, attack, hurt, landing and death states.',
            fr: 'Contrôleur de plateforme 2D réactif avec états de marche, saut, double saut, dash, attaque, dégâts, atterrissage et mort.',
            zh: '响应式 2D 平台控制器，包含行走、跳跃、二段跳、冲刺、攻击、受伤、落地和死亡状态。',
          },
          {
            en: 'Game-feel systems including coyote time, jump input buffering, landing lock time, animation-curve-based dash/fall motion and air movement.',
            fr: 'Systèmes de game feel incluant coyote time, jump buffer, verrouillage d’atterrissage, dash/chute basés sur des AnimationCurves et contrôle aérien.',
            zh: '实现提升手感的系统，包括土狼时间、跳跃输入缓冲、落地锁定时间、基于动画曲线的冲刺/下落运动和空中移动。',
          },
          {
            en: 'Interactive level mechanics with collectible stars, spikes, death zones, gates, victory triggers and scene transitions.',
            fr: 'Mécaniques de niveau interactives avec étoiles collectables, pics, zones de mort, portes, déclencheurs de victoire et transitions de scène.',
            zh: '交互式关卡机制，包括星星收集物、尖刺、死亡区域、门、胜利触发器和场景切换。',
          },
          {
            en: 'Enemy systems covering patrol/contact-damage enemies and a teacher enemy that fires tracking projectiles when triggered.',
            fr: 'Systèmes ennemis couvrant les ennemis en patrouille avec dégâts au contact et un professeur qui tire des projectiles de poursuite lorsqu’il est déclenché.',
            zh: '敌人系统包括巡逻/接触伤害敌人，以及被触发后发射追踪投射物的老师敌人。',
          },
          {
            en: 'ScriptableObject event channels decouple gates, victory triggers and enemy attack activation from scene object references.',
            fr: 'Des event channels ScriptableObject découplent les portes, les déclencheurs de victoire et l’activation des attaques ennemies des références directes aux objets de scène.',
            zh: '通过 ScriptableObject 事件通道解耦门、胜利触发器和敌人攻击激活，减少场景对象之间的直接引用。',
          },
          {
            en: 'Object pooling for projectiles and spawned enemies avoids repeated runtime instantiation during gameplay.',
            fr: 'Object pooling pour les projectiles et les ennemis générés afin d’éviter les instanciations répétées pendant le gameplay.',
            zh: '为投射物和生成敌人实现对象池，避免 gameplay 过程中重复运行时实例化。',
          },
        ],
      },
      {
        title: {
          en: 'My contributions',
          fr: 'Mes contributions',
          zh: '我的贡献',
        },
        items: [
          {
            en: 'Built a ScriptableObject-based player state machine for Idle, Walk, Sprint, Jump, AirJump, JumpFall, CoyoteTime, Land, Attack, Hurt and Die states.',
            fr: 'Création d’une machine à états joueur basée sur ScriptableObject pour les états Idle, Walk, Sprint, Jump, AirJump, JumpFall, CoyoteTime, Land, Attack, Hurt et Die.',
            zh: '构建基于 ScriptableObject 的玩家状态机，覆盖 Idle、Walk、Sprint、Jump、AirJump、JumpFall、CoyoteTime、Land、Attack、Hurt 和 Die 等状态。',
          },
          {
            en: 'Implemented player movement with Unity Physics2D, Unity Input System, ground detection, jump buffering, coyote time, double jump refresh and dash behavior.',
            fr: 'Implémentation du déplacement joueur avec Unity Physics2D, Unity Input System, détection du sol, jump buffer, coyote time, rafraîchissement du double saut et comportement de dash.',
            zh: '使用 Unity Physics2D 和 Unity Input System 实现玩家移动，包括地面检测、跳跃缓冲、土狼时间、二段跳刷新和冲刺行为。',
          },
          {
            en: 'Developed projectile combat systems for player attack waves, teacher attack waves and pooled projectile spawning.',
            fr: 'Développement des systèmes de combat par projectiles pour les vagues d’attaque du joueur, les attaques du professeur et le spawn de projectiles poolés.',
            zh: '开发投射物战斗系统，包括玩家攻击波、老师攻击波和基于对象池的投射物生成。',
          },
          {
            en: 'Created reusable object pooling for projectiles and spawned enemies to reduce repeated instantiation during gameplay.',
            fr: 'Création d’un object pooling réutilisable pour les projectiles et ennemis générés afin de réduire les instanciations répétées pendant le gameplay.',
            zh: '创建可复用对象池，用于投射物和生成敌人，减少 gameplay 期间的重复实例化。',
          },
          {
            en: 'Implemented enemy logic for patrolling, collision damage, taking damage, death states, sound feedback and attack triggers.',
            fr: 'Implémentation de la logique ennemie : patrouille, dégâts de collision, réception de dégâts, états de mort, retours sonores et déclencheurs d’attaque.',
            zh: '实现敌人逻辑，包括巡逻、碰撞伤害、受伤、死亡状态、音效反馈和攻击触发。',
          },
          {
            en: 'Built event-channel-based level interactions for gates, victory triggers and enemy attack activation using ScriptableObject event assets.',
            fr: 'Création d’interactions de niveau basées sur des event channels pour les portes, les déclencheurs de victoire et l’activation des attaques ennemies avec des assets ScriptableObject.',
            zh: '使用 ScriptableObject 事件资源构建基于事件通道的关卡交互，用于门、胜利触发器和敌人攻击激活。',
          },
          {
            en: 'Integrated gameplay audio hooks, menu and volume UI behavior, spawn points, camera management and scene progression.',
            fr: 'Intégration des hooks audio de gameplay, du menu et du contrôle du volume, des points de spawn, de la gestion caméra et de la progression des scènes.',
            zh: '集成 gameplay 音频钩子、菜单与音量 UI 行为、出生点、相机管理和场景推进。',
          },
        ],
      },
    ],
    featured: true,
  },
  {
    slug: 'scitweets-machine-learning',
    title: {
      en: 'SciTweets Scientific Discourse Classification',
      fr: 'Classification du discours scientifique dans SciTweets',
      zh: 'SciTweets 科学话语分类',
    },
    category: {
      en: 'Machine learning group coursework project',
      fr: 'Projet de groupe en machine learning',
      zh: '机器学习课程小组项目',
    },
    summary: {
      en: 'An end-to-end supervised machine learning pipeline for classifying scientific discourse in tweets using text preprocessing, TF-IDF features, class balancing and multiple classical classifiers.',
      fr: 'Un pipeline complet de machine learning supervisé pour classifier le discours scientifique dans des tweets, avec prétraitement du texte, TF-IDF, équilibrage des classes et comparaison de plusieurs classifieurs classiques.',
      zh: '一个用于识别推文中科学话语的端到端监督学习项目，涵盖文本预处理、TF-IDF 特征、类别平衡和多种传统分类模型比较。',
    },
    detailSummary: {
      en: 'This group project was completed for the introductory HAI817 Machine Learning course in the M1 Computer Science program at the University of Montpellier. Its main purpose was educational: to discover the fundamental stages of a supervised machine learning project through a concrete text-classification problem. Using the SciTweets corpus, we jointly designed and implemented a complete workflow, from data exploration and text preprocessing to model comparison, hyperparameter tuning and error analysis.',
      fr: 'Ce projet de groupe a été réalisé dans le cadre de l’UE d’introduction HAI817 Machine Learning du Master 1 Informatique de l’Université de Montpellier. Son objectif principal était pédagogique : découvrir les étapes fondamentales d’un projet de machine learning supervisé à travers un problème concret de classification de textes. À partir du corpus SciTweets, nous avons conçu et implémenté collectivement une chaîne complète, de l’exploration et du prétraitement des données jusqu’à la comparaison des modèles, au réglage des hyperparamètres et à l’analyse des erreurs.',
      zh: '这是蒙彼利埃大学计算机科学硕士一年级 HAI817 机器学习导论课程的小组项目。项目以学习和教学实践为主要目的，通过一个具体的文本分类问题，理解监督机器学习项目的基本阶段。我们基于 SciTweets 语料库，共同设计并实现了从数据探索、文本预处理到模型比较、超参数调优和误差分析的完整流程。',
    },
    tags: ['Python', 'Machine Learning', 'NLP', 'TF-IDF', 'scikit-learn', 'SVM', 'NLTK'],
    repositoryUrl: 'https://github.com/yaqinoel/HAI817I-Projet-MachineLearning',
    sourceNote: {
      en: 'The repository contains the complete Jupyter notebook, datasets, report, experimental figures and instructions for reproducing the pipeline.',
      fr: 'Le dépôt contient le notebook Jupyter complet, les jeux de données, le rapport, les figures expérimentales et les instructions pour reproduire le pipeline.',
      zh: '源码仓库包含完整的 Jupyter Notebook、数据集、报告、实验图表和流程复现说明。',
    },
    coverImage: {
      src: '/media/projects/scitweets-ml/cover.png',
      alt: {
        en: 'Three-dimensional visualization of the SciTweets feature space',
        fr: 'Visualisation tridimensionnelle de l’espace de caractéristiques SciTweets',
        zh: 'SciTweets 特征空间的三维可视化',
      },
      caption: {
        en: 'Three-dimensional projection of tweet representations in the SciTweets classification project.',
        fr: 'Projection tridimensionnelle des représentations de tweets dans le projet de classification SciTweets.',
        zh: 'SciTweets 分类项目中推文表示的三维投影。',
      },
    },
    images: [
      {
        src: '/media/projects/scitweets-ml/distribution_labels.png',
        alt: {
          en: 'Distribution of real SciTweets labels used in the project',
          fr: 'Distribution des labels réels de SciTweets utilisés dans le projet',
          zh: '项目所使用 SciTweets 真实数据的标签分布',
        },
        caption: {
          en: 'The real dataset is imbalanced across the SCI/NON-SCI task and the scientific sub-labels.',
          fr: 'Le jeu de données réel est déséquilibré pour la tâche SCI/NON-SCI et les sous-labels scientifiques.',
          zh: '真实数据在 SCI/NON-SCI 任务和科学子标签之间存在类别不平衡。',
        },
      },
      {
        src: '/media/projects/scitweets-ml/confusion_matrices.png',
        alt: {
          en: 'Confusion matrices for the CLAIM, REF and CONTEXT tweet classifiers',
          fr: 'Matrices de confusion des classifieurs CLAIM, REF et CONTEXT',
          zh: 'CLAIM、REF 和 CONTEXT 推文分类器的混淆矩阵',
        },
        caption: {
          en: 'Final confusion matrices for the three binary scientific sub-label classifiers.',
          fr: 'Matrices de confusion finales des trois classifieurs binaires de sous-labels scientifiques.',
          zh: '三个科学子标签二分类器的最终混淆矩阵。',
        },
      },
      {
        src: '/media/projects/scitweets-ml/preprocessing_comparison.png',
        alt: {
          en: 'Comparison of text preprocessing pipelines for the SCI versus NON-SCI task',
          fr: 'Comparaison des pipelines de prétraitement pour la tâche SCI contre NON-SCI',
          zh: 'SCI 与 NON-SCI 任务的文本预处理流程对比',
        },
        caption: {
          en: 'Keeping stopwords produced the best result on short tweets, reaching 0.8509 accuracy and 0.8287 macro F1.',
          fr: 'La conservation des stopwords donne le meilleur résultat sur les tweets courts, avec 0,8509 d’accuracy et 0,8287 de F1 macro.',
          zh: '对于短推文，保留停用词取得最佳结果，准确率为 0.8509，宏平均 F1 为 0.8287。',
        },
      },
    ],
    sections: [
      {
        title: {
          en: 'Project highlights',
          fr: 'Points clés du projet',
          zh: '项目亮点',
        },
        items: [
          {
            en: 'Studied three related tasks: SCI versus NON-SCI, CLAIM or REF versus CONTEXT for scientific tweets, and mono-label CLAIM versus REF versus CONTEXT classification.',
            fr: 'Étude de trois tâches liées : SCI contre NON-SCI, CLAIM ou REF contre CONTEXT pour les tweets scientifiques, puis classification mono-label CLAIM contre REF contre CONTEXT.',
            zh: '研究三个相关任务：SCI 与 NON-SCI 分类、科学推文中的 CLAIM 或 REF 与 CONTEXT 分类，以及 CLAIM、REF、CONTEXT 单标签三分类。',
          },
          {
            en: 'Explored and corrected the corpus, cleaned URLs, mentions, hashtags and special characters, applied lemmatization, and represented tweets with TF-IDF unigrams and bigrams.',
            fr: 'Exploration et correction du corpus, nettoyage des URLs, mentions, hashtags et caractères spéciaux, lemmatisation, puis représentation TF-IDF avec unigrammes et bigrammes.',
            zh: '完成语料探索与修正，清理 URL、提及、话题标签和特殊字符，进行词形还原，并使用 TF-IDF unigram 与 bigram 表示推文。',
          },
          {
            en: 'Used 1,140 real SciTweets and 446 synthetic tweets for training-set balancing while keeping the test set exclusively real.',
            fr: 'Utilisation de 1 140 tweets réels et de 446 tweets synthétiques pour équilibrer uniquement les ensembles d’entraînement, avec un test set composé exclusivement de données réelles.',
            zh: '使用 1,140 条真实 SciTweets 和 446 条合成推文，仅对训练集进行类别平衡，测试集始终只包含真实数据。',
          },
          {
            en: 'Compared Naive Bayes, Linear SVM, logistic regression, decision trees, K-nearest neighbors and Random Forest with stratified cross-validation and hyperparameter search.',
            fr: 'Comparaison de Naive Bayes, SVM linéaire, régression logistique, arbres de décision, K plus proches voisins et Random Forest par validation croisée stratifiée et recherche d’hyperparamètres.',
            zh: '通过分层交叉验证和超参数搜索比较 Naive Bayes、线性 SVM、逻辑回归、决策树、K 近邻和 Random Forest。',
          },
          {
            en: 'Selected LinearSVC for SCI/NON-SCI, CLAIM and CONTEXT, and logistic regression for REF. The final SCI/NON-SCI classifier achieved 0.7982 accuracy and 0.7683 macro F1 on the real test set.',
            fr: 'Sélection de LinearSVC pour SCI/NON-SCI, CLAIM et CONTEXT, et de la régression logistique pour REF. Le classifieur SCI/NON-SCI final atteint 0,7982 d’accuracy et 0,7683 de F1 macro sur le test réel.',
            zh: 'SCI/NON-SCI、CLAIM 和 CONTEXT 最终采用 LinearSVC，REF 采用逻辑回归。最终 SCI/NON-SCI 分类器在真实测试集上达到 0.7982 准确率和 0.7683 宏平均 F1。',
          },
          {
            en: 'Preprocessing experiments showed that retaining stopwords improved performance on short tweets. Error and Chi-squared feature analysis also exposed the limits of a small, imbalanced corpus and TF-IDF representations.',
            fr: 'Les expériences de prétraitement montrent que conserver les stopwords améliore les performances sur les tweets courts. L’analyse des erreurs et des features par Chi² met aussi en évidence les limites d’un corpus petit et déséquilibré et de la représentation TF-IDF.',
            zh: '预处理实验表明，在短推文中保留停用词反而能提升效果。误差分析和卡方特征分析也揭示了小规模、不平衡语料以及 TF-IDF 表示的局限。',
          },
        ],
      },
    ],
  },
  {
    slug: 'traveling-android-app',
    title: {
      en: 'Traveling - Travel Sharing & Itinerary Planning',
      fr: 'Traveling - Partage de voyages et planification d’itinéraires',
      zh: 'Traveling - 旅行分享与行程规划应用',
    },
    category: {
      en: 'Android group coursework project',
      fr: 'Projet Android de groupe',
      zh: '安卓课程小组项目',
    },
    summary: {
      en: 'A Kotlin Android application connecting community travel content with personalized itinerary planning. I was primarily responsible for the TravelShare publishing, discovery and social features.',
      fr: 'Une application Android en Kotlin reliant les contenus de voyage partagés à la planification personnalisée d’itinéraires. J’étais principalement responsable des fonctions de publication, de découverte et d’interaction de TravelShare.',
      zh: '一款将用户旅行分享与个性化行程规划结合的 Kotlin 安卓应用。我主要负责 TravelShare 的发布、内容发现和社交互动功能。',
    },
    detailSummary: {
      en: 'Traveling was developed collaboratively by two students for the HAI811I Mobile Programming course at the University of Montpellier. This Kotlin Android application connects community travel content with personalized itinerary planning: TravelShare supports publishing, discovering and interacting with travel posts, while TravelPath generates routes from user preferences, budget, time and weather constraints. I was primarily responsible for the TravelShare module.',
      fr: 'Traveling a été développé en binôme dans le cadre du cours HAI811I Programmation mobile à l’Université de Montpellier. Cette application Android en Kotlin relie les contenus de voyage partagés par les utilisateurs à la planification personnalisée d’itinéraires : TravelShare permet de publier, découvrir et commenter des voyages, tandis que TravelPath génère des parcours selon les préférences, le budget, le temps disponible et la météo. J’étais principalement responsable du module TravelShare.',
      zh: 'Traveling 是蒙彼利埃大学 HAI811I 移动编程课程中的两人合作项目。这款 Kotlin 安卓应用将用户分享的旅行内容与个性化行程规划连接起来：TravelShare 支持旅行内容的发布、发现与互动，TravelPath 则根据偏好、预算、时间和天气条件生成路线。我主要负责 TravelShare 模块。',
    },
    tags: ['Kotlin', 'Jetpack Compose', 'Firebase', 'MVVM', 'Google Maps', 'ML Kit'],
    repositoryUrl: 'https://github.com/yaqinoel/ProjetMobile-HAI811I',
    demoUrl: 'https://github.com/yaqinoel/ProjetMobile-HAI811I#demo',
    sourceNote: {
      en: 'The repository contains the complete feature list, architecture, Firebase data model and full demonstration video. Firebase configuration files and API keys are intentionally excluded.',
      fr: 'Le dépôt présente la liste complète des fonctionnalités, l’architecture, le modèle de données Firebase et la vidéo de démonstration intégrale. Les fichiers de configuration Firebase et les clés API sont volontairement exclus.',
      zh: '源码仓库包含完整功能说明、架构、Firebase 数据模型和完整演示视频。Firebase 配置文件与 API 密钥未包含在公开仓库中。',
    },
    coverImage: {
      src: '/media/projects/traveling/poster.png',
      alt: {
        en: 'TravelShare and TravelPath logos for the Traveling Android application',
        fr: 'Logos TravelShare et TravelPath de l’application Android Traveling',
        zh: 'Traveling 安卓应用的 TravelShare 与 TravelPath 标志',
      },
      caption: {
        en: 'TravelShare and TravelPath, the two connected modules of Traveling.',
        fr: 'TravelShare et TravelPath, les deux modules connectés de Traveling.',
        zh: 'Traveling 中相互连接的 TravelShare 与 TravelPath 两个模块。',
      },
    },
    video: {
      mp4: '/media/projects/traveling/demo.mp4',
      poster: '/media/projects/traveling/poster.png',
      caption: {
        en: 'Short demonstration of the Traveling Android application. The complete video is available from the Demo link.',
        fr: 'Courte démonstration de l’application Android Traveling. La vidéo complète est accessible via le lien Démo.',
        zh: 'Traveling 安卓应用短演示。完整视频可通过 Demo 链接查看。',
      },
    },
    sections: [
      {
        title: {
          en: 'Project highlights',
          fr: 'Points clés du projet',
          zh: '项目亮点',
        },
        items: [
          {
            en: 'TravelShare provides a complete publication workflow with up to 14 photos, metadata, tags, exact or approximate map locations, voice notes, visibility settings and ML Kit image labels.',
            fr: 'TravelShare propose un flux de publication complet avec jusqu’à 14 photos, métadonnées, tags, localisation exacte ou approximative, notes vocales, visibilité et labels d’image générés avec ML Kit.',
            zh: 'TravelShare 提供完整发布流程，支持最多 14 张照片、元数据、标签、精确或模糊地图位置、语音备注、可见性设置以及 ML Kit 图像标签。',
          },
          {
            en: 'Travel content can be explored through list, grid and map views with text or voice search, date and category filters, geographic radius filtering and similar-photo discovery.',
            fr: 'Les contenus peuvent être explorés en liste, grille ou carte, avec recherche textuelle ou vocale, filtres par date, catégorie et rayon géographique, ainsi que recherche de photos similaires.',
            zh: '旅行内容支持列表、网格和地图浏览，并提供文字或语音搜索、日期与类别筛选、地理半径筛选和相似照片发现。',
          },
          {
            en: 'TravelPath generates route options from destination, activities, budget, duration, effort and weather preferences, then presents ordered stops, maps, estimates and offline-ready saved routes.',
            fr: 'TravelPath génère des itinéraires selon la destination, les activités, le budget, la durée, l’effort et la météo, puis présente les étapes, la carte, les estimations et les parcours sauvegardés hors ligne.',
            zh: 'TravelPath 根据目的地、活动、预算、时长、体力与天气偏好生成路线，并展示有序站点、地图、估算信息以及可离线使用的已保存路线。',
          },
          {
            en: 'The bridge between both modules turns shared photo locations into destinations or itinerary candidates and displays related traveler photos for route stops.',
            fr: 'La passerelle entre les deux modules transforme les lieux partagés en destinations ou candidats d’itinéraire et affiche les photos associées aux étapes.',
            zh: '两个模块之间的桥接功能可将分享照片的位置转化为目的地或路线候选点，并在行程站点中展示相关旅行照片。',
          },
          {
            en: 'The application uses MVVM, repositories and StateFlow to separate Jetpack Compose interfaces from Firebase, Maps, weather and local-storage services.',
            fr: 'L’application utilise MVVM, des repositories et StateFlow pour séparer les interfaces Jetpack Compose des services Firebase, cartographiques, météo et de stockage local.',
            zh: '应用采用 MVVM、Repository 与 StateFlow，将 Jetpack Compose 界面和 Firebase、地图、天气及本地存储服务分离。',
          },
        ],
      },
      {
        title: {
          en: 'My contributions',
          fr: 'Mes contributions',
          zh: '我的贡献',
        },
        items: [
          {
            en: 'Designed and implemented the TravelShare user interfaces and user flows with Jetpack Compose and Material 3.',
            fr: 'Conception et implémentation des interfaces et parcours utilisateur de TravelShare avec Jetpack Compose et Material 3.',
            zh: '使用 Jetpack Compose 与 Material 3 设计并实现 TravelShare 的界面和用户流程。',
          },
          {
            en: 'Integrated Firebase data for photo publishing, editing and deletion, media management, public and group visibility, user profiles and personal collections.',
            fr: 'Intégration des données Firebase pour la publication, la modification et la suppression de photos, la gestion des médias, la visibilité publique ou de groupe, les profils et collections personnelles.',
            zh: '集成 Firebase 数据，实现照片发布、编辑与删除、媒体管理、公开或群组可见性、用户资料和个人收藏。',
          },
          {
            en: 'Implemented list, grid and map browsing, text and voice search, filters, geographic-radius queries and similar-photo discovery.',
            fr: 'Implémentation des vues liste, grille et carte, de la recherche textuelle et vocale, des filtres, des requêtes par rayon géographique et de la découverte de photos similaires.',
            zh: '实现列表、网格和地图浏览，文字与语音搜索、筛选、地理半径查询和相似照片发现。',
          },
          {
            en: 'Developed social interactions including likes, saved posts, comments, reports, author following and separate guest and registered-user behavior.',
            fr: 'Développement des interactions sociales : mentions J’aime, favoris, commentaires, signalements, abonnements aux auteurs et comportements distincts pour invités et utilisateurs inscrits.',
            zh: '开发点赞、收藏、评论、举报、关注作者等社交互动，并区分游客与注册用户行为。',
          },
          {
            en: 'Implemented travel groups, configurable notifications, profile customization and location-based actions such as opening directions.',
            fr: 'Implémentation des groupes de voyage, notifications configurables, personnalisation des profils et actions géolocalisées comme l’ouverture d’un itinéraire.',
            zh: '实现旅行群组、可配置通知、资料自定义以及打开导航等基于位置的操作。',
          },
          {
            en: 'Contributed to the TravelShare/TravelPath bridge by sending shared locations into route planning and supporting user-contributed destinations and attractions.',
            fr: 'Contribution à la passerelle TravelShare/TravelPath en transmettant les lieux partagés à la planification et en prenant en charge les destinations et attractions ajoutées par les utilisateurs.',
            zh: '参与 TravelShare 与 TravelPath 的桥接，将分享地点传入路线规划，并支持用户贡献的目的地和景点。',
          },
        ],
      },
    ],
  },
];

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}
