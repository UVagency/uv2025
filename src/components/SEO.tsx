import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  project?: {
    name: string;
    client: string;
    year: string;
  };
  pageType?: 'home' | 'project' | 'about' | 'contact' | 'company';
  keywords?: string[];
  author?: string;
  publishDate?: string;
  modifiedDate?: string;
  lang?: 'en' | 'es';
}

const defaultTitle = {
  en: 'UV 2025 Agency Media Experiences',
  es: 'UV 2025 Agencia Experiencias Mediáticas'
};

const defaultDescription = {
  en: 'United Visions 2025 UV Agency Media Experiences Events',
  es: 'United Visions 2025 UV Agencia Experiencias Mediáticas y Eventos'
};

const defaultImage = '/images/uv_logo.png';
const defaultUrl = 'https://uv.agency';
const defaultKeywords = {
  en: [
    'UV Agency',
    'Media Experiences',
    'Creative Agency',
    'Digital Marketing',
    'Brand Strategy',
    'Event Production',
    'Advertising',
    'Social Media',
    'Content Creation'
  ],
  es: [
    'UV Agencia',
    'Experiencias Mediáticas',
    'Agencia Creativa',
    'Marketing Digital',
    'Estrategia de Marca',
    'Producción de Eventos',
    'Publicidad',
    'Redes Sociales',
    'Creación de Contenido'
  ]
};

export const SEO = ({
  title,
  description,
  image,
  url,
  type = 'website',
  project,
  pageType = 'home',
  keywords,
  author = 'UV Agency',
  publishDate,
  modifiedDate = new Date().toISOString(),
  lang = 'en'
}: SEOProps) => {
  const seoTitle = project 
    ? `${project.name} | ${project.client} ${project.year} | UV Agency`
    : title || defaultTitle[lang];
  
  const seoDescription = description || defaultDescription[lang];
  const seoImage = image ? `${defaultUrl}${image}` : `${defaultUrl}${defaultImage}`;
  const seoUrl = url ? `${defaultUrl}${url}` : defaultUrl;
  const seoKeywords = project 
    ? [...(keywords || defaultKeywords[lang]), project.name, project.client, project.year]
    : keywords || defaultKeywords[lang];

  // Generate alternate language URLs
  const alternateUrls = {
    en: `${defaultUrl}${url || ''}`,
    es: `${defaultUrl}/es${url || ''}`
  };

  // Generate JSON-LD based on page type
  const generateJsonLd = () => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': '',
      name: seoTitle,
      description: seoDescription,
      url: seoUrl,
      dateModified: modifiedDate,
      inLanguage: lang === 'en' ? 'en-US' : 'es-ES',
      publisher: {
        '@type': 'Organization',
        name: 'UV Agency',
        url: defaultUrl,
        logo: seoImage
      }
    };

    switch (pageType) {
      case 'home':
        return {
          ...baseSchema,
          '@type': 'Organization',
          sameAs: [
            'https://twitter.com/agencyuv',
            'https://linkedin.com/company/uv-agency',
            'https://instagram.com/agencyuv',
            'https://facebook.com/agencyuv'
          ]
        };
      case 'project':
        return {
          ...baseSchema,
          '@type': 'CreativeWork',
          author: {
            '@type': 'Organization',
            name: 'UV Agency',
            url: defaultUrl
          },
          client: project?.client,
          datePublished: project?.year,
          image: seoImage,
          keywords: seoKeywords.join(', ')
        };
      case 'about':
      case 'company':
        return {
          ...baseSchema,
          '@type': 'AboutPage'
        };
      case 'contact':
        return {
          ...baseSchema,
          '@type': 'ContactPage'
        };
      default:
        return null;
    }
  };

  const jsonLd = generateJsonLd();

  return (
    <Helmet>
      {/* Language and Basic Meta Tags */}
      <html lang={lang} />
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords.join(', ')} />
      <meta name="author" content={author} />
      <link rel="canonical" href={seoUrl} />
      {publishDate && <meta name="article:published_time" content={publishDate} />}
      <meta name="article:modified_time" content={modifiedDate} />

      {/* Language Alternates */}
      <link rel="alternate" hrefLang="en" href={alternateUrls.en} />
      <link rel="alternate" hrefLang="es" href={alternateUrls.es} />
      <link rel="alternate" hrefLang="x-default" href={alternateUrls.en} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:image:alt" content={seoTitle} />
      <meta property="og:site_name" content="UV Agency" />
      <meta property="og:locale" content={lang === 'en' ? 'en_US' : 'es_ES'} />
      <meta property="og:locale:alternate" content={lang === 'en' ? 'es_ES' : 'en_US'} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@agencyuv" />
      <meta name="twitter:creator" content="@agencyuv" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      <meta name="twitter:image:alt" content={seoTitle} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#F5F6E8" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="UV Agency" />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}; 