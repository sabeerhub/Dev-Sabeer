import { useEffect } from 'react';
import { Project } from '../types';

interface SeoProps {
  title: string;
  description: string;
  path: string;
  project?: Project;
}

export function SeoHead({ title, description, path, project }: SeoProps) {
  useEffect(() => {
    // 1. Update document title
    document.title = title;

    // 2. Update description metadata tag
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', description);

    // 3. Update canonical tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://dev-sabeer.vercel.app${path}`);

    // 4. Inject Dynamic JSON-LD Schema
    let dynamicSchema = document.getElementById('dynamic-jsonld-schema');
    if (dynamicSchema) {
      dynamicSchema.remove();
    }

    const script = document.createElement('script');
    script.id = 'dynamic-jsonld-schema';
    script.type = 'application/ld+json';

    let schemaData: any = {};

    // Standard Person entity markup
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://dev-sabeer.vercel.app/#person",
      "name": "Mustapha Abdulsalam",
      "alternateName": "Sabeer",
      "jobTitle": "Frontend Developer & AI Solutions Builder",
      "brand": {
        "@type": "Brand",
        "name": "Sabeer-Verse"
      },
      "url": "https://dev-sabeer.vercel.app",
      "sameAs": [
        "https://linkedin.com/in/masabeer",
        "https://github.com/sabeerhub",
        "https://x.com/_msabeer_",
        "https://youtube.com/@sabeer-io",
        "https://instagram.com/_m.sabeer_",
        "https://tiktok.com/@_m.sabeer_",
        "https://t.me/sabeer_xt"
      ]
    };

    if (project) {
      // Create CreativeWork schema combined with Person schema as publisher
      schemaData = {
        "@context": "https://schema.org",
        "@graph": [
          personSchema,
          {
            "@type": "CreativeWork",
            "@id": `https://dev-sabeer.vercel.app/projects/${project.id}/#work`,
            "name": project.title,
            "headline": project.tagline,
            "description": project.description,
            "creator": {
              "@id": "https://dev-sabeer.vercel.app/#person"
            },
            "url": `https://dev-sabeer.vercel.app/projects/${project.id}`,
            "genre": project.category,
            "keywords": project.techStack.join(', '),
            "abstract": project.problem,
            "securityRequirement": project.security.join('. ')
          }
        ]
      };
    } else {
      // General landing page schema - WebSite and Person connected
      schemaData = {
        "@context": "https://schema.org",
        "@graph": [
          personSchema,
          {
            "@type": "WebSite",
            "@id": "https://dev-sabeer.vercel.app/#website",
            "url": "https://dev-sabeer.vercel.app",
            "name": "Sabeer-Verse",
            "description": description,
            "publisher": {
              "@id": "https://dev-sabeer.vercel.app/#person"
            }
          }
        ]
      };
    }

    script.textContent = JSON.stringify(schemaData, null, 2);
    document.head.appendChild(script);

    return () => {
      // Cleanup dynamically injected schema if navigating away
      const toClean = document.getElementById('dynamic-jsonld-schema');
      if (toClean) {
        toClean.remove();
      }
    };
  }, [title, description, path, project]);

  return null;
}
