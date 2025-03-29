import Link from 'next/link'

import { SkillMetadata } from '@/lib/skills'
import { formatDate } from '@/lib/utils'

export default function Skills({ skills }: { skills: SkillMetadata[] }) {
  return (
    <ul className='flex flex-col gap-8'>
      {skills.map(skill => (
        <li key={skill.slug}>
          <Link
            href={`/skills/${skill.slug}`}
            className='flex flex-col justify-between gap-x-4 gap-y-1 sm:flex-row'
          >
            <div className='max-w-lg'>
              <p className='text-lg font-semibold'>{skill.title}</p>
              <p className='mt-1 line-clamp-2 text-sm font-light text-muted-foreground'>
                {skill.summary}
              </p>
            </div>

            {skill.publishedAt && (
              <p className='mt-1 text-sm font-light'>
                {formatDate(skill.publishedAt)}
              </p>
            )}
          </Link>
        </li>
      ))}
    </ul>
  )
}