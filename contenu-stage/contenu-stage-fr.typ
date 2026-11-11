#set page(
  paper: "a4",
  margin: (x: 18mm, y: 16mm),
  numbering: "1 / 1",
)

#set text(
  font: "Arial",
  size: 9pt,
  fill: rgb("#263640"),
  lang: "fr",
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
      Intitulés possibles
    ]
    #linebreak()
    #text(size: 8.3pt, fill: muted)[#role-names]

    #v(6pt)
    #description

    #v(6pt)
    #text(size: 8pt, weight: "bold", fill: blue)[
      Exemples de missions
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
    TYPES DE STAGES ET MISSIONS RECHERCHÉS
  ]
  #v(4pt)
  #text(size: 11pt, weight: "bold", fill: blue)[
    Stage de fin d’études - Master 2 Informatique
  ]
  #v(4pt)
  #text(size: 9pt, fill: muted)[
    ZHANG Yaqi - Université de Montpellier - Parcours IMAGINE
  ]
]

#v(13pt)

#block(
  width: 100%,
  fill: pale,
  radius: 5pt,
  inset: 11pt,
)[
  #info("Début souhaité", [Février 2027])
  #info("Durée", [6 mois])
  #info("Localisation", [France, Europe, Chine ou télétravail])
  #info(
    "Type de structure",
    [
      Entreprise technologique, studio de jeux vidéo, équipe R&D,
      laboratoire de recherche ou start-up.
    ],
  )
]

#section("Profil et objectif")

Je suis étudiant en deuxième année de Master Informatique dans le parcours
IMAGINE à l’Université de Montpellier. Je suis également inscrit au double
diplôme Management des Technologies et des Sciences à l’IAE Montpellier.

Je recherche un stage technique de fin d’études portant sur la conception,
le développement, l’expérimentation ou l’optimisation de logiciels 3D,
de systèmes de rendu, de simulations physiques, de solutions de traitement
d’images et de vision, de programmes de jeux vidéo, d’applications immersives
ou de logiciels interactifs.

Les sujets associant des fondements algorithmiques à une application concrète
sont particulièrement pertinents : moteur de rendu, simulateur physique,
système de vision, prototype interactif, logiciel médical, application XR
ou outil technique pour l’animation et l’audiovisuel.

#section("Domaines de postes et contenus de travail")

#job(
  [Logiciels 3D et rendu],
  [
    Stagiaire ingénieur rendu, développeur graphique,
    développeur 3D, stagiaire R&D en informatique graphique,
    développeur traitement et visualisation de données 3D,
    développeur en visualisation scientifique ou industrielle.
  ],
  [
    Ce domaine couvre le développement de logiciels 3D interactifs,
    de logiciels industriels, d’outils de visualisation scientifique
    et de systèmes de rendu. Le travail peut porter sur les algorithmes
    de rendu ou sur l’intégration de fonctions 3D dans un logiciel métier.
  ],
  (
    [Développer des applications 3D interactives ou des outils de visualisation en C++ et OpenGL.],
    [Développer ou améliorer un pipeline de rendu 3D.],
    [Implémenter des shaders, matériaux PBR, ombres et méthodes d’éclairage.],
    [Travailler sur le ray tracing, les structures d’accélération ou la qualité d’image.],
    [Développer des fonctions de visualisation de modèles, d’interaction avec la scène ou de représentation de données 3D.],
    [Analyser et optimiser les performances du rendu.],
  ),
)

#job(
  [Simulation physique],
  [
    Stagiaire développeur simulation physique, programmeur physique,
    développeur simulation interactive ou stagiaire R&D en simulation numérique.
  ],
  [
    Ce domaine concerne les systèmes de simulation physique destinés
    à l’informatique graphique, aux jeux vidéo, aux applications médicales,
    industrielles ou pédagogiques. Il comprend les corps rigides et déformables,
    les collisions, les contraintes et les solveurs numériques.
  ],
  (
    [Implémenter ou améliorer des modèles de corps rigides et déformables.],
    [Développer la détection de collisions, la génération de contacts et la réponse aux collisions.],
    [Améliorer la stabilité numérique et les performances des solveurs.],
    [Intégrer les résultats de simulation dans une application interactive, un outil de visualisation ou un jeu.],
    [Utiliser OpenMP ou des applications CUDA de niveau débutant lorsque l’accélération des calculs est nécessaire.],
  ),
)

