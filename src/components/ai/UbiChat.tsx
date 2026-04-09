import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, Bot, User, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  typing?: boolean;
}

interface KnowledgeEntry {
  keywords: string[];
  response: string;
}

// Pre-built knowledge base from MD file content
const buildKnowledgeBase = (lang: string): KnowledgeEntry[] => {
  const isES = lang === 'es';
  
  return [
    {
      keywords: ['who', 'about', 'uv', 'agency', 'quién', 'quiénes', 'sobre', 'agencia', 'qué es', 'what is'],
      response: isES
        ? 'UV (United Visions) es una agencia independiente de servicio completo fundada en 1999. Nos especializamos en estrategia, creatividad, contenido, medios y experiencias — todo conectado para ayudar a las marcas a crecer, inspirar y mantenerse relevantes. Nuestras unidades incluyen United Media (UM), United Experiences (UX) y United Intelligence (UI).'
        : 'UV (United Visions) is a full-service independent agency founded in 1999. We specialize in strategy, creativity, content, media, and experiences — all connected to help brands grow, inspire, and stay relevant. Our units include United Media (UM), United Experiences (UX), and United Intelligence (UI).'
    },
    {
      keywords: ['ai', 'artificial', 'intelligence', 'inteligencia', 'artificial', 'agent', 'agente'],
      response: isES
        ? 'En UV integramos AI en todo lo que hacemos. Contamos con UVI (nuestro agente transversal), UMI (agente de United Media), y creamos agentes personalizados para cada cliente que aprenden durante toda la relación. Cuando la relación concluye, el agente se transfiere al cliente con toda la inteligencia acumulada.'
        : 'At UV, we integrate AI into everything we do. We have UVI (our cross-functional agent), UMI (United Media\'s agent), and we create custom agents for each client that learn throughout the partnership. When the relationship concludes, the agent is transferred to the client with all accumulated intelligence.'
    },
    {
      keywords: ['uvi', 'service', 'servicio'],
      response: isES
        ? 'UVI as a Service es nuestra oferta de inteligencia AI para organizaciones que quieren potenciar su marketing con AI sin una relación de agencia completa. Incluye un agente dedicado entrenado en tu marca, aprendizaje continuo, integración con tu stack existente y propiedad total del agente.'
        : 'UVI as a Service is our AI intelligence offering for organizations that want to supercharge their marketing with AI without a full agency engagement. It includes a dedicated agent trained on your brand, continuous learning, integration with your existing stack, and full ownership of the agent.'
    },
    {
      keywords: ['umi', 'media', 'medios'],
      response: isES
        ? 'UMI es nuestro agente AI especializado en United Media. Se enfoca en planificación de medios, optimización de compra, inteligencia de audiencia y análisis de rendimiento de campañas. UMI ayuda a nuestro equipo de medios a tomar decisiones más inteligentes y basadas en datos.'
        : 'UMI is our specialized AI agent for United Media. It focuses on media planning, buying optimization, audience intelligence, and campaign performance analysis. UMI helps our media team make smarter, data-driven decisions.'
    },
    {
      keywords: ['ubi', 'chat', 'bot', 'assistant', 'asistente'],
      response: isES
        ? '¡Ese soy yo! 👋 Soy Ubi, el asistente AI de UV para visitantes del sitio. Opero en modo seguro y anónimo — no tengo acceso a datos confidenciales de clientes. Estoy aquí para ayudarte a conocer nuestros servicios y capacidades.'
        : 'That\'s me! 👋 I\'m Ubi, UV\'s AI assistant for website visitors. I operate in safe, anonymous mode — no access to confidential client data. I\'m here to help you learn about our services and capabilities.'
    },
    {
      keywords: ['infrastructure', 'server', 'hosting', 'infraestructura', 'servidor', 'vermetal', 'vps'],
      response: isES
        ? 'Operamos sobre servidores propios Vermetal con control total sobre rendimiento y seguridad. Cada cliente tiene su propio VPS dedicado con aislamiento completo, firewalls dedicados, WAF, protección DDoS y cifrado AES-256. Garantizamos 99.9% de uptime con monitoreo 24/7.'
        : 'We operate on proprietary Vermetal servers with full control over performance and security. Each client gets their own dedicated VPS with complete isolation, dedicated firewalls, WAF, DDoS protection, and AES-256 encryption. We guarantee 99.9% uptime with 24/7 monitoring.'
    },
    {
      keywords: ['security', 'seguridad', 'compliance', 'gdpr', 'soc', 'cumplimiento'],
      response: isES
        ? 'Mantenemos seguridad enterprise-grade: certificados SSL/TLS, firewalls dedicados, WAF, protección DDoS, arquitectura zero-trust, datos cifrados en reposo y tránsito (AES-256), y testing de penetración regular. Cumplimos con GDPR, CCPA y prácticas SOC 2 Type II.'
        : 'We maintain enterprise-grade security: SSL/TLS certificates, dedicated firewalls, WAF, DDoS protection, zero-trust architecture, encrypted data at rest and in transit (AES-256), and regular penetration testing. We comply with GDPR, CCPA, and SOC 2 Type II practices.'
    },
    {
      keywords: ['backup', 'recovery', 'disaster', 'respaldo', 'recuperación', 'desastres'],
      response: isES
        ? 'Realizamos backups automatizados diarios con retención de 30 días, almacenados en múltiples ubicaciones geográficas. Nuestro plan de recuperación ante desastres tiene RPO < 1 hora y RTO < 4 horas, con capacidad de restauración con un clic.'
        : 'We perform daily automated backups with 30-day retention, stored across multiple geographic locations. Our disaster recovery plan has RPO < 1 hour and RTO < 4 hours, with one-click restore capability.'
    },
    {
      keywords: ['contact', 'contacto', 'email', 'reach', 'hablar', 'talk'],
      response: isES
        ? '¡Nos encantaría saber de ti! Podés contactarnos en hello@uv.agency o agendar una reunión directamente en nuestro sitio. Trabajamos con marcas de todo el mundo.'
        : 'We\'d love to hear from you! You can reach us at hello@uv.agency or schedule a meeting directly on our website. We work with brands worldwide.'
    },
    {
      keywords: ['services', 'servicios', 'do', 'hacen', 'offer', 'ofrecen'],
      response: isES
        ? 'Nuestros servicios incluyen: Brand Building, Publicidad y Campañas Creativas, Planificación y Compra de Medios, Estrategia Social y Contenido, Producción de Eventos, Inteligencia de Marketing con AI, e Infraestructura Tecnológica. Todo potenciado por nuestros agentes AI.'
        : 'Our services include: Brand Building, Advertising & Creative Campaigns, Media Planning & Buying, Social Strategy & Content, Event Production, AI-Powered Marketing Intelligence, and Technology Infrastructure. All powered by our AI agents.'
    },
    {
      keywords: ['client', 'cliente', 'custom', 'personalizado', 'agent', 'agente', 'transfer', 'transferir'],
      response: isES
        ? 'Cada cliente que se asocia con UV recibe su propio agente AI dedicado. Este agente se configura y personaliza para la marca, industria y objetivos del cliente. Aprende continuamente durante toda la relación. Cuando la asociación concluye, el agente y toda su inteligencia acumulada se transfieren al cliente.'
        : 'Every client that partners with UV gets their own dedicated AI agent. This agent is staged and customized for the client\'s brand, industry, and goals. It continuously learns throughout the partnership. When the relationship concludes, the agent and all its accumulated intelligence are transferred to the client.'
    },
    {
      keywords: ['values', 'valores', 'culture', 'cultura'],
      response: isES
        ? 'Nuestros valores son: Multicultural por Diseño, Pensamiento Centrado en el Ser Humano, Transparencia Radical, Co-Creación, Intuición Audaz, Excelencia en los Detalles, y Flujo Equilibrado. Creemos que la AI amplifica estos valores, nunca los reemplaza.'
        : 'Our values are: Multicultural by Design, Human-Centered Thinking, Radical Transparency, Co-Creation, Bold Intuition, Excellence in the Details, and Balanced Flow. We believe AI amplifies these values, never replaces them.'
    },
    {
      keywords: ['24', '7', 'always', 'siempre', 'diferencia', 'difference', 'traditional', 'tradicional', 'switch', 'cambio', 'ventaja', 'advantage'],
      response: isES
        ? 'Las agencias tradicionales entregan trabajo. UV entrega **agentes que trabajan para vos 24/7**. Tu agente dedicado aprende tu marca, se personaliza para tu industria y se vuelve más inteligente con cada interacción. Cuanto más tiempo trabajamos juntos, más valioso se vuelve. Y si el día de mañana la relación termina, tu agente — con toda su inteligencia acumulada — se transfiere a vos. Es tu activo.'
        : 'Traditional agencies deliver work. UV delivers **agents that work for you 24/7**. Your dedicated agent learns your brand, customizes for your industry, and gets smarter with every interaction. The longer we work together, the more valuable it becomes. And if the relationship ends, your agent — with all its accumulated intelligence — transfers to you. It\'s your asset.'
    },
    {
      keywords: ['why', 'por qué', 'porque', 'diy', 'chatgpt', 'claude', 'direct', 'directo', 'solo', 'alone', 'myself'],
      response: isES
        ? 'Las herramientas de AI están disponibles para todos. Lo que no está disponible es: **25+ años de expertise en marketing** para saber qué entrenar, craft de implementación para contextos de marketing, arquitectura de integración con tus datos reales (CRM, analytics, campañas), y optimización continua. No te damos un chatbot — te damos un partner de inteligencia de marketing construido por gente que hace esto desde 1999.'
        : 'AI tools are available to everyone. What\'s not available is: **25+ years of marketing expertise** to know what to train, implementation craft for marketing contexts, integration architecture with your real data (CRM, analytics, campaigns), and continuous optimization. We don\'t give you a chatbot — we give you a marketing intelligence partner built by people who\'ve been doing this since 1999.'
    },
  ];
};

