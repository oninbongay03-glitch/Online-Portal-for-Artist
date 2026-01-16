import React from 'react'
import Logo from '@/app/components/ui/Logo'
import Link from 'next/link'

const ProfileSetup = () => {
  return (
    <div className="w-full relative shadow-xl border-white border-2 shadow-white flex flex-col justify-center items-center h-[100dvh] bg-[url('https://static.vecteezy.com/system/resources/previews/006/595/713/non_2x/silhouettes-of-panoramic-mountains-view-landscape-vector.jpg')] bg-cover bg-center h-64 w-full)">
        <div className="z-20 flex justify-center h-[40em] max-w-[60em] w-full rounded-md overflow-hidden">
          <div className="hidden md:block w-1/2 bg-cover p-8 pt-24 leading-6" style={{backgroundImage: `url(../form-background.jpg)`}}>
            <h1 className="text-5xl text-white text-start font-bold leading-[1.2em]">JOIN THE <br />FUTURE OF <br /> ART & <br />CREATIVITY</h1>
            <p className="text-lg text-white text-start mt-8 leading-[2em] pr-8">Showcase your talent, connect with fellow <br /> artist, and open door to opportunities. <br /> Whether you're a traditional or digital artist, <br />share your work, gain appreciation, and build meaningful collaboration.</p>
          </div>

              <div className="w-1/2 bg-white py-10">
                <form className="flex flex-col gap-7 p-10">
                  <h5 className="text-3xl font-bold ">Help us personalize your experience</h5>

                  <div>
                    <div className="justify-between flex gap-4">
                     <div>
                      <label className="block text-gray-900 font-semibold mb-2">
                       Firstname
                     </label>
                     <input className="border border-cyan-500 p-3 w-full rounded-lg  outline-none" type="firstname" placeholder="Fisrtname" />
                     </div>

                    <div>
                      <label className="block text-gray-900 font-semibold mb-2">
                       Lastname
                     </label>
                    <input className="border border-cyan-500 p-3 w-full rounded-lg text-black outline-none" type="lastname" placeholder="Lastname" />
                    </div>
                  </div>
                  </div>

                   <div>
                      <label className="block text-gray-900 font-semibold mb-2">
                   Username
                </label>
                  <input className="flex border border-cyan-500 p-3 w-full rounded-lg text-black outline-none" type="enter your username" placeholder="Enter your username" />
                   </div>
                  
                <div className="grid grid-cols-2 gap-4">
                  <div className=''>
                    <label className="block text-gray-900 font-semibold mb-2">
                    Gender
                    </label>
                    <select className="flex border border-cyan-500 p-3 w-full rounded-lg text-black outline-none" id="gender" name="gender">
                        <option value="default">Default</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="prefer not to say">Prefer not to say</option>
                      </select>  
                  </div>

                  <div className=''>
                    <label className="block text-gray-900 font-semibold mb-2">
                      Birth of date
                   </label>
                   <input className="flex border border-cyan-500 p-3  rounded-lg text-black outline-none w-full" type="date"/>
                  </div>  
                </div>

                  <button className="border p-5 bg-gradient-primary  rounded-xl" type="submit"><Link href="/register/profile-setup/get-started">Continue</Link></button>
                </form>
              </div>
            </div>

                <div className="absolute top-12 left-12">
                  <Logo />
                </div>
          </div>
  )
}

export default ProfileSetup
