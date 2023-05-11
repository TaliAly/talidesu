import Languages from '../languages/languages'

export default function Header() {
  return (
    <div
      className={`h-screen flex justify-center items-center flex-col max-w-[100vw] relative overflow-hidden`}
    >
      <div className='z-10 flex flex-col items-center justify-center'>
        <h1 className='font-bold text-[clamp(2.5rem,5vw,10rem)]'>{`Hi I'm Talialy`}</h1>
        <p className='text-xl text-[clamp(1rem,2vw,3.5rem)]'>I can make your website</p>
        <div className='hidden md:flex max-w-[30%]'>
          <Languages />
        </div>
      </div>

      <img
        src={'/bgLeft.svg'}
        alt='background circles'
        className='absolute z-0 left-[-10%] top-50 aspect-ratio-[3/4] w-[30vw] max-h-[90vh]'
      />
      <img
        src={'/bgRight.svg'}
        alt='background squares'
        className='absolute z-0 right-[-10%] top-50 aspect-ratio-[3/4] w-[30vw] max-h-[90vh]'
      />
    </div>
  )
}
