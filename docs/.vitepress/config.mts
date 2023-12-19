import { defineConfig } from 'vitepress'
import { components, guides, navComponents } from './items'

export default defineConfig({
  title: 'afe1-ui',
  titleTemplate: 'monorepo is cool',
  themeConfig: {
    logo: '../public/favicon.ico',
    nav: [
      { text: '指南', items: guides },
      { text: '组件', items: navComponents },
    ],

    search: {
      provider: 'local',
    },

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: guides,
        },
      ],
      '/components/': [
        {
          text: '组件',
          items: components,
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pzzyf/afe1-ui.git' },
    ],

    footer: {
      message: 'MIT Licensed',
      copyright: '版权所有 © 2023 年-至今 afe1',
    },
    aside: false,
    returnToTopLabel: 'top',
  },

  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },
})
