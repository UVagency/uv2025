/**
 * Sanitiza HTML básico permitiendo solo tags seguros
 * Esta es una sanitización básica. Para producción, considera usar DOMPurify
 */
export const sanitizeHtml = (html: string): string => {
  // Lista de tags permitidos (solo formato básico)
  const allowedTags = ['em', 'strong', 'i', 'b', 'span', 'br', 'p'];
  
  // Crear un elemento temporal para parsear el HTML
  const temp = document.createElement('div');
  temp.innerHTML = html;
  
  // Obtener todos los elementos
  const allElements = temp.querySelectorAll('*');
  
  // Remover atributos peligrosos y tags no permitidos
  allElements.forEach((el) => {
    const tagName = el.tagName.toLowerCase();
    
    // Si el tag no está permitido, reemplazarlo con su contenido de texto
    if (!allowedTags.includes(tagName)) {
      const parent = el.parentNode;
      if (parent) {
        while (el.firstChild) {
          parent.insertBefore(el.firstChild, el);
        }
        parent.removeChild(el);
      }
      return;
    }
    
    // Remover todos los atributos excepto class (si es necesario)
    Array.from(el.attributes).forEach((attr) => {
      if (attr.name !== 'class') {
        el.removeAttribute(attr.name);
      }
    });
  });
  
  return temp.innerHTML;
};








