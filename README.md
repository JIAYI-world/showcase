# Demo Showcase

个人项目展示平台，用于校招求职时展示项目 Demo。

## 技术栈

- React 18 + TypeScript
- Vite
- Tailwind CSS v4
- React Router v6
- GitHub Pages 部署

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 部署到 GitHub Pages
pnpm deploy
```

## 如何添加新 Demo

编辑 `src/data/demos.ts`，在 `demos` 数组中添加新条目：

```ts
{
  id: 'my-new-demo',           // URL slug
  title: '我的新项目',          // 展示标题
  description: '项目描述...',   // 简短描述
  tags: ['React', 'Node.js'],  // 技术标签
  coverImage: '/demos/my-demo/cover.png',  // 封面图
  githubUrl: 'https://github.com/...',     // GitHub 链接
  demoUrl: '/demos/my-demo/index.html',    // 可交互 Demo 地址
  features: ['亮点1', '亮点2'],            // 功能亮点
  techStack: ['React', 'TypeScript'],      // 详细技术栈
  role: '独立开发',                         // 你的角色
}
```

## 可交互 Demo

将你的 Demo 静态文件放在 `public/demos/your-demo/` 目录下，然后在 `demos.ts` 中设置 `demoUrl` 为 `/demos/your-demo/index.html`。

## 部署到 GitHub Pages

1. 在 GitHub 创建仓库 `demo-showcase`
2. 修改 `vite.config.ts` 中的 `base` 为你的仓库名
3. 运行 `pnpm deploy`
