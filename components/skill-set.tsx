import Link from 'next/link'
import { getSkills } from '@/lib/skills'
import Skills from '@/components/skills'

export default async function SkillSet() {
  const skills = await getSkills(4)

  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-12'>Skill set</h2>
        <Skills skills={skills} />

        <Link
          href='/skills'
          className='mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
        >
          <span>Read more</span>
        </Link>
      </div>
    </section>
  )
}