#job(
  [Traitement d’images, vision par ordinateur et deep learning],
  [
    Stagiaire ingénieur traitement d’images, ingénieur vision,
    développeur d’algorithmes image, stagiaire R&D vision,
    stagiaire machine learning pour la vision ou assistant de projet image.
  ],
  [
    Ce domaine porte sur le traitement, l’analyse et la compréhension
    d’images et de vidéos. Les solutions peuvent combiner des algorithmes
    classiques, du machine learning et du deep learning pour la classification,
    la segmentation, la détection et le suivi.
  ],
  (
    [Préparer, nettoyer, annoter, analyser et visualiser des données image ou vidéo.],
    [Appliquer des méthodes classiques de filtrage, segmentation, détection de contours, détection d’objets et analyse d’images.],
    [Construire des pipelines de données, d’entraînement, de validation et d’évaluation pour le machine learning ou le deep learning.],
    [Implémenter des fonctions de classification, segmentation sémantique ou d’instances, détection et suivi d’objets.],
    [Analyser les métriques, résultats d’entraînement, erreurs et limites des méthodes.],
    [Intégrer les algorithmes de vision dans un logiciel, un système interactif ou une interface de visualisation.],
  ),
)

#job(
  [Programmation de jeux et modules de moteur],
  [
    Stagiaire programmeur gameplay, développeur de jeux,
    développeur outils, programmeur moteur junior,
    programmeur graphique ou physique.
  ],
  [
    Ce domaine regroupe le gameplay, les systèmes de jeu,
    les outils techniques et les modules de rendu, physique,
    scène ou ressources d’un moteur. Les stages portent généralement
    sur une fonction, un module ou un outil interne clairement délimité.
  ],
  (
    [Implémenter des mécaniques de gameplay, contrôles, machines à états et interactions de scène.],
    [Développer des systèmes d’ennemis, combat, événements de niveau, interface ou object pooling.],
    [Contribuer à des modules de rendu, physique, gestion de scène ou gestion de ressources.],
    [Concevoir des composants réutilisables, fonctions d’éditeur ou outils de production de contenu.],
    [Participer au débogage, aux tests et à l’optimisation des modules de jeu ou de moteur.],
  ),
)

#job(
  [Reconstruction 3D, localisation visuelle et perception spatiale],
  [
    Stagiaire vision 3D, stagiaire R&D en reconstruction 3D,
    stagiaire algorithmes SLAM ou localisation visuelle,
    stagiaire R&D en spatial computing.
  ],
  [
    Ce domaine utilise des images, vidéos ou données de profondeur
    pour reconstruire une structure 3D et exploite la vision
    pour la localisation, la reconnaissance et le suivi.
    Les postes peuvent être centrés sur les algorithmes de vision,
    le traitement des données 3D et le développement logiciel,
    sans nécessiter de travail sur le matériel robotique.
  ],
  (
    [Contribuer à l’étalonnage des caméras, à l’extraction de caractéristiques, à la mise en correspondance et à la géométrie multi-vues.],
    [Traiter des nuages de points, cartes de profondeur, maillages ou données RGB-D.],
    [Participer à des modules de reconstruction 3D, odométrie visuelle, localisation ou SLAM.],
    [Appliquer la détection, le suivi ou l’estimation de profondeur à la perception de robots ou de systèmes autonomes.],
    [Développer des outils de visualisation, d’interaction et d’évaluation des résultats 3D.],
  ),
)

