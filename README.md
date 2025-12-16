# Next.js 企业级网站开发框架

这是一个基于 Next.js 16 App Router 构建的企业级网站开发框架，采用 TypeScript、Tailwind CSS 和现代前端最佳实践。

## 🚀 项目特性

### 核心技术栈
- **Next.js 16** - React 全栈框架，支持 App Router
- **TypeScript** - 类型安全的 JavaScript
- **Tailwind CSS** - 实用优先的 CSS 框架
- **React 18** - 用户界面库

### 开发工具
- **ESLint** - 代码质量检查
- **Prettier** - 代码格式化
- **Jest + React Testing Library** - 单元测试框架
- **Docker** - 容器化部署

### 功能特性
- 🌍 **国际化支持** - 中英文双语切换
- 🎨 **主题切换** - 深色/浅色主题
- 📱 **响应式设计** - 移动端适配
- ⚡ **性能优化** - 代码分割、图片优化、缓存策略
- 🔧 **开发环境** - 热重载、环境变量、API 模拟

## 📁 项目结构

```
nextjs-enterprise-framework/
├── public/                          # 静态资源
│   ├── favicon.ico                 # 网站图标
│   └── *.svg                       # SVG 图标资源
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx              # 根布局组件
│   │   ├── page.tsx                # 首页
│   │   ├── globals.css             # 全局样式
│   │   ├── providers.tsx           # 全局提供者组件
│   │   ├── about/                  # 关于我们页面
│   │   │   └── page.tsx
│   │   ├── products/               # 产品服务页面
│   │   │   └── page.tsx
│   │   ├── news/                   # 新闻中心页面
│   │   │   └── page.tsx
│   │   ├── contact/                # 联系我们页面
│   │   │   └── page.tsx
│   │   └── api/                    # API 路由
│   │       └── mock/               # 模拟数据 API
│   │           └── news/
│   │               └── route.ts
│   ├── components/                 # React 组件
│   │   ├── layout/                 # 布局组件
│   │   │   ├── MainLayout.tsx      # 主导航布局
│   │   │   └── PageShell.tsx       # 页面外壳组件
│   │   ├── ui/                     # UI 组件
│   │   │   ├── Button.tsx          # 按钮组件
│   │   │   ├── Card.tsx            # 卡片组件
│   │   │   ├── Input.tsx           # 输入框组件
│   │   │   └── AppImage.tsx        # 优化图片组件
│   │   ├── theme/                  # 主题相关组件
│   │   │   └── ThemeToggle.tsx     # 主题切换器
│   │   ├── i18n/                   # 国际化组件
│   │   │   └── LanguageSwitcher.tsx # 语言切换器
│   │   └── metrics/                # 分析组件
│   │       └── AnalyticsPanel.tsx  # 数据分析面板
│   ├── contexts/                   # React Context
│   │   └── AppSettingsContext.tsx  # 应用设置上下文
│   └── i18n/                       # 国际化配置
│       ├── locales.ts              # 翻译文本
│       └── useTranslation.ts       # 翻译钩子
├── .gitignore                      # Git 忽略文件
├── Dockerfile                      # Docker 配置
├── docker-compose.yml              # Docker Compose 配置
├── next.config.ts                  # Next.js 配置
├── package.json                    # 项目依赖
├── tsconfig.json                   # TypeScript 配置
├── eslint.config.mjs               # ESLint 配置
├── prettier.config.mjs             # Prettier 配置
├── jest.config.mjs                 # Jest 测试配置
└── jest.setup.ts                  # Jest 设置文件
```

## 🛠️ 环境要求

- **Node.js** >= 20.9.0
- **npm** >= 10.0.0 或 **yarn** >= 1.22.0

## 📦 安装依赖

```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install

# 或使用 pnpm
pnpm install
```

## 🚀 开发环境运行

### 本地开发模式

```bash
# 启动开发服务器
npm run dev

# 或使用 yarn
yarn dev

# 或使用 pnpm
pnpm dev
```

开发服务器将在 [http://localhost:3000](http://localhost:3000) 启动。

### Docker 开发环境

```bash
# 构建并启动 Docker 容器
docker-compose up -d

# 查看容器状态
docker-compose ps

# 查看日志
docker-compose logs -f

# 停止容器
docker-compose down
```

## 🧪 测试

### 运行所有测试

```bash
# 运行测试
npm test

# 运行测试并监听文件变化
npm run test:watch

# 生成测试覆盖率报告
npm run test:coverage
```

### 代码质量检查

```bash
# 运行 ESLint 检查
npm run lint

# 运行 Prettier 格式化
npm run format

# 检查 TypeScript 类型
npm run typecheck
```

## 🏗️ 构建生产版本

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 📋 页面路由

| 路由 | 页面 | 描述 |
|------|------|------|
| `/` | 首页 | 网站主页 |
| `/about` | 关于我们 | 公司介绍页面 |
| `/products` | 产品服务 | 产品展示页面 |
| `/news` | 新闻中心 | 新闻资讯页面 |
| `/contact` | 联系我们 | 联系方式页面 |

## 🌍 国际化

框架支持中英文双语切换，翻译文件位于 `src/i18n/locales.ts`。

### 添加新语言

1. 在 `src/i18n/locales.ts` 中添加新的翻译对象
2. 更新 `Locale` 类型定义
3. 在 `LanguageSwitcher` 组件中添加新的语言选项

## 🎨 主题系统

使用 Tailwind CSS 和 CSS 变量实现主题切换，支持深色和浅色模式。

### 自定义主题颜色

编辑 `src/app/globals.css` 中的 CSS 变量：

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* 其他颜色变量 */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 0 0% 100%;
  /* 其他颜色变量 */
}
```

## 🔧 环境变量

创建 `.env.local` 文件来配置环境变量：

```bash
# 应用配置
NEXT_PUBLIC_APP_NAME="企业网站"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# API 配置
NEXT_PUBLIC_API_URL="http://localhost:3000/api"

# 分析工具
NEXT_PUBLIC_GA_ID=""
NEXT_PUBLIC_GTM_ID=""
```

## 📊 性能优化

### 已实现的优化

- **代码分割** - 使用动态导入
- **图片优化** - Next.js Image 组件
- **字体优化** - Next.js Font 优化
- **缓存策略** - 合理的缓存头配置
- **包导入优化** - 自动优化包导入

### 监控性能

使用浏览器开发者工具的 Lighthouse 标签页来监控网站性能。

## 🐛 常见问题

### Hydration 错误

如果遇到服务器端和客户端渲染不匹配的错误，请检查：

1. 确保 `AppSettingsContext` 中的初始状态一致性
2. 使用 `suppressHydrationWarning` 属性处理不可避免的警告

### 404 错误

确保 `next.config.ts` 中的路由配置正确，特别是国际化设置。

### 构建失败

检查 Node.js 版本是否符合要求（>= 20.9.0）。

## 📚 学习资源

- [Next.js 文档](https://nextjs.org/docs)
- [React 文档](https://react.dev/)
- [TypeScript 文档](https://www.typescriptlang.org/docs/)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)

## 🤝 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

## 📄 许可证

此项目基于 MIT 许可证开源 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🆘 支持

如果遇到问题，请：

1. 查看本文档的常见问题部分
2. 搜索已有的 Issues
3. 创建新的 Issue 描述问题

---

**Happy coding! 🎉**