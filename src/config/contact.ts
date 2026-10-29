export const salesEmail = 'ventas@astodev.com';

const emailSubject = '🚀 Hablemos de mi proyecto | Astodev';
const emailBody = [
  'Hola, equipo de Astodev 👋',
  '',
  'Me gustaría conversar sobre un proyecto y conocer sus servicios.',
  '',
  'Mi nombre: ',
  'Empresa: ',
  'Proyecto o necesidad: ',
  '',
  '¿Podemos agendar una llamada? 📅',
  '',
  '¡Gracias!',
].join('\r\n');

export const salesEmailUrl = `mailto:${salesEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
