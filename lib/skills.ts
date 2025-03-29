import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const rootDirectory = path.join(process.cwd(), 'content', 'skills')

export type Skill = {
  metadata: SkillMetadata
  content: string
}

export type SkillMetadata = {
  title?: string
  summary?: string
  image?: string
  author?: string
  publishedAt?: string
  slug: string
}

export async function getSkillBySlug(slug: string): Promise<Skill | null> {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
    const { data, content } = matter(fileContent)
    return { metadata: { ...data, slug }, content }
  } catch (error) {
    return null
  }
}

export async function getSkills(limit?: number): Promise<SkillMetadata[]> {
  const files = fs.readdirSync(rootDirectory)

  const skills = files
    .map(file => getSkillMetadata(file))
    .sort((a, b) => {
      if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) {
        return 1
      } else {
        return -1
      }
    })

  if (limit) {
    return skills.slice(0, limit)
  }

  return skills
}

export function getSkillMetadata(filepath: string): SkillMetadata {
  const slug = filepath.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, filepath)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
  const { data } = matter(fileContent)
  return { ...data, slug }
}