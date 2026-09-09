# Step 03: Multi-Language (i18n) Routing, Dictionaries & Switcher

---

## 📋 Context & Goal for AI Assistant

You are an Internationalization (i18n) Architect. 
Your task is to implement full multi-language support for the **Lade Stack** Astro project across 6 canonical languages:
1. **English (`en`)** — Default locale (`/`)
2. **Chinese (`zh`)** — Simplified Chinese (`/zh/...`)
3. **Korean (`ko`)** — Korean (`/ko/...`)
4. **Japanese (`ja`)** — Japanese (`/ja/...`)
5. **Turkish (`tr`)** — Turkish (`/tr/...`)
6. **Portuguese (Brazil) (`pt-BR`)** — Brazilian Portuguese (`/pt-BR/...`)

### Architectural Invariants
- Default language (`en`) has NO prefix in the URL (e.g. `/about`, `/contact`).
- Non-default languages are prefixed with their locale code (e.g. `/zh/about`, `/ja/contact`).
- UI dictionary missing keys must safely fallback to the English string without throwing runtime errors.
- The UI language switcher must be 100% accessible Vanilla JS with zero React.

---

## 🛠️ Step-by-Step Implementation Instructions

### 1. Create `src/i18n/config.ts`
Define the supported languages, country flags, and ISO codes:

```typescript
export const languages = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    dir: 'ltr',
    iso: 'en_US',
  },
  zh: {
    code: 'zh',
    name: 'Chinese',
    nativeName: '简体中文',
    flag: '🇨🇳',
    dir: 'ltr',
    iso: 'zh_CN',
  },
  ko: {
    code: 'ko',
    name: 'Korean',
    nativeName: '한국어',
    flag: '🇰🇷',
    dir: 'ltr',
    iso: 'ko_KR',
  },
  ja: {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    flag: '🇯🇵',
    dir: 'ltr',
    iso: 'ja_JP',
  },
  tr: {
    code: 'tr',
    name: 'Turkish',
    nativeName: 'Türkçe',
    flag: '🇹🇷',
    dir: 'ltr',
    iso: 'tr_TR',
  },
  'pt-BR': {
    code: 'pt-BR',
    name: 'Portuguese (Brazil)',
    nativeName: 'Português (Brasil)',
    flag: '🇧🇷',
    dir: 'ltr',
    iso: 'pt_BR',
  },
} as const;

export type SupportedLocale = keyof typeof languages;
export const defaultLocale: SupportedLocale = 'en';
export const localeKeys = Object.keys(languages) as SupportedLocale[];
```

### 2. Create `src/i18n/ui.ts`
Create the comprehensive UI dictionary with entries for all 6 languages:

```typescript
import type { SupportedLocale } from './config';

export const ui = {
  en: {
    // Navigation
    'nav.products': 'Products',
    'nav.apps': 'Apps Gallery',
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'nav.docs': 'Docs',
    'nav.contact': 'Contact',
    'nav.launchApp': 'Launch App',

    // Hero Section
    'hero.badge': '100% Free Forever Developer Ecosystem',
    'hero.title.part1': 'Build Smarter.',
    'hero.title.part2': 'Ship Faster.',
    'hero.subtitle': 'Enterprise-grade AI developer tools designed to boost software engineering productivity by 10x. Code editing, automated API testing, file management, and documentation intelligence.',
    'hero.cta.primary': 'Explore Tools',
    'hero.cta.secondary': 'Read Articles',
    'hero.stats.users': '8,000+ Developers',
    'hero.stats.uptime': '99.9% Uptime',
    'hero.stats.cost': '$0 Free Forever',

    // Common UI
    'common.search': 'Search...',
    'common.readMore': 'Read More',
    'common.viewAll': 'View All',
    'common.back': 'Back',
    'common.share': 'Share',
    'common.copy': 'Copy Link',
    'common.copied': 'Copied!',
    'common.allCategories': 'All Categories',
    'common.loading': 'Loading...',
    'common.language': 'Language',
    'common.copyright': 'All rights reserved.',
  },
  zh: {
    'nav.products': '产品',
    'nav.apps': '应用库',
    'nav.blog': '博客',
    'nav.about': '关于',
    'nav.docs': '文档',
    'nav.contact': '联系我们',
    'nav.launchApp': '启动应用',

    'hero.badge': '100% 永久免费开发者生态系统',
    'hero.title.part1': '更智能地构建。',
    'hero.title.part2': '更迅速地发布。',
    'hero.subtitle': '企业级 AI 开发者工具，旨在将软件工程效率提升 10 倍。涵盖代码编辑、自动化 API 测试、安全文件管理以及智能文档总结。',
    'hero.cta.primary': '探索工具',
    'hero.cta.secondary': '阅读文章',
    'hero.stats.users': '8,000+ 开发者',
    'hero.stats.uptime': '99.9% 正常运行率',
    'hero.stats.cost': '0元 永久免费',

    'common.search': '搜索...',
    'common.readMore': '阅读更多',
    'common.viewAll': '查看全部',
    'common.back': '返回',
    'common.share': '分享',
    'common.copy': '复制链接',
    'common.copied': '已复制！',
    'common.allCategories': '所有分类',
    'common.loading': '加载中...',
    'common.language': '语言',
    'common.copyright': '版权所有。',
  },
  ko: {
    'nav.products': '프로덕트',
    'nav.apps': '앱 갤러리',
    'nav.blog': '블로그',
    'nav.about': '소개',
    'nav.docs': '문서',
    'nav.contact': '문의하기',
    'nav.launchApp': '앱 실행',

    'hero.badge': '100% 평생 무료 개발자 생태계',
    'hero.title.part1': '더 스마트하게 구축하고,',
    'hero.title.part2': '더 빠르게 출시하세요.',
    'hero.subtitle': '소프트웨어 엔지니어링 생산성을 10배 향상시키는 엔터프라이즈급 AI 개발자 도구. 코드 편집, API 자동 테스트, 파일 공유, 스마트 문서화.',
    'hero.cta.primary': '도구 둘러보기',
    'hero.cta.secondary': '블로그 읽기',
    'hero.stats.users': '8,000+ 개발자',
    'hero.stats.uptime': '99.9% 가동 시간',
    'hero.stats.cost': '0원 평생 무료',

    'common.search': '검색...',
    'common.readMore': '자세히 보기',
    'common.viewAll': '전체 보기',
    'common.back': '뒤로',
    'common.share': '공유',
    'common.copy': '링크 복사',
    'common.copied': '복사됨!',
    'common.allCategories': '모든 카테고리',
    'common.loading': '로딩 중...',
    'common.language': '언어',
    'common.copyright': '판권 소유.',
  },
  ja: {
    'nav.products': 'プロダクト',
    'nav.apps': 'アプリ一覧',
    'nav.blog': 'ブログ',
    'nav.about': '会社概要',
    'nav.docs': 'ドキュメント',
    'nav.contact': 'お問い合わせ',
    'nav.launchApp': 'アプリ起動',

    'hero.badge': '100% 完全無料のエンジニアエコシステム',
    'hero.title.part1': 'よりスマートに開発し、',
    'hero.title.part2': 'より迅速にリリース。',
    'hero.subtitle': 'エンジニアの生産性を10倍向上させるエンタープライズ品質のAIツール。コード編集、APIテスト自動化、ファイル管理、ドキュメント解析。',
    'hero.cta.primary': 'ツールを見る',
    'hero.cta.secondary': '記事を読む',
    'hero.stats.users': '8,000人以上のエンジニア',
    'hero.stats.uptime': '99.9% 稼働率',
    'hero.stats.cost': '永久無料 $0',

    'common.search': '検索...',
    'common.readMore': '続きを読む',
    'common.viewAll': 'すべて表示',
    'common.back': '戻る',
    'common.share': '共有',
    'common.copy': 'リンクをコピー',
    'common.copied': 'コピー完了！',
    'common.allCategories': 'すべてのカテゴリー',
    'common.loading': '読み込み中...',
    'common.language': '言語',
    'common.copyright': '無断転載を禁じます。',
  },
  tr: {
    'nav.products': 'Ürünler',
    'nav.apps': 'Uygulama Galerisi',
    'nav.blog': 'Blog',
    'nav.about': 'Hakkımızda',
    'nav.docs': 'Belgeler',
    'nav.contact': 'İletişim',
    'nav.launchApp': 'Uygulamayı Başlat',

    'hero.badge': '%100 Sonsuza Kadar Ücretsiz Geliştirici Ekosistemi',
    'hero.title.part1': 'Daha Akıllı İnşa Edin.',
    'hero.title.part2': 'Daha Hızlı Dağıtın.',
    'hero.subtitle': 'Yazılım geliştirme üretkenliğini 10 kat artıran kurumsal düzeyde yapay zeka geliştirici araçları. Kod düzenleme, API testi, dosya yönetimi ve akıllı dokümantasyon.',
    'hero.cta.primary': 'Araçları Keşfedin',
    'hero.cta.secondary': 'Yazıları Oku',
    'hero.stats.users': '8.000+ Geliştirici',
    'hero.stats.uptime': '%99.9 Çalışma Süresi',
    'hero.stats.cost': '0$ Sonsuza Dek Ücretsiz',

    'common.search': 'Ara...',
    'common.readMore': 'Devamını Oku',
    'common.viewAll': 'Tümünü Gör',
    'common.back': 'Geri',
    'common.share': 'Paylaş',
    'common.copy': 'Bağlantıyı Kopyala',
    'common.copied': 'Kopyalandı!',
    'common.allCategories': 'Tüm Kategoriler',
    'common.loading': 'Yükleniyor...',
    'common.language': 'Dil',
    'common.copyright': 'Tüm hakları saklıdır.',
  },
  'pt-BR': {
    'nav.products': 'Produtos',
    'nav.apps': 'Galeria de Apps',
    'nav.blog': 'Blog',
    'nav.about': 'Sobre',
    'nav.docs': 'Documentação',
    'nav.contact': 'Contato',
    'nav.launchApp': 'Abrir App',

    'hero.badge': 'Ecossistema 100% Gratuito Para Sempre',
    'hero.title.part1': 'Construa com Inteligência.',
    'hero.title.part2': 'Lance Mais Rápido.',
    'hero.subtitle': 'Ferramentas de IA de nível corporativo para desenvolvedores, projetadas para acelerar a produtividade em 10x. Editor de código, testes de API, gerenciamento de arquivos e IA para documentação.',
    'hero.cta.primary': 'Explorar Ferramentas',
    'hero.cta.secondary': 'Ler Artigos',
    'hero.stats.users': '8.000+ Desenvolvedores',
    'hero.stats.uptime': '99,9% Disponibilidade',
    'hero.stats.cost': 'R$ 0 Grátis Para Sempre',

    'common.search': 'Pesquisar...',
    'common.readMore': 'Ler Mais',
    'common.viewAll': 'Ver Todos',
    'common.back': 'Voltar',
    'common.share': 'Compartilhar',
    'common.copy': 'Copiar Link',
    'common.copied': 'Copiado!',
    'common.allCategories': 'Todas as Categorias',
    'common.loading': 'Carregando...',
    'common.language': 'Idioma',
    'common.copyright': 'Todos os direitos reservados.',
  },
} as const;
```

