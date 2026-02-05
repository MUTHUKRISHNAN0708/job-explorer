const careers = [
    // --- TECHNOLOGY (10) ---
    {
        id: 1,
        title: "Web Developer",
        stream: "IT",
        educationLevel: "Degree",
        interest: "Technology",
        description: "Build and maintain websites and web applications using code.",
        duration: "3-6 months",
        skills: ["HTML", "CSS", "JavaScript", "React"],
        tools: ["VS Code", "Git", "Chrome DevTools"],
        roadmap: "Month 1: HTML/CSS \nMonth 2: JavaScript \nMonth 3: React & Projects",
        careerType: "Tech"
    },
    {
        id: 2,
        title: "AI Engineer",
        stream: "IT",
        educationLevel: "Degree",
        interest: "Technology",
        description: "Develop intelligent algorithms and machine learning models.",
        duration: "12+ months",
        skills: ["Python", "Machine Learning", "TensorFlow", "Math"],
        tools: ["PyTorch", "Jupyter", "Google Colab"],
        roadmap: "Month 1-3: Python & Math \nMonth 4-6: ML Algorithms \nMonth 7+: Projects",
        careerType: "Tech"
    },
    {
        id: 3,
        title: "Cybersecurity Analyst",
        stream: "IT",
        educationLevel: "Degree",
        interest: "Technology",
        description: "Protect systems and networks from digital attacks.",
        duration: "6-12 months",
        skills: ["Networking", "Ethical Hacking", "Linux", "Risk Analysis"],
        tools: ["Wireshark", "Metasploit", "Kali Linux"],
        roadmap: "Month 1-2: Networking \nMonth 3-6: Security Basics \nMonth 7+: Certifications",
        careerType: "Tech"
    },
    {
        id: 4,
        title: "Mobile App Developer",
        stream: "IT",
        educationLevel: "Degree",
        interest: "Technology",
        description: "Create applications for Android and iOS devices.",
        duration: "6-9 months",
        skills: ["Java/Kotlin", "Swift", "Flutter", "React Native"],
        tools: ["Android Studio", "Xcode", "VS Code"],
        roadmap: "Month 1-2: Language Basics \nMonth 3-5: Frameworks \nMonth 6: Deploy App",
        careerType: "Tech"
    },
    {
        id: 5,
        title: "DevOps Engineer",
        stream: "IT",
        educationLevel: "Degree",
        interest: "Technology",
        description: "Bridge the gap between development and operations to deploy code faster.",
        duration: "6-12 months",
        skills: ["CI/CD", "Docker", "Kubernetes", "Cloud (AWS/Azure)"],
        tools: ["Jenkins", "Docker", "AWS Console"],
        roadmap: "Month 1: Linux/Scripting \nMonth 2-3: Docker/K8s \nMonth 4+: CI/CD Pipelines",
        careerType: "Tech"
    },
    {
        id: 6,
        title: "Cloud Architect",
        stream: "IT",
        educationLevel: "Degree",
        interest: "Technology",
        description: "Design and manage cloud computing strategies.",
        duration: "12+ months",
        skills: ["AWS", "Azure", "Networking", "Security"],
        tools: ["Terraform", "AWS CLI", "Azure Portal"],
        roadmap: "Month 1-3: Cloud Basics (Certifications) \nMonth 4-6: Architecture Patterns",
        careerType: "Tech"
    },
    {
        id: 7,
        title: "Game Developer",
        stream: "IT",
        educationLevel: "Degree",
        interest: "Technology",
        description: "Create video games for computers, consoles, and mobile devices.",
        duration: "6-12 months",
        skills: ["C#", "C++", "3D Math", "Physics"],
        tools: ["Unity", "Unreal Engine", "Blender"],
        roadmap: "Month 1-2: C# Basics \nMonth 3-5: Unity Engine \nMonth 6: Game Jam",
        careerType: "Tech"
    },
    {
        id: 8,
        title: "Blockchain Developer",
        stream: "IT",
        educationLevel: "Degree",
        interest: "Technology",
        description: "Build decentralized applications and smart contracts.",
        duration: "6-9 months",
        skills: ["Solidity", "Cryptography", "Smart Contracts", "Web3.js"],
        tools: ["Remix", "Metamask", "Hardhat"],
        roadmap: "Month 1: Blockchain Theory \nMonth 2-3: Solidity \nMonth 4+: DApps",
        careerType: "Tech"
    },
    {
        id: 9,
        title: "QA Engineer (Tester)",
        stream: "IT",
        educationLevel: "Degree",
        interest: "Technology",
        description: "Ensure software quality by testing for bugs and issues.",
        duration: "3-5 months",
        skills: ["Manual Testing", "Automation", "Selenium", "Java/Python"],
        tools: ["Selenium", "Jira", "Postman"],
        roadmap: "Month 1: Testing Manuals \nMonth 2: Automation Basics \nMonth 3: Selenium",
        careerType: "Tech"
    },
    {
        id: 10,
        title: "Database Administrator",
        stream: "IT",
        educationLevel: "Degree",
        interest: "Technology",
        description: "Store and organize data using specialized software.",
        duration: "4-6 months",
        skills: ["SQL", "Data Modeling", "Backup/Recovery", "Performance Tuning"],
        tools: ["MySQL", "PostgreSQL", "Oracle"],
        roadmap: "Month 1: SQL Advanced \nMonth 2-3: Admin Tasks \nMonth 4: Optimization",
        careerType: "Tech"
    },

    // --- CREATIVE (10) ---
    {
        id: 11,
        title: "Graphic Designer",
        stream: "Arts",
        educationLevel: "Diploma",
        interest: "Creative",
        description: "Create visual concepts to communicate ideas that inspire and inform.",
        duration: "4-6 months",
        skills: ["Typography", "Color Theory", "Layout", "Branding"],
        tools: ["Photoshop", "Illustrator", "Figma"],
        roadmap: "Month 1: Design Principles \nMonth 2: Photoshop \nMonth 3: Illustrator",
        careerType: "Creative"
    },
    {
        id: 12,
        title: "UX/UI Designer",
        stream: "Arts",
        educationLevel: "Degree",
        interest: "Creative",
        description: "Design intuitive and aesthetically pleasing user interfaces.",
        duration: "6 months",
        skills: ["Wireframing", "Prototyping", "User Research", "Figma"],
        tools: ["Figma", "Sketch", "InVision"],
        roadmap: "Month 1: UX Principles \nMonth 2: UI Design \nMonth 3: Portfolio",
        careerType: "Creative"
    },
    {
        id: 13,
        title: "Content Writer",
        stream: "Arts",
        educationLevel: "Degree",
        interest: "Creative",
        description: "Write engaging content for blogs, websites, and marketing.",
        duration: "1-3 months",
        skills: ["Copywriting", "SEO", "Editing", "Research"],
        tools: ["Grammarly", "WordPress", "Google Docs"],
        roadmap: "Month 1: Writing Basics \nMonth 2: SEO \nMonth 3: Portfolio",
        careerType: "Creative"
    },
    {
        id: 14,
        title: "Video Editor",
        stream: "Arts",
        educationLevel: "Diploma",
        interest: "Creative",
        description: "Edit and assemble recorded raw material into a finished product.",
        duration: "3-6 months",
        skills: ["Storytelling", "Color Grading", "Sound Design", "Motion Graphics"],
        tools: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
        roadmap: "Month 1: Cutting & Transitions \nMonth 2: Color & Audio \nMonth 3: FX",
        careerType: "Creative"
    },
    {
        id: 15,
        title: "Fashion Designer",
        stream: "Arts",
        educationLevel: "Degree",
        interest: "Creative",
        description: "Design clothing and accessories.",
        duration: "2-3 years",
        skills: ["Sketching", "Sewing", "Textiles", "Trend Analysis"],
        tools: ["CAD for Fashion", "Sketchbook"],
        roadmap: "Education -> Internships -> Portfolio",
        careerType: "Creative"
    },
    {
        id: 16,
        title: "Interior Designer",
        stream: "Arts",
        educationLevel: "Degree",
        interest: "Creative",
        description: "Make indoor spaces functional, safe, and beautiful.",
        duration: "2-3 years",
        skills: ["Space Planning", "Color Theory", "Lighting", "3D Rendering"],
        tools: ["AutoCAD", "SketchUp", "Revit"],
        roadmap: "Degree -> Apprenticeship -> Certification",
        careerType: "Creative"
    },
    {
        id: 17,
        title: "3D Animator",
        stream: "Arts",
        educationLevel: "Diploma",
        interest: "Creative",
        description: "Create moving images in a three-dimensional digital environment.",
        duration: "1-2 years",
        skills: ["Modeling", "Rigging", "Animation Principles", "Lighting"],
        tools: ["Maya", "Blender", "Cinema 4D"],
        roadmap: "Month 1-3: Modeling \nMonth 4-6: Animation Basics \nMonth 7+: Projects",
        careerType: "Creative"
    },
    {
        id: 18,
        title: "Photographer",
        stream: "Arts",
        educationLevel: "Diploma",
        interest: "Creative",
        description: "Capture professional quality images.",
        duration: "6 months",
        skills: ["Composition", "Lighting", "Editing", "Camera Gear"],
        tools: ["DSLR/Mirrorless", "Lightroom", "Photoshop"],
        roadmap: "Month 1: Manual Mode \nMonth 2: Composition \nMonth 3: Editing",
        careerType: "Creative"
    },
    {
        id: 19,
        title: "Copywriter",
        stream: "Arts",
        educationLevel: "Degree",
        interest: "Creative",
        description: "Write persuasive text for advertising and marketing.",
        duration: "3 months",
        skills: ["Persuasion", "Sales Psychology", "Headlines", "Brand Voice"],
        tools: ["Google Docs", "Thesaurus", "Swipe Files"],
        roadmap: "Month 1: Principles of Persuasion \nMonth 2: Practice Ads \nMonth 3: Portfolio",
        careerType: "Creative"
    },
    {
        id: 20,
        title: "Art Director",
        stream: "Arts",
        educationLevel: "Degree",
        interest: "Creative",
        description: "Oversee the visual style and imagery in magazines and productions.",
        duration: "4+ years (with exp)",
        skills: ["Leadership", "Visual Vision", "Communication", "Management"],
        tools: ["Adobe Suite", "Project Management"],
        roadmap: "Experience as Designer -> Senior Designer -> Art Director",
        careerType: "Creative"
    },

    // --- BUSINESS (10) ---
    {
        id: 21,
        title: "Data Analyst",
        stream: "Science",
        educationLevel: "Degree",
        interest: "Business",
        description: "Analyze data to help businesses make better decisions.",
        duration: "6 months",
        skills: ["Excel", "SQL", "Python", "Tableau"],
        tools: ["Excel", "Jupyter", "PowerBI"],
        roadmap: "Month 1: Excel \nMonth 2: SQL \nMonth 3: Python",
        careerType: "Analytical"
    },
    {
        id: 22,
        title: "Digital Marketer",
        stream: "Commerce",
        educationLevel: "Diploma",
        interest: "Business",
        description: "Promote brands and products through digital channels.",
        duration: "3 months",
        skills: ["SEO", "Content Marketing", "Social Media", "Analytics"],
        tools: ["Google Analytics", "Canva", "Mailchimp"],
        roadmap: "Month 1: Social Media \nMonth 2: SEO \nMonth 3: Ads",
        careerType: "Marketing"
    },
    {
        id: 23,
        title: "Chartered Accountant",
        stream: "Commerce",
        educationLevel: "Professional",
        interest: "Business",
        description: "Manage financial records and taxes for businesses.",
        duration: "3-5 years",
        skills: ["Accounting", "Taxation", "Auditing", "Law"],
        tools: ["Tally", "Excel", "SAP"],
        roadmap: "Foundation -> Intermediate -> Final & Articleship",
        careerType: "Finance"
    },
    {
        id: 24,
        title: "Product Manager",
        stream: "Any",
        educationLevel: "Degree",
        interest: "Business",
        description: "Oversee product development from conception to launch.",
        duration: "6-12 months",
        skills: ["Strategy", "Communication", "Agile", "Analysis"],
        tools: ["Jira", "Asana", "Miro"],
        roadmap: "Month 1-3: Product Lifecycle \nMonth 4-6: Agile & Projects",
        careerType: "Management"
    },
    {
        id: 25,
        title: "Human Resources Manager",
        stream: "Any",
        educationLevel: "Degree",
        interest: "Business",
        description: "Manage recruitment, employee relations, and culture.",
        duration: "1-2 years",
        skills: ["Recruitment", "Communication", "Conflict Resolution", "Labor Law"],
        tools: ["LinkedIn Recruiter", "HRIS", "Zoom"],
        roadmap: "Month 1-6: HR Basics \nMonth 7-12: Certifications (SHRM)",
        careerType: "Management"
    },
    {
        id: 26,
        title: "Investment Banker",
        stream: "Commerce",
        educationLevel: "Degree",
        interest: "Business",
        description: "Help companies raise capital and make financial decisions.",
        duration: "2 years",
        skills: ["Financial Modeling", "Valuation", "Excel", "Networking"],
        tools: ["Excel", "Bloomberg Terminal"],
        roadmap: "MBA Finance -> Internship -> Analyst Role",
        careerType: "Finance"
    },
    {
        id: 27,
        title: "Business Analyst",
        stream: "Commerce",
        educationLevel: "Degree",
        interest: "Business",
        description: "Analyze business processes and find areas for improvement.",
        duration: "6 months",
        skills: ["Data Analysis", "Process Mapping", "SQL", "Stakeholder Mgmt"],
        tools: ["Excel", "Visio", "Tableau"],
        roadmap: "Month 1: Analysis Basics \nMonth 2: Tools \nMonth 3: Projects",
        careerType: "Analytical"
    },
    {
        id: 28,
        title: "Supply Chain Manager",
        stream: "Commerce",
        educationLevel: "Degree",
        interest: "Business",
        description: "Manage the flow of goods and services.",
        duration: "1-2 years",
        skills: ["Logistics", "Inventory Mgmt", "Negotiation", "Analytics"],
        tools: ["SAP", "Oracle SCM", "Excel"],
        roadmap: "Degree -> Logistics Role -> Manager",
        careerType: "Management"
    },
    {
        id: 29,
        title: "Entrepreneur",
        stream: "Any",
        educationLevel: "Any",
        interest: "Business",
        description: "Start and run your own business.",
        duration: "Lifetime",
        skills: ["Risk Taking", "Sales", "Leadership", "Resilience"],
        tools: ["Business Plan", "Networking", "Finance"],
        roadmap: "Idea -> MVP -> Market Fit -> Scale",
        careerType: "Business"
    },
    {
        id: 30,
        title: "Sales Manager",
        stream: "Any",
        educationLevel: "Degree",
        interest: "Business",
        description: "Lead sales teams to meet targets.",
        duration: "1-2 years",
        skills: ["Selling", "CRM", "Leadership", "Communication"],
        tools: ["Salesforce", "HubSpot", "LinkedIn"],
        roadmap: "Sales Rep -> Team Lead -> Manager",
        careerType: "Management"
    },

    // --- GOVERNMENT (10) ---
    {
        id: 31,
        title: "Bank Probationary Officer (PO)",
        stream: "Any",
        educationLevel: "Degree",
        interest: "Government",
        description: "Entry-level management post in public sector banks.",
        duration: "6-12 months",
        skills: ["Aptitude", "Reasoning", "General Awareness", "English"],
        tools: ["Mock Tests", "Current Affairs Apps"],
        roadmap: "Month 1-3: Basics \nMonth 4-6: Practice",
        careerType: "Government"
    },
    {
        id: 32,
        title: "IAS Officer (UPSC)",
        stream: "Any",
        educationLevel: "Degree",
        interest: "Government",
        description: "Administrative role in the Indian government.",
        duration: "1-2 years",
        skills: ["General Studies", "Writing", "Diplomacy", "Analysis"],
        tools: ["Newspapers", "NCERT Books", "Mock Tests"],
        roadmap: "Year 1: Prelims Prep \nYear 2: Mains & Interview",
        careerType: "Government"
    },
    {
        id: 33,
        title: "Railway Engineer (IES)",
        stream: "Science",
        educationLevel: "Degree",
        interest: "Government",
        description: "Engineering roles in Indian Railways.",
        duration: "1 year",
        skills: ["Core Engineering", "Math", "General Knowledge"],
        tools: ["Standard Textbooks", "Past Papers"],
        roadmap: "6 Months Content \n6 Months Revision & Mocks",
        careerType: "Government"
    },
    {
        id: 34,
        title: "SSC CGL Officer",
        stream: "Any",
        educationLevel: "Degree",
        interest: "Government",
        description: "Staff Selection Commission roles in various ministries.",
        duration: "6-12 months",
        skills: ["Quantitative Aptitude", "Reasoning", "English", "GK"],
        tools: ["Mock Series", "Speed Math"],
        roadmap: "Month 1-4: Syllabus \nMonth 5+: Speed Drills",
        careerType: "Government"
    },
    {
        id: 35,
        title: "Defense Officer (CDS/NDA)",
        stream: "Any",
        educationLevel: "Degree",
        interest: "Government",
        description: "Officer roles in Army, Navy, or Air Force.",
        duration: "6-12 months",
        skills: ["Physical Fitness", "Leadership", "Aptitude", "GK"],
        tools: ["Physical Training", "SSB Interview Prep"],
        roadmap: "Written Exam Prep -> SSB Interview Prep",
        careerType: "Government"
    },
    {
        id: 36,
        title: "PSU Engineer (GATE)",
        stream: "Science",
        educationLevel: "Degree",
        interest: "Government",
        description: "Engineering jobs in Public Sector Undertakings (ONGC, NTPC).",
        duration: "1 year",
        skills: ["Core Engineering", "Conceptual Clarity", "Problem Solving"],
        tools: ["GATE Syllabus", "Calculators"],
        roadmap: "Year 1: GATE Prep with College",
        careerType: "Government"
    },
    {
        id: 37,
        title: "RBI Grade B Officer",
        stream: "Any",
        educationLevel: "Degree",
        interest: "Government",
        description: "Managerial role in the Reserve Bank of India.",
        duration: "6-9 months",
        skills: ["Economics", "Finance", "Management", "English"],
        tools: ["Economic Times", "RBI Reports"],
        roadmap: "Phase 1 Prep -> Phase 2 (ESI + FM)",
        careerType: "Government"
    },
    {
        id: 38,
        title: "Government Teacher (TET)",
        stream: "Any",
        educationLevel: "Degree + B.Ed",
        interest: "Government",
        description: "Teaching posts in government schools.",
        duration: "6 months",
        skills: ["Child Pedagogy", "Subject Knowledge", "Communication"],
        tools: ["Teaching Aids", "Previous Papers"],
        roadmap: "B.Ed -> TET Exam Prep",
        careerType: "Government"
    },
    {
        id: 39,
        title: "ISRO Scientist/Engineer",
        stream: "Science",
        educationLevel: "Degree",
        interest: "Government",
        description: "Research and engineering for space missions.",
        duration: "1 year",
        skills: ["Rocket Science", "Physics", "Math", "Research"],
        tools: ["Academic Papers", "Simulation Soft"],
        roadmap: "ICRB Exam Prep -> Interview",
        careerType: "Government"
    },
    {
        id: 40,
        title: "Public Health Officer",
        stream: "Science",
        educationLevel: "Medical Degree",
        interest: "Government",
        description: "Manage public health programs and policies.",
        duration: "1 year",
        skills: ["Epidemiology", "Management", "Policy", "Communication"],
        tools: ["Health Data", "Gov Reports"],
        roadmap: "Medical Degree -> UPSC cms / State Exams",
        careerType: "Government"
    },

    // --- HEALTHCARE & SCIENCE (10) ---
    {
        id: 41,
        title: "Biotechnologist",
        stream: "Science",
        educationLevel: "Degree",
        interest: "Science",
        description: "Use biological systems to develop products.",
        duration: "4 years",
        skills: ["Genetics", "Lab Techniques", "Data Analysis", "Research"],
        tools: ["Lab Equipment", "Bioinformatics Software"],
        roadmap: "Degree Program -> Internship -> Specialization",
        careerType: "Science"
    },
    {
        id: 42,
        title: "Pharmacist",
        stream: "Science",
        educationLevel: "Degree",
        interest: "Science",
        description: "Dispense medications and advise patients on their use.",
        duration: "4 years",
        skills: ["Pharmacology", "Chemistry", "Attention to Detail", "Ethics"],
        tools: ["Pharmacy Management Systems"],
        roadmap: "B.Pharm -> License Exam",
        careerType: "Science"
    },
    {
        id: 43,
        title: "Doctor (MBBS)",
        stream: "Science",
        educationLevel: "Degree",
        interest: "Science",
        description: "Diagnose and treat illnesses.",
        duration: "5.5 years",
        skills: ["Diagnosis", "Patient Care", "Anatomy", "Surgery"],
        tools: ["Stethoscope", "Medical History", "Diagnostic Tools"],
        roadmap: "NEET -> MBBS -> Internship",
        careerType: "Science"
    },
    {
        id: 44,
        title: "Nurse",
        stream: "Science",
        educationLevel: "Degree/Diploma",
        interest: "Science",
        description: "Provide care for patients and assist doctors.",
        duration: "3-4 years",
        skills: ["Patient Care", "Empathy", "Medical Procedures", "Monitoring"],
        tools: ["Medical Charts", "Monitoring Equip"],
        roadmap: "B.Sc Nursing / GNM -> Licensing",
        careerType: "Science"
    },
    {
        id: 45,
        title: "Physiotherapist",
        stream: "Science",
        educationLevel: "Degree",
        interest: "Science",
        description: "Help patients recover movement and manage pain.",
        duration: "4.5 years",
        skills: ["Anatomy", "Rehabilitation", "Exercise Therapy"],
        tools: ["Physio Equipment", "Exercise Gear"],
        roadmap: "BPT -> Internship -> Practice",
        careerType: "Science"
    },
    {
        id: 46,
        title: "Medical Lab Technician",
        stream: "Science",
        educationLevel: "Diploma/Degree",
        interest: "Science",
        description: "Analyze body fluids and tissues.",
        duration: "2-3 years",
        skills: ["Lab Safety", "Microscopy", "Sample Analysis"],
        tools: ["Microscope", "Centrifuge", "Analyzers"],
        roadmap: "DMLT / BMLT -> Lab Training",
        careerType: "Science"
    },
    {
        id: 47,
        title: "Environmental Scientist",
        stream: "Science",
        educationLevel: "Degree",
        interest: "Science",
        description: "Protect the environment and human health.",
        duration: "3-4 years",
        skills: ["Ecology", "Data Collection", "Report Writing", "Chemistry"],
        tools: ["GIS", "Sampling Kits"],
        roadmap: "B.Sc Env Science -> M.Sc -> Field Work",
        careerType: "Science"
    },
    {
        id: 48,
        title: "Nutritionist / Dietitian",
        stream: "Science",
        educationLevel: "Degree",
        interest: "Science",
        description: "Advise on food and nutrition impacts on health.",
        duration: "3 years",
        skills: ["Biology", "Nutrition Plans", "Counselling", "Research"],
        tools: ["Diet Planning Soft", "BMI Calculator"],
        roadmap: "B.Sc Nutrition -> Internship -> RD Exam",
        careerType: "Science"
    },
    {
        id: 49,
        title: "Forensic Scientist",
        stream: "Science",
        educationLevel: "Degree",
        interest: "Science",
        description: "Analyze evidence for criminal investigations.",
        duration: "3-4 years",
        skills: ["Analysis", "Law", "Chemistry", "Photography"],
        tools: ["Lab Kits", "Evidence Handling"],
        roadmap: "B.Sc Forensic -> M.Sc -> Lab Join",
        careerType: "Science"
    },
    {
        id: 50,
        title: "Clinical Research Associate",
        stream: "Science",
        educationLevel: "Degree",
        interest: "Science",
        description: "Monitor clinical trials and ensure compliance.",
        duration: "1-2 years (Post Deg)",
        skills: ["Clinical Trials", "Regulatory Affairs", "Data Integrity"],
        tools: ["EDC Systems", "GCP Guidelines"],
        roadmap: "Life Science Degree -> Clinical Research Diploma",
        careerType: "Science"
    }
];

