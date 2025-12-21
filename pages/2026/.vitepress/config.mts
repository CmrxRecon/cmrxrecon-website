import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CMRxRecon2026",
  description: "website for CMRxRecon series competitions",
  base: '/2026',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
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
      // { text: 'debug', link: '/markdown-examples' },
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
      { icon: 'github', link: 'https://github.com/CmrxRecon' },
      { icon: 'twitter', link: 'https://twitter.com/CMRxRecon' },
      { icon: {
        svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Email</title><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>'
      }, 
        link: 'https://github.com/CmrxRecon/cmrxrecon-website' 
      },
    ]
  }
})