const GREETING_EN = "Hi! I'm **Ubi**, UV's AI assistant. Ask me anything about our services, AI agents, infrastructure, or how we work. I'm here to help! 🤖";
const GREETING_ES = "¡Hola! Soy **Ubi**, el asistente AI de UV. Preguntame lo que quieras sobre nuestros servicios, agentes AI, infraestructura o cómo trabajamos. ¡Estoy para ayudar! 🤖";

const DEFAULT_RESPONSE_EN = "That's a great question! I'd need a human colleague to help with that specific topic. Feel free to reach out to us at **hello@uv.agency** or [schedule a meeting](/schedule) for a more in-depth conversation. Is there anything else about our AI services, infrastructure, or capabilities I can help with?";
const DEFAULT_RESPONSE_ES = "¡Gran pregunta! Necesitaría la ayuda de un colega humano para ese tema específico. No dudes en contactarnos en **hello@uv.agency** o [agendar una reunión](/schedule) para una conversación más profunda. ¿Hay algo más sobre nuestros servicios AI, infraestructura o capacidades en lo que pueda ayudar?";

const SUGGESTIONS_EN = [
  "What AI agents does UV offer?",
  "How is UV different from a traditional agency?",
  "Tell me about your infrastructure",
  "Why UV instead of DIY AI?",
];

