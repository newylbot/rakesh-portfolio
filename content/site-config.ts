export interface ExperienceItem { company:string; role:string; period:string; location:string; type:string; summary:string[]; systems:string[]; reflection:string; evidenceUrl:string }
export interface Project { slug:string; title:string; category:string; status:string; oneLine:string; stack:string[]; github:string; demo:string; placeholder?:boolean }
export interface Skill { name:string; level:string }

export const siteConfig = {
 person: {
 name: "Rakesh Kumar Behera", shortName: "Rakesh", monogram: "RKB",
 role: "Electrical Engineering Graduate | Quality, Automation & Industrial Maintenance",
 headline: "Engineering reliable systems from the factory floor to software.",
 altHeadline: "Electrical engineer, industrial systems learner and software builder.",
 heroParagraph: "Electrical Engineering graduate with hands-on automotive quality control experience, industrial electrical exposure, and Siemens SCADA training. I work across inspection, automation, power systems and practical software, with a focus on reliable behavior and clear documentation.",
 bio: "Electrical Engineering graduate (2026) with hands-on experience in automotive quality control at Sakthi Auto Component Limited and industrial electrical systems at SAIL Rourkela Steel Plant. Trained in Siemens WinCC and TIA Portal SCADA at CTTC Bhubaneswar.",
 location: "India", availability: "Open to opportunities", availabilityLine: "Based in India, available for remote and on-site opportunities.",
 email: "rakesh.ku.behera@outlook.in", phone: "+91-9337739502", github: "", linkedin: "", resumeUrl: "/api/resume",
 },
 nav: [
 {label:"Work",href:"/projects"},{label:"Experience",href:"/experience"},{label:"About",href:"/about"},{label:"Skills",href:"/skills"},{label:"Resume",href:"/resume"},{label:"Contact",href:"/contact"}
 ],
 social: [
 {label:"GitHub",href:""},{label:"LinkedIn",href:""},{label:"Email",href:"mailto:rakesh.ku.behera@outlook.in"}
 ],
 opportunities: ["Quality Inspector","Technical Support Assistant","Industrial Electrician","Manufacturing Trainee","Automation / SCADA roles","Graduate Electrical Engineer","Junior software opportunities"],
 home: {
 credibility:["Electrical Engineering","Automotive Quality Control","Siemens SCADA","Industrial Maintenance","Programming & Simulation"],
 approach:[
 {title:"Observe the system",body:"Read its inputs, constraints, failure modes and operating context before changing it."},
 {title:"Measure what matters",body:"Use inspection, testing and signal data to replace assumptions with evidence."},
 {title:"Document the decision",body:"Make results, tradeoffs and next actions clear enough for the next person to continue."}
 ],
 finalCta:{headline:"Have a system worth improving?",body:"Let us talk about dependable industrial, electrical and software work."}
 },
 about: {
 intro:"I am Rakesh Kumar Behera, an Electrical Engineering graduate working at the intersection of industrial quality, automation, electrical systems and software. I like understanding why a system behaves the way it does, then making that behavior safer, clearer and more dependable.",
 whyEngineering:"Electrical engineering taught me to think in circuits, signals, loads, protection and safety margins. Industrial experience added inspection discipline, maintenance awareness and respect for procedures.",
 industrialToSoftware:"Siemens SCADA training, MATLAB simulation and programming in C++, Java and Python let me carry that systems mindset into interfaces, automation logic and software tools.",
 principles:["Reliability before novelty.","Evidence before assumptions.","Safety and correctness first.","Clear records make stronger systems."],
 currentFocus:["Siemens WinCC and TIA Portal","Industrial quality and dimensional inspection","Electrical maintenance and power systems","Programming and simulation"],
 beyondWork:"I enjoy translating technical ideas into clean interfaces, diagrams and documentation that people can actually use."
 },
 experience: [
 {company:"Sakthi Auto Component Limited",role:"Intern - Electrical (Quality Control Department)",period:"Dec 2025 - Apr 2026",location:"Tiruppur, Tamil Nadu",type:"Manufacturing internship",summary:["Inspected 1,000+ steering knuckle components weekly using vernier caliper and micrometer.","Conducted hardness testing and identified cracks, porosity, burrs and corrosion.","Maintained daily inspection and rejection records for root cause analysis."],systems:["Dimensional inspection","Hardness testing","Defect analysis","Control plans"],reflection:"Built a practical understanding of how disciplined inspection and records prevent non-conforming dispatch.",evidenceUrl:""},
 {company:"Central Tool Room & Training Centre (MSME)",role:"Industrial Automation Trainee - SCADA",period:"Jun 2025",location:"Bhubaneswar, Odisha",type:"Technical training",summary:["Completed 120+ hours using Siemens WinCC and WinCC Flexible.","Covered system configuration, alarm management, tag logging and real-time monitoring.","Designed HMI interfaces in TIA Portal and configured multi-user SCADA projects."],systems:["Siemens WinCC","TIA Portal","HMI design","Alarm logging"],reflection:"Connected control theory with the state, alarms and interfaces operators depend on.",evidenceUrl:""},
 {company:"SAIL - Rourkela Steel Plant",role:"Summer Intern - Electrical",period:"Jun 2024 - Jul 2024",location:"Rourkela, Odisha",type:"Vocational training",summary:["Observed high-voltage installations across 3+ substations.","Studied transformers, motors, control panels, load balancing and energy efficiency.","Followed LOTO, PPE and industrial safety protocols."],systems:["Transformers","Induction motors","Control panels","Electrical distribution"],reflection:"Saw how protection, maintenance routines and safety procedures hold heavy electrical systems together.",evidenceUrl:""},
 {company:"Biju Patnaik University of Technology",role:"Bachelor of Technology in Electrical Engineering",period:"Nov 2022 - Jun 2026",location:"Rourkela, Odisha",type:"Education",summary:["Electrical machines, power systems, network theory, control systems and power electronics.","CGPA 7.31."],systems:["Power systems","Machines","Control","Network theory"],reflection:"The academic base behind my industrial and software systems work.",evidenceUrl:""}
 ] as ExperienceItem[],
 education:{degree:"Bachelor of Technology in Electrical Engineering",completion:"Jun 2026",location:"Rourkela, Odisha",institution:"Biju Patnaik University of Technology (BPUT)",cgpa:"7.31",showCgpa:true,
 higherSecondary:"Government Higher Secondary School, Rourkela",highSchool:"Chinmaya Vidyalaya, Sec-7, Rourkela"},
 projects: [
 {slug:"lumino-xp",title:"ColTest",category:"Product concept / backend systems",status:"In progress",oneLine:"An online testing platform direction focused on trustworthy state handling, clear candidate flows and backend architecture.",stack:["Rust direction","APIs","Web systems"],github:"",demo:"",placeholder:false},
 {slug:"scada-process-monitoring",title:"SCADA Process Monitoring",category:"Industrial automation",status:"Completed simulation",oneLine:"An industrial process monitoring system with tag logging, alarm handling and a real-time HMI dashboard.",stack:["Siemens WinCC","TIA Portal","HMI"],github:"",demo:"",placeholder:false},
 {slug:"electrical-load-analysis",title:"Electrical Load Analysis",category:"Power systems / simulation",status:"Completed simulation",oneLine:"MATLAB simulation of voltage-current behavior and system performance under varying electrical loads.",stack:["MATLAB","Load analysis","Simulation"],github:"",demo:"",placeholder:false}
 ] as Project[],
 skills: {
 intro:"Capability is shown with context, not inflated percentages.",
 electricalIndustrial:[{name:"Transformers and induction motors",level:"Working knowledge"},{name:"Control panels and circuit analysis",level:"Working knowledge"},{name:"Dimensional inspection",level:"Hands-on"},{name:"Hardness and defect testing",level:"Hands-on"},{name:"Industrial safety and LOTO",level:"Industrial exposure"}] as Skill[],
 softwareSystems:[{name:"Siemens WinCC / WinCC Flexible",level:"Trained"},{name:"TIA Portal and HMI design",level:"Trained"},{name:"MATLAB simulation",level:"Working knowledge"},{name:"C++ and Java OOP",level:"Working knowledge"},{name:"Python scripting",level:"Working knowledge"}] as Skill[],
 toolsWorkflow:[{name:"Vernier caliper and micrometer",level:"Hands-on"},{name:"NI Multisim",level:"Working knowledge"},{name:"MS Excel and Word",level:"Working knowledge"},{name:"Inspection records",level:"Hands-on"}] as Skill[]
 },
 now:{updated:"July 2026",focus:["Industrial automation and SCADA","Quality engineering and inspection","Electrical systems and maintenance","Practical software and simulation"],log:[{date:"July 2026",note:"Building this portfolio as a clear record of verified industrial, electrical and software work."}]},
 resume:{note:"The web resume below is built from the verified resume. Use Download Resume for a portable PDF copy."},
 honors:["First Position - Interdepartmental Project Expo (2025): bidirectional AC-DC power system.","Industrial Automation & SCADA Training (2025), CTTC Bhubaneswar.","Vocational Industrial Training (2024), SAIL Rourkela Steel Plant."],
 seo:{defaultDescription:"Portfolio of Rakesh Kumar Behera, Electrical Engineering graduate with experience in quality control, Siemens SCADA, industrial electrical systems and software.",keywords:["Rakesh Kumar Behera","Electrical Engineer","Quality Control","Siemens WinCC","TIA Portal","SCADA","Industrial Maintenance","MATLAB"]}
};
export type SiteConfig=typeof siteConfig;
