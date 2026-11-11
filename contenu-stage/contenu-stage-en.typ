#set page(
  paper: "a4",
  margin: (x: 18mm, y: 16mm),
  numbering: "1 / 1",
)

#set text(
  font: "Arial",
  size: 9pt,
  fill: rgb("#263640"),
  lang: "en",
)

#set par(justify: false, leading: 0.62em)

#let navy = rgb("#173e59")
#let blue = rgb("#267a9c")
#let pale = rgb("#edf5f8")
#let muted = rgb("#5c6b75")
#let border-color = rgb("#cad8df")

#let section(title) = {
  v(10pt)
  text(size: 14pt, weight: "bold", fill: navy)[#title]
  v(3pt)
  rect(width: 100%, height: 1.2pt, fill: blue, stroke: none)
  v(7pt)
}

#let info(label, value) = {
  grid(
    columns: (35mm, 1fr),
    column-gutter: 5mm,
    text(weight: "bold", fill: blue)[#label],
    value,
  )
  v(3pt)
}

#let job(title, role-names, description, missions) = {
  block(
    width: 100%,
    breakable: false,
    stroke: 0.8pt + border-color,
    radius: 5pt,
    inset: 10pt,
  )[
    #text(size: 11pt, weight: "bold", fill: navy)[#title]

    #v(5pt)
    #text(size: 8pt, weight: "bold", fill: blue)[
      Possible role titles
    ]
    #linebreak()
    #text(size: 8.3pt, fill: muted)[#role-names]

    #v(6pt)
    #description

    #v(6pt)
    #text(size: 8pt, weight: "bold", fill: blue)[
      Typical responsibilities
    ]
    #v(2pt)
    #for mission in missions [
      #grid(
        columns: (7pt, 1fr),
        column-gutter: 2pt,
        text(fill: blue)[-],
        text(size: 8.3pt)[#mission],
      )
    ]
  ]
  v(8pt)
}

#align(center)[
  #text(size: 23pt, weight: "bold", fill: navy)[
    TARGET INTERNSHIP ROLES AND RESPONSIBILITIES
  ]
  #v(4pt)
  #text(size: 11pt, weight: "bold", fill: blue)[
    Final-year internship - M2 Computer Science
  ]
  #v(4pt)
  #text(size: 9pt, fill: muted)[
    ZHANG Yaqi - Université de Montpellier - IMAGINE Program
  ]
]

#v(13pt)

#block(
  width: 100%,
  fill: pale,
  radius: 5pt,
  inset: 11pt,
)[
  #info("Preferred start", [February 2027])
  #info("Duration", [6 months])
  #info("Location", [France, Europe, China or remote])
  #info(
    "Organization type",
    [
      Technology company, game studio, R&D team,
      research laboratory or start-up.
    ],
  )
]

#section("Profile and objective")

I am a second-year Master's student in Computer Science in the IMAGINE
program at Université de Montpellier. I am also completing a double degree
in Management of Technologies and Sciences at IAE Montpellier.

I am looking for a technical final-year internship involving the design,
development, experimentation or optimization of 3D software, rendering systems,
physical simulations, image processing and vision solutions, game software,
immersive applications or interactive systems.

Projects combining solid algorithmic foundations with a concrete application
are particularly relevant: rendering engines, physics simulators, vision systems,
interactive prototypes, medical software, XR applications and technical tools
for animation or audiovisual production.

#section("Relevant role families and responsibilities")

#job(
  [3D Software and Rendering],
  [
    Rendering Engineer Intern, Graphics Programmer Intern,
    3D Software Developer Intern, Computer Graphics R&D Intern,
    3D Data Processing and Visualization Intern,
    Scientific or Industrial Visualization Developer Intern.
  ],
  [
    This area covers interactive 3D software, industrial applications,
    scientific visualization tools and rendering systems. Work may focus
    on rendering algorithms or on integrating 3D functionality
    into a larger application.
  ],
  (
    [Develop interactive 3D applications or visualization tools using C++ and OpenGL.],
    [Develop or improve a 3D rendering pipeline.],
    [Implement shaders, PBR materials, shadows and lighting methods.],
    [Work on ray tracing, spatial acceleration structures or image quality.],
    [Develop model viewing, scene interaction, data visualization or industrial 3D features.],
    [Analyze and optimize rendering performance.],
  ),
)

#job(
  [Physical Simulation],
  [
    Physics Simulation Developer Intern, Physics Programmer Intern,
    Interactive Simulation Developer Intern or Numerical Simulation R&D Intern.
  ],
  [
    This area concerns physical simulation systems for computer graphics,
    games, medical, industrial or educational applications.
    It includes rigid and deformable bodies, collisions,
    constraints and numerical solvers.
  ],
  (
    [Implement or improve rigid-body and deformable-body models.],
    [Develop collision detection, contact generation and collision response algorithms.],
    [Improve the numerical stability and performance of solvers.],
    [Integrate simulation results into an interactive application, visualization tool or game.],
    [Use OpenMP or entry-level CUDA implementations when computational acceleration is required.],
  ),
)

#job(
  [Image Processing, Computer Vision and Deep Learning],
  [
    Image Processing Engineer Intern, Computer Vision Engineer Intern,
    Image Algorithm Developer Intern, Vision R&D Intern,
    Machine Learning for Vision Intern or Image Project Assistant.
  ],
  [
    This area covers the processing, analysis and understanding of images
    and videos. Solutions may combine classical algorithms, machine learning
    and deep learning for classification, segmentation, detection and tracking.
  ],
  (
    [Prepare, clean, annotate, analyze and visualize image or video datasets.],
    [Apply classical filtering, segmentation, edge detection, object detection and image analysis methods.],
    [Build data, training, validation and evaluation pipelines for machine learning or deep learning.],
    [Implement image classification, semantic or instance segmentation, object detection and tracking functions.],
    [Analyze metrics, training results, errors and method limitations.],
    [Integrate vision algorithms into software, interactive systems or visualization interfaces.],
  ),
)

