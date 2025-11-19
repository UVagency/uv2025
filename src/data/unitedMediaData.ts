import { TrendingUp, Target, BarChart3, Users, DollarSign } from 'lucide-react';

export const successStories = [
  {
    id: "agricultural-machinery",
    title: "Optimización UX para Maquinaria Agrícola",
    client: "Distribuidora Agrícola Nacional",
    industry: "Agricultura & Maquinaria",
    challenge: "Incrementar la tasa de conversión del sitio mediante la identificación de obstáculos en la experiencia del usuario y la implementación de soluciones efectivas para la generación de leads.",
    solution: "Empleamos metodología 360° para recopilar datos desde diversas perspectivas. Análisis cuantitativo con GA4 identificó cuellos de botella en páginas de producto. Análisis cualitativo mediante entrevistas a clientes reveló fricciones específicas. Implementamos A/B testing durante 7 semanas en VWO.",
    methodology: [
      "Análisis Cuantitativo: Identificación de cuellos de botella con GA4 y mapas de calor",
      "Análisis Cualitativo: Entrevistas con muestra representativa de clientes",
      "Levantamiento de Insights: Identificación de problemas UX en formularios principales",
      "A/B Testing: Implementación en VWO durante 7 semanas en móvil y desktop"
    ],
    results: {
      conversion: "+14.64%",
      mobile_leads: "+6.3%",
      desktop_leads: "+26.1%",
      period: "7 semanas"
    },
    detailed_results: [
      { metric: "Tasa de conversión general", value: "+14.64%", description: "Aumento en leads para ambos dispositivos" },
      { metric: "Leads móviles", value: "+6.3%", description: "Mejora en conversión móvil" },
      { metric: "Leads desktop", value: "+26.1%", description: "Incremento significativo en desktop" },
      { metric: "Descargas de folleto móvil", value: "+67%", description: "Mayor engagement en contenido" },
      { metric: "Descargas de folleto desktop", value: "+60%", description: "Incremento en material descargado" }
    ],
    metrics: [
      { label: "Conversión General", value: "+14.64%", icon: TrendingUp },
      { label: "Leads Desktop", value: "+26.1%", icon: Target },
      { label: "Descargas Folleto", value: "+67%", icon: BarChart3 }
    ],
    image: "/projects/enjoy-the-unexpected/enjoy-the-unexpected_profile.webp",
    tags: ["CRO", "A/B Testing", "UX Optimization", "GA4"],
    impact: "Crecimiento significativo de ventas, reducción del costo por lead y optimización del ROI en campañas de marketing digital."
  },
  {
    id: "fintech-conversion",
    title: "Optimización de Conversión para Fintech",
    client: "Plataforma de Inversiones Digitales",
    industry: "Fintech & Servicios Financieros",
    challenge: "Baja tasa de registro de usuarios y alta fricción en el proceso de onboarding. Los usuarios abandonaban el proceso en el paso de verificación de identidad.",
    solution: "Implementamos metodología de optimización integral: análisis de funnel con GA4 y Hotjar, identificación de puntos de fricción mediante session recordings, rediseño del flujo de onboarding con micro-interacciones y testing multivariado.",
    methodology: [
      "Análisis de Funnel: Identificación de drop-off points con GA4 y Hotjar",
      "Session Recordings: Análisis cualitativo de comportamiento de usuarios",
      "Rediseño UX: Simplificación del proceso de verificación de identidad",
      "Testing Multivariado: Pruebas de diferentes variaciones del flujo"
    ],
    results: {
      registration: "+89%",
      onboarding_completion: "+156%",
      time_to_first_investment: "-45%",
      period: "3 meses"
    },
    detailed_results: [
      { metric: "Tasa de registro", value: "+89%", description: "Incremento en nuevos usuarios registrados" },
      { metric: "Completación onboarding", value: "+156%", description: "Más usuarios completando verificación" },
      { metric: "Tiempo primera inversión", value: "-45%", description: "Reducción en tiempo hasta primera transacción" },
      { metric: "Retención día 30", value: "+73%", description: "Mayor retención de usuarios activos" },
      { metric: "Valor promedio inversión", value: "+34%", description: "Incremento en ticket promedio" }
    ],
    metrics: [
      { label: "Tasa Registro", value: "+89%", icon: Users },
      { label: "Onboarding", value: "+156%", icon: Target },
      { label: "Tiempo Inversión", value: "-45%", icon: TrendingUp }
    ],
    image: "/projects/closer-to-sun/closer-to-sun_profile.webp",
    tags: ["Fintech", "Conversion Optimization", "User Onboarding", "Hotjar"],
    impact: "Transformación digital completa que resultó en mayor adquisición de usuarios y incremento significativo en el valor de vida del cliente."
  },
  {
    id: "retail-omnichannel",
    title: "Estrategia Omnicanal para Retail",
    client: "Cadena de Tiendas de Moda",
    industry: "Retail & Moda",
    challenge: "Desconexión entre canales online y offline, baja atribución de ventas cross-channel y experiencia fragmentada del cliente entre tienda física y e-commerce.",
    solution: "Implementamos estrategia omnicanal integral con Customer Data Platform, attribution modeling avanzado, integración de inventarios en tiempo real y personalización basada en comportamiento cross-channel usando GA4 y herramientas de marketing automation.",
    methodology: [
      "Customer Data Platform: Unificación de datos de todos los touchpoints",
      "Attribution Modeling: Implementación de modelos de atribución cross-channel",
      "Inventory Integration: Sincronización en tiempo real entre canales",
      "Personalization Engine: Recomendaciones basadas en comportamiento omnicanal"
    ],
    results: {
      cross_channel_sales: "+234%",
      customer_lifetime_value: "+187%",
      inventory_turnover: "+45%",
      period: "6 meses"
    },
    detailed_results: [
      { metric: "Ventas cross-channel", value: "+234%", description: "Incremento en ventas atribuibles a múltiples canales" },
      { metric: "Customer Lifetime Value", value: "+187%", description: "Aumento en valor de vida del cliente" },
      { metric: "Rotación de inventario", value: "+45%", description: "Mejor gestión de stock entre canales" },
      { metric: "Tasa de conversión omnicanal", value: "+156%", description: "Mejora en conversión cross-channel" },
      { metric: "Satisfacción del cliente", value: "+92%", description: "Incremento en NPS y satisfacción" }
    ],
    metrics: [
      { label: "Ventas Cross-Channel", value: "+234%", icon: DollarSign },
      { label: "Customer LTV", value: "+187%", icon: TrendingUp },
      { label: "Rotación Inventario", value: "+45%", icon: BarChart3 }
    ],
    image: "/projects/sabor-de-barrio/sabor-de-barrio_profile.webp",
    tags: ["Omnichannel", "CDP", "Attribution", "Personalization"],
    impact: "Transformación completa de la experiencia del cliente, generando mayor lealtad, incremento en ventas y optimización operacional significativa."
  }
];

export const mediaInfo = {
  name: "United Media",
  year: "Smart Media",
  tagline: "Connecting brands with people in a phygital world",
  description: "Our UnitedMedia service is designed to enhance your business results in a scalable, effective, and efficient manner. We reach truly relevant clients by enhancing the visibility of your brand, product, or event through Programmatic and Digital PR.",
  history: "Since 2011, we have collaborated with leaders and teams of major global brands to help them achieve their goals and growth challenges by understanding their clients' behavior and connecting them with them.",
  videoRecapUrl: "https://vimeo.com/1079829750", // Placeholder video
  categories: ["Off-line", "Digital", "Outdoor", "In-Store", "Radio", "TV"],
  client: "United Media Services. One Agency, All In.",
};

export const values = [
  { name: "Targeted Branding", description: "Reach truly relevant clients by enhancing the visibility of your brand, product, or event through Programmatic and Digital PR." },
  { name: "SXO", description: "Enhance the performance and ROI of the Google Search channel through an integrated strategy between SEO and SEM." },
  { name: "Conversion Boost", description: "Maximize ROI and conversion rates by improving decision-making through experimentation and data with CRO and Data analytics." },
];
