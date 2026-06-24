#set page(
  paper: "a4",
  margin: 0mm,
)

#set text(
  font: "Arial",
  size: 8.5pt,
  fill: rgb("#2f3b45"),
)

#set par(
  justify: false,
  leading: 0.48em,
)

#let navy = rgb("#193e59")
#let blue = rgb("#26779a")
#let pale-blue = rgb("#eaf3f7")
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
    stroke: (
      bottom: 1.2pt
        + if light { white } else { blue },
    ),
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

      #side-label-compact("E-mail", [
        yaqizhang.unique\@
        outlook.com
      ])
      #side-label("Numéro", [+33(0)766968225])
      #side-label("Portfolio", [yaqinoel.github.io])
      #side-label("Mobilité", [France, Europe, Chine, télétravail])

      #v(1fr)
      #section-title("Objectif", light: true)
      #text(size: 8.3pt, fill: white)[
        Stage M2 de 6 mois à partir de février 2027 en
        informatique graphique, traitement d'images,
        vision par ordinateur, IA, simulation physique,
        jeu vidéo ou XR.
      ]

      #v(1fr)
      #section-title("Compétences", light: true)

      #side-label("Programmation", [C,C++, C\#, Python, Java])
      #side-label(
        "Informatique graphique",
        [OpenGL, GLSL, ray tracing, rendu PBR, rendu temps réel, simulation physique en temps réel, traitement géométrique],
      )
      #side-label(
        "Traitement d'images",
        [Encodage d'images, segmentation d'images, détection de contours, analyse d'images],
      )
      #side-label(
        "IA",
        [Machine learning, Deep learning(base)],
      )
      #side-label(
        "Outils",
        [Git, Linux, Unity, Blender, OpenMP, OpenXR],
      )

      #v(1fr)
      #section-title("Langues", light: true)
      #side-label("Français", [Professionnel])
      #side-label("Anglais", [Professionnel])
      #side-label("Chinois", [Langue maternelle])
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

      #text(size: 27pt, weight: "bold", fill: navy)[
        YAQI ZHANG
      ]

      #v(-12pt)
      #text(size: 8.5pt, weight: "bold", fill: blue)[
        INFORMATIQUE GRAPHIQUE | IMAGE | IA | SIMULATION | JEUX VIDEO | VR
      ]

      #v(4pt)
      #text(size: 7.6pt, fill: muted)[
        Étudiant en deuxième année de Master Informatique,
        parcours IMAGINE, à l'Université de Montpellier.
        Je développe des systèmes interactifs mêlant rendu 3D,
        simulation physique, traitement d'images, intelligence artificielle,
        développement de jeux vidéo et réalité virtuelle.
      ]

      #v(4pt)
      #main-section-title("Formation")

      #education-entry(
        [Master Informatique - Parcours IMAGINE],
        [Université de Montpellier],
        [2025-2027],
        [
          M1 terminé, entrée en M2. Rang 3/32, mention bien.
          Formation en informatique graphique, traitement et analyse d'images,
          intelligence artificielle, jeux vidéo et VR.
        ],
      )
      #education-entry(
        [Master Management des Technologies et des Sciences],
        [IAE Montpellier - Double diplôme avec la Faculté des Sciences],
        [2025-2027],
        [
          Formation complémentaire en gestion de projet,
          management de l'innovation, stratégie
          et transformation numérique.
        ],
      )
      #education-entry(
        [DUEF B2 - Études françaises],
        [Université de Perpignan Via Domitia],
        [2024-2025],
        [
          Formation intensive de français destinée à préparer
          la poursuite d'études supérieures en France.
        ],
      )
      #education-entry(
        [Master en génie logiciel],
        [Université Beihang],
        [09/2022-12/2023],
        [
          Études en génie logiciel pendant
          environ un an et demi avant une réorientation académique
          et la poursuite de mes études en France.
        ],
      )
      #education-entry(
        [Licence en génie logiciel],
        [Université de technologie du Henan],
        [2018-2022],
        [
          Formation de quatre ans en programmation, structures
          de données, systèmes, réseaux, bases de données
          et développement logiciel.
        ],
      )

      #v(1pt)
      #main-section-title("Projets sélectionnés")

      #dated-title(
        [NomRigide - Simulateur PBD de corps déformables],
        [2026],
      )
      #cv-bullet([
        Projet TER de recherche en C++/OpenGL consacré à la
        simulation temps réel de corps déformables par
        Position Based Dynamics.
      ])
      #cv-bullet([
        Implémentation de contraintes de collision, de Small Steps,
        d'un solveur Jacobi parallèle avec OpenMP et d'outils
        d'analyse des performances.
      ])
      #v(1.5pt)

      #dated-title([Physicraft - Moteur de jeu 3D], [2026])
      #cv-bullet([
        Moteur de jeu développé en C++/OpenGL avec terrain voxel
        procédural, interactions, rendu PBR et physique
        personnalisée de corps rigides.
      ])
      #cv-bullet([
        Responsable principal du rendu et de la physique :
        IBL HDR, shadow mapping, Sweep and Prune,
        détection de collisions et solveur d'impulsions.
      ])
      #v(1.5pt)

      #dated-title([Ray tracer CPU], [2025])
      #cv-bullet([
        Ray tracer CPU en C++ prenant en charge réflexion,
        réfraction, ombres douces, textures et maillages triangulaires.
      ])
      #cv-bullet([
        Accélération des intersections par Kd-Tree,
        parallélisation du rendu avec OpenMP et anti-crénelage MSAA.
      ])
      #v(1.5pt)

      #dated-title([GJ Fly - Plateformer 2D de 3X-Schools GameJam], [2023])
      #cv-bullet([
        Développement sous Unity/C\# d'un jeu de plateforme
        multi-niveaux avec saut, dash, combat, ennemis et obstacles.
      ])
      #cv-bullet([
        Programmation de la machine à états du joueur,
        des interactions de niveau, des projectiles
        et de l'object pooling.
      ])

      #v(3pt)
      #main-section-title("Expériences")

      #dated-title(
        [Laboratoire de réalité virtuelle - Université Beihang],
        [04/2023-08/2023],
      )
      #cv-bullet([
        Période d'apprentissage au sein du laboratoire de mon
        directeur, consacrée à infographique
        et au développement d'applications VR.
      ])
      #cv-bullet([
        Participation au développement d'un système d'évaluation
        de la navigation spatiale en VR, projet piloté par
        la Faculté de psychologie de l'Université normale de Pékin.
      ])
      #v(2pt)

      #dated-title(
        [JingHang Telek Technology (Pékin) - Développeur Java full-stack | Temps plein],
        [07/2022-02/2023],
      )
      #cv-bullet([
        Participation au développement d'un système d'analyse
        des pertes de ligne pour State Grid Jiangxi.
      ])
      #cv-bullet([
        Développement des principales fonctionnalités backend
        et d'interfaces utilisateur simples et ergonomiques.
      ])

      #place(
        bottom + left,
        text(size: 6.8pt, fill: muted)[
          Portfolio, démonstrations et dépôts :
          https://yaqinoel.github.io
        ],
      )
    ]
  ],
)
