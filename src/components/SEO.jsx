import { useEffect } from 'react';

/**
 * SEO Component — Injects JSON-LD Structured Data into <head>
 * Covers: Person, WebSite, ProfilePage schemas
 * for Google, Bing, ChatGPT, Perplexity, Gemini AI search crawlers.
 */
const SEO = () => {
  useEffect(() => {
    const schemas = [
      // ── 1. PERSON SCHEMA ──────────────────────────────────────────────────
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://maniarasan.vercel.app/#person",
        "name": "Maniarasan J",
        "givenName": "Maniarasan",
        "familyName": "J",
        "alternateName": ["Mani J", "Mani2815"],
        "description": "MCA student at Christ University, Bengaluru and AI/ML Engineer Intern at Job Jockey. Specialising in LLM systems, real-time data pipelines, voice AI agents, and full-stack applications.",
        "url": "https://maniarasan.vercel.app/",
        "email": "maniarasan2815@gmail.com",
        "image": {
          "@type": "ImageObject",
          "url": "https://maniarasan.vercel.app/og-image.png",
          "width": 1200,
          "height": 630
        },
        "jobTitle": "AI/ML Engineer Intern",
        "worksFor": {
          "@type": "Organization",
          "name": "Job Jockey",
          "url": "https://jobjockey.in"
        },
        "alumniOf": [
          {
            "@type": "CollegeOrUniversity",
            "name": "Christ University",
            "url": "https://christuniversity.in",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bengaluru",
              "addressCountry": "IN"
            }
          },
          {
            "@type": "CollegeOrUniversity",
            "name": "Sri Ramakrishna College of Arts & Science",
            "url": "https://srcas.ac.in"
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://www.linkedin.com/in/maniarasan-j-175780248/",
          "https://github.com/Mani2815",
          "https://hackerrank.com/maniarasan2815",
          "https://leetcode.com/u/mani2815/"
        ],
        "knowsAbout": [
          "Artificial Intelligence",
          "Machine Learning",
          "Large Language Models",
          "Data Engineering",
          "Data Science",
          "Python",
          "FastAPI",
          "ETL Pipelines",
          "Natural Language Processing",
          "Retrieval Augmented Generation",
          "Voice AI",
          "AWS",
          "Docker",
          "SQL",
          "Deep Learning",
          "Data Analytics",
          "Streamlit",
          "React",
          "Node.js",
          "MongoDB"
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Master of Computer Applications (MCA)",
            "credentialCategory": "degree",
            "recognizedBy": {
              "@type": "CollegeOrUniversity",
              "name": "Christ University"
            }
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "B.Sc Computer Science with Data Analytics",
            "credentialCategory": "degree",
            "recognizedBy": {
              "@type": "CollegeOrUniversity",
              "name": "Sri Ramakrishna College of Arts & Science"
            }
          }
        ]
      },

      // ── 2. WEBSITE SCHEMA ─────────────────────────────────────────────────
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://maniarasan.vercel.app/#website",
        "url": "https://maniarasan.vercel.app/",
        "name": "Maniarasan J | Portfolio",
        "description": "Personal portfolio of Maniarasan J — AI/ML Engineer and Data Engineer. Projects, experience, and contact information.",
        "publisher": {
          "@id": "https://maniarasan.vercel.app/#person"
        },
        "inLanguage": "en-IN",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://maniarasan.vercel.app/#projects",
          "query-input": "required name=search_term_string"
        }
      },

      // ── 3. PROFILE PAGE SCHEMA ────────────────────────────────────────────
      {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "@id": "https://maniarasan.vercel.app/#profilepage",
        "url": "https://maniarasan.vercel.app/",
        "name": "Maniarasan J — AI/ML Engineer Portfolio",
        "description": "Professional portfolio page for Maniarasan J, showcasing projects in AI/ML, Data Engineering, and full-stack development.",
        "mainEntity": {
          "@id": "https://maniarasan.vercel.app/#person"
        },
        "dateCreated": "2026-06-01",
        "dateModified": new Date().toISOString().split('T')[0],
        "inLanguage": "en-IN",
        "isPartOf": {
          "@id": "https://maniarasan.vercel.app/#website"
        }
      },

      // ── 4. BREADCRUMB SCHEMA ──────────────────────────────────────────────
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://maniarasan.vercel.app/#home"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About",
            "item": "https://maniarasan.vercel.app/#about"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Experience",
            "item": "https://maniarasan.vercel.app/#timeline"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Projects",
            "item": "https://maniarasan.vercel.app/#projects"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Contact",
            "item": "https://maniarasan.vercel.app/#contact"
          }
        ]
      },

      // ── 5. ITEM LIST — FEATURED PROJECTS ─────────────────────────────────
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Featured Projects by Maniarasan J",
        "description": "A list of featured software projects built by Maniarasan J, covering Machine Learning, Data Engineering, and full-stack development.",
        "url": "https://maniarasan.vercel.app/#projects",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "SoftwareSourceCode",
              "name": "Crime Prediction & Analysis",
              "description": "Predictive analytics system using ML to forecast crime patterns and perpetrator profiles. Time-series analysis and geospatial modelling.",
              "programmingLanguage": ["Python", "Scikit-learn", "Pandas"],
              "codeRepository": "https://github.com/Mani2815/Crime_Prediction",
              "author": { "@id": "https://maniarasan.vercel.app/#person" }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "SoftwareSourceCode",
              "name": "Reddit ETL Pipeline",
              "description": "Scalable ETL pipeline to extract, transform, and load Reddit data with automated data collection, cleaning, and storage.",
              "programmingLanguage": ["Python", "SQL"],
              "codeRepository": "https://github.com/Mani2815/Social-Media-ETL-Dashboard---Reddit",
              "author": { "@id": "https://maniarasan.vercel.app/#person" }
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "SoftwareSourceCode",
              "name": "Civitas — Smart City CMS",
              "description": "Full-stack Smart City Complaint Management & Analytics System with role-based portals, Leaflet maps, AI chatbot, and real-time tracking.",
              "programmingLanguage": ["React", "FastAPI", "Python"],
              "codeRepository": "https://github.com/Mani2815/civitas-frontend",
              "author": { "@id": "https://maniarasan.vercel.app/#person" }
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "SoftwareSourceCode",
              "name": "Customer Churn Analysis",
              "description": "ML churn prediction model with data preprocessing, feature engineering, and model evaluation for e-commerce customer retention.",
              "programmingLanguage": ["Python", "Pandas", "Scikit-learn"],
              "codeRepository": "https://github.com/Mani2815/E-Commerce-Customer-Churn-Analysis",
              "author": { "@id": "https://maniarasan.vercel.app/#person" }
            }
          }
        ]
      }
    ];

    // Inject all schemas into <head>
    const existingScripts = document.querySelectorAll('script[data-seo-schema]');
    existingScripts.forEach(s => s.remove());

    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-schema', `schema-${index}`);
      script.textContent = JSON.stringify(schema, null, 0);
      document.head.appendChild(script);
    });

    return () => {
      const scripts = document.querySelectorAll('script[data-seo-schema]');
      scripts.forEach(s => s.remove());
    };
  }, []);

  return null;
};

export default SEO;
