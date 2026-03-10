import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text: 'Nosotros',
      links: [
        {
          text: '¿Quiénes Somos?',
          href: getPermalink('/quienes-somos'),
        },
        {
          text: 'Maestros',
          href: getPermalink('/maestros'),
        },
        {
          text: 'Proyectos',
          href: getPermalink('/proyectos'),
        },
        {
          text: 'Galería Audiovisual',
          href: getPermalink('/galeria'),
        },
      ],
    },
    {
      text: 'Programas',
      href: getPermalink('/programas'),
    },
    {
      text: 'Inscripciones',
      href: getPermalink('/inscripciones'),
    },
    {
      text: 'Noticias',
      href: getBlogPermalink(),
    },
    {
      text: 'Contacto',
      href: getPermalink('/contacto'),
    },
  ],
  actions: [
    {
      text: '¡Inscríbete!',
      href: getPermalink('/inscripciones'),
      icon: 'tabler:music',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Schola Cantorum',
      links: [
        { text: '¿Quiénes Somos?', href: getPermalink('/quienes-somos') },
        { text: 'Maestros', href: getPermalink('/maestros') },
        { text: 'Proyectos', href: getPermalink('/proyectos') },
        { text: 'Galería Audiovisual', href: getPermalink('/galeria') },
      ],
    },
    {
      title: 'Formación',
      links: [
        { text: 'Programas', href: getPermalink('/programas') },
        { text: 'Inscripciones', href: getPermalink('/inscripciones') },
        { text: 'Preguntas Frecuentes', href: getPermalink('/#faqs') },
      ],
    },
    {
      title: 'Comunidad',
      links: [
        { text: 'Noticias', href: getBlogPermalink() },
        { text: 'Colabora', href: getPermalink('/colabora') },
        { text: 'Contacto', href: getPermalink('/contacto') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Aviso de Privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: '#' },
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: '#' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Schola Cantorum de México. Todos los derechos reservados. · <em>"Nuestra riqueza es el arte; nuestra esperanza, la juventud"</em>
  `,
};
