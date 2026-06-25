#set page(paper: "a4", margin: 0mm)

#set text(
  font: "Arial",
  size: 8.5pt,
  fill: rgb("#2f3b45"),
)

#set par(justify: false, leading: 0.48em)

#let navy = rgb("#193e59")
#let blue = rgb("#26779a")
#let muted = rgb("#5b6974")

#let section-title(title, light: false) = {
  set text(
    size: 11pt,
    weight: "bold",
    fill: if light { white } else { navy },
  )
  block(
    width: 100%,
    inset: (bottom: 5pt),
    stroke: (bottom: 1.2pt + if light { white } else { blue }),
  )[
    #upper(title)
  ]
}

#let main-section-title(title) = {
  set text(size: 10pt, weight: "bold", fill: navy)
  block(
    width: 100%,
    inset: (bottom: 6pt),
    stroke: (bottom: 1.2pt + blue),
  )[
    #upper(title)
  ]
  v(2pt)
}

#let side-label(title, body) = {
  text(size: 7pt, weight: "bold", fill: rgb("#b8d8e5"))[
    #upper(title)
  ]
  linebreak()
  text(size: 8.3pt, fill: white)[#body]
  v(2pt)
}

#let side-label-compact(title, body) = {
  text(size: 7pt, weight: "bold", fill: rgb("#b8d8e5"))[
    #upper(title)
  ]
  linebreak()
  text(size: 7.4pt, fill: white)[#body]
  v(2pt)
}

