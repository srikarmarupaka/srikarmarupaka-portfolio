import React from 'react';
import { Shield, Code, Server, Terminal, Database, Cloud } from 'lucide-react';
import { ExperienceItem, ProjectItem, EducationItem, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Srikar Marupaka",
  title: "Cyber Security Engineer | Full-Stack Developer",
  location: "Manthani, Telangana - 505185",
  phone: "+91 8142428053",
  email: "srikarmarupaka@duck.com",
  linkedin: "LinkedIn", 
  github: "GitHub",
  about: "Passionate techie, skilled in securing information and computer forensics and have proven experience in Web application development & Application Architecture. I am looking forward to enriching my skills in the cybersecurity and forensics field.",
  freelancing: true,
};

export const SKILLS: SkillCategory[] = [
  {
    title: "Cyber Security & Forensics",
    icon: <Shield className="w-6 h-6" />,
    skills: ["Nmap", "Wireshark", "Burp Suite", "Metasploit", "Autopsy", "Wazuh/Trellix", "OWASP ZAP", "Nikto", "Digital Forensics", "VAPT"]
  },
  {
    title: "Development",
    icon: <Code className="w-6 h-6" />,
    skills: ["JavaScript", "TypeScript", "React", "Node.js", "Java", "Python", "Full-Stack Web Dev", "API Security", "GraphQL"]
  },
  {
    title: "Infrastructure & Tools",
    icon: <Server className="w-6 h-6" />,
    skills: ["Linux (VI editor)", "AWS", "Terraform", "Kubernetes (K8s)", "Git", "DevSecOps", "CI/CD", "Docker"]
  },
  {
    title: "Database",
    icon: <Database className="w-6 h-6" />,
    skills: ["MySQL", "MongoDB"]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Senior Cyber Security Engineer",
    company: "CyFy Solutions, Hyderabad",
    period: "Sep. 2025 – Present",
    description: [
      "Conducted penetration testing on web apps and networks using tools like Burp Suite, Nmap, and Metasploit, identifying critical vulnerabilities.",
      "Performed vulnerability assessments and provided actionable remediation steps using Nessus, OpenVAS, and OWASP ZAP.",
      "Simulated real-world attack scenarios through red team exercises to evaluate and enhance incident response capabilities.",
      "Automated reconnaissance and exploit validation using Python and Bash, improving efficiency and repeatability.",
      "Leveraged OSINT tools like Shodan and Maltego to gather threat intelligence and detect impersonation risks.",
      "Collaborated with SOC and blue teams to validate detections and strengthen threat hunting strategies.",
      "Helping Financial organizations with Audit readiness for compliances like SEBI CSCRF, ISO 27001 & GDPR."
    ]
  },
  {
    role: "Ethical Hacker (Part-time)",
    company: "Kfintech",
    period: "Jun. 2025 – Aug. 2025",
    description: [
      "Conducted authorized penetration testing on critical infrastructure.",
      "Successfully compromised email servers and Document object storage to demonstrate critical vulnerabilities and improve security posture."
    ]
  },
  {
    role: "Intern Cyber Security Engineer",
    company: "fnCyber, Bangalore (Remote)",
    period: "Aug. 2024 – Mar. 2025",
    description: [
      "Implemented DevSecOps practices to enhance SaaS product security, integrating secure CI/CD pipelines and automated SAST & SCA assessments.",
      "Designed and architected a cloud-based SaaS platform, streamlining workflows for Security Engineers by integrating penetration testing tools.",
      "Developed and secured APIs and managed microservices for security scanners using Python, Kubernetes, and AWS.",
      "Specialized in Application Security, performing VAPT using Burp Suite, Metasploit, OWASP ZAP, and Nikto.",
      "Collaborated with stakeholders to provide insights on offensive and defensive security strategies compiling with OWASP & NIST."
    ]
  },
  {
    role: "Project Assistant",
    company: "NRSC [ISRO]",
    period: "Sep. 2024 – Mar. 2025",
    description: [
      "Developed a Comprehensive Enterprise-Level Forensic Platform for Linux, Windows, Network, and Memory Forensics.",
      "Automated Forensic Data Collection and Analysis using Bash scripts and PowerShell scripts to gather critical forensic artifacts.",
      "Integrated Malware Analysis Capabilities by leveraging Malshare APIs to analyze and detect potential threats."
    ]
  },
  {
    role: "Freelance Frontend Developer",
    company: "The Fastway, Mumbai (Remote)",
    period: "Sep. 2023 – Aug. 2024",
    description: [
      "Developed Pixel perfect UI with efficient functionality using React, Ethers, and Web3-react.",
      "Secure integration of Blockchain Wallets and GraphQL APIs.",
      "Collaborated with Blockchain developers and UI/UX design engineers for seamless development."
    ]
  },
  {
    role: "Associate Software Engineer",
    company: "Accenture, Hyderabad",
    period: "Dec. 2021 – Jun. 2023",
    description: [
      "Developed secure, efficient APIs in Java and Node.js, ensuring compliance with security best practices.",
      "Implemented API security mechanisms including OAuth, JWT, RBAC, ABAC, and rate limiting.",
      "Managed microservices using Kubernetes in Azure, implementing secure API gateway configurations."
    ]
  },
  {
    role: "Full-Stack Developer",
    company: "Muzigal, Hyderabad",
    period: "Feb. 2021 – Jun. 2021",
    description: [
      "Specialized in ReactJS and NodeJS to develop and maintain end-to-end web applications.",
      "Collaborated with cross-functional teams to design user-friendly interfaces and robust back-end systems."
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Zero-Knowledge enhanced Blockchain forensics framework",
    subtitle: "M. Tech. Major Project (in progress)",
    description: [
      "Based on Privacy-Preserving Identity Verification in Blockchain Forensics.",
      "Designing complex ZKP circuits with CIRCOM.",
      "Using ZK-Snark (Snarky JS) protocol with Groth16 Proof system."
    ]
  },
  {
    title: "Digital Health Records",
    subtitle: "B. Tech. Major Project",
    description: ["Developed a secure system for managing digital health records."]
  },
  {
    title: "Library Management",
    subtitle: "ECIL, Project Intern",
    description: ["Built a library management system during internship at ECIL."]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "MTech. in Cyber Forensics and Information Security",
    institution: "JNTU, Hyderabad",
    period: "Sep. 2023 – Sep. 2025",
    grade: "9.2/10 CGPA",
    details: [
      "Specialized in Blockchain Technology, Digital Forensics, Systems/Network Security, and Cryptanalysis.",
      "Research-driven approach to Zero Knowledge Proofs and VoIP steganography detection."
    ]
  },
  {
    degree: "B.Tech. in Info. Technology",
    institution: "Kakatiya University, Warangal",
    period: "Aug. 2017 – Jul. 2021",
    grade: "72.9%",
    details: []
  }
];

export const CERTIFICATIONS = [
  "Certified Ethical Hacker (EC Council)",
  "Certified in Cyber Security (ISC2)",
  "Cloud Practitioner Essentials (AWS)",
  "Entrepreneurship Development Program (MSME, Hyderabad)"
];