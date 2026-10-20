import { useEffect, useState, useRef } from "react"

export const useMouseVector = (containerRef) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [vector, setVector] = useState({ dx: 0, dy: 0 })
  const lastPosition = useRef({ x: 0, y: 0 })
  const ticking = useRef(false)

  useEffect(() => {
    // Only listen on devices with fine pointer (mouse), disable on touch to prevent mobile scroll stutter
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches
    if (isTouchDevice) return

    const updatePosition = (x, y) => {
      let newX, newY

      if (containerRef && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        newX = x - rect.left
        newY = y - rect.top
      } else {
        newX = x
        newY = y
      }

      const dx = newX - lastPosition.current.x
      const dy = newY - lastPosition.current.y

      setVector({ dx, dy })
      setPosition({ x: newX, y: newY })
      lastPosition.current = { x: newX, y: newY }
    }

    const handleMouseMove = (ev) => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (containerRef && containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect()
            if (
              ev.clientX < rect.left ||
              ev.clientX > rect.right ||
              ev.clientY < rect.top ||
              ev.clientY > rect.bottom
            ) {
              ticking.current = false
              return
            }
          }
          updatePosition(ev.clientX, ev.clientY)
          ticking.current = false
        })
        ticking.current = true
      }
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [containerRef])

  return { position, vector }
}
