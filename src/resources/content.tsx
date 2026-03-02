import {
  Blog,
  Experience,
  Gallery,
  Newsletter,
  Person,
  Profile,
  Projects,
  Resume,
  Social,
} from "@/types";

const person: Person = {
  firstName: "Fayyez",
  lastName: "Farrukh",
  name: `Fayyez Farrukh`,
  role: "Fullstack Developer",
  avatar: "/images/avatar.jpg", // TODO: change this to bigger picture
  email: "fayyez2056@gmail.com",
  location: "Asia/Karachi",
  languages: ["English", "Urdu/Hindi"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Fayyez",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/fayyez-farrukh",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const resumes: Resume[] = [
  {
    title: "Fullstack Developer",
    url: "resumes/Fayyez resume - SE.pdf",
  },
];

const profile: Profile = {
  path: "/",
  label: "Profile",
  title: `Profile - ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/fayyez-farrukh-klufv1",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        High-achieving Software Engineer with experience across AI, machine
        learning, and full-stack web development. I've contributed to production
        systems, led award-winning projects, and thrive in collaborative
        environments where innovation meets real-world impact.
      </>
    ),
  },
  education: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "FAST NUCES (Lahore)",
        degree: "B.Sc. in Software Engineering",
        timeframe: "2022 - 2026",
        description: (
          <>
            Graduated with a GPA of 3.96/4.0 with six gold medals and honour of
            serving as teacher assistant for three semesters.
          </>
        ),
      },
      {
        name: "Forman Christian College (FCCU)",
        degree: "F.Sc. (pre-engineering)",
        timeframe: "2020 - 2022",
        description: (
          <>Batch bronze medalist. Was awarded two years of merit scholarship</>
        ),
      },
    ],
  },
  certifications: {
    display: true,
    title: "Certifications",
    items: [
      {
        name: "Django Web Framework",
        institution: "Meta",
        year: "2025",
        url: "https://www.coursera.org/account/accomplishments/verify/PTI1CH9SN3F8",
      },
      {
        name: "Introduction to Databases for Backend Development",
        institution: "Meta",
        year: "2025",
        url: "https://www.coursera.org/account/accomplishments/verify/QSLNG79HOEIM",
      },
      {
        name: "Programming in Python",
        institution: "Meta",
        year: "2025",
        url: "https://www.coursera.org/account/accomplishments/verify/XSFD3WVO40HZ",
      },
      {
        name: "Oracle Cloud Infrastructure 2024 Gen AI Certified Professional",
        institution: "Oracle",
        year: "2024",
        url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=CC1DD9A6950DA7E8B379B60AA0FD678B0C46A79E7BD90BA5538C47F326D2C559",
      },
      {
        name: "Intro to User Design Experience",
        institution: "Georgia Institute of Technology",
        year: "2024",
        url: "https://www.coursera.org/account/accomplishments/records/9MXD4CBFSWZA",
      },
      {
        name: "Python for Data Science, AI & Development",
        institution: "IBM",
        year: "2024",
        url: "https://www.coursera.org/account/accomplishments/records/YUBE4ACZK5AN",
      },
      {
        name: "Intro to Project Management",
        institution: "Coursera",
        year: "2023",
        url: "https://www.coursera.org/account/accomplishments/certificate/Z8QFPHYUSHKC?utm_source=android&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=project",
      },
    ],
  },
  achievements: {
    display: true,
    title: "Achievements",
    items: [
      {
        name: "Rector and Dean's List of Honour - FAST NUCES (Lahore)",
        description: (
          <>
            Inscribed in FAST Rector’s list of honour: spring 2023, fall 2023,
            spring 2024, fall 2024, fall 2025 and Dean’s list of honour: fall
            2022, spring 2025.
          </>
        ),
        url: "https://www.nu.edu.pk/Campus/Lahore/RectorLists",
      },
      {
        name: "Organizer TEDxFASTLahore 2025",
        description: (
          <>
            Led a team of 80+ students to organise one of the largest TEDx
            events in Pakistan with 400+ attendees. Coordinated sponsorships,
            marketing, branding, speaker outreach and logistics efforts for the
            event.
          </>
        ),
        url: "https://www.ted.com/tedx/events/66246",
      },
      {
        name: "Semester Gold Medals - FAST NUCES Lahore",
        description: (
          <>
            Awarded six gold medals for achieving the highest GPA in six
            separate semesters in the SE department.
          </>
        ),
      },
      {
        name: "SVP Career Counseling Society (CCS)",
        description: (
          <>
            Served as senior vice president of CCS and led teams and coordinated
            across departments to plan and execute some of the largest events on
            campus, including annual Job Fair 2024, 2025 and 2026, TEDxFAST 2023
            and 2024, and Choose France Education Fair 2024 and 2025 and
            multiple bootcamps and seminars at FAST NUCES.
          </>
        ),
        url: "https://www.instagram.com/careercounselingsociety/?hl=en",
      },
      {
        name: "Student Volunteer - Exploration",
        description: (
          <>
            Team exploration works to promote space education in Pakistan. It is
            a platform founded by the amazing @Yumna Majid for astronomy
            enthusiats in Pakistan to collaborate, network and bring amazing
            workshops/seminars for the public working under the motto of "space
            for everyone".
          </>
        ),
        url: "https://explorationbyyumna.com/about/",
      },
      {
        name: "Winner Speridian OneAI Hackathon 2025",
        description: (
          <>
            Won the AI hackathon with a prize money 150,000 PKR for submitting
            the best AI based solution to a warehouse inventory management
            problem.
          </>
        ),
        url: "https://www.linkedin.com/posts/speridian-technologies_oneai-aihackathon-artificialintelligence-ugcPost-7390987569796280320-gmpF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2A8n8BlQP22N7ofV_z9ZD3yTh7JtJl0lc",
      },
      {
        name: "Trailblazer Award - Soliton Technologies",
        description: (
          <>
            Won first place in an internal innovative product development
            competition with my submission of Countistics, a Yolov8 based
            pakistani vehicle tracking and counter for smart parking management.
          </>
        ),
        url: "https://github.com/Fayyez/countistics",
      },
    ],
  },
};

const experience: Experience = {
  path: "/experience",
  label: "Experience",
  title: `Experience - ${person.name}`,
  description: `Work experience and technical skills of ${person.name}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Conrad Labs",
        timeframe: "June 2025 - September 2025",
        role: "SWE Intern",
        achievements: [
          <>
            Worked as part of an agile team on an internal ATS / hiring
            management platform, contributing across the full software
            development lifecycle. Took part in project demos, bug-bash
            sessions, and structured code reviews and implemented full-stack
            features (like easy apply, custom filtration in server side
            pagination, etc.) collaborating closely with designers, product
            managers and senior engineers.
          </>,
          <>
            Migrated the codebase to a JS-TS hybrid environment, improving type
            safety, maintainability, and developer experience.
          </>,
        ],
        images: [],
      },
      {
        company: "Soliton Technologies (now Persivia Inc.)",
        timeframe: "June 2024 - April 2025",
        role: "AI Trainee Engineer",
        achievements: [
          <>
            Helped design, implement and validate performance of an LLM-powered
            text-to-SQL pipeline to automate complex database querying on the
            company's healthcare analytics platform.
          </>,
          <>
            Contributed to the improvement of machine learning models for
            patient readmission prediction, focusing on feature engineering,
            model tuning and performance evaluation to enhance predictive
            accuracy.
          </>,
          <>
            Developed a CV based vehicle tracking and counting system using
            YOLOv8 as part of an internal innovation challenge, achieving first
            place among competing teams. The system was later delivered and
            deployed on-site at comsats university, Lahore.
          </>,
          <>
            Developed and enhanced an OCR based clinical document processing and
            medical code assignment pipeline to extract information from
            structured medical notes, speeding up downstream analytics
            efficiency and automated workflows.
          </>,
        ],
        images: [],
      },
      {
        company: "FAST NUCES",
        timeframe: " February 2024 - January 2025",
        role: "Teacher Assistant (TA)",
        achievements: [
          <>
            For the courses of Applied Programming (for MSCS), Object Oriented
            Programming and Data Structures (for BSCS) supporting both graduate
            and undergraduate coursework.
          </>,
        ],
      },
      {
        company: "FAST NUCES",
        timeframe: "July. 2023 – October. 2023",
        role: "Reasearch Assistant",
        achievements: [
          <>
            Assisted in the systematic creation, organization and management of
            dataset for technical summarization via T5 transformer models under
            the HOD Data Science department at FAST NUCES (Lahore campus).
          </>,
        ],
      },
      {
        company: "Questra Digital",
        timeframe: " June. 2023 – September. 2023",
        role: "Software Engineer Intern",
        achievements: [
          <>
            Designed and developed reusable UI components using React.js,
            translating design mock-ups into responsive, production-ready
            interfaces.
          </>,
          <>
            Contributed to test automation workflows using cypress, assisting in
            identifying regressions and improving application reliability.
          </>,
        ],
      },
    ],
  },
  technical: {
    display: true,
    title: "Tools & Technologies",
    skills: [
      {
        title: "Programming Languages",
        description: <></>,
        tags: [
          { name: "python", icon: "python" },
          { name: "javascript", icon: "javascript" },
          { name: "typescript", icon: "typescript" },
          { name: "java", icon: "java" },
          { name: "C/C++", icon: "cpp" },
        ],
        images: [],
      },
      {
        title: "Frontend",
        description: <></>,
        tags: [
          { name: "HTML", icon: "HTML" },
          { name: "Tailwindcss", icon: "tailwindcss" },
          { name: "React.js", icon: "reactjs" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Vite", icon: "vitejs" },
          { name: "ReactNative", icon: "reactnative" },
          { name: "Figma", icon: "figma" },
          { name: "Cypress", icon: "cypress" },
          { name: "Streamlit", icon: "streamlit" },
        ],
        images: [],
      },
      {
        title: "Backend & Infrastructure",
        description: <></>,
        tags: [
          { name: "Django", icon: "Django" },
          { name: "Flask", icon: "flask" },
          { name: "Node.js", icon: "nodejs" },
          { name: "Express.js", icon: "expressjs" },
          { name: "SQL", icon: "sql" },
          { name: "MongoDB", icon: "mongodb" },
          { name: "Docker", icon: "docker" },
          { name: "Linux", icon: "linux" },
          { name: "AWS", icon: "aws" },
          { name: "Git", icon: "git" },
          { name: "Numpy", icon: "numpy" },
          { name: "Langchain", icon: "langchain" },
          { name: "OpenCV", icon: "opencv" },
          { name: "Maven", icon: "maven" },
          { name: "Jira", icon: "jira" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const projects: Projects = {
  path: "/projects",
  label: "Projects",
  title: `Projects - ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery - ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export {
  person,
  social,
  newsletter,
  resumes,
  profile,
  experience,
  blog,
  projects,
  gallery,
};
