# RAF CONSULTING SERVICES - Texniki Tapşırıq

## 1. Texnologiya Stack

| Komponent | Texnologiya | İzah |
|-----------|-------------|------|
| Framework | **Next.js 14** (App Router) | React-based, SSG dəstəyi ilə |
| Dil | **TypeScript** | Tip təhlükəsizliyi üçün |
| Stil | **Tailwind CSS** | Sürətli və çevik dizayn |
| Data | **JSON faylları** | `/messages/` və `/data/` qovluğunda |
| Dil Dəstəyi | **next-intl** | AZ / EN / RU - 3 dil |
| Dark Mode | **next-themes** | Dark / Light / System |
| Admin Panel | **Decap CMS** (opsional) | Brauzerdə məzmun redaktəsi |
| Deployment | **Vercel** | Pulsuz, Next.js ilə optimal |
| Domain | **rafconsulting.az** | Deploy-dan sonra bağlanacaq |
| Version Control | **Git + GitHub** | Kod idarəsi |

## 2. Layihə Strukturu

```
rafconsulting/
├── public/
│   ├── images/
│   │   ├── hero-bg.jpg
│   │   ├── founder.jpg
│   │   └── ...
│   └── favicon.ico
├── messages/                     # Tərcümə faylları (3 dil)
│   ├── az.json
│   ├── en.json
│   └── ru.json
├── data/                         # Dinamik məzmun (blog, slider, etc)
│   ├── blog/
│   │   ├── az/
│   │   ├── en/
│   │   └── ru/
│   └── testimonials.json
├── src/
│   ├── app/
│   │   ├── [locale]/             # Dil bazlı routing
│   │   │   ├── layout.tsx        # ThemeProvider + NextIntlClientProvider
│   │   │   ├── page.tsx          # Ana səhifə
│   │   │   ├── services/
│   │   │   │   └── page.tsx
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── contact/
│   │   │   │   └── page.tsx
│   │   │   └── blog/
│   │   │       ├── page.tsx
│   │   │       └── [slug]/
│   │   │           └── page.tsx
│   │   ├── page.tsx              # / -> default dilə redirect
│   │   └── layout.tsx            # Kök layout
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── WhyRafSection.tsx
│   │   ├── FounderSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── PackageCard.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── ThemeToggle.tsx       # Dark/Light/System toggle
│   │   ├── LanguageSwitcher.tsx  # AZ/EN/RU switcher
│   │   └── Button.tsx
│   ├── i18n/
│   │   └── request.ts           # next-intl konfiqurasiya
│   └── styles/
│       └── globals.css
├── middleware.ts                 # next-intl middleware (locale detection)
├── next.config.js
├── tailwind.config.ts
├── package.json
└── tsconfig.json
```

### 2.1 URL Strukturu

| Dil | Ana səhifə | Xidmətlər | Haqqımızda |
|-----|-----------|------------|------------|
| 🇦🇿 Azərbaycan | `/az` | `/az/services` | `/az/about` |
| 🇬🇧 English | `/en` | `/en/services` | `/en/about` |
| 🇷🇺 Русский | `/ru` | `/ru/services` | `/ru/about` |

- `/` kök path-i avtomatik olaraq brauzer dilinə əsasən uyğun dilə yönləndirir
- Default dil: **AZ** (Azərbaycan)

## 3. Səhifələr və Funksionallıq

### 3.1 Ana Səhifə (`/`)

**Bölmələr (ardıcıllıqla):**

1. **Header** - Naviqasiya (Logo + Menu + CTA düyməsi)
2. **Hero Section** - Başlıq, alt başlıq, şirkət şüarı, CTA düyməsi
   - Background: Bakı biznes mərkəzləri / minimalist fon
3. **Xidmətlər** - 6 əsas xidmət kateqoriyası (icon + başlıq + qısa təsvir)
4. **Niyə RAF?** - 6 üstünlük (ikon + başlıq)
5. **Xidmət Paketləri** - START, GROW, PRO + Xüsusi Xidmətlər
6. **Təsisçi** - Rufat Sadıqov haqqında qısa təqdimat
7. **Əlaqə** - Email, telefon, LinkedIn, əlaqə formu (opsional)
8. **Footer** - Logo, linklər, sosial, copyright

### 3.2 Xidmətlər (`/services`)

- Bütün xidmətlərin detallı izahı
- Kateqoriyalara bölünmüş:
  - Accounting Services
  - Tax Advisory
  - Financial Consulting
  - IFRS Services
  - Outsourced CFO
- Xidmət paketlərinin müqayisə cədvəli

### 3.3 Haqqımızda (`/about`)

- Şirkət hekayəsi
- Missiya və dəyərlər
- Təsisçinin CV-sı (təhsil, sertifikatlar, təcrübə)
- Timeline (karyera yol xəritəsi)

### 3.4 Bloq (`/blog`)

- Blog postlarının listi (kart şəklində)
- Hər post: şəkil, başlıq, tarix, qısa məzmun
- Daxili səhifədə tam məzmun
- Məzmunlar `/data/blog/` qovluğunda JSON faylları

### 3.5 Əlaqə (`/contact`)