const SUGGESTIONS_ES = [
  "¿Qué agentes AI ofrece UV?",
  "¿Cómo se diferencia UV de una agencia tradicional?",
  "Contame sobre la infraestructura",
  "¿Por qué UV en vez de AI por mi cuenta?",
];

function findBestResponse(query: string, knowledgeBase: KnowledgeEntry[], lang: string): string {
  const normalizedQuery = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  
  let bestMatch: KnowledgeEntry | null = null;
  let bestScore = 0;

  for (const entry of knowledgeBase) {
    let score = 0;
    for (const keyword of entry.keywords) {
      const normalizedKeyword = keyword.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      if (normalizedQuery.includes(normalizedKeyword)) {
        score += normalizedKeyword.length; // Longer keyword matches score higher
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  if (bestMatch && bestScore >= 2) {
    return bestMatch.response;
  }

  return lang === 'es' ? DEFAULT_RESPONSE_ES : DEFAULT_RESPONSE_EN;
}

// Simple markdown-like rendering (bold only)
function renderContent(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    // Bold
    const boldMatch = part.match(/^\*\*([^*]+)\*\*$/);
    if (boldMatch) {
      return <strong key={i} className="font-semibold text-portfolio-accent">{boldMatch[1]}</strong>;
    }
    // Link
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const url = linkMatch[2].trim();
      // Basic sanitization against javascript:, vbscript:, data:, etc.
      const isSafeUrl = /^(https?|mailto|tel|\/|#)/i.test(url);
      
      if (!isSafeUrl) {
        return <span key={i} className="text-portfolio-text/50">{linkMatch[1]} (Blocked URL)</span>;
      }
      
      return <a key={i} href={url} className="text-portfolio-accent underline hover:text-portfolio-accent/80 transition-colors">{linkMatch[1]}</a>;
    }
    return <span key={i}>{part}</span>;
  });
}

const UbiChat: React.FC = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith('es') ? 'es' : 'en';
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: lang === 'es' ? GREETING_ES : GREETING_EN,
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const knowledgeBase = useRef(buildKnowledgeBase(lang));

  // Update knowledge base when language changes
  useEffect(() => {
    knowledgeBase.current = buildKnowledgeBase(lang);
  }, [lang]);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const suggestions = lang === 'es' ? SUGGESTIONS_ES : SUGGESTIONS_EN;

  const handleSend = useCallback((text?: string) => {
    const messageText = text || input.trim();
    if (!messageText || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: messageText,
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate thinking delay
    const delay = 600 + Math.random() * 800;
    setTimeout(() => {
      const response = findBestResponse(messageText, knowledgeBase.current, lang);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, delay);
  }, [input, isTyping, lang]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const showSuggestions = messages.length <= 1 && !isTyping;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Chat Container */}
      <div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-white/5">
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-portfolio-accent/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-portfolio-accent" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#1a2a29]" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wide">Ubi</h3>
            <p className="text-white/40 text-xs">{lang === 'es' ? 'AI Assistant · En línea' : 'AI Assistant · Online'}</p>
          </div>
          <div className="ml-auto flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-xs font-medium">{lang === 'es' ? 'Seguro' : 'Secure'}</span>
          </div>
        </div>

        {/* Messages */}
        <div className="h-[340px] overflow-y-auto px-5 py-4 space-y-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'} animate-fade-in`}
            >
              <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${
                message.role === 'assistant' ? 'bg-portfolio-accent/20' : 'bg-white/10'
              }`}>
                {message.role === 'assistant' 
                  ? <Bot className="w-4 h-4 text-portfolio-accent" />
                  : <User className="w-4 h-4 text-white/60" />
                }
              </div>
              <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                message.role === 'assistant'
                  ? 'bg-white/5 text-white/90 rounded-tl-md'
                  : 'bg-portfolio-accent/20 text-white rounded-tr-md'
              }`}>
                {renderContent(message.content)}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3 animate-fade-in">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-portfolio-accent/20 flex items-center justify-center">
                <Bot className="w-4 h-4 text-portfolio-accent" />
              </div>
              <div className="bg-white/5 rounded-2xl rounded-tl-md px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-portfolio-accent/60 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 rounded-full bg-portfolio-accent/60 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 rounded-full bg-portfolio-accent/60 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggestions */}
        {showSuggestions && (
          <div className="px-5 pb-3 flex flex-wrap gap-2">
            {suggestions.map((suggestion, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(suggestion)}
                className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-portfolio-accent/40 hover:bg-portfolio-accent/10 transition-all duration-200"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="px-4 py-3 border-t border-white/10 bg-white/5">
          <div className="flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={lang === 'es' ? 'Preguntale algo a Ubi...' : 'Ask Ubi something...'}
              className="flex-1 bg-transparent text-white text-sm placeholder:text-white/30 outline-none"
              disabled={isTyping}
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim() || isTyping}
              className="w-8 h-8 rounded-full bg-portfolio-accent/20 hover:bg-portfolio-accent/30 flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {isTyping 
                ? <Loader2 className="w-4 h-4 text-portfolio-accent animate-spin" />
                : <Send className="w-4 h-4 text-portfolio-accent" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Privacy notice */}
      <p className="text-center text-white/30 text-xs mt-3">
        {lang === 'es'
          ? '🔒 Modo visitante seguro · Sin acceso a datos confidenciales'
          : '🔒 Secure visitor mode · No access to confidential data'
        }
      </p>
    </div>
  );
};

export default UbiChat;
