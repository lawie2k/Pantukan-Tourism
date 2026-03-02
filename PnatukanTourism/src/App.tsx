import HeaderIMG from './assets/HeaderIMG.gif'
import Logo from './assets/Logo.png'

function App() {


  return (
    <>
     <div className="relative">
         <div className="absolute top-10 left-1/2 -translate-x-1/2 z-10">
             <ul className="flex justify-center gap-15 text-white text-[16px]">
                 <li><button>Home</button></li>
                 <li><button>Destinations</button></li>
                 <li><button>Accomodations</button></li>
                 <li><button>About Us</button></li>
             </ul>
         </div>

         <div className="absolute top-80 left-1/2 pl-[50px] -translate-x-1/2 -translate-y-1/2 z-10">
             <img src={Logo} alt="Logo"/>
         </div>
         <h1 className=" absolute top-105 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white text-[32px]">DISCOVER THE HEART OF PANTUKAN</h1>
       <img src={HeaderIMG}
            alt="Header"
            className="w-full h-[650px] object-cover"/>
         <div className="absolute inset-0 bg-blue-900/30 z-[1]" aria-hidden="true"/>
     </div>
    </>
  )
}

export default App
