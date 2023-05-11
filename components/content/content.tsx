import Languages from '../languages/languages'
import AboutMe from './aboutMe/aboutMe'
import FooterText from './footerText/footerText'
import Projects from './projects/projects'

export default function Content() {
  return (
    <div className='flex gap-20 flex-col max-w-[1360px] mx-4 2xl:mx-auto '>
      <div className='relative md:hidden m-0 sm:m-16'>
        <Languages />
      </div>

      <AboutMe />
      <Projects />
      <FooterText />
    </div>
  )
}
