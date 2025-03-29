import { getSkills } from '@/lib/skills'
import SkillsWithSearch from '@/components/skills-with-search'

export default async function SkillsPage() {
  const skills = await getSkills()

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Skills</h1>

        <SkillsWithSearch skills={skills} />
      </div>
    </section>
  )
}