### 3. Create `src/i18n/utils.ts`
Implement the translation and routing helper functions:

```typescript
import { ui } from './ui';
import { defaultLocale, languages, type SupportedLocale } from './config';

export function getLangFromUrl(url: URL): SupportedLocale {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in languages) {
    return lang as SupportedLocale;
  }
  return defaultLocale;
}

export function useTranslations(lang: SupportedLocale) {
  return function t(key: keyof (typeof ui)[typeof defaultLocale]): string {
    const localeDict = ui[lang] as Record<string, string> | undefined;
    const defaultDict = ui[defaultLocale] as Record<string, string>;
    return localeDict?.[key] || defaultDict[key] || key;
  };
}

export function getLocalizedPath(path: string, lang: SupportedLocale): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  // Strip any existing locale prefix
  const parts = cleanPath.split('/').filter(Boolean);
  const firstPart = parts[0];
  let subPath = cleanPath;
  if (firstPart && firstPart in languages) {
    subPath = '/' + parts.slice(1).join('/');
    if (subPath === '') subPath = '/';
  }

  if (lang === defaultLocale) {
    return subPath;
  }

  return subPath === '/' ? `/${lang}` : `/${lang}${subPath}`;
}
```

### 4. Create `src/components/LanguageSwitcher.astro`
Accessible, zero-React Vanilla JS dropdown switcher:

