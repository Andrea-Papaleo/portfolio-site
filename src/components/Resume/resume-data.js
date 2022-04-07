export const resumeData = {
  experience: [
    {
      position: "Web Developer",
      org: "Binghamton University",
      duration: { start: "Oct 2021", end: "Current" },
      description: `Maintain and expand design system and its components to provide
                      a natural flow of information. Update and expand documentation
                      contents to ensure easy onboarding onto the Spiedie HPC Cluster. 
                      Conduct user feedback surveys on a 100+ person cohort to improve
                      documentation usability.`,
      highlights: [
        `Work with legacy code to redesign the SpiedieDocs website; using HTML, CSS, JS, Jekyll, Liquid, and GitHub Pages to
          improve UI.`,
        `Levy working knowledge of submitting workloads using the Slurm workload management system using the Spiedie
          cluster to expand on the documentation.`,
      ],
    },
    {
      position: "Software Engineer",
      org: "Focused Financing",
      duration: { start: "Jan 2018", end: "Current" },
      description: `Design, develop and maintain the landing pages for Focused Financing
         and it's sister companies. Scrape and compile data from public
        record ${"("}DandB, NYS Unified Court System, and ZoomInfo${")"} for lead generation.`,
      highlights: [
        `Built mock designs and wireframes for landing pages of multiple product concepts using Figma.`,
        `Developed functional UI/UX with the React.js javascript library, HTML5, and CSS3.`,
        `Led migration of back-end from PHP to Node.js and Express.js. Built out Node API for
          content delivery and form submissions.`,
        `Use Python with BeautifulSoup to parse HTML data and Selenium to navigate through webpages. Data gathered was
           then organized using Pandas and exported to Excel/CSV files for lead generation.`,
      ],
    },
    {
      position: "Graduate Research Assistent",
      org: "Binghamton University",
      duration: { start: "May 2017", end: "Current" },
      description: `I use massively-parallel molecular dynamics software ${"("}LAMMPS${")"} to
                     study nucleation and growth kinetics in tin systems. Write Python 
                     scripts to employ custom methods for the compilation and analysis of
                      simulated solder growth data. Present research monthly to selective 
                      panels at partner semiconductor manufacturers, such as IBM and Intel.`,
      highlights: [
        `Use (LAMMPS), which is written in C++
           and compiled on both personal computers as well as the Binghamton
          
           University high-performance computing cluster.`,
        `Submitted batch jobs via Bash scripts on the computing cluster,
           which uses the Simple Linux Utility Resource Management (SLURM)
            system for resource management and job scheduling.`,
        `Designed and built visualizations and analytics for easily understandable presentations to selective panels at
           partner semiconductor manufacturers, IBM and Intel.`,
      ],
    },
  ],
  education: [
    {
      position: "PhD Materials Science & Engineering",
      org: "Binghamton University",
      duration: { start: "May 2017", and: "May 2022" },
      description: "Notable:",
      highlights: [
        "Computational study of tin growth from the melt.",
        `Presented research at the Semiconductor Research Corporation
           Consortium and the Materials Science & Technology Conference`,
        "Collaborate with Intel and IBM on research",
      ],
    },
    {
      position: "BS Engineering Physics",
      org: "Binghamton University",
      duration: { start: "May 2015", and: "May 2017" },
      description: "Notable:",
      highlights: [
        `Worked in two research labs; The Cotts Lab develops and improves
           upon Pb-free solders for microelectronic interconnects, and the
            Yong Lab studying nanoparticle-mediated evaporation at
             liquid–vapor interfaces`,
        `Audited classes teaching computing for high performance clusters
           and automata theory with formal logic.`,
        `Volunteered at the Humane Society through the Binghamton 
          University Center for Civic Engagement`,
      ],
    },
  ],

  skills: [
    {
      position: "Scientific Computing",
      description: `Physics simulations,data analysis & visualization, Python, C++, `,
    },
    {
      position: "Front-End",
      description: `JavaScript, React/Gatsby,Next.JS, Node.JS tooling, CSS-in-JS,HTML/CSS, SCSS, Jekyll, Liquid`,
    },
    {
      position: "Back-End",
      description: `JavaScript, Python, Django, Express.JS, GraphQL, PostgreSQL`,
    },
    {
      position: "Technologies",
      description: "Git, Visual Studio Code, Jupyter, SLURM, Figma, Bash, Zsh",
    },
    {
      position: "Soft Skills",
      description:
        "Verbal & written communications, problem solving, tenacity, team-oriented",
    },
  ],
  postscript: [
    {
      position: "Project Management",
      description: `Experience managing construction projects, coordinating material procurement and trade labor`,
    },
    {
      position: "Problem Solving",
      description: `Calm enjoyment in dividing a problem into its individual parts and finding optimal solutions`,
    },
    {
      position: "Personal Skills",
      description: `Empathetic and perceptive to those around me`,
    },
  ],
};
