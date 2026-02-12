import { defineConfig } from 'vitepress'
// import customFooter from './custom_footer.html?raw'

import fs from 'fs'
import path from 'path'

// ✅ 2. 关键：处理ES模块的路径兼容（mts文件必须这么写，解决__dirname不存在的问题）
const __dirname = path.dirname(new URL(import.meta.url).pathname)

// ✅ 3. 读取你的 custom_footer.html 文件为纯文本字符串
// const customFooter = fs.readFileSync(
//   path.join(__dirname, './custom_footer.html'), // 拼接html文件的绝对路径
//   'utf8' // 必须指定编码为utf8，否则返回buffer二进制，不是文本
// )

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CMRxRecon2026",
  description: "website of CMRx series challenges",
  base: '/2026',
  appearance: false,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/2026/public/logo-combined.png' }],
    ['script', { async: 'true', src: 'https://www.googletagmanager.com/gtag/js?id=G-Y1FZN1BJN8'}],
    ['script', {}, 
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-Y1FZN1BJN8');
      `
    ]
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
      { text: 'Sponsors', link: '/sponsors' },
      { text: 'Organizers', link: '/organizers' },
      { text: 'FAQ', link: '/faq' },
      { text: 'All challenges', link: '/all-challenges' },
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
      // { icon: {
      //   svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Email</title><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>'
      // }, 
      //   link: 'mailto:cmrxrecon@outlook.com' 
      // },
    ],
    footer: {
      // message: '<div style="height: 3cm; border: 3px solid #e65918ff;">GE HealthCare is a trusted global healthcare solutions partner, delivering advanced technologies, pharmaceutical diagnostics, and AI-powered tools that can help make hospitals more efficient, clinicians more effective, therapies more precise, and patients healthier and happier. With over 125 years of experience, we collaborate with providers worldwide to simplify care pathways and shape the future of personalized, connected, and compassionate care.</div>Released under the MIT License, powered by <a target="_blank" rel="noopener noreferrer" href="https://vitepress.dev/">VitePress.</a>',
      // 目前这个版本在build的时候嵌入img标签，整个message和copyright的div都会被移除
      message: '<div>Released under the MIT License, powered by<a target="_blank" rel="noopener noreferrer" href="https://vitepress.dev/">VitePress</a>.</div>',
      copyright: 'Copyright © 2026-present CMRx4DFlow2026 Team. '
    }
  }
})
