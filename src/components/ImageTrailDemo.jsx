import { useRef } from "react"
import { ImageTrail } from "./ui/image-trail"

const ImageTrailDemo = () => {
  const ref = useRef(null)

  // Unsplash images that definitely exist, coffee themed
 const images = [
    "https://images.unsplash.com/photo-1497935586351-b67a49e012bf",
    "https://images.unsplash.com/photo-1517701604599-bb29b565090c",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",
    "https://images.unsplash.com/photo-1521302080334-4bebac2763a6",
  ].map(url => `${url}?auto=format&fit=crop&w=400&q=80`)

  return (
    <div className="flex w-full h-screen justify-center items-center relative overflow-hidden z-20">
      <div className="absolute top-0 left-0 z-0 w-full h-full" ref={ref}>
        <ImageTrail containerRef={ref}>
          {images.map((url, index) => (
            <div
              key={index}
              className="flex relative overflow-hidden w-[140px] h-[200px] md:w-[200px] md:h-[280px] rounded-[1rem] md:rounded-[1.5rem] shadow-2xl border border-white/20"
            >
              <img
                src={url}
                alt={`Coffee image ${index + 1}`}
                className="object-cover absolute inset-0 hover:scale-110 transition-transform"
              />
            </div>
          ))}
        </ImageTrail>
      </div>
      <div className="z-10 flex flex-col items-center pointer-events-none px-4 max-w-6xl w-full">
        {/* Text Container with frameless ambient radial diffusion */}
        <div className="relative py-4 px-6 md:px-12 flex flex-col items-center text-center">
          {/* Soft ambient radial blur to diffuse dark cards passing directly behind text */}
          <div className="absolute -inset-x-10 sm:-inset-x-16 -inset-y-6 sm:-inset-y-8 bg-[radial-gradient(ellipse_at_center,_rgba(248,242,234,0.88)_0%,_rgba(248,242,234,0.5)_50%,_transparent_75%)] backdrop-blur-[2px] rounded-full pointer-events-none" />

          <h2 
            className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-bold select-none text-[#2E1A11] tracking-tight mb-8 md:mb-10 text-center" 
            style={{ 
              fontFamily: "'Caveat', cursive",
              paintOrder: "stroke fill",
              WebkitTextStroke: "3px #F8F2EA",
              textShadow: "0 0 1px #F8F2EA, 0 0 8px #F8F2EA, 0 0 20px rgba(248, 242, 234, 0.95), 0 0 35px rgba(248, 242, 234, 0.8), 0 2px 4px rgba(255, 255, 255, 0.9)"
            }}
          >
            What are you in the mood for?
          </h2>
          
          {/* Buttons */}
          <div className="relative z-10 flex flex-row justify-center items-center gap-3 sm:gap-4 w-full pointer-events-auto">
            <a href="#menu" className="group bg-[#2E1A11] text-[#F3E8DB] w-[130px] sm:w-[160px] h-[46px] sm:h-[50px] flex justify-center items-center rounded-full text-[14px] sm:text-base font-medium shadow-[0_10px_20px_rgba(46,26,17,0.4),inset_0_3px_4px_rgba(255,255,255,0.15),inset_0_-4px_6px_rgba(0,0,0,0.5)] hover:bg-[#3E2417] active:translate-y-0.5 active:shadow-[0_5px_10px_rgba(46,26,17,0.4),inset_0_2px_3px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.5)] transition-all duration-500 hover:rotate-3 hover:scale-95 cursor-pointer whitespace-nowrap">
              <div className="relative overflow-hidden h-[20px] sm:h-[24px] w-full text-center">
                <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] leading-tight sm:leading-normal">
                  See the Menu
                </p>
                <p className="absolute top-7 left-0 w-full group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] leading-tight sm:leading-normal">
                  See the Menu
                </p>
              </div>
            </a>
            <a href="#find-us" className="group bg-white text-[#2E1A11] w-[130px] sm:w-[160px] h-[46px] sm:h-[50px] flex justify-center items-center rounded-full text-[14px] sm:text-base font-medium shadow-[0_8px_16px_rgba(0,0,0,0.08)] hover:bg-[#F3E8DB] active:translate-y-0.5 active:shadow-[0_4px_8px_rgba(0,0,0,0.08)] transition-all duration-500 hover:rotate-3 hover:scale-95 cursor-pointer whitespace-nowrap">
              <div className="relative overflow-hidden h-[20px] sm:h-[24px] w-full text-center">
                <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] leading-tight sm:leading-normal">
                  Find Us
                </p>
                <p className="absolute top-7 left-0 w-full group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] leading-tight sm:leading-normal">
                  Find Us
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageTrailDemo
