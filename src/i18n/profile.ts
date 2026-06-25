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
    {
      en: 'Computer Graphics',
      fr: 'Informatique graphique',
      zh: '计算机图形学',
    },
    {
      en: 'Image Processing',
      fr: 'Traitement d’images',
      zh: '图像处理',
    },
    {
      en: 'Artificial Intelligence',
      fr: 'Intelligence artificielle',
      zh: '人工智能',
    },
    {
      en: 'Computer Vision',
      fr: 'Vision par ordinateur',
      zh: '计算机视觉',
    },
    {
      en: 'Game Development',
      fr: 'Développement de jeux vidéo',
      zh: '游戏开发',
    },
    {
      en: 'XR / VR',
      fr: 'XR / Réalité virtuelle',
      zh: 'XR / 虚拟现实',
    },
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
    'CUDA',
    'Git',
    'CMake',
    'Linux',
  ],
  skillGroups: [
    {
      title: {
        en: 'Programming',
        fr: 'Programmation',
        zh: '编程语言',
      } satisfies LocalizedText,
      skills: [
        {
          name: {
            en: 'C / C++ - Systems & Performance',
            fr: 'C / C++ - Systèmes et performance',
            zh: 'C / C++ - 系统与高性能开发',
          } satisfies LocalizedText,
          description: {
            en: 'Able to develop object-oriented and performance-sensitive applications for real-time rendering and physical simulation, with an understanding of procedural programming, memory management and low-level data structures.',
            fr: 'Capable de développer des applications orientées objet et sensibles aux performances pour le rendu temps réel et la simulation physique, avec une connaissance de la programmation procédurale, de la gestion de la mémoire et des structures de données bas niveau.',
            zh: '能够开发面向对象且性能敏感的实时渲染与物理仿真应用，并了解过程式编程、内存管理和底层数据结构。',
          } satisfies LocalizedText,
        },
        {
          name: {
            en: 'C# - Interactive Applications',
            fr: 'C# - Applications interactives',
            zh: 'C# - 交互式应用开发',
          } satisfies LocalizedText,
          description: {
            en: 'Experience developing gameplay systems, state machines, reusable components, physics interactions and VR features with Unity.',
            fr: 'Expérience dans le développement de systèmes de gameplay, de machines à états, de composants réutilisables, d’interactions physiques et de fonctionnalités VR avec Unity.',
            zh: '具备使用 Unity 开发游戏玩法系统、状态机、可复用组件、物理交互和 VR 功能的经验。',
          } satisfies LocalizedText,
        },
        {
          name: {
            en: 'Python & Java - Data and Applications',
            fr: 'Python et Java - Données et applications',
            zh: 'Python 与 Java - 数据和应用开发',
          } satisfies LocalizedText,
          description: {
            en: 'Use Python for image processing, machine learning experiments, data analysis and automation. Professional experience using Java in full-stack business application development.',
            fr: 'Utilisation de Python pour le traitement d’images, les expériences de machine learning, l’analyse de données et l’automatisation. Expérience professionnelle avec Java dans le développement full-stack d’applications métier.',
            zh: '使用 Python 进行图像处理、机器学习实验、数据分析和自动化；具备使用 Java 参与全栈企业应用开发的工作经验。',
          } satisfies LocalizedText,
        },
      ],
    },
    {
      title: {
        en: 'Computer Graphics & Simulation',
        fr: 'Informatique graphique et simulation',
        zh: '计算机图形学与仿真',
      } satisfies LocalizedText,
      skills: [
        {
          name: {
            en: 'Rendering',
            fr: 'Rendu',
            zh: '渲染',
          } satisfies LocalizedText,
          description: {
            en: 'Experience developing interactive 3D applications with C++, OpenGL and GLSL. Able to organize forward rendering pipelines and implement lighting, shadows, PBR materials, HDR image-based lighting and ray tracing features, while considering performance and resource usage.',
            fr: 'Expérience du développement d’applications 3D interactives en C++, OpenGL et GLSL. Capable d’organiser des pipelines de rendu forward et d’implémenter l’éclairage, les ombres, les matériaux PBR, l’Image-Based Lighting HDR et des fonctionnalités de ray tracing, en tenant compte des performances et des ressources.',
            zh: '具备使用 C++、OpenGL 和 GLSL 开发交互式 3D 应用的经验。能够组织前向渲染管线，实现光照、阴影、PBR 材质、HDR 基于图像的光照和光线追踪功能，并考虑性能与资源占用。',
          } satisfies LocalizedText,
        },
        {
          name: {
            en: 'Physical Simulation',
            fr: 'Simulation physique',
            zh: '物理仿真',
          } satisfies LocalizedText,
          description: {
            en: 'Experience implementing rigid-body and deformable-body simulation, including collision detection, contact generation, constraints, impulse and position-based solvers, numerical stability and CPU parallelization with OpenMP.',
            fr: 'Expérience dans l’implémentation de simulations de corps rigides et déformables, incluant la détection de collisions, la génération de contacts, les contraintes, les solveurs par impulsions et par positions, la stabilité numérique et la parallélisation CPU avec OpenMP.',
            zh: '具备刚体和软体仿真的实现经验，包括碰撞检测、接触生成、约束、冲量与基于位置的求解器、数值稳定性，以及使用 OpenMP 进行 CPU 并行化。',
          } satisfies LocalizedText,
        },
        {
          name: {
            en: 'Geometry Processing',
            fr: 'Traitement géométrique',
            zh: '几何处理',
          } satisfies LocalizedText,
          description: {
            en: 'Foundational knowledge of mesh and geometric primitive manipulation, spatial relationships and acceleration structures.',
            fr: 'Connaissances fondamentales de la manipulation des maillages et primitives géométriques, des relations spatiales et des structures d’accélération.',
            zh: '具备网格与几何图元处理、空间关系和加速结构方面的基础知识。',
          } satisfies LocalizedText,
        },
      ],
    },
    {
      title: {
        en: 'Image Processing',
        fr: 'Traitement d’images',
        zh: '图像处理',
      } satisfies LocalizedText,
      skills: [
        {
          name: {
            en: 'Image Coding',
            fr: 'Codage d’images',
            zh: '图像编码',
          } satisfies LocalizedText,
          description: {
            en: 'Familiar with image coding methods, including image representation, color spaces, sampling, quantization and compression principles.',
            fr: 'Bonne connaissance des méthodes de codage d’images, notamment la représentation, les espaces colorimétriques, l’échantillonnage, la quantification et les principes de compression.',
            zh: '熟悉图像编码方法，包括图像表示、颜色空间、采样、量化和压缩原理。',
          } satisfies LocalizedText,
        },
        {
          name: {
            en: 'Classical Image Processing',
            fr: 'Traitement d’images classique',
            zh: '传统图像处理',
          } satisfies LocalizedText,
          description: {
            en: 'Experience using classical image processing methods for filtering, segmentation, edge and object detection, and image analysis.',
            fr: 'Expérience de l’utilisation de méthodes classiques pour le filtrage, la segmentation, la détection de contours et d’objets, ainsi que l’analyse d’images.',
            zh: '具备使用传统方法进行图像处理的经验，包括滤波、分割、边缘与目标检测以及图像分析。',
          } satisfies LocalizedText,
        },
        {
          name: {
            en: 'Learning-Based Image Processing',
            fr: 'Traitement d’images par apprentissage',
            zh: '基于学习的图像处理',
          } satisfies LocalizedText,
          description: {
            en: 'Understanding of machine learning and deep learning approaches to image processing and computer vision tasks.',
            fr: 'Connaissance des approches de machine learning et de deep learning appliquées au traitement d’images et aux tâches de vision par ordinateur.',
            zh: '了解使用机器学习和深度学习方法处理图像及解决计算机视觉任务的基本思路。',
          } satisfies LocalizedText,
        },
      ],
    },
    {
      title: {
        en: 'Artificial Intelligence',
        fr: 'Intelligence artificielle',
        zh: '人工智能',
      } satisfies LocalizedText,
      skills: [
        {
          name: {
            en: 'Machine Learning',
            fr: 'Machine Learning',
            zh: '机器学习',
          } satisfies LocalizedText,
          description: {
            en: 'Familiar with the fundamental concepts and workflow of machine learning. Able to clean and analyze data, build training pipelines, evaluate models and interpret training results.',
            fr: 'Connaissance des concepts fondamentaux et du déroulement d’un projet de machine learning. Capable de nettoyer et analyser les données, construire des pipelines d’entraînement, évaluer les modèles et interpréter les résultats.',
            zh: '熟悉机器学习的基础概念和完整流程，能够完成数据清洗与分析、搭建训练管线、评估模型并分析训练结果。',
          } satisfies LocalizedText,
        },
        {
          name: {
            en: 'Deep Learning Fundamentals',
            fr: 'Bases du Deep Learning',
            zh: '深度学习基础',
          } satisfies LocalizedText,
          description: {
            en: 'Understanding of deep learning fundamentals and common methods, including their applications to computer graphics and computer vision.',
            fr: 'Connaissance des fondamentaux et des principales méthodes du deep learning, ainsi que de leurs applications en informatique graphique et en vision par ordinateur.',
            zh: '理解深度学习的基础知识和相关方法，并了解深度学习在计算机图形学与计算机视觉领域中的应用。',
          } satisfies LocalizedText,
        },
      ],
    },
    {
      title: {
        en: 'Tools & Platforms',
        fr: 'Outils et plateformes',
        zh: '工具与平台',
      } satisfies LocalizedText,
      skills: [
        {
          name: {
            en: 'Development & Build Workflow',
            fr: 'Environnement de développement et compilation',
            zh: '开发与构建工作流',
          } satisfies LocalizedText,
          description: {
            en: 'Comfortable working with Git, CMake and Linux for collaborative version control, cross-platform C++ builds, dependency management, command-line development and debugging.',
            fr: 'À l’aise avec Git, CMake et Linux pour le contrôle de version collaboratif, les builds C++ multiplateformes, la gestion des dépendances, le développement en ligne de commande et le débogage.',
            zh: '熟悉使用 Git、CMake 和 Linux 进行协作版本控制、跨平台 C++ 构建、依赖管理、命令行开发与调试。',
          } satisfies LocalizedText,
        },
        {
          name: {
            en: 'Game & XR Development',
            fr: 'Développement de jeux et XR',
            zh: '游戏与 XR 开发',
          } satisfies LocalizedText,
          description: {
            en: 'Experience using Unity for gameplay, scene interactions, UI, physics and VR features, Blender for preparing 3D assets and scenes, and OpenXR for headset integration and immersive interactions.',
            fr: 'Expérience avec Unity pour le gameplay, les interactions de scène, l’interface, la physique et la VR, Blender pour préparer les assets et scènes 3D, et OpenXR pour l’intégration des casques et des interactions immersives.',
            zh: '具备使用 Unity 开发游戏玩法、场景交互、UI、物理和 VR 功能，使用 Blender 准备 3D 资源与场景，以及使用 OpenXR 集成头显和沉浸式交互的经验。',
          } satisfies LocalizedText,
        },
        {
          name: {
            en: 'Parallel Computing',
            fr: 'Calcul parallèle',
            zh: '并行计算',
          } satisfies LocalizedText,
          description: {
            en: 'Experience using OpenMP to parallelize CPU workloads, profile execution stages and evaluate performance gains and bottlenecks. Entry-level practical experience with CUDA for accelerating image processing and physical simulation workloads on the GPU.',
            fr: 'Expérience de l’utilisation d’OpenMP pour paralléliser les calculs CPU, profiler les étapes d’exécution et évaluer les gains de performance et les goulots d’étranglement. Première expérience pratique avec CUDA pour accélérer sur GPU des traitements d’images et des simulations physiques.',
            zh: '具备使用 OpenMP 并行化 CPU 计算、分析执行阶段以及评估性能提升和瓶颈的经验。具备 CUDA 入门级实践经验，曾使用 GPU 加速图像处理和物理仿真计算。',
          } satisfies LocalizedText,
        },
      ],
    },
    {
      title: {
        en: 'Soft Skills',
        fr: 'Compétences humaines',
        zh: '软技能',
      } satisfies LocalizedText,
      skills: [
        {
          name: {
            en: 'Teamwork',
            fr: 'Travail en équipe',
            zh: '团队合作',
          } satisfies LocalizedText,
          description: {
            en: 'Experience collaborating on academic, research-oriented and GameJam projects, discussing technical decisions and coordinating shared implementation work.',
            fr: 'Expérience de la collaboration dans des projets académiques, orientés recherche et de GameJam, avec discussion des choix techniques et coordination du travail d’implémentation.',
            zh: '具备参与课程、科研导向和 GameJam 小组项目的经验，能够共同讨论技术决策并协调开发工作。',
          } satisfies LocalizedText,
        },
        {
          name: {
            en: 'Working Under Pressure',
            fr: 'Travail sous pression',
            zh: '抗压与时间管理',
          } satisfies LocalizedText,
          description: {
            en: 'Able to prioritize tasks, maintain implementation quality and deliver functional results within tight academic and GameJam deadlines.',
            fr: 'Capable de prioriser les tâches, de maintenir la qualité de l’implémentation et de livrer des résultats fonctionnels dans des délais académiques ou de GameJam courts.',
            zh: '能够在紧张的课程或 GameJam 时间限制下安排任务优先级、保持实现质量并交付可运行结果。',
          } satisfies LocalizedText,
        },
        {
          name: {
            en: 'Independent Learning',
            fr: 'Apprentissage autonome',
            zh: '自主学习',
          } satisfies LocalizedText,
          description: {
            en: 'Able to study technical documentation and research material independently, reproduce methods and apply new concepts to practical projects.',
            fr: 'Capable d’étudier de manière autonome la documentation technique et les ressources de recherche, de reproduire des méthodes et d’appliquer de nouveaux concepts à des projets concrets.',
            zh: '能够自主阅读技术文档和研究资料、复现相关方法，并将新知识应用到实际项目中。',
          } satisfies LocalizedText,
        },
        {
          name: {
            en: 'Adaptability',
            fr: 'Capacité d’adaptation',
            zh: '适应能力',
          } satisfies LocalizedText,
          description: {
            en: 'Able to adapt to new technical domains, development environments and multicultural teams, supported by academic and professional experience in China and France.',
            fr: 'Capable de m’adapter à de nouveaux domaines techniques, environnements de développement et équipes multiculturelles, grâce à des expériences académiques et professionnelles en Chine et en France.',
            zh: '能够适应新的技术领域、开发环境和多文化团队，并具有在中国和法国学习与工作的经历。',
          } satisfies LocalizedText,
        },
      ],
    },
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
