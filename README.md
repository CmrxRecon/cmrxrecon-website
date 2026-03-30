# CMRxRecon比赛官方网站源代码

2026年，
2023、2024、2025年比赛源代码见 https://github.com/CmrxRecon/cmrxrecon.github.io 

## 开发

预览环境配置
```
# 安装 node 24.11，推荐使用nvm工具
nvm install 24

# 安装pnpm并安装依赖
npm install -g pnpm
pnpm install
```

## 更新网站内容的流程

- 修改 pages/ 目录下的 .md 文件
- 预览修改后的效果
```
npm run dev-2026  # CMRx4DFlow2026
npm run dev-fields-2026  # MRIxFields2026
npm run dev-2027  # 2027 challenge 
```
- 向本仓库发起合并请求（PR, pull request）
