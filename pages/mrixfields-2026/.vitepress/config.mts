import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MRIxFields2026",
  description: "website for MRIxFields series competitions",
  base: '/2026',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/2026/home/face.png' }]
  ],
  themeConfig: {
    logo: '/logo-combined.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Data', link: '/data'},
      { text: 'Tasks', link: '/tasks'},
      { text: 'Join the challenge', link: '/join-the-challenge'},
      { text: 'Submission', 
        items: [
          { text: 'Task Submission', link: '/submission-task'},
          { text: 'Stacom workshop paper', link: '/submission-stacom-workshop-paper'}
      ]},
      { text: 'Sponsor', link: '/sponsor' },
      { text: 'Organizers', link: '/organizers' },
      { text: 'FAQ', link: '/faq' },
    ],

    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [ß
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mrixfields' },
      { icon: 'twitter', link: 'https://x.com/mrixfields' },
      // { icon: {
      //   svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Email</title><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>'
      // }, 
      //   link: 'mailto:cmrxrecon@outlook.com' 
      // },
    ],
    footer: {
      message: `
        <div style="
          display:flex;
          flex-wrap:wrap;
          justify-content:center;
          align-items:center;
          gap:14px;
          font-size:14px;
          line-height:1.8;
          text-align:center;
        ">
          <a target="_blank" rel="noopener noreferrer" href="https://www.synapse.org/Synapse:syn72060672/wiki/636549">
            Synapse Website
          </a>
          <span style="opacity:0.45;">|</span>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/mrixfields">
            GitHub
          </a>
          <span style="opacity:0.45;">|</span>
          <a href="mailto:mrixfields@outlook.com">
            Contact: mrixfields@outlook.com
          </a>
        </div>
      `,
      copyright: 'Copyright © 2026-present MRIxFields Team'
    }
  }
})
