from pathlib import Path

from reportlab.lib.colors import HexColor, white
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "Yaqi-ZHANG-CV-Francais-2027.pdf"

PAGE_W, PAGE_H = A4
NAVY = HexColor("#173A56")
BLUE = HexColor("#2B7593")
LIGHT_BLUE = HexColor("#EAF3F7")
TEXT = HexColor("#27333C")
MUTED = HexColor("#596873")
LINE = HexColor("#C9D6DD")

FONT_DIR = Path("/System/Library/Fonts/Supplemental")
pdfmetrics.registerFont(TTFont("Arial", FONT_DIR / "Arial.ttf"))
pdfmetrics.registerFont(TTFont("Arial-Bold", FONT_DIR / "Arial Bold.ttf"))
pdfmetrics.registerFont(TTFont("Arial-Italic", FONT_DIR / "Arial Italic.ttf"))


def wrap(text: str, font: str, size: float, max_width: float) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        candidate = f"{current} {word}".strip()
        if pdfmetrics.stringWidth(candidate, font, size) <= max_width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_wrapped(
    pdf: canvas.Canvas,
    text: str,
    x: float,
    y: float,
    width: float,
    *,
    font: str = "Arial",
    size: float = 8.2,
    leading: float = 10.4,
    color=TEXT,
) -> float:
    pdf.setFont(font, size)
    pdf.setFillColor(color)
    for line in wrap(text, font, size, width):
        pdf.drawString(x, y, line)
        y -= leading
    return y


def section_title(
    pdf: canvas.Canvas,
    title: str,
    x: float,
    y: float,
    width: float,
    *,
    color=NAVY,
) -> float:
    pdf.setFillColor(color)
    pdf.setFont("Arial-Bold", 10.2)
    pdf.drawString(x, y, title.upper())
    pdf.setStrokeColor(BLUE if color == NAVY else white)
    pdf.setLineWidth(1.2)
    pdf.line(x, y - 4, x + width, y - 4)
    return y - 15


def sidebar_item(
    pdf: canvas.Canvas,
    label: str,
    value: str,
    x: float,
    y: float,
    width: float,
    *,
    url: str | None = None,
) -> float:
    pdf.setFillColor(HexColor("#B9D7E4"))
    pdf.setFont("Arial-Bold", 7)
    pdf.drawString(x, y, label.upper())
    y -= 10
    start_y = y
    y = draw_wrapped(
        pdf,
        value,
        x,
        y,
        width,
        font="Arial",
        size=8.1,
        leading=10,
        color=white,
    )
    if url:
        pdf.linkURL(url, (x, y + 8, x + width, start_y + 3), relative=0)
    return y - 6


def skill_block(
    pdf: canvas.Canvas,
    title: str,
    text: str,
    x: float,
    y: float,
    width: float,
) -> float:
    pdf.setFillColor(HexColor("#B9D7E4"))
    pdf.setFont("Arial-Bold", 7.4)
    pdf.drawString(x, y, title.upper())
    y -= 10
    y = draw_wrapped(
        pdf,
        text,
        x,
        y,
        width,
        font="Arial",
        size=8,
        leading=10,
        color=white,
    )
    return y - 6


def dated_heading(
    pdf: canvas.Canvas,
    title: str,
    date: str,
    x: float,
    y: float,
    width: float,
    *,
    size: float = 8.7,
) -> float:
    date_width = pdfmetrics.stringWidth(date, "Arial-Bold", 7.5)
    title_width = width - date_width - 10
    title_lines = wrap(title, "Arial-Bold", size, title_width)
    pdf.setFillColor(TEXT)
    pdf.setFont("Arial-Bold", size)
    for index, line in enumerate(title_lines):
        pdf.drawString(x, y - index * 10.5, line)
    pdf.setFillColor(BLUE)
    pdf.setFont("Arial-Bold", 7.5)
    pdf.drawRightString(x + width, y, date)
    return y - max(11, len(title_lines) * 10.5)