```astro
---
import { languages, type SupportedLocale } from '@/i18n/config';
import { getLocalizedPath } from '@/i18n/utils';
import { Icon } from 'astro-icon/components';

interface Props {
  currentLang: SupportedLocale;
  class?: string;
}

const { currentLang, class: className = '' } = Astro.props;
const currentUrl = Astro.url;
const currentPath = currentUrl.pathname;
const currentLangMeta = languages[currentLang];
---

<div class={`relative inline-block text-left ${className}`} id="lang-switcher-container">
  <button
    type="button"
    id="lang-switcher-btn"
    class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-border bg-card/60 hover:bg-muted text-sm font-medium text-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
    aria-expanded="false"
    aria-haspopup="true"
    aria-label="Select Language"
  >
    <span class="text-base leading-none">{currentLangMeta.flag}</span>
    <span class="hidden sm:inline-block">{currentLangMeta.nativeName}</span>
    <Icon name="lucide:chevron-down" class="w-3.5 h-3.5 text-muted-foreground transition-transform duration-200" id="lang-chevron" />
  </button>

  <div
    id="lang-menu"
    class="hidden absolute right-0 mt-2 w-48 rounded-2xl border border-border bg-popover/95 backdrop-blur-md shadow-xl py-1.5 z-50 focus:outline-none"
    role="menu"
  >
    {
      Object.entries(languages).map(([code, meta]) => {
        const isSelected = code === currentLang;
        const targetPath = getLocalizedPath(currentPath, code as SupportedLocale);
        return (
          <a
            href={targetPath}
            class={`flex items-center gap-3 px-4 py-2 text-sm transition-colors ${
              isSelected
                ? 'bg-primary/10 text-primary font-semibold'
                : 'text-foreground hover:bg-muted/60'
            }`}
            role="menuitem"
          >
            <span class="text-base">{meta.flag}</span>
            <span>{meta.nativeName}</span>
            {isSelected && <Icon name="lucide:check" class="ml-auto w-4 h-4 text-primary" />}
          </a>
        );
      })
    }
  </div>
</div>

<script>
  function setupLangSwitcher() {
    const btn = document.getElementById('lang-switcher-btn');
    const menu = document.getElementById('lang-menu');
    const chevron = document.getElementById('lang-chevron');

    if (!btn || !menu) return;

    function toggleMenu() {
      const isHidden = menu.classList.toggle('hidden');
      btn.setAttribute('aria-expanded', String(!isHidden));
      if (chevron) {
        chevron.style.transform = isHidden ? 'rotate(0deg)' : 'rotate(180deg)';
      }
    }

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    document.addEventListener('click', (e) => {
      if (!menu.classList.contains('hidden') && !menu.contains(e.target as Node)) {
        menu.classList.add('hidden');
        btn.setAttribute('aria-expanded', 'false');
        if (chevron) chevron.style.transform = 'rotate(0deg)';
      }
    });
  }

  setupLangSwitcher();
  document.addEventListener('astro:page-load', setupLangSwitcher);
</script>
```

---

## 🔍 Verification Checklist

1. Run `npm run check` to ensure zero type errors in `config.ts`, `ui.ts`, and `utils.ts`.
2. Add `<LanguageSwitcher currentLang="en" />` to a test page.
3. Verify that clicking the button reveals the dropdown menu with 6 flags and native names.
4. Verify that clicking on Chinese changes the URL to `/zh/` while maintaining current page context.
5. Verify clicking outside closes the dropdown.