const skills = [
    {
        id: 1,
        name: "HTML/CSS",
        description: "The building blocks of the web.",
        relatedCareers: ["Web Developer", "UI/UX Designer"]
    },
    {
        id: 2,
        name: "Python",
        description: "Versatile programming language for data, web, and more.",
        relatedCareers: ["Data Analyst", "Backend Developer", "AI Engineer"]
    },
    {
        id: 3,
        name: "Communication",
        description: "Ability to convey ideas effectively.",
        relatedCareers: ["Sales", "Management", "Digital Marketing", "HR Manager"]
    },
    {
        id: 4,
        name: "Problem Solving",
        description: "Finding solutions to complex challenges.",
        relatedCareers: ["Software Engineer", "Consultant", "Entrepreneur"]
    },
    {
        id: 5,
        name: "Data Analysis",
        description: "Interpreting complex data to find trends.",
        relatedCareers: ["Data Analyst", "Biotechnologist", "Product Manager"]
    },
    {
        id: 6,
        name: "Machine Learning",
        description: "Teaching computers to learn from data.",
        relatedCareers: ["AI Engineer", "Data Scientist"]
    },
    {
        id: 7,
        name: "Design Thinking",
        description: "Solving problems with a user-centric approach.",
        relatedCareers: ["UX/UI Designer", "Product Manager", "Graphic Designer"]
    },
    {
        id: 8,
        name: "Video Editing",
        description: "Manipulating video footage to tell a story.",
        relatedCareers: ["Video Editor", "Content Creator"]
    },
    {
        id: 9,
        name: "Digital Marketing",
        description: "Promoting products online.",
        relatedCareers: ["Digital Marketer", "Social Media Manager"]
    },
    {
        id: 10,
        name: "Financial Management",
        description: "Managing money and investments.",
        relatedCareers: ["Chartered Accountant", "Investment Banker"]
    },
    {
        id: 11,
        name: "Cybersecurity",
        description: "Protecting systems from digital attacks.",
        relatedCareers: ["Cybersecurity Analyst", "Network Engineer"]
    },
    {
        id: 12,
        name: "Mobile Development",
        description: "Building apps for phones and tablets.",
        relatedCareers: ["Mobile App Developer"]
    },
    {
        id: 13,
        name: "Project Management",
        description: "Planning and executing projects.",
        relatedCareers: ["Product Manager", "Art Director"]
    },
    {
        id: 14,
        name: "General Knowledge",
        description: "Awareness of current events and history.",
        relatedCareers: ["IAS Officer", "Bank PO", "Government Teacher"]
    },
    {
        id: 15,
        name: "Medical Knowledge",
        description: "Understanding human biology and health.",
        relatedCareers: ["Doctor", "Nurse", "Pharmacist"]
    },
    {
        id: 16,
        name: "Laboratory Skills",
        description: "Handling scientific equipment and experiments.",
        relatedCareers: ["Biotechnologist", "Forensic Scientist", "Lab Technician"]
    }
];

const faqs = [
    {
        question: "Is this suitable for beginners?",
        answer: "Yes! Career Explorer is designed specifically for students and freshers."
    },
    {
        question: "Is this free?",
        answer: "Absolutely. All resources and information here are free to access."
    },
    {
        question: "Does this guarantee a job?",
        answer: "No, but it provides the roadmap and guidance to help you get one."
    },
    {
        question: "How should I start learning?",
        answer: "Visit our Roadmap page to see a step-by-step guide for beginners."
    },
    {
        question: "Can I switch careers?",
        answer: "Yes, many skills are transferable. Check our 'skills' section to see matches."
    }
];