def bullet(
    pdf: canvas.Canvas,
    text: str,
    x: float,
    y: float,
    width: float,
    *,
    size: float = 7.55,
    leading: float = 9.3,
) -> float:
    pdf.setFillColor(BLUE)
    pdf.setFont("Arial-Bold", size)
    pdf.drawString(x, y, "-")
    return draw_wrapped(
        pdf,
        text,
        x + 8,
        y,
        width - 8,
        font="Arial",
        size=size,
        leading=leading,
        color=MUTED,
    )


def degree_card(
    pdf: canvas.Canvas,
    x: float,
    y: float,
    width: float,
    title: str,
    subtitle: str,
    body: str,
) -> None:
    height = 92
    pdf.setFillColor(LIGHT_BLUE)
    pdf.roundRect(x, y - height, width, height, 5, stroke=0, fill=1)
    pdf.setFillColor(NAVY)
    pdf.setFont("Arial-Bold", 8.8)
    title_y = y - 14
    for line in wrap(title, "Arial-Bold", 8.8, width - 14):
        pdf.drawString(x + 7, title_y, line)
        title_y -= 10
    pdf.setFillColor(BLUE)
    pdf.setFont("Arial-Bold", 7.2)
    pdf.drawString(x + 7, title_y - 1, subtitle)
    draw_wrapped(
        pdf,
        body,
        x + 7,
        title_y - 13,
        width - 14,
        font="Arial",
        size=7.45,
        leading=9,
        color=MUTED,
    )


