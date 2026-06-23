import fs from 'fs'
import path from 'path'

export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  content: string
}

export function getBlogPosts(locale: string): BlogPost[] {
  const dir = path.join(process.cwd(), 'data', 'blog', locale)
  if (!fs.existsSync(dir)) return []
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.json'))
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), 'utf-8')
      return JSON.parse(raw) as BlogPost
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPost(locale: string, slug: string): BlogPost | null {
  const dir = path.join(process.cwd(), 'data', 'blog', locale)
  if (!fs.existsSync(dir)) return null
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.json'))
  for (const file of files) {
    const raw = fs.readFileSync(path.join(dir, file), 'utf-8')
    const post = JSON.parse(raw) as BlogPost
    if (post.slug === slug) return post
  }
  return null
}

export function getAllSlugs(locale: string): string[] {
  return getBlogPosts(locale).map((p) => p.slug)
}
