// Profile Configuration
// This file contains all customizable profile data
// To create a new profile, simply update the values in this object

const profileConfig = {
    // Personal Information
    name: "Jane Wamboi",
    title: "Backend Developer",
    subtitle: "Open Source Contributor",
    location: "",
    email: "wamboijane574@gmail.com",
    phone: "", // Removed as requested
    
    // Education
    education: {
        institution: "Backend Development",
        degree: "Backend Development",
        status: "Professional"
    },
    
    // Current Work/Experience
    currentWork: {
        show: false, // Set to true if you want to show current work
        company: "",
        description: "",
        link: ""
    },
    
    // Skills and Technologies
    skills: [
        "Python",
        "Java",
        "Go",
        "Node.js",
        "REST APIs",
        "GraphQL",
        "Kubernetes",
        "Docker",
        "AWS",
        "Azure",
        "GCP",
        "Microservices",
        "Message Queues",
        "Databases",
        "CI/CD",
        "Git/GitHub"
    ],
    
    // Experience (years calculation)
    experience: {
        startDate: "January 1 2020 00:00", // Format: "Month Day Year HH:MM"
        show: true
    },
    
    // Interests/Hobbies
    interests: [
        "Open Source Contributions",
        "Backend Development",
        "Cloud Computing",
        "Kubernetes",
        "Microservices",
        "API Development",
        "System Design"
    ],
    
    // Social Media Links
    social: {
        github: "https://github.com/janewamboiLM",
        linkedin: "", // Add if available
        medium: "", // Add if available
        twitter: "", // Add if available
        email: "wamboijane574@gmail.com"
    },
    
    // Open Source Contributions
    openSource: {
        highlight: true,
        description: "Active contributor to Kubernetes and backend development projects. Passionate about building scalable backend systems, cloud-native applications, and contributing to open source projects in the Kubernetes ecosystem.",
        projects: [
            {
                name: "strimzi-kafka-operator",
                description: "Contributing to Apache Kafka running on Kubernetes - working on Kafka operator for cloud-native message queue infrastructure",
                link: "https://github.com/janewamboiLM/strimzi-kafka-operator"
            },
            {
                name: "kubectl-ai",
                description: "Working on AI powered Kubernetes Assistant - contributing to AI-driven tools for Kubernetes operations and backend development",
                link: "https://github.com/janewamboiLM/kubectl-ai"
            },
            {
                name: "examples",
                description: "Contributing to Kubernetes application examples - helping developers understand backend deployment patterns and best practices",
                link: "https://github.com/janewamboiLM/examples"
            }
        ]
    },
    
    // Typed.js Terminal Messages
    terminal: {
        skillSetQuestion: "Skill Set?",
        experienceQuestion: "Experience?",
        interestsQuestion: "My Interests?",
        coolStuffQuestion: "Open Source Contributions?"
    },
    
    // SEO Meta Tags
    seo: {
        description: "Jane Wamboi, Backend Developer specializing in Cloud Computing and Kubernetes. Building scalable backend systems and contributing to open source backend projects.",
        keywords: "Jane Wamboi, Backend Developer, Python, Java, Go, Node.js, Kubernetes, Docker, AWS, Azure, GCP, Microservices, REST APIs, Open Source",
        author: "Jane Wamboi"
    },
    
    // Additional Info
    additionalInfo: "Passionate Backend Developer with expertise in cloud computing, Kubernetes, and backend development. Committed to building scalable backend systems and cloud-native applications. Active open source contributor focused on Kubernetes ecosystem projects. The quieter you become the more you are able to hear."
};

