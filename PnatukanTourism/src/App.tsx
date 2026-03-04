import { useEffect } from 'react'
import AOS from 'aos'
import HeaderIMG from './assets/HeaderIMG.gif'
import Logo from './assets/Logo.png'
import Box1 from './assets/gridBox/Rectangle1.jpg'
import Box2 from './assets/gridBox/Rectangle2.jpg'
import Box3 from './assets/gridBox/Rectangle3.jpg'
import Box4 from './assets/gridBox/Rectangle4.jpg'
import BannerPickleBall from './assets/BannerPIckleball.jpg'

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 100 })
  }, [])

  return (
    <>
     <div className="relative">
         <div className="absolute top-10 left-1/2 -translate-x-1/2 z-10">
             <ul className="flex justify-center gap-15 text-white text-[16px]">
                 <li><button className="hover:text-[#228399] hover:scale-110 transition-all duration-200">Home</button></li>
                 <li><button className="hover:text-[#228399] hover:scale-110 transition-all duration-200">Destinations</button></li>
                 <li><button className="hover:text-[#228399] hover:scale-110 transition-all duration-200">Accomodations</button></li>
                 <li><button className="hover:text-[#228399] hover:scale-110 transition-all duration-200">About Us</button></li>
             </ul>
         </div>

         <div data-aos="fade-up"
              data-aos-duration="2000"
              className="absolute top-80 left-1/2 pl-[50px] -translate-x-1/2 -translate-y-1/2 z-10">
             <img src={Logo} alt="Logo"/>
         </div>
         <h1 data-aos="fade-up"
             data-aos-duration="3000"
             className=" absolute top-105 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white text-[32px]">DISCOVER THE HEART OF PANTUKAN</h1>
       <img src={HeaderIMG}
            alt="Header"
            className="w-full h-[750px] object-cover"/>
         <div className="absolute inset-0 bg-blue-900/20 z-[1]" aria-hidden="true"/>
     </div>

        <div className="text-center">
            <h2 data-aos="fade-up"

                className="text-[64px] text-[#228399] font-bold mt-[100px]">MOST VISITED DESTINATIONS</h2>

            <div className="flex justify-center gap-10 mt-[100px] text-start font-bold text-[16px]">
                <div className="flex flex-col gap-5">
                    <img data-aos="flip-left"
                         data-aos-duration="1000"
                         src={Box1} alt="Rectangle 1"/>
                    <h3 data-aos="fade-up"
                        data-aos-duration="1000">
                        Pantukan Water World</h3>
                </div>

                <div className="flex flex-col gap-5">
                    <img data-aos="flip-left"
                         data-aos-duration="1500"
                         src={Box2} alt="Rectangle 2"/>
                    <h3 data-aos="fade-up"
                        data-aos-duration="1500">
                        Dagat Ni Baste</h3>
                </div>

                <div className="flex flex-col gap-5">
                    <img data-aos="flip-left"
                         data-aos-duration="2000"
                         src={Box3} alt="Rectangle 3"/>
                    <h3 data-aos="fade-up"
                        data-aos-duration="2000">
                        Sea World Oasis</h3>
                </div>

                <div className="flex flex-col gap-5">
                    <img data-aos="flip-left"
                         data-aos-duration="2500"
                         src={Box4} alt="Rectangle 4"/>
                    <h3 data-aos="fade-up"
                        data-aos-duration="2500">
                        Magnaga Waters</h3>
                </div>
            </div>

            <div className="mt-[100px] flex justify-center">
                <img data-aos="fade-up"
                     src={BannerPickleBall} alt="Banner Pickleball"/>
            </div>
        </div>
    </>
  )
}

export default App
