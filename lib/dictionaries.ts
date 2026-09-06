export type ExperienceEntry = {
  role: string;
  org: string;
  start: string;
  end: string;
  points: string[];
};

export type EducationEntry = {
  school: string;
  degree: string;
  start: string;
  end: string;
};

export type CertificateEntry = {
  name: string;
  issuer: string;
  note: string;
  url: string;
};

export type Dictionary = {
  nav: {
    brand: string;
    home: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    projectsHeading: string;
  };
  profile: {
    name: string;
    title: string;
    tagline: string;
    aboutHeading: string;
    about: string;
    skillsHeading: string;
    skills: string[];
    experienceHeading: string;
    experience: ExperienceEntry[];
    certificatesHeading: string;
    certificates: CertificateEntry[];
    educationHeading: string;
    education: EducationEntry[];
    contactHeading: string;
    email: string;
    resumeDownload: string;
  };
  projects: {
    profile: {
      title: string;
      description: string;
    };
  };
};

export const dictionaries: Record<"en" | "zh-TW", Dictionary> = {
  en: {
    nav: {
      brand: "lcytot",
      home: "Home",
    },
    home: {
      heroTitle: "Hi, I'm Chin-Yung 👋",
      heroSubtitle:
        "This is my personal hub — a collection of small projects and experiments, all living under one roof.",
      projectsHeading: "Projects",
    },
    profile: {
      name: "Lin Chin-Yung",
      title: "M.S. Student, NYCU · Algorithm Theory Lab",
      tagline:
        "Interested in algorithm theory, software & firmware development, and data analysis.",
      aboutHeading: "About",
      about:
        "I'm a first-year graduate student at the Institute of Computer Science and Engineering at National Yang Ming Chiao Tung University (NYCU), where I'm a member of the Algorithm Theory Lab. I'm interested in algorithm theory, software and firmware development, and data analysis. I have experience in low-level software development, frontend development, and data analysis through academic research and industry internships.",
      skillsHeading: "Skills",
      skills: [
        "Algorithm Theory",
        "Firmware Development",
        "Python",
        "C/C++",
        "React.js (Vite)",
        "Data Analysis",
        "LabVIEW",
      ],
      experienceHeading: "Experience",
      experience: [
        {
          role: "Software Engineering Intern",
          org: "TanE Wireless",
          start: "Feb. 2026",
          end: "Now",
          points: [
            "Developed front-end features across web (React.js with Vite) and mobile (Flutter / Kotlin for Android) platforms.",
            "Contributed to back-end development in Python.",
            "Performed health data analysis, including sleep-stage and physiological signal analysis.",
          ],
        },
        {
          role: "Firmware Engineering Intern",
          org: "Phison Electronics",
          start: "Feb. 2025",
          end: "Jun. 2025",
          points: [
            "Researched algorithms and methods from academic papers and implemented them in C.",
            "Developed and tested programs on development boards, evaluating performance through experiments.",
            "Collected experimental results and analyzed system performance.",
          ],
        },
      ],
      certificatesHeading: "Certificates",
      certificates: [
        {
          name: "Certified LabVIEW Associate Developer (CLAD)",
          issuer: "LabVIEW",
          note: "Obtained in my first year of university.",
          url: "https://www.credly.com/badges/c712fc48-d128-4406-94f6-04be4ccd9774/public_url",
        },
      ],
      educationHeading: "Education",
      education: [
        {
          school: "National Yang Ming Chiao Tung University",
          degree: "M.S. in Institute of Computer Science and Engineering",
          start: "Sep. 2026",
          end: "Now",
        },
        {
          school: "National Yang Ming Chiao Tung University",
          degree: "B.S. in Computer Science",
          start: "Sep. 2022",
          end: "Jun. 2026",
        },
      ],
      contactHeading: "Contact",
      email: "lcytot211226@gmail.com",
      resumeDownload: "Download Resume",
    },
    projects: {
      profile: {
        title: "Profile / Resume",
        description: "A short introduction, my background, and how to reach me.",
      },
    },
  },
  "zh-TW": {
    nav: {
      brand: "lcytot",
      home: "首頁",
    },
    home: {
      heroTitle: "嗨，我是晉湧 👋",
      heroSubtitle: "這裡是我的個人網站，收錄了我做的各種小專案與實驗，全部都放在同一個地方。",
      projectsHeading: "專案",
    },
    profile: {
      name: "林晉湧",
      title: "陽明交通大學資工所碩士生 · 演算法理論實驗室",
      tagline: "專注於演算法理論、軟體與韌體開發，以及資料分析。",
      aboutHeading: "關於我",
      about:
        "我是國立陽明交通大學資訊科學與工程研究所的碩士一年級學生，同時也是演算法理論實驗室的成員。我對演算法理論、軟體與韌體開發，以及資料分析深感興趣。透過學術研究與業界實習，我累積了低階軟體開發、前端開發與資料分析方面的經驗。",
      skillsHeading: "技能",
      skills: [
        "演算法理論實驗室",
        "軟韌體開發",
        "Python",
        "C/C++",
        "React.js (Vite)",
        "資料分析",
        "LabVIEW",
      ],
      experienceHeading: "經歷",
      experience: [
        {
          role: "軟體工程實習生",
          org: "TanE Wireless",
          start: "2026年2月",
          end: "至今",
          points: [
            "負責 Web（React.js + Vite）與行動裝置（Flutter / Kotlin for Android）跨平台前端開發。",
            "參與 Python 後端開發工作。",
            "進行健康數據分析，包括睡眠階段與生理訊號分析。",
          ],
        },
        {
          role: "韌體工程實習生",
          org: "群聯電子",
          start: "2025年2月",
          end: "2025年6月",
          points: [
            "根據學術論文進行研究，並以 C 語言實作相關演算法與方法。",
            "在開發板上撰寫與測試程式，透過實驗評估效能。",
            "蒐集實驗數據並分析系統效能。",
          ],
        },
      ],
      certificatesHeading: "證照",
      certificates: [
        {
          name: "Certified LabVIEW Associate Developer (CLAD)",
          issuer: "LabVIEW",
          note: "於大學一年級取得。",
          url: "https://www.credly.com/badges/c712fc48-d128-4406-94f6-04be4ccd9774/public_url",
        },
      ],
      educationHeading: "學歷",
      education: [
        {
          school: "國立陽明交通大學",
          degree: "資訊科學與工程研究所 碩士",
          start: "2026年9月",
          end: "至今",
        },
        {
          school: "國立陽明交通大學",
          degree: "資訊工程學系 學士",
          start: "2022年9月",
          end: "2026年6月",
        },
      ],
      contactHeading: "聯絡方式",
      email: "lcytot211226@gmail.com",
      resumeDownload: "下載履歷",
    },
    projects: {
      profile: {
        title: "個人簡介 / 履歷",
        description: "簡短的自我介紹、背景經歷，以及如何聯絡我。",
      },
    },
  },
};
