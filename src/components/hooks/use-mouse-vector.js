import { useEffect, useState } from "react"

export const useMouseVector = (containerRef) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [vector, setVector] = useState({ dx: 0, dy: 0 })

  useEffect(() => {
    let lastPosition = { x: 0, y: 0 }

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

      // Calculate the movement vector
      const dx = newX - lastPosition.x
      const dy = newY - lastPosition.y

      setVector({ dx, dy })
      setPosition({ x: newX, y: newY })
      lastPosition = { x: newX, y: newY }
    }

    const handleMouseMove = (ev) => {
      if (containerRef && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        if (
          ev.clientX < rect.left ||
          ev.clientX > rect.right ||
          ev.clientY < rect.top ||
          ev.clientY > rect.bottom
        ) {
          return // Cursor is outside the container
        }
      }
      updatePosition(ev.clientX, ev.clientY)
    }

    const handleTouchMove = (ev) => {
      const touch = ev.touches[0]
      if (containerRef && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        if (
          touch.clientX < rect.left ||
          touch.clientX > rect.right ||
          touch.clientY < rect.top ||
          touch.clientY > rect.bottom
        ) {
          return // Touch is outside the container
        }
      }
      updatePosition(touch.clientX, touch.clientY)
    }

    // Listen for both mouse and touch events
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleTouchMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
    }
  }, [containerRef])

  return { position, vector }
}
