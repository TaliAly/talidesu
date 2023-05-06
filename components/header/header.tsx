import style from './header.module.scss'
import HeaderIcons from './headerIcons/headerIcons'

export default function Header() {
  return (
    <div
      className={`h-[60vh] sm:h-[90vh] flex justify-center items-center flex-col transition ${style.header} relative overflow-hidden`}
    >
      <HeaderIcons Class={style.icons} />

      <div className='z-10 flex flex-col items-center justify-center'>
        <h1 className='text-white font-bold text-[clamp(2.5rem,5vw,10rem)]'>{`Hi I'm Talialy`}</h1>
        <p className='text-white text-xl text-[clamp(1rem,2vw,3rem)]'>I can make your website</p>
      </div>

      <div className={`${style.gradient} absolute bottom-0 left-0 right-0 h-[10vh]`} />
    </div>
  )
}
