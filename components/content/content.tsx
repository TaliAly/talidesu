import Card from '../cards/card'
import CardImage from '../cards/cardImage'
import { GitHub } from 'iconoir-react'
import AboutMe from './aboutMe'

export default function Content() {
  return (
    <div className='flex gap-36 flex-col px-10 py-32 max-w-[1360px] mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-3 place-items-center gap-4'>
        <Card title='Frameworks' Icon={<GitHub />}>
          <h2>Next JS, Tailwind CSS, React, Redux, Jest, Enzyme, Cypress,</h2>
        </Card>
        <Card title='Tools' Icon={<GitHub />}>
          <h2>Github, VScode, Tailwind CSS, Material UI, and more than that!</h2>
        </Card>
        <Card title='Design' Icon={<GitHub />}>
          <h2>
            I like to use Figma to design! But I get the most of Dribble, Mockup io and other cools
            tools
          </h2>
        </Card>
      </div>

      <AboutMe />

      <div className='flex gap-y-28 flex-col'>
        <h2 className='text-3xl'>Projects</h2>

        <div className='flex flex-col md:flex-row justify-center gap-20 place-items-center'>
          <CardImage
            title='Tremufly'
            img='https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            about='Another Shop for you'
          />
          <CardImage
            title='Another Cup'
            img='https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
            about='Your weekly dose of blogs'
          />
          <CardImage
            title='Neku Manga'
            img='https://images.unsplash.com/photo-1613376023733-0a73315d9b06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            about='Your better web reader for manga'
          />
        </div>
      </div>
    </div>
  )
}
