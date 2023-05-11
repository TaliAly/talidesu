export default function FooterText() {
  return (
    <div className='flex flex-col justify-center items-center w-full my-[15vh] text-center sm:text-left'>
      <h2 className='text-[clamp(26px,3vw,2rem)]'>Just tell me what you need!</h2>
      <span className='flex flex-col sm:flex-row gap-5 my-8 sm:my-0'>
        <p className='underline text-[clamp(16px,1.5vw,24px)] cursor-pointer'>My Resume</p>
        <p className='underline text-[clamp(16px,1.5vw,24px)] cursor-pointer'>Even More About Me</p>
        <p className='underline text-[clamp(16px,1.5vw,24px)] cursor-pointer'>
          Get info on my prices
        </p>
      </span>
    </div>
  )
}