#let dated-title(title, date) = {
  grid(
    columns: (1fr, auto),
    column-gutter: 5pt,
    text(weight: "bold", size: 8.3pt)[#title],
    text(weight: "bold", size: 7.1pt, fill: blue)[#date],
  )
}

#let cv-bullet(body) = {
  grid(
    columns: (6pt, 1fr),
    column-gutter: 2pt,
    text(fill: blue, weight: "bold")[-],
    text(size: 7.15pt, fill: muted)[#body],
  )
}

#let education-entry(degree, school, date, details) = {
  dated-title(degree, date)
  text(size: 7.2pt, weight: "bold", fill: blue)[#school]
  v(1pt)
  text(size: 7.1pt, fill: muted)[#details]
  v(2.5pt)
}

#grid(
  columns: (54mm, 1fr),
  column-gutter: 0mm,
  [
    #block(
      width: 100%,
      height: 297mm,
      fill: navy,
      inset: (x: 8mm, y: 12mm),
    )[
      #align(center)[
        #block(
          width: 34mm,
          height: 34mm,
          radius: 50%,
          clip: true,
        )[
          #image(
            "../public/media/profile/yaqi-zhang.jpg",
            width: 34mm,
            height: 34mm,
            fit: "cover",
          )
        ]
      ]
      #v(1fr)

      #section-title("Contact", light: true)
      #side-label-compact("Email", [
        yaqizhang.unique\@
        outlook.com
      ])
      #side-label("Phone", [+33 (0)7 66 96 82 25])
      #side-label("Portfolio", [yaqinoel.github.io])
      #side-label("Mobility", [France, Europe, China, remote])

      #v(1fr)
      #section-title("Objective", light: true)
      #text(size: 8.3pt, fill: white)[
        Seeking a six-month M2 internship from February 2027
        in computer graphics, image processing, computer vision,
        AI, physical simulation, game development or XR.
      ]

      #v(1fr)
      #section-title("Skills", light: true)
      #side-label("Programming", [C, C++, C\#, Python, Java])
      #side-label(
        "Computer graphics",
        [OpenGL, GLSL, ray tracing, PBR, real-time rendering, real-time physics simulation, geometry processing],
      )
      #side-label(
        "Image processing",
        [Image coding, segmentation, edge detection, image analysis],
      )
      #side-label(
        "AI",
        [Machine learning, foundational deep learning],
      )
      #side-label(
        "Tools",
        [Git, Linux, Unity, Blender, OpenMP, OpenXR, CUDA],
      )

      #v(1fr)
      #section-title("Languages", light: true)
      #side-label("French", [Professional working proficiency])
      #side-label("English", [Professional working proficiency])
      #side-label("Chinese", [Native])
      #v(1fr)
    ]
  ],
  [
    #block(
      width: 100%,
      height: 297mm,
      inset: (left: 7mm, right: 7mm, top: 8mm, bottom: 6mm),
    )[
      #set par(leading: 0.32em)

      #text(size: 27pt, weight: "bold", fill: navy)[YAQI ZHANG]

      #v(-12pt)
      #text(size: 8.5pt, weight: "bold", fill: blue)[
        COMPUTER GRAPHICS | IMAGE | AI | SIMULATION | GAME DEVELOPMENT | VR
      ]

      #v(4pt)
      #text(size: 7.6pt, fill: muted)[
        Second-year Master's student in Computer Science in the IMAGINE
        program at Université de Montpellier. I develop interactive systems
        combining 3D rendering, physical simulation, image processing,
        artificial intelligence, game development and virtual reality.
      ]

      #v(4pt)
      #main-section-title("Education")

      #education-entry(
        [Master in Computer Science - IMAGINE],
        [Université de Montpellier],
        [2025-2027],
        [
          M1 completed, entering M2. Ranked 3/32, mention bien.
          Computer graphics, image processing and analysis,
          artificial intelligence, game development and VR.
        ],
      )
      #education-entry(
        [Master in Management of Technologies and Sciences],
        [IAE Montpellier - Double degree with the Faculty of Sciences],
        [2025-2027],
        [
          Complementary training in project management,
          innovation management, strategy and digital transformation.
        ],
      )
      #education-entry(
        [DUEF B2 - French Studies],
        [Université de Perpignan Via Domitia],
        [2024-2025],
        [
          Intensive French program preparing international students
          for graduate studies in France.
        ],
      )
      #education-entry(
        [Master's Studies in Software Engineering],
        [Beihang University],
        [09/2022-12/2023],
        [
          Studied software engineering for approximately one and a half years
          before changing academic direction and continuing in France.
        ],
      )
      #education-entry(
        [Bachelor in Software Engineering],
        [Henan University of Technology],
        [2018-2022],
        [
          Four-year degree covering programming, data structures,
          systems, networks, databases and software engineering.
        ],
      )

      #v(1pt)
      #main-section-title("Selected projects")

      #dated-title(
        [NomRigide - PBD Soft-Body Simulator],
        [2026],
      )
      #cv-bullet([
        Research-oriented TER project in C++/OpenGL for real-time
        soft-body simulation using Position Based Dynamics.
      ])
      #cv-bullet([
        Implemented collision constraints, Small Steps,
        an OpenMP-parallel Jacobi solver and performance analysis tools.
      ])
      #v(1.5pt)

      #dated-title([Physicraft - 3D Game Engine], [2026])
      #cv-bullet([
        C++/OpenGL engine with procedural voxel terrain,
        interactions, PBR rendering and custom rigid-body physics.
      ])
      #cv-bullet([
        Primarily responsible for rendering and physics:
        HDR IBL, shadow mapping, collision detection and impulse solving.
      ])
      #v(1.5pt)

      #dated-title([CPU Ray Tracer], [2025])
      #cv-bullet([
        C++ renderer supporting reflection, refraction, soft shadows,
        textures and triangle meshes.
      ])
      #cv-bullet([
        Kd-Tree acceleration, OpenMP parallel rendering and MSAA.
      ])
      #v(1.5pt)

      #dated-title([GJ Fly - 2D Platformer, 3X-Schools GameJam], [2023])
      #cv-bullet([
        Unity/C\# multi-level platformer with jumping, dashing,
        combat, enemies and environmental hazards.
      ])
      #cv-bullet([
        Programmed the player state machine, level interactions,
        projectiles and object pooling.
      ])

      #v(3pt)
      #main-section-title("Experience")

      #dated-title(
        [Virtual Reality Laboratory - Beihang University],
        [04/2023-08/2023],
      )
      #cv-bullet([
        Studied computer graphics and VR application development
        in my academic advisor's laboratory.
      ])
      #cv-bullet([
        Contributed to a VR spatial-navigation assessment system
        led by the Faculty of Psychology at Beijing Normal University.
      ])
      #v(2pt)

      #dated-title(
        [JingHang Telek Technology, Beijing - Java Full-Stack Developer | Full-time],
        [07/2022-02/2023],
      )
      #cv-bullet([
        Contributed to a line-loss analysis system
        for State Grid Jiangxi.
      ])
      #cv-bullet([
        Developed core backend functionality
        and clear, user-friendly interfaces.
      ])

      #place(
        bottom + left,
        text(size: 6.8pt, fill: muted)[
          Portfolio, demos and source repositories:
          https://yaqinoel.github.io
        ],
      )
    ]
  ],
)