- Əlaqə məlumatları
- Google Maps (opsional)
- Əlaqə formu (EmailJS/Formspree ilə, backend yox)

## 4. Dizayn Sistemi

### 4.1 Rəng Palitrası

| Rəng | Hex | İstifadə sahəsi |
|------|-----|-----------------|
| Navy Blue | `#0F2D52` | Əsas rəng, header, footer, başlıqlar |
| Gold | `#C9A227` | Aksent, vurğular, hover, button |
| White | `#FFFFFF` | Fon, kontrast |
| Light Gray | `#F8F9FA` | Bölmə fonları |
| Dark Gray | `#333333` | Mətn rəngi |

### 4.2 Dark Mode

Layihə 3 rejimi dəstəkləyir:

| Rejim | İş prinsipi |
|-------|------------|
| 🌙 **Dark** | Tünd fon (#0F1A2E), açıq mətn (#E2E8F0) |
| ☀️ **Light** | Açıq fon (#FFFFFF), tünd mətn (#333333) |
| 💻 **System** | Əməliyyat sisteminin parametrinə uyğun |

**Texniki tətbiq:**
- `next-themes` paketi ilə idarə olunur
- Tailwind `darkMode: 'class'` istifadə edilir
- `ThemeToggle` komponenti Header-də yerləşir
- Sistem dəyişikliyi avtomatik izlənilir (System seçimi)
- localStorage-da saxlanılır

**Dark mode rəng palitrası:**

| Element | Light | Dark |
|---------|-------|------|
| Fon | `#FFFFFF` | `#0F1A2E` |
| Kart fonu | `#F8F9FA` | `#1A2942` |
| Əsas mətn | `#333333` | `#E2E8F0` |
| Navy Blue | `#0F2D52` | `#1A3F6E` |
| Gold | `#C9A227` | `#D4AF37` |

### 4.3 Tipoqrafiya

| Element | Font | Çəki | Ölçü |
|---------|------|------|------|
| Logo | Inter (uppercase) | ExtraBold (800) | 24px |
| H1 (Hero başlıq) | Inter | Bold (700) | 48-56px |
| H2 (Bölmə başlıqları) | Inter | Bold (700) | 32-40px |
| H3 (Kart başlıqları) | Inter | SemiBold (600) | 20-24px |
| Body mətni | Inter | Regular (400) | 16-18px |
| Kiçik mətn / label | Inter | Medium (500) | 12-14px |

### 4.4 Logo Varyantları

- **Header:** RAF CONSULTING SERVICES yazılı logo
- **Favicon:** Sadə RAF monogramı
- **Footer:** Tam logo + şüar

## 5. Tərcümə Sistemi (next-intl)

Hər dil üçün ayrı JSON faylı `messages/` qovluğunda saxlanılır:

### 5.1 Nümunə: `messages/az.json`

```json
{
  "nav": {
    "home": "Ana Səhifə",
    "services": "Xidmətlər",
    "about": "Haqqımızda",
    "blog": "Bloq",
    "contact": "Əlaqə"
  },
  "hero": {
    "title": "RAF CONSULTING SERVICES",
    "subtitle": "Your Reliable Accounting and Finance Partner",
    "description": "Helping businesses achieve financial clarity, compliance...",
    "cta": "Book a Consultation"
  },
  "services": {
    "title": "Xidmətlərimiz",
    "accounting": {
      "title": "Mühasibat Xidmətləri",
      "items": ["Bookkeeping", "Maliyyə Hesabatları", "Management Reporting", "Payroll Dəstək"]
    },
    ...
  },
  "whyRaf": {
    "title": "Niyə RAF?",
    "items": [
      { "title": "Professional Ekspertiza", "desc": "..." },
      ...
    ]
  },
  "packages": {
    "title": "Xidmət Paketləri",
    "start": { "name": "START", "target": "...", "features": [...] },
    ...
  },
  "founder": {
    "name": "Rufat Sadıqov",
    "title": "Təsisçi və İdarəedici Partnyor",
    ...
  },
  "contact": {
    "title": "Əlaqə",
    ...
  },
  "footer": {
    "rights": "Bütün hüquqlar qorunur"
  }
}
```

### 5.2 Dinamik Məzmun (Blog və s.)

Bloq postları, rəylər kimi dinamik məzmun `/data/blog/az/`, `/data/blog/en/`, `/data/blog/ru/` qovluqlarında dil bazlı ayrı saxlanılır.

## 6. Məlumat Arxitekturası (JSON faylları)

### 6.1 `data/site.json`
```json
{
  "name": "RAF Consulting Services",
  "tagline": "Your Reliable Accounting and Finance Partner",
  "slogan": "Reliable Numbers. Better Decisions.",
  "email": "info@rafconsulting.az",
  "phone": "+994105120009",
  "address": "Baku, Azerbaijan",
  "social": {
    "linkedin": "https://linkedin.com/company/rafconsulting"
  },
  "seo": {
    "title": "RAF Consulting Services | Accounting & Finance Partner",
    "description": "Professional accounting, financial consulting, IFRS reporting and business advisory services in Azerbaijan."
  }
}
```

### 6.2 `data/services.json`
```json
[
  {
    "id": "accounting",
    "title": "Accounting Services",
    "icon": "📊",
    "description": "...",
    "items": ["Bookkeeping", "Financial Statements Preparation", "Management Reporting", "Payroll Support"]
  },
  ...
]
```

### 6.3 `data/packages.json`
```json
[
  {
    "name": "START",
    "target": "Yeni yaradılmış şirkətlər üçün",
    "features": ["Mühasibat uçotu", "Vergi hesabatları", "Əmək haqqı", "E-qaimə dəstəyi"],
    "recommended": false
  },
  ...
]
```

### 6.4 `data/hero.json`
```json
{
  "title": "RAF CONSULTING SERVICES",
  "subtitle": "Your Reliable Accounting and Finance Partner",
  "description": "Helping businesses achieve financial clarity, compliance, and sustainable growth...",
  "cta": { "text": "Book a Consultation", "link": "/contact" },
  "backgroundImage": "/images/hero-bg.jpg"
}
```

### 6.5 `data/founder.json`
```json
{
  "name": "Rufat Sadigov",
  "title": "Founder & Managing Partner",
  "description": "...",
  "image": "/images/founder.jpg",
  "experience": [
    "Financial Management",
    "IFRS Reporting",
    "Budgeting & Forecasting",
    "Cash Flow Management",
    "Internal Controls",
    "Business Advisory"
  ],
  "email": "r.sadigov@rafconsulting.az",
  "phone": "+994105120009"
}
```

## 7. Admin Panel (Decap CMS - Əlavə)

Məzmunu rahat redaktə etmək üçün:

- `/public/admin/index.html` - CMS giriş
- `/public/admin/config.yml` - CMS konfiqurasiyası
- GitHub autentifikasiyası ilə giriş
- JSON faylları avtomatik redaktə olunur
- Dəyişikliklər birbaşa GitHub repo-ya commit olunur
- Vercel avtomatik redeploy edir

**Kimlər üçün:** Qeyd-texniki istifadəçilər (siz və ya komanda üzvləri)

## 8. Deployment və Domain

### Mərhələ 1: İnkişaf (Lokal)
```
npm run dev    # http://localhost:3000
```

### Mərhələ 2: Deploy (Vercel)
1. GitHub repo yaradılır
2. Vercel-ə import edilir
3. Avtomatik deploy olunur
4. `rafconsulting.vercel.app` ünvanı alınır

### Mərhələ 3: Domain bağlantısı
1. **rafconsulting.az** domaini alınır (azdomain.az, whois.az)
2. Vercel Dashboard > Domain Settings > `rafconsulting.az` əlavə edilir
3. DNS provayderində CNAME / A record qeydiyyatı aparılır
4. SSL sertifikat Vercel tərəfindən avtomatik təmin edilir

## 9. Addım-addım İcra Planı

| # | Mərhələ | Təxmini Vaxt |
|---|---------|--------------|
| 1 | Next.js layihəsinin yaradılması + Tailwind + next-intl + next-themes konfiqurasiyası | 1 saat |
| 2 | Tərcümə fayllarının hazırlanması (AZ/EN/RU) | 2 saat |
| 3 | Layout (Header + Footer + ThemeToggle + LanguageSwitcher) | 2 saat |
| 4 | Ana səhifə bölmələri (Hero, Services, Why RAF, Founder, Contact) | 4 saat |
| 5 | Xidmətlər səhifəsi + paket kartları | 2 saat |
| 6 | Haqqımızda səhifəsi | 1 saat |
| 7 | Bloq sistemi (list + detail) - 3 dildə | 3 saat |
| 8 | Əlaqə səhifəsi + form | 1 saat |
| 9 | Responsive dizayn (mobil/tablet) + Dark mode uyğunluq | 2 saat |
| 10 | SEO + Performans optimizasiyası | 1 saat |
| 11 | GitHub repo + Vercel deploy | 1 saat |
| 12 | Decap CMS (opsional) | 1 saat |
| 13 | Domain bağlantısı | 1 saat |
| | **Ümumi** | **~22 saat** |

## 10. SEO və Performans

- **Next.js SSG** ilə statik HTML çıxışı
- **Meta teqlər** (hər səhifə üçün fərqli title/description)
- **Open Graph** (sosial mediada paylaşım üçün)
- **Sitemap** avtomatik generasiya
- **Image optimization** (Next.js Image komponenti)
- **Lazy loading** (şəkillər üçün)
- **Google Analytics** (opsional)

## 11. Gələcək Əlavələr (Opsional)

- [ ] Blogda axtarış və filtrasiya
- [ ] Rəylər bölməsi (testimonials)
- [ ] FAQ səhifəsi
- [ ] AI-powered chat assistant
- [ ] Online ödəniş sistemi

---

## Təsdiq

Bu texniki tapşırıq əsasında layihənin icrasına başlanılır. Hər mərhələdə sizə addım-addım izahat veriləcək.

**Növbəti addım:** Next.js layihəsinin yaradılması, Tailwind, next-intl (3 dil) və next-themes (dark/light/system) paketlərinin qurulması.
