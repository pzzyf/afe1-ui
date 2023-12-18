import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Afe1 Ui',
  titleTemplate: '组件库',
  themeConfig: {
    nav: [{ text: '组件', link: '/components' }],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pzzyf/afe1-ui.git' },
    ],
  },
})
