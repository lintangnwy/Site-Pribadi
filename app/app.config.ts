export default defineAppConfig({
  global: {
    picture: {
      dark: '/images/profile.jpg',
      light: '/images/profile.jpg',
      alt: 'Lintang Nur Wijaya'
    },
    meetingLink: 'https://cal.com/',
    email: 'lintang@example.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Built by Lintang Nur Wijaya • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/lintangnwy',
      'target': '_blank',
      'aria-label': 'GitHub'
    }, {
      'icon': 'i-simple-icons-linkedin',
      'to': 'https://www.linkedin.com/in/lintang-nur-wijaya-467a87406/',
      'target': '_blank',
      'aria-label': 'LinkedIn'
    }, {
      'icon': 'i-simple-icons-instagram',
      'to': 'https://www.instagram.com/lintangnwy/',
      'target': '_blank',
      'aria-label': 'Instagram'
    }]
  }
})
