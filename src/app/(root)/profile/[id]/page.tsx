import { TfiGallery } from "react-icons/tfi";
import { HiOutlineCake } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { SlActionRedo } from "react-icons/sl";
import { RiBallPenLine } from "react-icons/ri";
import userProfile from "@/data/user_profile.json"

async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const user = userProfile.find(u => u.id == id)

  // console.log(user)
  return (
    <div className="flex">
     <div>
      <div className='p-10'>
        <h4>
          Featured Gallery
        </h4>
        <div className='opacity-50 hover:opacity-100 transition-opacity duration-200 ease-in-out cursor-pointer flex flex-col justify-center items-center gap-5 bg-primary rounded-sm w-170 h-[400px] mt-5 text-center py-10'>
         <TfiGallery  className="text-9xl h-1/2 "/>

          <div  className='h-1/2 flex flex-col gap-4 justify-center w-full '>
             <h4 className='font-bold '>Show your Artwork</h4>
              <p className='text-sm opacity-50'>Submit your art to your gallery for featuring and display.</p>
            <button className='bg-gradient-primary  rounded-md p-1 w-40 mx-auto'>Submit Now</button>
          </div>
        </div>
      </div>

      <div className='p-10'>
        <h4>
          Featured Shop
        </h4>
        <div className='opacity-50 hover:opacity-100 transition-opacity duration-200 ease-in-out cursor-pointer flex flex-col justify-center items-center gap-5 bg-primary rounded-sm w-170 h-[400px] mt-5 text-center py-10'>
         <TfiGallery  className="text-9xl h-1/2"/>

          <div  className='h-1/2 flex flex-col gap-4 justify-center w-full '>
             <h4 className='font-bold '>Show your Artwork</h4>
              <p className='text-sm opacity-50'>Submit your art to your gallery for featuring and display.</p>
            <button className='bg-gradient-primary  rounded-md p-1 w-40 mx-auto'>Submit Now</button>
          </div>
           
        </div>
      </div>

      <div className='p-10'>
        <h4>
          Featured Gallery
        </h4>
         <div className='opacity-50 hover:opacity-100 transition-opacity duration-200 ease-in-out cursor-pointer flex flex-col justify-center items-center gap-5 bg-primary rounded-sm w-170 h-[400px] mt-5 text-center py-10'>
         <TfiGallery  className="text-9xl h-1/2"/>

          <div  className='h-1/2 flex flex-col gap-4 justify-center w-full '>
             <h4 className='font-bold '>Show your Artwork</h4>
              <p className='text-sm opacity-50'>Submit your art to your gallery for featuring and display.</p>
            <button className='bg-gradient-primary  rounded-md p-1 w-40 mx-auto'>Submit Now</button>
          </div>
           
        </div>
      </div>

    </div>
      
      
    <div className="w-130 flex flex-col gap-6">
        
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold text-white">
            About {"User"}
          </h2>

          <div className="bg-primary rounded-sm p-5 mt-4 space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <HiOutlineCake className="h-6 w-6" />
              <span>Birthday: {"MM/DD/YYYY"}</span>
            </div>

            <div className="flex items-center gap-2">
              <CiLocationOn className="h-6 w-6" />
              <span>Location: {"Philippines"}</span>
            </div>

            <div className="flex items-center gap-2">
              <CgProfile className="h-6 w-6" />
              <span>Joined: {"5 months ago"}</span>
            </div>

            <div className="flex items-center gap-2">
              <SlActionRedo className="h-6 w-6" />
              <span>Pronouns: {"He/Him"}</span>
            </div>

            <div className="flex items-start gap-2">
              <RiBallPenLine className="h-6 w-6" />
              <span className="leading-tight">
               
                  "I’m a digital artist who creates vibrant character illustrations inspired by fantasy. I love bringing ideas to life through bold colors and dynamic designs."
              </span>
            </div>
          </div>
        </div>

        {/* Comments Section */}
      
        <div className="bg-primary rounded-sm p-5 mt-4 space-y-3 text-sm">
          <span className="text-sm font-semibold text-white"></span>
          {/* <ProfileComments /> */}
        </div>
      </div>
    </div>
    
  )
}

export default Page
