import getMouse from '@/hooks/getMouse'
import { isBrowser } from 'framer-motion'

interface moveItOutProps {
  top: number
  left: number
}

export default function moveItOut({ left, top }: moveItOutProps) {
  if (isBrowser) {
    const { mousePos } = getMouse()

    const mouseInput = {
      x: mousePos.x / 15,
      y: mousePos.y / 15,
    }
    const sizeRelative = isBrowser
      ? {
          x: (window.innerWidth * left) / 100,
          y: (window.innerHeight * top) / 100,
        }
      : { x: left * 10, y: top * 10 }

    return {
      top: mouseInput.y + sizeRelative.y,
      left: mouseInput.x + sizeRelative.x,
    }
  }
  return {
    top: `${top}%`,
    left: `${left}%`,
  }
}
