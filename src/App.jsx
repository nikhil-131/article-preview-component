import { useState } from 'react'
import './App.css'
import facebook from "./assets/images/facebook.svg"
import pinterest from "./assets/images/pinterest.svg"
import twitter from "./assets/images/twitter.svg"
import avatar from "./assets/images/avatar.jpg"
import drawers from "./assets/images/drawers.jpg"

function App() {
  const [buttonClick, setButtonClick] = useState(false)

  return (
    <>
      <div className="container mx-6 w-[90%] flex-col md:flex-row md:w-[768px] lg:w-[1080px] bg-white absolute md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] rounded-lg shadow-md flex items-center">
        <div className="image">
          <img className=' md:h-[432px] object-cover rounded-t-lg my-4 md:my-0 md:rounded-l-lg' src={drawers} alt="drawer image" />
        </div>
        <div className="main md:w-[65%]  md:m-8 m-4 md:px-4 px-2">
          <div className="mainContent">
            <h2 className='text-2xl font-bold'>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h2>
            <p className='my-3 text-sm'>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
          </div>
          <div className="footer my-6">
            <div className="details hidden md:flex items-center justify-between">
              <div className="avatar flex gap-4">
                <div className="avatar-img">
                  <img className='rounded-[50%] w-12' src={avatar} alt="Avatar image" />
                </div>
                <div className="avatar-detail flex flex-col ">
                  <p className='font-bold text-sm pb-1'>Michelle Appleton</p>
                  <p className='text-xs'>28 Jun 2020</p>
                </div>
              </div>
              <div className="shareContainer px-4 md:px-0">
                {buttonClick &&
                  <div className="shareDetails absolute xl:top-40 lg:top-[12.5rem] md:top-[14rem] md:right-[-2.8rem] xl:right-[-2.7rem] z-20 flex flex-col justify-center">
                    <div className="shareRect w-56 h-14 bg-[#49556B] rounded-lg flex justify-center items-center tracking-[0.15em] gap-4 text-gray-300">
                      <p className='text-sm'>SHARE</p>
                      <a href="#"><img src={facebook} alt="facebook icon" /></a>
                      <a href="#"><img src={twitter} alt="twitter icon" /></a>
                      <a href="#"><img src={pinterest} alt="pinterest icon" /></a>

                    </div>
                    <div className="w-0 h-0 sharTri border-r-[11px] border-r-transparent border-l-[11px] border-l-transparent border-t-[10px] border-t-[#49556B] mx-auto">
                    </div>
                  </div>
                }
                <div className="share relative">
                  <button onClick={() => setButtonClick(!buttonClick)} className={buttonClick ? `p-3 rounded-[50%] bg-[#6C7E96] fill-white` : `p-3 rounded-[50%] bg-[#ECF0F9]`}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill={buttonClick ? "white" : "#6E8098"} d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" /></svg></button>
                </div>
              </div>
            </div>
          </div>
          <div className="details md:hidden flex items-center w-full">
            {buttonClick &&
              <div className="avatar flex gap-4 w-full">
                <div className="shareRect h-14 bg-[#49556B] rounded-lg flex justify-center items-center tracking-[0.15em] gap-4 text-gray-300 w-full">
                  <p className='text-sm'>SHARE</p>
                  <a href="#"><img src={facebook} alt="facebook icon" /></a>
                  <a href="#"><img src={twitter} alt="twitter icon" /></a>
                  <a href="#"><img src={pinterest} alt="pinterest icon" /></a>
                </div>
              </div>
            }
            {!buttonClick &&
              <div className="avatar flex gap-4 w-full">
                <div className="shareRect h-14 bg-white rounded-lg flex items-center gap-4 w-full">
                <div className="avatar flex gap-4">
                <div className="avatar-img">
                  <img className='rounded-[50%] w-12' src={avatar} alt="Avatar image" />
                </div>
                <div className="avatar-detail flex flex-col ">
                  <p className='font-bold text-sm pb-1'>Michelle Appleton</p>
                  <p className='text-xs'>28 Jun 2020</p>
                </div>
              </div>
                </div>
              </div>
            }
            <div className="shareContainer px-4 md:px-0">
              <div className="share relative">
                <button onClick={() => setButtonClick(!buttonClick)} className={buttonClick ? `p-3 rounded-[50%] bg-[#6C7E96] fill-white` : `p-3 rounded-[50%] bg-[#ECF0F9]`}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill={buttonClick ? "white" : "#6E8098"} d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" /></svg></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
