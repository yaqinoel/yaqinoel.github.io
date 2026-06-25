#set page(paper: "a4", margin: 0mm)

#set text(
  font: ("Arial", "Hiragino Sans GB"),
  size: 8.5pt,
  fill: rgb("#2f3b45"),
  lang: "zh",
)

#set par(justify: false, leading: 0.52em)

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
    #title
  ]
}

#let main-section-title(title) = {
  set text(size: 10pt, weight: "bold", fill: navy)
  block(
    width: 100%,
    inset: (bottom: 6pt),
    stroke: (bottom: 1.2pt + blue),
  )[
    #title
  ]
  v(2pt)
}

#let side-label(title, body) = {
  text(size: 7pt, weight: "bold", fill: rgb("#b8d8e5"))[#title]
  linebreak()
  text(size: 8.3pt, fill: white)[#body]
  v(2pt)
}

#let side-label-compact(title, body) = {
  text(size: 7pt, weight: "bold", fill: rgb("#b8d8e5"))[#title]
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

      #section-title("联系方式", light: true)
      #side-label-compact("电子邮箱", [
        yaqizhang.unique\@
        outlook.com
      ])
      #side-label("电话", [+33 (0)7 66 96 82 25])
      #side-label("个人网站", [yaqinoel.github.io])
      #side-label("工作地点", [法国、欧洲、中国或远程])

      #v(1fr)
      #section-title("求职目标", light: true)
      #text(size: 8.3pt, fill: white)[
        寻找 2027 年 2 月开始、为期六个月的 M2 实习，
        方向包括计算机图形学、图像处理、计算机视觉、
        人工智能、物理仿真、游戏开发或 XR。
      ]

      #v(1fr)
      #section-title("专业技能", light: true)
      #side-label("编程语言", [C、C++、C\#、Python、Java])
      #side-label(
        "计算机图形学",
        [OpenGL、GLSL、光线追踪、PBR、实时渲染、实时物理仿真、几何处理],
      )
      #side-label(
        "图像处理",
        [图像编码、图像分割、边缘检测、图像分析],
      )
      #side-label(
        "人工智能",
        [机器学习、深度学习基础],
      )
      #side-label(
        "工具与平台",
        [Git、Linux、Unity、Blender、OpenMP、OpenXR],
      )

      #v(1fr)
      #section-title("语言能力", light: true)
      #side-label("法语", [工作交流水平])
      #side-label("英语", [工作交流水平])
      #side-label("中文", [母语])
      #v(1fr)
    ]
  ],
  [
    #block(
      width: 100%,
      height: 297mm,
      inset: (left: 7mm, right: 7mm, top: 8mm, bottom: 6mm),
    )[
      #set par(leading: 0.36em)

      #text(size: 27pt, weight: "bold", fill: navy)[张亚奇]

      #v(-12pt)
      #text(size: 8.5pt, weight: "bold", fill: blue)[
        计算机图形学 | 图像处理 | 人工智能 | 物理仿真 | 游戏开发 | 虚拟现实
      ]

      #v(4pt)
      #text(size: 7.6pt, fill: muted)[
        蒙彼利埃大学 IMAGINE 方向计算机科学硕士二年级学生。
        主要开发结合 3D 渲染、物理仿真、图像处理、人工智能、
        游戏开发与虚拟现实技术的交互式系统。
      ]

      #v(4pt)
      #main-section-title("教育背景")

      #education-entry(
        [计算机科学硕士 - IMAGINE 方向],
        [蒙彼利埃大学],
        [2025-2027],
        [
          已完成 M1，即将进入 M2，排名 3/32，mention bien。
          主要学习计算机图形学、图像处理与分析、人工智能、
          游戏开发和虚拟现实。
        ],
      )
      #education-entry(
        [技术与科学管理硕士],
        [蒙彼利埃 IAE 管理学院 - 与科学学院合作的双学位],
        [2025-2027],
        [
          学习项目管理、创新管理、战略管理与数字化转型，
          补充技术背景之外的管理能力。
        ],
      )
      #education-entry(
        [DUEF B2 - 法语学习项目],
        [佩皮尼昂大学],
        [2024-2025],
        [
          完成法语强化课程，为在法国继续攻读硕士课程做准备。
        ],
      )
      #education-entry(
        [软件工程硕士阶段学习],
        [北京航空航天大学],
        [09/2022-12/2023],
        [
          学习软件工程相关课程约一年半，
          之后调整学业方向并赴法国继续学习。
        ],
      )
      #education-entry(
        [软件工程学士],
        [河南工业大学],
        [2018-2022],
        [
          四年制本科，主要学习编程、数据结构、操作系统、
          计算机网络、数据库和软件工程。
        ],
      )

      #v(1pt)
      #main-section-title("精选项目")

      #dated-title(
        [NomRigide - PBD 软体物理仿真器],
        [2026],
      )
      #cv-bullet([
        使用 C++/OpenGL 开发的 TER 科研导向项目，
        基于 Position Based Dynamics 实现实时软体物理模拟。
      ])
      #cv-bullet([
        实现碰撞约束、Small Steps、OpenMP 并行 Jacobi 求解器
        和性能分析工具。
      ])
      #v(1.5pt)

      #dated-title([Physicraft - 3D 游戏引擎], [2026])
      #cv-bullet([
        C++/OpenGL 游戏引擎，包含程序化体素地形、交互系统、
        PBR 渲染和自研刚体物理。
      ])
      #cv-bullet([
        主要负责渲染与物理系统，包括 HDR IBL、阴影、
        碰撞检测和冲量求解器。
      ])
      #v(1.5pt)

      #dated-title([CPU 光线追踪器], [2025])
      #cv-bullet([
        使用 C++ 实现反射、折射、软阴影、纹理
        和三角网格渲染。
      ])
      #cv-bullet([
        使用 Kd-Tree 加速求交，通过 OpenMP 并行渲染，
        并实现 MSAA 抗锯齿。
      ])
      #v(1.5pt)

      #dated-title([GJ Fly - 3X-Schools GameJam 2D 平台游戏], [2023])
      #cv-bullet([
        使用 Unity/C\# 开发多关卡平台跳跃游戏，
        包含跳跃、冲刺、战斗、敌人与环境障碍。
      ])
      #cv-bullet([
        负责编写玩家状态机、关卡交互、投射物系统和对象池。
      ])

      #v(3pt)
      #main-section-title("相关经历")

      #dated-title(
        [虚拟现实实验室学习经历 - 北京航空航天大学],
        [04/2023-08/2023],
      )
      #cv-bullet([
        在导师实验室学习计算机图形学和虚拟现实应用开发。
      ])
      #cv-bullet([
        参与由北京师范大学心理学部主导的
        VR 空间导航能力测评系统开发。
      ])
      #v(2pt)

      #dated-title(
        [JingHang Telek Technology（北京）- Java 全栈开发工程师 | 全职],
        [07/2022-02/2023],
      )
      #cv-bullet([
        参与江西省电网线损分析系统的开发。
      ])
      #cv-bullet([
        开发主要后端功能和简洁易用的用户界面。
      ])

      #place(
        bottom + left,
        text(size: 6.8pt, fill: muted)[
          详细项目、演示视频与代码仓库：
          https://yaqinoel.github.io
        ],
      )
    ]
  ],
)