def generate() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    pdf = canvas.Canvas(str(OUTPUT), pagesize=A4)
    pdf.setTitle("Yaqi ZHANG - CV - Français")
    pdf.setAuthor("Yaqi ZHANG")
    pdf.setSubject("Candidature stage M2 - Informatique graphique, vision, IA et développement logiciel")

    margin = 28
    sidebar_w = 172
    gap = 18
    main_x = margin + sidebar_w + gap
    main_w = PAGE_W - main_x - margin
    side_x = margin + 16
    side_w = sidebar_w - 32

    pdf.setFillColor(NAVY)
    pdf.rect(margin, margin, sidebar_w, PAGE_H - 2 * margin, stroke=0, fill=1)

    y = PAGE_H - 48
    pdf.setFillColor(white)
    pdf.setFont("Arial-Bold", 21)
    pdf.drawString(side_x, y, "YAQI")
    y -= 23
    pdf.drawString(side_x, y, "ZHANG")
    y -= 10
    pdf.setFillColor(HexColor("#75B8D1"))
    pdf.rect(side_x, y, 42, 3, stroke=0, fill=1)
    y -= 22

    y = section_title(pdf, "Contact", side_x, y, side_w, color=white)
    y = sidebar_item(pdf, "Localisation", "Montpellier, France", side_x, y, side_w)
    y = sidebar_item(
        pdf,
        "E-mail",
        "yaqizhang.unique@outlook.com",
        side_x,
        y,
        side_w,
        url="mailto:yaqizhang.unique@outlook.com",
    )
    y = sidebar_item(
        pdf,
        "Portfolio",
        "yaqinoel.github.io",
        side_x,
        y,
        side_w,
        url="https://yaqinoel.github.io",
    )
    y = sidebar_item(
        pdf,
        "GitHub",
        "github.com/yaqinoel",
        side_x,
        y,
        side_w,
        url="https://github.com/yaqinoel",
    )
    y = sidebar_item(
        pdf,
        "Mobilité",
        "France, Europe, Chine, télétravail",
        side_x,
        y,
        side_w,
    )

    y -= 3
    y = section_title(pdf, "Objectif", side_x, y, side_w, color=white)
    y = draw_wrapped(
        pdf,
        "Stage M2 de 6 mois à partir de février 2027 en informatique graphique, vision, IA, simulation, jeu vidéo ou XR.",
        side_x,
        y,
        side_w,
        font="Arial",
        size=8.1,
        leading=10.1,
        color=white,
    )

    y -= 8
    y = section_title(pdf, "Compétences", side_x, y, side_w, color=white)
    y = skill_block(pdf, "Programmation", "C++, C#, Python, Java, Kotlin", side_x, y, side_w)
    y = skill_block(
        pdf,
        "Graphique 3D",
        "OpenGL, GLSL, ray tracing, PBR, rendu temps réel",
        side_x,
        y,
        side_w,
    )
    y = skill_block(
        pdf,
        "Simulation",
        "PBD, corps rigides, détection de collisions, OpenMP",
        side_x,
        y,
        side_w,
    )
    y = skill_block(
        pdf,
        "IA et vision",
        "scikit-learn, NLP, traitement et analyse d'images",
        side_x,
        y,
        side_w,
    )
    y = skill_block(
        pdf,
        "Outils",
        "Unity, CMake, Git, Linux, Docker, Blender, OpenXR",
        side_x,
        y,
        side_w,
    )

    y -= 3
    y = section_title(pdf, "Langues", side_x, y, side_w, color=white)
    y = skill_block(pdf, "Français", "B2 - DUEF", side_x, y, side_w)
    y = skill_block(pdf, "Anglais", "IELTS 6.5", side_x, y, side_w)
    skill_block(pdf, "Chinois", "Langue maternelle", side_x, y, side_w)

    y = PAGE_H - 47
    pdf.setFillColor(NAVY)
    pdf.setFont("Arial-Bold", 16.5)
    pdf.drawString(main_x, y, "ÉTUDIANT EN MASTER INFORMATIQUE")
    y -= 19
    pdf.setFillColor(BLUE)
    pdf.setFont("Arial-Bold", 9.2)
    pdf.drawString(main_x, y, "INFORMATIQUE GRAPHIQUE  |  VISION  |  IA  |  SIMULATION  |  XR")
    y -= 17
    y = draw_wrapped(
        pdf,
        "Étudiant en double diplôme à l'Université de Montpellier, M1 terminé et entrée en M2 en septembre 2026, je développe des systèmes interactifs mêlant rendu 3D, simulation physique, traitement d'images et intelligence artificielle. Je recherche un stage où contribuer à des problématiques techniques concrètes, de l'algorithme à l'application.",
        main_x,
        y,
        main_w,
        font="Arial",
        size=8.4,
        leading=10.4,
        color=MUTED,
    )

    y -= 7
    y = section_title(pdf, "Formation", main_x, y, main_w)
    card_gap = 8
    card_w = (main_w - card_gap) / 2
    degree_card(
        pdf,
        main_x,
        y,
        card_w,
        "Master Informatique - IMAGINE",
        "Université de Montpellier | 2025 - 2027",
        "M1 terminé, entrée en M2. Rang 3/32, mention bien. Formation d'ingénieurs et chercheurs en image, vision, informatique graphique, IA, XR, jeux vidéo et simulation interactive.",
    )
    degree_card(
        pdf,
        main_x + card_w + card_gap,
        y,
        card_w,
        "Master Management des Technologies et des Sciences",
        "IAE Montpellier | 2025 - 2027",
        "Double diplôme avec la Faculté des Sciences : gestion de projet, management de l'innovation, stratégie et transformation numérique.",
    )
    y -= 100

    y = dated_heading(
        pdf,
        "DUEF B2 - Université de Perpignan Via Domitia",
        "2024 - 2025",
        main_x,
        y,
        main_w,
        size=8.2,
    )
    y = dated_heading(
        pdf,
        "Master en génie logiciel - Université Beihang",
        "09/2022 - 12/2023",
        main_x,
        y - 1,
        main_w,
        size=8.2,
    )
    y = dated_heading(
        pdf,
        "Licence en génie logiciel - Université de technologie du Henan",
        "2018 - 2022",
        main_x,
        y - 1,
        main_w,
        size=8.2,
    )

    y -= 5
    y = section_title(pdf, "Projets sélectionnés", main_x, y, main_w)

    y = dated_heading(pdf, "NomRigide - Simulateur PBD de corps déformables", "2026", main_x, y, main_w)
    y = bullet(
        pdf,
        "Projet TER en C++/OpenGL : collisions, Small Steps, solveur Jacobi, parallélisation OpenMP et analyse des performances.",
        main_x,
        y,
        main_w,
    )
    y = bullet(
        pdf,
        "Contribution personnelle : collisions arête dynamique/triangle statique et triangle dynamique/point statique, stabilité et profilage.",
        main_x,
        y,
        main_w,
    )
    y -= 4

    y = dated_heading(pdf, "Physicraft - Moteur de jeu 3D", "2026", main_x, y, main_w)
    y = bullet(
        pdf,
        "Moteur C++/OpenGL avec terrain procédural, rendu PBR et physique de corps rigides. Responsable principal du rendu et de la simulation.",
        main_x,
        y,
        main_w,
    )
    y = bullet(
        pdf,
        "Architecture de rendu forward, IBL HDR, shadow mapping, broad phase Sweep and Prune et solveur d'impulsions.",
        main_x,
        y,
        main_w,
    )
    y -= 4

    y = dated_heading(pdf, "Ray tracer CPU", "2025", main_x, y, main_w)
    y = bullet(
        pdf,
        "Réflexion, réfraction, ombres douces, textures, maillages, Kd-Tree, rendu parallèle OpenMP et anti-crénelage MSAA.",
        main_x,
        y,
        main_w,
    )
    y -= 4

    y = dated_heading(pdf, "Traveling - Application Android de voyage", "2026", main_x, y, main_w)
    y = bullet(
        pdf,
        "Kotlin, Jetpack Compose, Firebase et MVVM. Développement du module social : publication, recherche, carte, interactions et profils.",
        main_x,
        y,
        main_w,
    )
    y -= 4

    y = dated_heading(pdf, "Classification du discours scientifique - SciTweets", "2026", main_x, y, main_w)
    y = bullet(
        pdf,
        "Projet pédagogique de machine learning : prétraitement NLP, TF-IDF, équilibrage, comparaison de modèles et analyse d'erreurs.",
        main_x,
        y,
        main_w,
    )
    y -= 4

    y = dated_heading(pdf, "GJ Fly - Plateformer 2D GameJam", "2026", main_x, y, main_w)
    y = bullet(
        pdf,
        "Gameplay Unity/C# : machine à états, double saut, dash, combat, ennemis, object pooling et progression multi-niveaux.",
        main_x,
        y,
        main_w,
    )

    y -= 8
    y = section_title(pdf, "Expériences", main_x, y, main_w)
    y = dated_heading(
        pdf,
        "Laboratoire de réalité virtuelle - Université Beihang",
        "04/2023 - 09/2023",
        main_x,
        y,
        main_w,
    )
    y = bullet(
        pdf,
        "Développement sous Unity/OpenXR d'un système d'évaluation de navigation spatiale en VR : scènes Blender, Oculus Quest et journalisation des données.",
        main_x,
        y,
        main_w,
    )
    y = bullet(
        pdf,
        "Collaboration avec une équipe de psychologie pour traduire le protocole expérimental en scènes et interactions mesurables.",
        main_x,
        y,
        main_w,
    )
    y -= 4

    y = dated_heading(
        pdf,
        "JingHang Telek Technology - Développeur Java full-stack",
        "07/2022 - 02/2023",
        main_x,
        y,
        main_w,
    )
    y = bullet(
        pdf,
        "Développement d'un système métier pour State Grid avec Spring Boot, MyBatis, Redis et Vue.js, du backend aux interfaces utilisateur.",
        main_x,
        y,
        main_w,
    )
    bullet(
        pdf,
        "Participation aux fonctionnalités principales, à l'intégration des données et à la conception d'interfaces orientées usage.",
        main_x,
        y,
        main_w,
    )

    pdf.setStrokeColor(LINE)
    pdf.setLineWidth(0.5)
    pdf.line(main_x, 39, main_x + main_w, 39)
    pdf.setFillColor(MUTED)
    pdf.setFont("Arial", 6.7)
    pdf.drawString(main_x, 29, "Portfolio détaillé, démonstrations et dépôts de code : yaqinoel.github.io")
    pdf.linkURL(
        "https://yaqinoel.github.io",
        (main_x, 25, main_x + main_w, 37),
        relative=0,
    )

    pdf.showPage()
    pdf.save()
    print(OUTPUT)


if __name__ == "__main__":
    generate()
