import CardImage from '../../cards/cardImage'

export default function Projects() {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col md:flex-row justify-center gap-10 md:gap-20 sm:gap-6 place-items-center'>
        <CardImage
          title='Tremufly'
          img='https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          about='Another Shop For You'
        />
        <CardImage
          title='Another Cup'
          img='https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
          about='Your Weekly Dose Of Blogs'
        />
        <CardImage
          title='Neku'
          img='https://images.unsplash.com/photo-1613376023733-0a73315d9b06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          about='Another Manga Reader For You'
        />
      </div>
    </div>
  )
}
