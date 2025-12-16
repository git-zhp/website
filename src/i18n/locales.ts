export type Locale = "en" | "zh";

export type TranslationKey =
  | "nav.home"
  | "nav.about"
  | "nav.products"
  | "nav.news"
  | "nav.contact"
  | "layout.page.subtitle"
  | "page.home.title"
  | "page.about.title"
  | "page.products.title"
  | "page.news.title"
  | "page.contact.title"
  | "home.hero.title"
  | "home.hero.subtitle";

type Messages = Record<TranslationKey, string>;

export const defaultLocale: Locale = "en";

export const messages: Record<Locale, Messages> = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.products": "Products",
    "nav.news": "News",
    "nav.contact": "Contact",
    "layout.page.subtitle":
      "Use this page as a starting point for your content.",
    "page.home.title": "Home",
    "page.about.title": "About Us",
    "page.products.title": "Products and Services",
    "page.news.title": "News Center",
    "page.contact.title": "Contact Us",
    "home.hero.title": "Modern enterprise website starter",
    "home.hero.subtitle":
      "A scalable Next.js framework for corporate websites with best practices built in.",
  },
  zh: {
    "nav.home": "首页",
    "nav.about": "关于我们",
    "nav.products": "产品与服务",
    "nav.news": "新闻中心",
    "nav.contact": "联系我们",
    "layout.page.subtitle": "将此页面作为业务模块的起点进行扩展。",
    "page.home.title": "首页",
    "page.about.title": "关于我们",
    "page.products.title": "产品与服务",
    "page.news.title": "新闻中心",
    "page.contact.title": "联系我们",
    "home.hero.title": "现代化企业网站基础框架",
    "home.hero.subtitle":
      "基于 Next.js 的可扩展企业级网站开发框架，内置最佳实践。",
  },
};

