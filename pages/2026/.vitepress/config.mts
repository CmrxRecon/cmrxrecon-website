import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CMRxRecon2026",
  description: "website for CMRxRecon series competitions",
  base: '/2026',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/home' },
      { text: 'Data', link: '/data'},
      { text: 'Tasks', link: '/tasks'},
      { text: 'Join the challenge', link: '/join-the-challenge'},
      { text: 'Submission', 
        items: [
          { text: 'Task Submission', link: 'submission-task'},
          { text: 'Stacom workshop paper', link: '/submission-stacom-workshop-paper'}
      ]},
      { text: 'Sponsors', link: '/sponsors' },
      { text: 'FAQ', link: '/faq' },
      { text: 'debug', link: '/markdown-examples' },
    ],

    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