#job(
  [Game Programming and Engine Modules],
  [
    Gameplay Programmer Intern, Game Developer Intern,
    Tools Programmer Intern, Junior Engine Programmer Intern,
    Graphics Programmer Intern or Physics Programmer Intern.
  ],
  [
    This area covers gameplay, game systems, technical tools,
    and rendering, physics, scene or resource modules within a game engine.
    Internship work is usually scoped to a specific feature,
    independent module or internal tool.
  ],
  (
    [Implement gameplay mechanics, controls, state machines and scene interactions.],
    [Develop enemy, combat, level-event, UI or object-pooling systems.],
    [Contribute to rendering, physics, scene-management or resource-management modules.],
    [Design reusable components, editor functions or content-production tools.],
    [Participate in debugging, testing and optimization of game or engine modules.],
  ),
)

#job(
  [3D Reconstruction, Visual Localization and Spatial Perception],
  [
    3D Vision Intern, 3D Reconstruction R&D Intern,
    Visual Localization or SLAM Algorithm Intern,
    Spatial Computing R&D Intern.
  ],
  [
    This area reconstructs 3D structure from images, videos or depth data
    and uses visual information for localization, recognition and tracking.
    Roles may focus on vision algorithms, 3D data processing and software,
    without requiring work on robotic mechanical or electronic hardware.
  ],
  (
    [Contribute to camera calibration, feature extraction, matching and multi-view geometry.],
    [Process point clouds, depth maps, meshes or RGB-D data.],
    [Contribute to 3D reconstruction, visual odometry, localization or SLAM modules.],
    [Apply detection, tracking or depth estimation to robotic or autonomous-system perception.],
    [Develop visualization, interaction and evaluation tools for 3D results.],
  ),
)

#job(
  [Medical Imaging, Medical Simulation and Digital Humans],
  [
    Medical Image Processing Intern, Medical Visualization Developer Intern,
    Medical Simulation R&D Intern, Biomechanics Intern
    or Digital Human Developer Intern.
  ],
  [
    This area applies image processing, computer vision, 3D modeling,
    animation, rendering and physical simulation to medical image analysis,
    medical 3D, digital humans, organ or tissue simulation,
    surgical planning and rehabilitation systems.
  ],
  (
    [Process CT, MRI, ultrasound or other medical imaging data.],
    [Contribute to segmentation and 3D reconstruction of organs, lesions or anatomical structures.],
    [Develop slice viewing, volume rendering, measurement or medical 3D visualization tools.],
    [Contribute to soft-tissue, biomechanical, medical-device or surgical-procedure simulation.],
    [Integrate imaging, simulation and interaction into medical software or a research prototype.],
  ),
)

#job(
  [VR, XR and Immersive Applications],
  [
    VR/XR Developer Intern, Immersive Application Developer Intern,
    3D Interaction Developer Intern or XR R&D Intern.
  ],
  [
    This area covers general-purpose and domain-specific immersive applications,
    including medical rehabilitation, training, education, industry,
    cultural experiences, data visualization, experimental research
    and entertainment.
  ],
  (
    [Integrate a VR headset and develop immersive interactions.],
    [Create 3D scenes, interfaces and spatial-navigation mechanisms.],
    [Develop grabbing, selection, manipulation, feedback and multimodal-interaction features.],
    [Contribute to rehabilitation, industrial training, education or visualization prototypes.],
    [Collect, record and analyze usage or experimental data.],
  ),
)

#job(
  [Film, Animation and Digital Content Technology],
  [
    Rendering Developer Intern, Animation Technical Developer Intern,
    Pipeline or Tools Developer Intern, Simulation or VFX R&D Intern,
    Virtual Production Developer Intern or Animation 3D Programmer Intern.
  ],
  [
    Technical roles in film and animation support 3D modeling,
    animation, rendering, physical effects, asset processing,
    pipeline automation and real-time preview tools.
  ],
  (
    [Contribute to rendering, materials, lighting, sampling, denoising or image-quality features.],
    [Develop asset import, conversion, validation or batch-processing tools.],
    [Automate Blender or other digital-content workflows using Python or C++.],
    [Contribute to cloth, particle, destruction or other physical-effect tools.],
    [Develop real-time preview, virtual-camera or virtual-production prototypes.],
  ),
)

#job(
  [Interactive Applications and Technical Prototypes],
  [
    Interactive Application Developer Intern, 3D Application Developer Intern,
    Innovation Prototype Developer Intern, Visualization Software Developer Intern
    or R&D Software Developer Intern.
  ],
  [
    This area turns graphics, imaging, vision, simulation or AI algorithms
    into software that can be directly operated, tested and demonstrated
    in industrial, medical, educational, cultural, scientific
    or creative contexts.
  ],
  (
    [Turn an algorithm or research method into a functional interactive prototype.],
    [Design 2D/3D interfaces, scene interactions and data visualizations.],
    [Integrate rendering, image processing, vision, simulation or AI modules.],
    [Iterate features according to user needs and contribute to testing, debugging and optimization.],
    [Write clear technical documentation and present the results.],
  ),
)

#section("Contact and resources")

#info("Email", [yaqizhang.unique\@outlook.com])
#info("Portfolio", [https://yaqinoel.github.io])
#info("GitHub", [https://github.com/yaqinoel])

#v(8pt)
#text(size: 8pt, fill: muted)[
  This document is intended to be shared with teachers,
  students and professional contacts who may know of an internship,
  R&D team or research laboratory related to one of these areas.
]