#job(
  [Imagerie médicale, simulation médicale et humain numérique],
  [
    Stagiaire traitement d’images médicales, développeur visualisation médicale,
    stagiaire R&D en simulation médicale, biomécanique ou humain numérique.
  ],
  [
    Ce domaine applique le traitement d’images, la vision,
    la modélisation 3D, l’animation, le rendu et la simulation physique
    à l’analyse d’images médicales, à la 3D médicale, à l’humain numérique,
    à la simulation d’organes, à la planification chirurgicale
    et aux systèmes de rééducation.
  ],
  (
    [Traiter des données CT, IRM, échographiques ou d’autres modalités médicales.],
    [Participer à la segmentation et à la reconstruction 3D d’organes, lésions ou structures anatomiques.],
    [Développer des outils de visualisation de coupes, rendu volumique, mesure ou exploration 3D médicale.],
    [Contribuer à la simulation de tissus mous, à la biomécanique, aux dispositifs médicaux ou aux gestes chirurgicaux.],
    [Intégrer image, simulation et interaction dans un logiciel médical ou un prototype de recherche.],
  ),
)

#job(
  [VR, XR et applications immersives],
  [
    Stagiaire développeur VR/XR, développeur d’applications immersives,
    développeur interaction 3D ou stagiaire R&D XR.
  ],
  [
    Ce domaine couvre les applications immersives générales ou sectorielles :
    rééducation médicale, formation, éducation, industrie, culture,
    visualisation de données, recherche expérimentale ou divertissement.
  ],
  (
    [Intégrer un casque VR et développer des interactions immersives.],
    [Créer des scènes 3D, interfaces et mécanismes de navigation spatiale.],
    [Développer des fonctions de saisie, sélection, manipulation, retour utilisateur et interaction multimodale.],
    [Contribuer à des prototypes de rééducation, formation industrielle, éducation ou visualisation.],
    [Collecter, enregistrer et analyser des données d’utilisation ou d’expérimentation.],
  ),
)

#job(
  [Audiovisuel, animation et technologies de contenu numérique],
  [
    Stagiaire développeur rendu, développeur technique animation,
    Pipeline ou Tools Developer, stagiaire R&D simulation ou effets visuels,
    développeur virtual production ou développeur 3D pour le film d’animation.
  ],
  [
    Les postes techniques de l’audiovisuel et de l’animation portent
    sur la modélisation 3D, l’animation, le rendu, les effets physiques,
    le traitement des assets, l’automatisation des pipelines
    et les outils de prévisualisation temps réel.
  ],
  (
    [Contribuer au rendu, aux matériaux, à l’éclairage, à l’échantillonnage, au débruitage ou à la qualité d’image.],
    [Développer des outils d’import, conversion, validation ou traitement par lots des assets.],
    [Automatiser des workflows Blender ou d’autres outils de création numérique avec Python ou C++.],
    [Contribuer à des outils de simulation de tissus, particules, destruction ou autres effets physiques.],
    [Développer des prototypes de prévisualisation temps réel, caméra virtuelle ou production virtuelle.],
  ),
)

#job(
  [Applications interactives et prototypes techniques],
  [
    Stagiaire développeur d’applications interactives,
    développeur d’applications 3D, développeur prototype innovation,
    développeur logiciel de visualisation ou stagiaire développeur R&D.
  ],
  [
    Ce domaine transforme des algorithmes graphiques, image, vision,
    simulation ou IA en logiciels directement manipulables,
    testables et démontrables pour des usages industriels,
    médicaux, pédagogiques, culturels, scientifiques ou créatifs.
  ],
  (
    [Transformer un algorithme ou une méthode de recherche en prototype interactif fonctionnel.],
    [Concevoir des interfaces 2D/3D, interactions de scène et visualisations de données.],
    [Intégrer des modules de rendu, traitement d’images, vision, simulation ou IA.],
    [Faire évoluer les fonctions selon les besoins utilisateurs et participer aux tests, au débogage et à l’optimisation.],
    [Rédiger une documentation technique claire et présenter les résultats.],
  ),
)